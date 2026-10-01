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
        We make no absolute claims about any particular car, dealer, lender, or insurer. We
        publish comparisons and checklists, not rankings, and we encourage you to get competing
        quotes and read every contract before you sign. Everything here is general education, not
        financial advice — see our disclaimer for details.
      </p>
    </div>
  );
}
