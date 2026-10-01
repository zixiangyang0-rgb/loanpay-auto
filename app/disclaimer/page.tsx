import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | LoanPay Auto",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/disclaimer",
  },
  description:
    "Disclaimer for auto.loanpaylogic.com: general car-buying education only, not financial, legal, or insurance advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Everything published on auto.loanpaylogic.com is for general education and illustration
        only. It is not financial advice, legal advice, insurance advice, or tax advice, and it
        does not create a professional-client relationship.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Car prices, loan rates, insurance premiums, tax credits, and consumer-protection rules
        change frequently and depend on your credit profile, income, state of residence, vehicle
        choice, and timing. Our simplified examples and comparisons cannot reflect every dealer
        fee, lender program, state lemon-law deadline, or insurance underwriting rule. Before
        signing a purchase contract, loan agreement, lease, warranty, or insurance policy, verify
        the current terms with the dealer, lender, insurer, or a licensed professional.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We work to keep guides accurate, but we make no warranty of completeness or timeliness. If
        you spot an error, please tell us at support@loanpaylogic.com so we can correct it.
      </p>
    </div>
  );
}
