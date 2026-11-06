import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | LoanPay Auto",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/about",
  },
  description:
    "About LoanPay Auto (auto.loanpaylogic.com): plain-English car-buying, financing, EV, insurance, and ownership education.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">About LoanPay Auto</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Auto (auto.loanpaylogic.com) is an educational guide hub for Americans navigating
        the car market: deciding between buying and leasing, negotiating with dealers, comparing
        financing offers, understanding electric-vehicle costs, choosing insurance, and selling a
        car without leaving money on the table.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Buying a car is one of the largest purchases most households ever make, yet the process is
        full of jargon — money factors, out-the-door prices, add-ons, gap coverage, lemon-law
        presumptions, and title brands. Our guides translate each concept into plain English with
        checklists, comparison tables, and worked dollar examples, so you can walk into a
        dealership or apply for a loan with confidence.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We cover budgeting and pre-approval through trade-in and resale. Each guide lays out
        the math step by step so you can see where every dollar goes.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We make no absolute claims about any particular car, dealer, lender, or insurer. We
        publish comparisons and checklists, not rankings, and we encourage you to get competing
        quotes and read every contract before you sign. Everything here is general education, not
        financial advice — see our disclaimer for details. This site is part of the LoanPay Logic
        family and is supported by display advertising so the guides can stay free to read.
      </p>
      <section
        aria-label="Editorial byline and sources"
        className="glass-card mt-6 rounded-2xl p-6 sm:p-8"
      >
        <h2 className="text-lg font-semibold text-white">
          Who Wrote This Page and How We Check Our Facts
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page was written by Sarah Mitchell, Senior Personal Finance Writer; reviewed for
          accuracy by David Chen, CPA, our independent fact-checking reviewer; and edited by Emily
          Roberts, Managing Editor. Together, this three-person team brings over 25 years of
          combined experience in financial education, certified public accounting, and digital
          publishing to every auto guide on this site, and each member signs off on the final
          version before it goes live for readers like you.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Our editorial process starts with primary public sources, including the Consumer
          Financial Protection Bureau, the Federal Trade Commission, Department of Energy and EPA
          publications, and state motor-vehicle departments. We cross-check every figure and
          worked example against at least two independent sources, rewrite all findings in
          original plain-English language, and never let advertising partners influence our
          conclusions.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page was last reviewed and updated on November 6, 2026. Prices, rates, and
          insurance rules change frequently, so we re-check each guide regularly and fix errors
          promptly when readers write to support@loanpaylogic.com with the page URL.
        </p>
      </section>
    </div>
  );
}
