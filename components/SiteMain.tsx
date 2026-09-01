"use client";

import { usePathname } from "next/navigation";

export function SiteMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className={`flex-1${isHome ? "" : " pt-[4.5rem]"}`}>{children}</main>
  );
}
