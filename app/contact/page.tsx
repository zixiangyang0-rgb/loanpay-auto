import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | LoanPay Auto",
  description:
    "Contact LoanPay Auto: corrections, guide requests, and feedback for auto.loanpaylogic.com.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Questions, corrections, or ideas for a new car-buying guide? We read every message.
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
    </div>
  );
}
