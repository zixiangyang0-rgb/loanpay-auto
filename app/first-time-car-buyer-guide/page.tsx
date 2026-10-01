import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First-Time Car Buyer Guide: Budget to Paperwork | LoanPay Auto",
  description:
    "Buying your first car? Budget rules, credit building, insurance shocks, dealer scripts, and paperwork — a complete start-to-finish walkthrough with numbers.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/first-time-car-buyer-guide",
  },
};

const CHECKLIST = [
  "Set the budget first: payment under 10–12% of take-home, all car costs under 15%.",
  "Check your credit 2–3 months out; build thin files with secured cards or credit-builder loans.",
  "Get preapproved before shopping so the dealer cannot mark up your first loan.",
  "Quote insurance for finalists before signing — first policies shock unprepared buyers.",
  "Bring a checklist and a companion to every test drive and negotiation.",
  "Read every line of the buyer's order and loan contract before signing; never rush day one.",
];

export default function FirstTimePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Buy smart &middot; beginners
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          First-Time Car Buyer Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Your first car purchase sets patterns — and rates — that follow you for years. This
          start-to-finish walkthrough covers budgeting, credit, insurance, negotiation, and
          paperwork, so the first deal is a good one.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">First-timer checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Deep dives:{" "}
            <Link href="/auto-loan-preapproval-guide" className="text-amber-200 underline underline-offset-2">
              preapproval
            </Link>
            {" · "}
            <Link href="/new-car-negotiation-guide" className="text-amber-200 underline underline-offset-2">
              negotiation
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Budget before browsers</h2>
          <p className="mt-3">
            First-timers consistently under-budget by pricing the payment instead of the car. The
            durable rules: keep the loan payment under 10–12 percent of monthly take-home pay,
            and keep all car costs — payment, insurance, fuel, maintenance — under 15 percent
            (20 percent absolute ceiling). On $3,500 take-home, that means roughly a $350–$420
            payment supporting a $525 total budget, which at 8 percent for 60 months finances
            roughly $17,000–$20,000 plus a down payment. Every budget starts from your bank
            statement, never from a dealer&apos;s &ldquo;what can you afford monthly?&rdquo;
          </p>
          <p className="mt-3">
            The down payment is your leverage and your shield: 10–20 percent down (plus taxes and
            fees in cash if possible) keeps thin-file first loans near the car&apos;s value,
            dodging the underwater trap detailed in our{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down guide
            </Link>
            . New-versus-used for beginners usually resolves to well-chosen used: a 3–5-year-old
            reliable car costs half the payment, insures cheaper, and depreciates gently while
            you build credit and claims history. Buy the boring reliable car first; buy the dream
            car third.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Credit and insurance: the twin gatekeepers</h2>
          <p className="mt-3">
            Thin or bruised credit is normal for first-timers, and lenders price it accordingly —
            expect first-loan APRs several points above advertised best rates. Two to three
            months before shopping, pull all three bureau reports, dispute errors (wrong
            balances, phantom collections), pay utilization below 30 percent, and avoid new
            accounts. Credit unions and community banks approve thin files more sympathetically
            than captive lenders; a qualified co-signer can unlock a tier your solo score cannot,
            provided everyone understands the co-signer owes the full balance on default.
          </p>
          <p className="mt-3">
            Insurance ambushes more first budgets than interest does: a 22-year-old first-time
            owner can face $250–$400 a month for required full coverage, exceeding the car
            payment itself. Quote the exact VINs before committing (see our{" "}
            <Link href="/car-insurance-new-drivers-guide" className="text-amber-200 underline underline-offset-2">
              new-driver guide
            </Link>{" "}
            and{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            ), favor safety-rated sensible models, and stack good-student, telematics, and
            deductible discounts from day one. A car you cannot afford to insure is a car you
            cannot afford — discover it before signing, not after.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">First-car budget table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Monthly budget on $3,500 take-home: two realistic first cars.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Line item</th>
                  <th className="px-4 py-3 font-semibold">Used sedan ($16k)</th>
                  <th className="px-4 py-3 font-semibold">New compact ($25k)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Payment (8% / 9%, 60 mo, 10% down)</td><td className="px-4 py-2">$292</td><td className="px-4 py-2">$461</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Insurance (first-timer est.)</td><td className="px-4 py-2">$220</td><td className="px-4 py-2">$280</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Fuel (1,000 mi/mo)</td><td className="px-4 py-2">$125</td><td className="px-4 py-2">$110</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Maintenance reserve</td><td className="px-4 py-2">$90</td><td className="px-4 py-2">$40</td></tr>
                <tr><td className="px-4 py-2 font-semibold text-white">True monthly total</td><td className="px-4 py-2 font-semibold text-white">$727 (21% — stretch)</td><td className="px-4 py-2 font-semibold text-white">$891 (25% — over)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: making the used sedan fit</h2>
          <p className="mt-3">
            Alex takes home $3,500 and targets the $16,000 used sedan above: $727 all-in, or 21
            percent — over the line. Three adjustments fix it without a worse car: a $3,000
            (19 percent) down payment instead of 10 percent drops the payment to ~$261; a
            telematics discount and $1,000 deductibles cut insurance to ~$175 (see{" "}
            <Link href="/usage-based-insurance-guide" className="text-amber-200 underline underline-offset-2">
              usage-based insurance
            </Link>
            ); and a 48-month term at a credit-union 7.5 percent (reachable with the bigger down
            payment) lands at ~$316 while building equity fast. New total: ~$641, or 18 percent —
            inside the ceiling with margin for the $1,000 repair reserve every used car deserves.
          </p>
          <p className="mt-3">
            The new compact at $891 never fits this income without a co-signer, a much larger
            down payment, or income growth — arithmetic no salesperson&apos;s enthusiasm changes.
            First-timers who respect the ratio keep the car through tough months; those who
            stretch spend the ownership experience one emergency from missed payments and
            repossession. Loan mechanics at{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Shopping day and signing day</h2>
          <p className="mt-3">
            Shop cars with the{" "}
            <Link href="/used-car-buying-checklist" className="text-amber-200 underline underline-offset-2">
              used-car checklist
            </Link>{" "}
            (history, test drive, independent PPI) or the{" "}
            <Link href="/new-car-negotiation-guide" className="text-amber-200 underline underline-offset-2">
              negotiation email-bid process
            </Link>{" "}
            for new — and bring a companion whose only job is slowing you down. Never negotiate
            payment-first, never mention trade or down payment until the out-the-door price is
            settled, and never sign under same-day pressure; legitimate deals survive overnight.
            In the finance office, decline every add-on at first presentation (warranties, gap,
            coatings), then evaluate each independently at home — see our{" "}
            <Link href="/extended-warranty-pros-cons" className="text-amber-200 underline underline-offset-2">
              warranty guide
            </Link>{" "}
            and{" "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap guide
            </Link>
            .
          </p>
          <p className="mt-3">
            At signing, verify on paper: VIN, price, every fee, rate, term, payment, amount
            financed, and total of payments — then confirm registration, title transfer, and
            insurance binding dates before driving away. Set up autopay immediately (first-timer
            scores are built payment by payment), calendar the first maintenance, and file every
            document where you can find it. Twelve on-time payments from now, refinancing
            options open (see our{" "}
            <Link href="/auto-refinance-guide" className="text-amber-200 underline underline-offset-2">
              refinance guide
            </Link>
            ) — the first car is the start of the credit story, not the end.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How much car can I afford on my income?</h3>
              <p className="mt-1">Keep the payment under 10–12% of take-home and all car costs under 15%. On $3,500 take-home that is roughly a $350–$420 payment within a $525 total budget.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I buy a car with no credit history?</h3>
              <p className="mt-1">Yes — expect higher rates and bigger down-payment requirements. Credit unions, larger down payments, shorter terms, and qualified co-signers all improve approval and pricing.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should my first car be new or used?</h3>
              <p className="mt-1">Usually a reliable 3–5-year-old used car: half the payment, cheaper insurance, gentler depreciation — while you build credit and claims history for the next purchase.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What paperwork do I need to buy a car?</h3>
              <p className="mt-1">Photo ID, proof of income and residence, insurance binder, preapproval letter, and down payment. Verify the buyer&apos;s order and loan contract line by line before signing.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/car-maintenance-costs-guide" className="text-amber-200 underline underline-offset-2">
              maintenance costs
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
            This is general education, not financial advice. Rates, prices, and requirements vary
            by lender, state, and profile. Read our full{" "}
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
