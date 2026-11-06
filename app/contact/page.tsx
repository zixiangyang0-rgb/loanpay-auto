import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | LoanPay Auto",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/contact",
  },
  description:
    "Contact LoanPay Auto: corrections, guide requests, and feedback for auto.loanpaylogic.com.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Questions, corrections, or ideas for a new car-buying guide? We read every message. Whether
        you spotted a rate that needs updating or want us to explain leases, EV tax credits, or
        insurance deductibles next, write to us and our editors will take a look.
      </p>
      <div className="glass-card mt-6 rounded-2xl p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-white">Email us</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          General feedback and corrections:{" "}
          <span className="text-amber-200">support@loanpaylogic.com</span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          When reporting a possible error, please include the page URL, the sentence you think is
          wrong, and — if you have one — a link to an authoritative source such as the IRS, the
          Consumer Financial Protection Bureau, your state attorney general, or an insurer&apos;s
          published rate filing. That helps us verify and fix things quickly.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Please note that we cannot give personalized car-buying, loan, legal, or insurance
          advice by email. For decisions about your own purchase, loan, or claim, consult a
          licensed dealer, lender, attorney, or insurance agent in your state.
        </p>
      </div>
      <section
        aria-label="Editorial byline and sources"
        className="glass-card mt-6 rounded-2xl p-6 sm:p-8"
      >
        <h2 className="text-lg font-semibold text-white">
          Who Reads Your Message and How We Keep Guides Accurate
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Messages to this page are read by our three-person editorial team: Sarah Mitchell,
          Senior Personal Finance Writer, who drafts and maintains our auto guides; David Chen,
          CPA, our independent fact-checking reviewer, who verifies numbers, definitions, and
          worked examples; and Emily Roberts, Managing Editor, who gives the final sign-off
          before anything is published.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Our editorial process starts with primary public sources, including the Consumer
          Financial Protection Bureau, the Federal Trade Commission, Department of Energy and EPA
          publications, and state motor-vehicle departments. We cross-check every figure against
          at least two independent sources, rewrite findings in original plain-English language,
          and never let advertising partners influence our conclusions. Corrections sent here go
          directly to the editors.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page was last reviewed and updated on November 6, 2026. We re-check our contact
          workflow and every linked guide regularly, and we publish corrections promptly whenever
          a reader flags an error. Please include the page URL and a short description of what
          looks outdated, and our team will verify the facts and update the guide quickly.
        </p>
      </section>
    </div>
  );
}
