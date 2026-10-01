"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "loanpay-auto-consent";
const ADS_CLIENT = "ca-pub-4906207495792820";

type ConsentChoice = "accepted" | "declined" | null;

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>> & {
      requestNonPersonalizedAds?: number;
    };
  }
}

/** Apply non-personalized-ads signal (npa=1) when the visitor declines. */
function applyNpa(): void {
  try {
    window.adsbygoogle = window.adsbygoogle ?? [];
    window.adsbygoogle.requestNonPersonalizedAds = 1;
  } catch {
    // Ignore — consent must never break rendering.
  }
}

export function getStoredConsent(): ConsentChoice {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "accepted" || raw === "declined") return raw;
  } catch {
    // private mode etc.
  }
  return null;
}

export default function ConsentBanner() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setChoice(stored);
    if (stored === "declined") applyNpa();
    // Show the banner only when no choice was stored.
    setVisible(stored === null);
  }, []);

  const choose = useCallback((value: Exclude<ConsentChoice, null>) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignore storage failures.
    }
    if (value === "declined") applyNpa();
    setChoice(value);
    setVisible(false);
  }, []);

  if (!visible) return null;
  void choice;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and advertising consent"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-3xl px-4 pb-4"
    >
      <div className="rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur">
        <p className="text-sm font-semibold text-white">
          We use cookies for ads and measurement
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-300">
          LoanPay Auto shows Google AdSense ads. Google may use cookies to personalize ads and
          measure performance. Choose &ldquo;Accept&rdquo; for personalized ads or
          &ldquo;Decline&rdquo; for non-personalized ads (npa=1). Read our{" "}
          <a href="/privacy-policy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-amber-200"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-slate-100 transition hover:border-white/40"
          >
            Decline (non-personalized)
          </button>
        </div>
      </div>
    </div>
  );
}

// Re-export for layout/tests.
export { ADS_CLIENT };
