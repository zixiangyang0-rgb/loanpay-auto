import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | LoanPay Auto",
  description:
    "Terms of use for auto.loanpaylogic.com: educational content, acceptable use, and liability limits.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Terms of Use</h1>
      <p className="mt-4 text-xs text-slate-500">Last updated: October 2026</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        By using auto.loanpaylogic.com, you agree to these terms. Our guides and estimators are
        provided for general car-buying education only, &ldquo;as is&rdquo; and without warranties
        of any kind. Vehicle prices, interest rates, insurance premiums, tax-credit rules, and
        state consumer-protection laws change frequently; examples on this site are illustrations
        with rounded figures, not quotes or guarantees of the deal you will receive.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        You agree to use the site lawfully and not to scrape, copy, or republish substantial
        portions of our content without permission, interfere with the site&apos;s operation, or
        misrepresent our educational material as professional advice. Third-party links (for
        example, to lender or insurer resources) are provided for convenience; we do not control
        those sites and are not responsible for their content or offers.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        To the maximum extent permitted by law, LoanPay Auto is not liable for decisions you make
        based on this site&apos;s content, including vehicle purchases, loan or lease agreements,
        warranty choices, insurance selections, or vehicle sales. Always read your own contracts
        and consult licensed professionals for advice about your situation.
      </p>
    </div>
  );
}
