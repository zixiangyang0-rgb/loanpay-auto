import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auto Refinance Guide: When Refinancing Saves You Money | LoanPay Auto",
  description:
    "Refinance your car loan the right way: rate-drop math, term traps, fees, timing, and a $24,000 worked example saving $1,400.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/auto-refinance-guide",
  },
};

const CHECKLIST = [
  "Refinance for a lower APR, a shorter payoff, or both — never for a lower payment alone at a longer term.",
  "Wait until 3–6 months of on-time payments have lifted your score (many lenders require it).",
  "Check for prepayment penalties on the old loan (rare, but verify) and fees on the new one.",
  "Compare the new loan's total interest against remaining interest on the old loan — not payment vs. payment.",
  "Keep the new term at or below the old loan's remaining months to avoid paying longer.",
  "Do not roll add-ons or cash-out extras into the refinance unless you have priced the true cost.",
];

export default function RefinancePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Finance well &middot; loans
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Auto Refinance Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Stuck with an 11 percent loan from the finance office? A year of on-time payments may
          have earned you a far better rate. Learn when refinancing pays, when it backfires, and
          how to compare the two loans honestly.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Refinance checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            First loan still ahead? Read{" "}
            <Link href="/auto-loan-preapproval-guide" className="text-amber-200 underline underline-offset-2">
              preapproval
            </Link>{" "}
            and{" "}
            <Link href="/dealer-financing-vs-bank" className="text-amber-200 underline underline-offset-2">
              dealer vs. bank
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">When refinancing pays</h2>
          <p className="mt-3">
            Three situations justify a refinance. First, your credit improved: a buyer who
            financed at 11 percent with a 640 score and now scores 720 after a year of on-time
            payments can often cut 3–5 points — the single most profitable refinance trigger.
            Second, market rates fell below your contract rate by a point or more with meaningful
            balance remaining. Third, your income rose and you want a shorter term at a similar
            payment, killing interest and building equity faster. In all three, the test is total
            remaining interest, old versus new — if the new loan&apos;s lifetime interest is
            clearly lower at an equal-or-shorter term, it wins.
          </p>
          <p className="mt-3">
            Timing matters. Most refinance lenders want 3–6 months of seasoning (on-time
            payments on the current loan), a balance above their minimum (often $5,000–$10,000),
            and a car within age and mileage caps (commonly under 10 years and 125,000–150,000
            miles). Refinancing in the first months rarely helps — scores have not moved yet and
            fees eat the savings — while refinancing in the final year rarely helps either, since
            little interest remains to save. The sweet spot is roughly months 6 through 36 of the
            original loan with at least two years of payments left.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The term-stretch trap</h2>
          <p className="mt-3">
            The classic refinance mistake: trading a high payment for a longer loan that costs
            more overall. Dropping from $520 a month to $410 feels like victory — until the math
            shows 48 remaining payments of $520 ($24,960) replaced by 72 payments of $410
            ($29,520). Payment-only comparison crowns the most expensive option the winner, just
            as with original financing. Lenders market the payment because the payment sells;
            your job is to compare remaining-interest totals and payoff dates, where longer terms
            reveal their cost.
          </p>
          <p className="mt-3">
            Two more traps: resetting the clock on a car that keeps depreciating (a fresh 60-month
            loan on a 4-year-old car risks years underwater — see our{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down guide
            </Link>
            ), and rolling extras — past-due amounts, fees, or cash-out — into the new balance at
            interest. A refinance should shrink what you owe and shorten or hold the payoff date;
            any proposal that grows the balance or pushes payoff years outward needs an
            extraordinary justification, not a smaller payment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Refinance math table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                $24,000 balance, 48 months remaining at 10.5% — three refinance paths.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Path</th>
                  <th className="px-4 py-3 font-semibold">Terms</th>
                  <th className="px-4 py-3 font-semibold">Payment</th>
                  <th className="px-4 py-3 font-semibold">Total interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Keep old loan</td><td className="px-4 py-2">10.5% / 48 mo left</td><td className="px-4 py-2">$614</td><td className="px-4 py-2">$5,467 remaining</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Refi, same term</td><td className="px-4 py-2">6.9% / 48 mo</td><td className="px-4 py-2">$573</td><td className="px-4 py-2">$3,494 (saves $1,973)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Refi, shorter</td><td className="px-4 py-2">6.5% / 36 mo</td><td className="px-4 py-2">$735</td><td className="px-4 py-2">$2,447 (saves $3,020)</td></tr>
                <tr><td className="px-4 py-2">Refi, stretched (trap)</td><td className="px-4 py-2">7.5% / 60 mo</td><td className="px-4 py-2">$481</td><td className="px-4 py-2">$4,846 (saves $621, pays 1 yr longer)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: saving $1,973 with one application</h2>
          <p className="mt-3">
            Kevin financed $27,000 at 10.5 percent for 60 months with a thin file: $581 a month.
            Fourteen months and fourteen on-time payments later, his score rose from 648 to 712
            and he owes ~$24,000 with 46 months left. His credit union offers 6.9 percent for the
            remaining 48 months (standard refi terms): $573 a month, $3,494 in total interest
            versus $5,467 remaining on the old loan. Saving: $1,973, for one application and no
            change in payoff date. Had he stretched to 60 months at 7.5 percent, the payment would
            fall to $481 but total interest would reach $4,846 — surrendering $1,350 of the saving
            for a longer leash.
          </p>
          <p className="mt-3">
            The process itself is straightforward: check your score and payoff quote, solicit 2–3
            refinance quotes inside a 14-day window (see the rate-shopping rules in our{" "}
            <Link href="/auto-loan-preapproval-guide" className="text-amber-200 underline underline-offset-2">
              preapproval guide
            </Link>
            ), compare remaining-interest totals at equal-or-shorter terms, and let the new lender
            pay off the old one directly. Keep making old-loan payments until the payoff confirms
            — a &ldquo;lost&rdquo; payment during transition dings the very score that earned the
            deal. Loan mechanics refresher at{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Fees, taxes, and special cases</h2>
          <p className="mt-3">
            Auto refinance fees are light compared with mortgages — typically a $0–$100
            application or lien-recording fee, sometimes a small title-transfer charge. Auto-loan
            prepayment penalties are rare in the United States but not mythical: verify
            &ldquo;no prepayment penalty&rdquo; on the old contract (a five-minute call to the
            servicer) before proceeding. GAP coverage and warranties tied to the old loan need
            attention: dealer-sold gap is often cancellable pro-rata (claim the refund!) and new
            gap may be needed if the refinanced balance still exceeds value — see{" "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap insurance
            </Link>
            .
          </p>
          <p className="mt-3">
            Underwater borrowers face tighter options: lenders cap loan-to-value near 110–125
            percent, so owing far more than the car is worth may require a cash paydown to
            qualify. Lease buyouts can be refinanced as purchases when the residual beats market
            value (see{" "}
            <Link href="/lease-end-options-guide" className="text-amber-200 underline underline-offset-2">
              lease-end options
            </Link>
            ). And always re-quote insurance when refinancing — coverage requirements persist,
            but a year of clean history may have earned a cheaper carrier. Check with{" "}
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
              <h3 className="font-semibold text-white">When should I refinance my car loan?</h3>
              <p className="mt-1">When your score has risen meaningfully, market rates fell 1+ points, or you can shorten the term — typically months 6–36 with 2+ years of payments left and a car within age/mileage caps.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does refinancing hurt your credit?</h3>
              <p className="mt-1">One hard inquiry (a few points, temporary) plus a new account that lowers average account age. The 14-day shopping window counts auto inquiries as one — and on-time payments rebuild fast.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are there fees to refinance a car?</h3>
              <p className="mt-1">Usually minimal: $0–$100 in application, lien, or title fees. Confirm no prepayment penalty on the old loan and compare total interest, not just payments.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I refinance if I am upside down?</h3>
              <p className="mt-1">Sometimes, within lender loan-to-value caps (~110–125%). Deep negative equity usually requires paying down the balance first — see our upside-down loan guide for the playbook.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down loans
            </Link>
            {" "}and{" "}
            <Link href="/total-cost-of-ownership-guide" className="text-amber-200 underline underline-offset-2">
              total cost of ownership
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Lending criteria vary by lender,
            vehicle, and state. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
