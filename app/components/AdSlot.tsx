"use client";

import { useEffect, useRef } from "react";

export const AD_CLIENT = "ca-pub-4906207495792820";

export type AdFormat = "display" | "in-article" | "multiplex" | "anchor";

type AdSlotProps = {
  format?: AdFormat;
  /** AdSense ad unit ID. Replace TODO-auto-* with the real slot ID from your AdSense account. */
  slot?: string;
  className?: string;
  label?: string;
};

const MIN_HEIGHT: Record<AdFormat, number> = {
  display: 250,
  "in-article": 250,
  multiplex: 250,
  anchor: 90,
};

export default function AdSlot({
  format = "display",
  slot = "TODO-auto-display",
  className = "",
  label = "Advertisement",
}: AdSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (pushed.current) return;
    pushed.current = true;
    try {
      const w = window as unknown as {
        adsbygoogle?: Array<Record<string, unknown>>;
      };
      w.adsbygoogle = w.adsbygoogle ?? [];
      w.adsbygoogle.push({});
    } catch {
      // Ad blockers may throw here — never break the page for an ad.
    }
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        aria-hidden="true"
        className={className}
        style={{
          minHeight: MIN_HEIGHT[format],
          border: "1px dashed rgba(212,175,55,0.4)",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="text-xs text-slate-500">
          AdSlot placeholder (dev) · {format} · {slot}
        </span>
      </div>
    );
  }

  if (format === "anchor") {
    return (
      <ins
        className={`adsbygoogle ${className}`}
        style={{ display: "block", minHeight: MIN_HEIGHT.anchor, textAlign: "center" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format="autorelaxed"
        data-ad-label={label}
      />
    );
  }

  if (format === "multiplex") {
    return (
      <ins
        className={`adsbygoogle ${className}`}
        style={{ display: "block", minHeight: MIN_HEIGHT.multiplex }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format="autorelaxed"
        data-ad-label={label}
      />
    );
  }

  if (format === "in-article") {
    return (
      <ins
        className={`adsbygoogle ${className}`}
        style={{
          display: "block",
          textAlign: "center",
          minHeight: MIN_HEIGHT["in-article"],
        }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format="fluid"
        data-ad-layout="in-article"
        data-ad-label={label}
      />
    );
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: "block", minHeight: MIN_HEIGHT.display }}
      data-ad-client={AD_CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-ad-label={label}
    />
  );
}
