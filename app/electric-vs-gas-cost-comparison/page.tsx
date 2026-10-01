import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "Electric vs. Gas Cost Comparison: 5-Year, 75,000-Mile Math | LoanPay Auto",
  description:
    "EV vs. gasoline total cost over 5 years and 75,000 miles: fuel, maintenance, insurance, depreciation, and break-even — with a $42,000 vs. $36,000 example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/electric-vs-gas-cost-comparison",
  },
};

const CHECKLIST = [
  "Compare effective prices after 2026 incentives (federal credits ended Sept. 30, 2025 — use state + dealer discounts).",
  "Compute fuel vs. charging from your miles and your electricity rate, not national averages.",
  "Add insurance quotes for both cars — EVs typically cost 10–25% more to insure.",
  "Weight depreciation honestly: EVs have depreciated faster, though the curve is stabilizing.",
  "Confirm home-charging feasibility; public-only charging erodes the fuel advantage.",
  "Run 5-year totals, not paybacks on single factors — the buckets interact.",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "Are electric cars cheaper than gas overall?",
    "answer": "Often yes over 5 years for home-charging, average-mileage drivers — fuel and maintenance savings outweigh higher prices and insurance. Low-mileage or public-charging-only drivers may not break even."
  },
  {
    "question": "How much does home EV charging cost?",
    "answer": "At $0.16/kWh and 3.3 mi/kWh, about 5¢/mile — roughly $730/year for 15,000 miles. Overnight time-of-use rates can nearly halve that; a 240V outlet or ~$500–$1,500 home charger install is the setup cost."
  },
  {
    "question": "Do EVs cost more to insure?",
    "answer": "Typically 10–25% more than comparable gas cars due to repair costs. Get VIN-specific quotes before purchase — the gap varies widely by model."
  },
  {
    "question": "How long do EV batteries last?",
    "answer": "Most are warrantied 8 years/100,000 miles and data shows modest degradation (~10% over 100k+ miles for modern packs). Battery failure outside warranty is rare but expensive."
  }
];

export default function EvVsGasPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Electric vs. Gas Cost Comparison: 5-Year, 75,000-Mile Math | LoanPay Auto" description="EV vs. gasoline total cost over 5 years and 75,000 miles: fuel, maintenance, insurance, depreciation, and break-even — with a $42,000 vs. $36,000 example." slug="electric-vs-gas-cost-comparison" faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Go electric &middot; cost math
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Electric vs. Gas Cost Comparison
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          &ldquo;EVs save money&rdquo; is true on average and false in particular — the answer
          depends on your miles, your electricity price, and which two cars you actually cross-
          shop. Here is the full five-year accounting, bucket by bucket.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Comparison checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Credit background:{" "}
            <Link href="/ev-tax-credit-2026-guide" className="text-amber-200 underline underline-offset-2">
              EV tax credit 2026 guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Fuel vs. charging: the core advantage</h2>
          <p className="mt-3">
            Energy is the EV&apos;s home turf. A gas SUV at 28 mpg and $3.50 a gallon costs about
            12.5 cents a mile; driven 15,000 miles a year that is ~$1,875 annually. An equivalent
            EV at 3.3 miles per kWh on home electricity at the national average ~$0.16/kWh costs
            under 5 cents a mile — roughly $730 a year for the same miles, a ~$1,150 annual
            saving. Time-of-use overnight rates ($0.08–$0.12/kWh in many utility territories) push
            the cost toward 3 cents a mile, while reliance on public DC fast charging
            ($0.35–$0.55/kWh) can erase most of the advantage — home charging access is the single
            biggest predictor of EV fuel savings.
          </p>
          <p className="mt-3">
            Your numbers will differ, so compute them: annual miles ÷ vehicle efficiency × your
            energy price. High-mileage drivers amplify the gap enormously (20,000-mile-a-year
            drivers can save $1,500+ annually), while garage-less urban drivers paying public
            rates may save little. Gas-price volatility adds an EV hedge premium — electricity
            prices move slowly, gasoline spikes fast — worth something to budget-sensitive
            households even when the spreadsheet is close.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Maintenance, insurance, and depreciation</h2>
          <p className="mt-3">
            Maintenance favors electrics structurally: no oil changes, no spark plugs, no
            exhaust, and regenerative braking that stretches pads and rotors to 100,000+ miles.
            Data from fleet studies suggests roughly 30–40 percent lower scheduled-maintenance
            spend — perhaps $300–$500 a year saved. The offsetting risks are tires (heavy EVs eat
            them ~20 percent faster) and out-of-warranty battery or power-electronics failures,
            which are rare but expensive; keeping the car inside its 8-year/100,000-mile battery
            warranty neutralizes most of this tail risk.
          </p>
          <p className="mt-3">
            Insurance cuts the other way: EVs cost roughly 10–25 percent more to insure than
            comparable gas cars, reflecting higher repair costs (battery-adjacent bodywork,
            sensor-laden bumpers) and pricier parts. On a $1,800 baseline that is $200–$450 extra
            yearly — material, but smaller than the fuel saving for most drivers. Depreciation
            has been the EV&apos;s weak flank: rapid tech improvement plus manufacturer price
            cuts pushed 3-year retained values below gas equivalents through 2024, though 2025–
            2026 data shows stabilization as the market matures. Assume conservative resale in
            your math and treat any improvement as upside.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">5-year, 75,000-mile comparison table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                $42,000 EV (minus $2,000 state rebate) vs. $36,000 gas SUV; 15,000 mi/yr.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Bucket (5-yr)</th>
                  <th className="px-4 py-3 font-semibold">Electric</th>
                  <th className="px-4 py-3 font-semibold">Gasoline</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Effective price</td><td className="px-4 py-2">$40,000</td><td className="px-4 py-2">$36,000</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Energy</td><td className="px-4 py-2">$3,650 home charging</td><td className="px-4 py-2">$9,375 gasoline</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Maintenance + tires</td><td className="px-4 py-2">$4,200</td><td className="px-4 py-2">$5,800</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Insurance (5 yr)</td><td className="px-4 py-2">$10,500</td><td className="px-4 py-2">$9,000</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Resale at year 5</td><td className="px-4 py-2">−$17,000</td><td className="px-4 py-2">−$17,300</td></tr>
                <tr><td className="px-4 py-2 font-semibold text-white">5-year true total</td><td className="px-4 py-2 font-semibold text-white">~$41,350</td><td className="px-4 py-2 font-semibold text-white">~$42,875</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: break-even in year three</h2>
          <p className="mt-3">
            With a $4,000 effective price premium ($40,000 vs. $36,000), the EV claws back ~$1,145
            a year in energy, ~$320 in maintenance, while conceding ~$300 in insurance — net
            ~$1,165 a year. Cumulative: year 1 down $2,835, year 2 down $1,670, year 3 down ~$505,
            year 4 ahead ~$660, ending five years ~$1,500 ahead despite conservative resale. Raise
            mileage to 20,000 a year and break-even pulls into year two; drop to 8,000 miles on
            public charging and the EV may never catch up. The mileage-and-charging-access
            interaction decides nearly everything.
          </p>
          <p className="mt-3">
            Sensitivity-test before committing: recompute with gas at $2.75 (slower payback) and
            $4.50 (payback a year sooner), with your utility&apos;s actual overnight rate, and
            with resale 10 points worse than assumed. If the EV wins all three scenarios, the
            decision is robust; if it wins only the rosy case, the gas car (or a hybrid middle
            path — see our{" "}
            <Link href="/hybrid-vs-electric-guide" className="text-amber-200 underline underline-offset-2">
              hybrid vs. electric guide
            </Link>
            ) is the safer money. Financing either? Start at{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Non-money factors that still count</h2>
          <p className="mt-3">
            Cost is not the whole ownership experience. Home-charged EVs eliminate gas-station
            stops and most maintenance visits — a convenience dividend busy households value
            highly. Instant torque, quiet cabins, and pre-conditioning (warm car, no idling) are
            genuine daily upgrades. Against that: road-trip charging adds 20–40 minutes per stop
            on long routes, apartment dwellers without charging face real friction, and cold
            climates cut winter range 20–30 percent. Test the lifestyle, not just the ledger —
            rent the EV for a weekend and run your actual commute, errands, and one road trip
            before deciding.
          </p>
          <p className="mt-3">
            Budget insurance before you fall in love: quote both finalists with your real profile
            at{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            , and fold the five-year totals into our{" "}
            <Link href="/total-cost-of-ownership-guide" className="text-amber-200 underline underline-offset-2">
              total cost of ownership framework
            </Link>
            . The right answer is personal — the method for finding it is universal.
          </p>
        </section>

        <section>
          <AdSlot format="display" slot="TODO-auto-mid" />
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Are electric cars cheaper than gas overall?</summary>
              <p className="mt-1">Often yes over 5 years for home-charging, average-mileage drivers — fuel and maintenance savings outweigh higher prices and insurance. Low-mileage or public-charging-only drivers may not break even.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">How much does home EV charging cost?</summary>
              <p className="mt-1">At $0.16/kWh and 3.3 mi/kWh, about 5¢/mile — roughly $730/year for 15,000 miles. Overnight time-of-use rates can nearly halve that; a 240V outlet or ~$500–$1,500 home charger install is the setup cost.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Do EVs cost more to insure?</summary>
              <p className="mt-1">Typically 10–25% more than comparable gas cars due to repair costs. Get VIN-specific quotes before purchase — the gap varies widely by model.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">How long do EV batteries last?</summary>
              <p className="mt-1">Most are warrantied 8 years/100,000 miles and data shows modest degradation (~10% over 100k+ miles for modern packs). Battery failure outside warranty is rare but expensive.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/car-maintenance-costs-guide" className="text-amber-200 underline underline-offset-2">
              maintenance costs
            </Link>
            {" "}and{" "}
            <Link href="/car-depreciation-guide" className="text-amber-200 underline underline-offset-2">
              depreciation
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Energy prices, incentives, and
            resale values vary by region and model. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <AdSlot format="multiplex" slot="TODO-auto-multiplex" />
    </div>
  );
}
