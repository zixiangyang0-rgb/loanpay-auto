import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auto Loan Preapproval Guide: Rates, Scores & Timing | LoanPay Auto",
  description:
    "Get preapproved before you shop: how preapproval works, hard vs. soft pulls, the 14-day rate-shopping window, and a $28,000 loan example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/auto-loan-preapproval-guide",
  },
};

const CHECKLIST = [
  "Check your credit reports and FICO Auto Score 2–3 months before shopping; dispute errors early.",
  "Set your budget from out-the-door price and the 15% rule, not from a target monthly payment.",
  "Get preapproved by your bank or credit union before visiting any dealer.",
  "Concentrate all loan applications inside a 14-day window so scoring models count them as one.",
  "Compare offers by APR, term, total interest, and fees — never by payment alone.",
  "Bring your preapproval letter to the dealer and let their finance desk try to beat it in writing.",
];

export default function PreapprovalPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Finance well &middot; loans
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Auto Loan Preapproval Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Walking into a dealership without financing is like negotiating with one hand tied:
          the dealer controls the price, the rate, and the trade. Preapproval unties that hand —
          here is how it works, what it costs your credit score, and how to use it as leverage.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Preapproval checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Also read:{" "}
            <Link href="/dealer-financing-vs-bank" className="text-amber-200 underline underline-offset-2">
              dealer financing vs. bank
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What preapproval is (and is not)</h2>
          <p className="mt-3">
            Preapproval is a lender&apos;s conditional commitment: based on your credit, income,
            and debts, they will lend up to a stated amount at a stated APR for a vehicle purchase
            within 30 to 60 days. It typically starts with a soft credit pull for the quote and
            requires a hard pull before funding — the hard inquiry may shave a few points off your
            score temporarily, but that cost is dwarfed by the savings from a competitive rate.
            Critically, preapproval is not final approval: the lender still verifies income and
            the specific vehicle (age, mileage, and value limits often apply to used cars).
          </p>
          <p className="mt-3">
            The strategic value is leverage, not just convenience. A buyer with a 6.9 percent
            preapproval letter transforms the finance office from a monopoly lender into a
            competitor: the dealer must beat 6.9 percent in writing to earn the business, and
            manufacturer-subsidized rates (0.9 to 3.9 percent specials) frequently do. Without
            that letter, buyers accept whatever rate the dealer presents — and dealer reserve
            (markup of up to 2 percentage points in most states) hides inside the payment where
            few shoppers look. A free letter from your bank is the cheapest negotiating tool in
            car buying.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Credit scores and the rate-shopping window</h2>
          <p className="mt-3">
            Auto lenders weight FICO Auto Scores (versions 8 and 9 dominate in 2026), which
            emphasize past auto-loan behavior over general credit mix. Tiers roughly break at
            720+ (best rates), 660–719 (near-prime, ~1–2 points higher), 600–659 (subprime, several
            points higher with larger down-payment requirements), and below 600 (deep subprime,
            double-digit APRs where buy-here-pay-here lots lurk). Moving from 670 to 730 can save
            roughly $2,000 in interest on a $28,000 five-year loan — two months of utilization
            cleanup and error disputes can literally pay for themselves.
          </p>
          <p className="mt-3">
            The fear of &ldquo;too many inquiries&rdquo; is overblown by design: FICO counts all
            auto-loan hard inquiries within a 14-day window (30 days under newer models, 14 under
            older ones still widely used) as a single inquiry, precisely to protect rate shoppers.
            So compress every application — bank, credit union, online lender, and the
            dealer&apos;s submission — into one two-week sprint. Each inquiry still appears on the
            report, but the score impact is a one-time, few-point event that fades within months,
            while the rate you lock in compounds for years.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Offer comparison table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Three real-shaped offers on a $28,000 loan — payment vs. total cost.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Offer</th>
                  <th className="px-4 py-3 font-semibold">APR / term</th>
                  <th className="px-4 py-3 font-semibold">Payment</th>
                  <th className="px-4 py-3 font-semibold">Total interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Credit union preapproval</td><td className="px-4 py-2">6.5% / 60 mo</td><td className="px-4 py-2">$548</td><td className="px-4 py-2">$4,877</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Dealer first pencil</td><td className="px-4 py-2">8.9% / 60 mo</td><td className="px-4 py-2">$579</td><td className="px-4 py-2">$6,763</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Dealer stretched term</td><td className="px-4 py-2">8.9% / 72 mo</td><td className="px-4 py-2">$500</td><td className="px-4 py-2">$8,028</td></tr>
                <tr><td className="px-4 py-2">Manufacturer special (new)</td><td className="px-4 py-2">2.9% / 60 mo</td><td className="px-4 py-2">$502</td><td className="px-4 py-2">$2,141</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: how $31 a month hides $1,886</h2>
          <p className="mt-3">
            Sam is approved for a $28,000 loan. His credit union offers 6.5 percent for 60
            months: $548 a month, $4,877 in total interest. The dealer&apos;s first pencil shows
            $579 a month — &ldquo;only $31 more&rdquo; — at 8.9 percent over the same 60 months,
            totaling $6,763 in interest. That casual $31 costs $1,886 over the loan&apos;s life,
            pure dealer reserve and lender margin. When Sam shows his preapproval letter, the
            finance manager &ldquo;finds&rdquo; 6.9 percent through another bank — still $300 above
            the credit union, so Sam keeps his own financing and pockets the difference.
          </p>
          <p className="mt-3">
            The stretched-term variant is sneakier: 8.9 percent over 72 months drops the payment
            to $500 — lower than the credit union! — while total interest balloons to $8,028 and
            the car spends years underwater (see our{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down loan guide
            </Link>
            ). Payment-only shopping would crown the worst deal the winner. The fix is a
            four-column comparison (APR, term, payment, total interest) for every offer, computed
            in the open. Our companion walkthrough at{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              guides.loanpaylogic.com/auto-loan-guide
            </a>{" "}
            shows the amortization behind these figures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Timing and down-payment tactics</h2>
          <p className="mt-3">
            Apply for preapproval after your credit is groomed but before you test drive — roughly
            2 to 4 weeks before purchase, since letters expire in 30 to 60 days and a hard pull
            needs a few weeks for its tiny score dent to stabilize. Put at least 10 to 20 percent
            down on used cars (lenders cap loan-to-value near 110–125 percent including tax and
            fees) and enough on new cars to keep the loan under the car&apos;s year-one value —
            small down payments are the leading cause of negative equity. Keep loan terms at 60
            months or less whenever the payment allows; 72-plus-month terms trade affordable
            payments for years of interest and underwater risk.
          </p>
          <p className="mt-3">
            First-time buyers with thin files should weigh a credit-union secured or
            credit-builder product months ahead, or a qualified co-signer whose score earns the
            tier while your on-time payments build history. And every buyer should price insurance
            before signing — lenders require full coverage, and a $200-a-month premium surprise
            breaks budgets built on payment alone. Run the numbers at{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does preapproval hurt your credit score?</h3>
              <p className="mt-1">Quotes use soft pulls (no impact); funding needs one hard pull costing a few points temporarily. Applications within a 14-day window count as a single inquiry for scoring.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How long does auto loan preapproval last?</h3>
              <p className="mt-1">Usually 30–60 days. Apply 2–4 weeks before purchase so the letter is fresh and your score has stabilized after any cleanup.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What credit score gets the best auto rates?</h3>
              <p className="mt-1">Generally 720+ on FICO Auto Score for top-tier rates; 660–719 pays roughly 1–2 points more. Below 660, larger down payments and shorter terms limit the damage.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can the dealer beat my preapproved rate?</h3>
              <p className="mt-1">Often yes — especially with manufacturer-subsidized specials. Bring the letter, invite them to beat it in writing, and keep the better offer. Never accept a verbal rate.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/auto-refinance-guide" className="text-amber-200 underline underline-offset-2">
              auto refinance guide
            </Link>
            {" "}and{" "}
            <Link href="/first-time-car-buyer-guide" className="text-amber-200 underline underline-offset-2">
              first-time buyer guide
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Rates and programs vary by lender,
            credit profile, and vehicle. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and confirm terms with your lender before signing.
          </p>
        </section>
      </article>
    </div>
  );
}
