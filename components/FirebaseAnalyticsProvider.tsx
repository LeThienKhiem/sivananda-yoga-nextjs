"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/utils/firebase";

export function FirebaseAnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!analytics) return;

    const pagePath = pathname ?? window.location.pathname;
    const search = searchParams?.toString();
    const fullPath = search ? `${pagePath}?${search}` : pagePath;

    logEvent(analytics, "page_view", {
      page_path: fullPath,
      page_location:
        typeof window !== "undefined"
          ? window.location.href
          : undefined,
    });
  }, [pathname, searchParams]);

  return null;
}
