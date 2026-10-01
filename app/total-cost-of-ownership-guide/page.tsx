import type { Metadata } from "next";
import Link from "next/link";
import TcoEstimator from "./estimator";

export const metadata: Metadata = {
  title: "Total Cost of Ownership Guide: 5-Year True Car Cost | LoanPay Auto",
  description:
    "The sticker price is half the story. Build a 5-year total cost of ownership: depreciation, fuel, insurance, repairs, interest — with estimator and $32,000 example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/total-cost-of-ownership-guide",
  },
};

const CHECKLIST = [
  "Start from depreciation (the biggest cost), not the monthly payment.",
  "Use your real annual mileage for fuel and maintenance math — averages mislead.",
  "Get actual insurance quotes for the exact cars you compare; premiums vary enormously.",
  "Include financing interest over the full term, plus taxes and registration.",
  "Subtract realistic resale value at your planned selling point.",
  "Divide the 5-year total by 60 for the true monthly cost — then judge affordability.",
];

export default function TcoPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Ownership &middot; true costs
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Total Cost of Ownership Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Two $32,000 cars can differ by $10,000 over five years once fuel, insurance,
          depreciation, and repairs count. Learn to compute the true number — and use the
          estimator below to run your own comparison.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">TCO checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Background:{" "}
            <Link href="/car-depreciation-guide" className="text-amber-200 underline underline-offset-2">
              depreciation guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The six buckets of true cost</h2>
          <p className="mt-3">
            Total cost of ownership sums six buckets over your holding period: depreciation
            (purchase price minus resale value — typically the largest), fuel or charging,
            insurance, maintenance and repairs, financing interest, and taxes plus fees. On a
            typical $32,000 car held five years, depreciation (~$15,000) and fuel (~$9,000) dwarf
            everything else, with insurance (~$9,000), interest (~$4,900 at 7 percent), and
            maintenance (~$4,500) filling out a true five-year cost near $42,000 — meaning the
            car costs roughly $700 a month all-in, not the $554 payment the dealer quoted.
          </p>
          <p className="mt-3">
            The proportions shift dramatically by choice. Depreciation dominates new-car math but
            nearly vanishes for a 6-year-old cash purchase. Fuel dominates thirsty trucks driven
            far, while insurance dominates young drivers&apos; budgets regardless of car.
            Interest vanishes for cash buyers but punishes long subprime terms. This is why
            generic &ldquo;average cost&rdquo; figures mislead: your mileage, your insurance
            tier, your financing, and your holding period rewrite every bucket. Build the number
            from your inputs, not national averages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Bucket-by-bucket estimation rules</h2>
          <p className="mt-3">
            Depreciation: use segment retention data (see our{" "}
            <Link href="/car-depreciation-guide" className="text-amber-200 underline underline-offset-2">
              depreciation table
            </Link>
            ) applied to your negotiated price, minus planned selling costs. Fuel: annual miles
            divided by real-world mpg times local fuel price — use owner-reported economy, not
            the window sticker, and your actual pump price. Insurance: quote the VIN with your
            real profile; a sports trim can cost double its sensible sibling to insure, and new
            drivers should read our{" "}
            <Link href="/car-insurance-new-drivers-guide" className="text-amber-200 underline underline-offset-2">
              new-driver guide
            </Link>
            .
          </p>
          <p className="mt-3">
            Maintenance and repairs: budget ~$600–$900 a year for years 1–5 of a mainstream car,
            rising past $1,200 annually after year 6 (our{" "}
            <Link href="/car-maintenance-costs-guide" className="text-amber-200 underline underline-offset-2">
              maintenance guide
            </Link>{" "}
            details the curve). Interest: amortize your actual APR and term — every extra year of
            term adds roughly a full percentage point of effective cost. Taxes and fees: your
            state&apos;s sales tax on the transaction plus ~$300–$600 a year in registration and
            inspections. Sum all six, subtract resale, and divide by months held: that quotient is
            the only affordability number that matters.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Comparison table: same price, different truth</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                5-year TCO on two $32,000 cars, 12,000 miles/year.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Bucket (5-yr)</th>
                  <th className="px-4 py-3 font-semibold">Efficient hybrid SUV</th>
                  <th className="px-4 py-3 font-semibold">Thirsty luxury sedan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Depreciation</td><td className="px-4 py-2">$13,400</td><td className="px-4 py-2">$17,600</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Fuel</td><td className="px-4 py-2">$6,000 (40 mpg)</td><td className="px-4 py-2">$11,500 (21 mpg)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Insurance</td><td className="px-4 py-2">$8,000</td><td className="px-4 py-2">$10,500</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Maintenance + repairs</td><td className="px-4 py-2">$3,800</td><td className="px-4 py-2">$6,500</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Interest (7%, 60 mo)</td><td className="px-4 py-2">$4,877</td><td className="px-4 py-2">$4,877</td></tr>
                <tr><td className="px-4 py-2 font-semibold text-white">5-year true total</td><td className="px-4 py-2 font-semibold text-white">~$36,100</td><td className="px-4 py-2 font-semibold text-white">~$51,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $15,000 surprise</h2>
          <p className="mt-3">
            The table&apos;s punchline: identical $32,000 stickers, ~$15,000 of five-year
            difference — $250 a month of invisible cost. The luxury sedan burns an extra $5,500
            in fuel, $2,500 in insurance, $2,700 in repairs, and $4,200 in depreciation. A buyer
            comparing &ldquo;equal&rdquo; $590 payments would never see it; a buyer comparing
            $602 vs. $850 true-monthly costs decides with eyes open. This is also where EVs and
            hybrids earn their keep — see our{" "}
            <Link href="/electric-vs-gas-cost-comparison" className="text-amber-200 underline underline-offset-2">
              electric vs. gas comparison
            </Link>
            .
          </p>
          <p className="mt-3">
            Run your own cars through the estimator below, then finance the winner wisely with{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>{" "}
            and quote coverage at{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            .
          </p>
          <div className="mt-4">
            <TcoEstimator />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Using TCO to make the decision</h2>
          <p className="mt-3">
            TCO reframes the classic dilemmas. New vs. used: a 3-year-old car&apos;s flattened
            depreciation often beats a new car&apos;s warranty and financing advantages by
            $5,000–$8,000 over five years. Keep vs. replace: your current car&apos;s TCO going
            forward (repairs + fuel + insurance, no depreciation to speak of) usually beats any
            replacement&apos;s TCO until repair bills exceed roughly half a replacement&apos;s
            annual true cost for two consecutive years. Buy vs. lease: compare five years of
            ownership TCO against two consecutive lease cycles&apos; all-in payments — ownership
            wins for keepers by construction.
          </p>
          <p className="mt-3">
            The affordability rule follows: keep true monthly TCO (not the payment) under 15–20
            percent of take-home pay, with the payment itself under 10–12 percent so the running
            costs fit. A $600 payment on a $5,000 take-home looks fine until $250 of insurance,
            fuel, and repairs push the real burden past 17 percent. Budget the whole car, not the
            loan — that single habit prevents more financial stress than any negotiation tactic.
          </p>
          <p className="mt-3">
            Revisit your TCO math at every major decision point: annually at insurance renewal
            (premiums drift and re-shopping resets them), when mileage patterns change (a new
            commute rewrites fuel and depreciation simultaneously), and before any refinance or
            replacement. Save each comparison&apos;s inputs — price, APR, quotes, resale
            assumption — so next year&apos;s update takes minutes. Owners who track true cost
            yearly consistently report the same surprise: the cheapest car to own is usually the
            reliable one already in the driveway, maintained on schedule and driven past the
            payment book&apos;s final page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is total cost of ownership for a car?</h3>
              <p className="mt-1">Purchase price plus 5 years of depreciation, fuel, insurance, maintenance, interest, and taxes — minus resale value. Typically 1.3–1.6× the sticker price over five years.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is the biggest cost of owning a car?</h3>
              <p className="mt-1">Depreciation for new cars (often ~40% of 5-year TCO), then fuel and insurance. For older cars, repairs and fuel dominate since depreciation flattens.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How do I compare TCO between two cars?</h3>
              <p className="mt-1">Build both on identical assumptions (miles, years, insurance profile, APR), sum all six buckets minus resale, and compare true monthly cost — never sticker or payment.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">When is repairing my old car smarter than replacing?</h3>
              <p className="mt-1">Usually until annual repairs exceed roughly half a replacement&apos;s true yearly cost for two years running. A $2,000 repair beats $8,000+ a year of replacement TCO.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does paying cash change total cost of ownership?</h3>
              <p className="mt-1">It removes the interest bucket entirely — often $3,000–$6,000 over five years — but ties up capital. Compare the loan&apos;s total interest against what the cash could earn; low-rate loans on reliable cars often favor financing.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/buy-vs-lease-guide" className="text-amber-200 underline underline-offset-2">
              buy vs. lease
            </Link>
            {" "}and{" "}
            <Link href="/car-maintenance-costs-guide" className="text-amber-200 underline underline-offset-2">
              maintenance costs
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Your costs depend on mileage,
            location, and driving profile. Read our full{" "}
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
