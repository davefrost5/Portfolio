export type MicrolinkData = {
  title?: string;
  description?: string;
  image?: { url?: string };
  logo?: { url?: string };
  publisher?: string;
};

export type MicrolinkResponse = {
  status: string;
  data?: MicrolinkData;
};

const MICROLINK_REVALIDATE = 60 * 60 * 24; // 24 hours

export async function fetchMicrolink(url: string): Promise<MicrolinkData | null> {
  try {
    const apiUrl = new URL("https://api.microlink.io/");
    apiUrl.searchParams.set("url", url);
    apiUrl.searchParams.set("screenshot", "true");
    apiUrl.searchParams.set("meta", "true");

    const res = await fetch(apiUrl.toString(), {
      next: { revalidate: MICROLINK_REVALIDATE },
    });

    if (!res.ok) return null;

    const json = (await res.json()) as MicrolinkResponse;
    if (json.status !== "success" || !json.data) return null;

    return json.data;
  } catch {
    return null;
  }
}

export function getMicrolinkScreenshotUrl(url: string, width = 1200): string {
  const apiUrl = new URL("https://api.microlink.io/");
  apiUrl.searchParams.set("url", url);
  apiUrl.searchParams.set("screenshot", "true");
  apiUrl.searchParams.set("meta", "false");
  apiUrl.searchParams.set("embed", "screenshot.url");
  apiUrl.searchParams.set("viewport.width", String(width));
  apiUrl.searchParams.set("viewport.height", "630");
  return apiUrl.toString();
}

export function hostnameFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
