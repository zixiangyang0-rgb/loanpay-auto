import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hybrid vs. Electric Guide: Which Saves You More? | LoanPay Auto",
  description:
    "Hybrid vs. full electric compared: price gaps, fuel math, charging needs, maintenance, and the driving patterns that decide — with a 5-year example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/hybrid-vs-electric-guide",
  },
};

const CHECKLIST = [
  "Map your driving: daily miles, home-charging access, winter severity, and road-trip frequency.",
  "Price the actual gap — hybrids often run $3,000–$6,000 under comparable EVs in 2026.",
  "Compute fuel savings at your miles: hybrids halve gas use; EVs nearly eliminate fuel cost (if home-charged).",
  "Weigh simplicity: hybrids need no charging habits; EVs need charging but skip oil and most brake work.",
  "Check battery warranties on both — hybrid batteries and EV packs carry different terms.",
  "Test both back-to-back, including your commute and a cold-morning start if relevant.",
];

export default function HybridVsEvPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Go electric &middot; powertrain choice
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Hybrid vs. Electric Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Torn between a hybrid&apos;s no-compromise simplicity and an EV&apos;s maximum savings?
          The right answer lives in your garage, your commute, and your electrical panel — not in
          national averages. Here is how to find it.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Decision checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Full EV math:{" "}
            <Link href="/electric-vs-gas-cost-comparison" className="text-amber-200 underline underline-offset-2">
              electric vs. gas comparison
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The two technologies, plainly described</h2>
          <p className="mt-3">
            A conventional hybrid pairs a gasoline engine with a small battery and motor that
            recapture braking energy and assist at low speeds — no plugging in, roughly double
            the city economy of its gas sibling (a 32-mpg crossover becomes ~40 mpg combined, with
            city figures higher still). A plug-in hybrid (PHEV) adds a bigger battery and a
            charge port for 25–45 miles of electric range before behaving like a regular hybrid.
            A battery-electric vehicle (EV) skips combustion entirely: a large pack, 250–350 miles
            of range in mainstream 2026 models, and all energy from the grid.
          </p>
          <p className="mt-3">
            The practical translation: hybrids change nothing about your habits — fuel anywhere,
            drive anywhere, service almost anywhere — while cutting fuel bills roughly in half
            versus gas. EVs change refueling (home charging replaces gas stations), cut energy
            costs by two-thirds or more for home chargers, and remove most scheduled maintenance
            — but demand charging access and trip planning. PHEVs promise both and deliver it
            only to drivers who actually plug in nightly; studies show unplugged PHEVs save
            little over regular hybrids while carrying higher prices and complexity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Cost anatomy: where each wins</h2>
          <p className="mt-3">
            Purchase price currently favors hybrids: comparable 2026 hybrid crossovers commonly
            sticker $3,000–$6,000 below equivalent EVs (federal credits having expired for both —
            see our{" "}
            <Link href="/ev-tax-credit-2026-guide" className="text-amber-200 underline underline-offset-2">
              EV credit guide
            </Link>
            ), and several states rebate hybrids modestly too. Fuel favors EVs for home chargers
            (~$700/year at 15,000 miles vs. ~$1,300 for a 40-mpg hybrid at $3.50 gas), while the
            gap collapses for public-charging-only EV drivers. Maintenance slightly favors EVs
            (no oil, fewer brakes), though hybrids share regenerative braking and need only
            modest extra care for their smaller batteries.
          </p>
          <p className="mt-3">
            Insurance runs close, with a small EV premium (heavier cars, pricier repairs) that
            rarely exceeds a few hundred dollars a year over the hybrid equivalent — quote both
            VINs. Depreciation is the swing factor: hybrids currently hold value superbly (strong
            demand, no range anxiety in the used market), while EVs depreciate faster but are
            stabilizing; a hybrid&apos;s resale edge can outweigh an EV&apos;s running-cost edge
            for short holding periods. Five-year totals therefore hinge on miles driven and years
            kept — high miles and long holds favor EVs, modest miles and quick turnover favor
            hybrids.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Head-to-head table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Comparable 2026 hybrid vs. EV crossovers, 15,000 miles/year.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Hybrid</th>
                  <th className="px-4 py-3 font-semibold">Electric</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Typical price</td><td className="px-4 py-2">~$35,000</td><td className="px-4 py-2">~$40,000 (less state rebates)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Annual energy (15k mi)</td><td className="px-4 py-2">~$1,300 gas</td><td className="px-4 py-2">~$730 home charging</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Charging / fueling</td><td className="px-4 py-2">Gas stations, 5 min</td><td className="px-4 py-2">Home overnight; DC trips 20–40 min</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Maintenance edge</td><td className="px-4 py-2">Low; familiar to all shops</td><td className="px-4 py-2">Lower; but costlier tires, niche repairs</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">5-yr resale (est.)</td><td className="px-4 py-2">~60–65%</td><td className="px-4 py-2">~45–55%</td></tr>
                <tr><td className="px-4 py-2">Best for</td><td className="px-4 py-2">No home charging, road-trippers</td><td className="px-4 py-2">Home charging, high miles, commuters</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: two commuters, opposite answers</h2>
          <p className="mt-3">
            Maya drives 60 miles daily, owns a garage, and her utility offers $0.10/kWh overnight
            rates. Her EV math: $40,000 minus a $2,000 state rebate = $38,000 effective; energy
            ~$590/year; five-year running edge over the hybrid ~$3,500; resale conservatively
            $4,000 worse. Net: roughly break-even to slightly ahead — plus zero gas-station stops
            for five years. High certainty, daily convenience: EV.
          </p>
          <p className="mt-3">
            Tom drives 9,000 miles a year, parks in an apartment lot with no charging, and takes
            monthly 400-mile family trips. His EV would charge mostly at $0.45/kWh public rates
            (~$1,850/year — worse than the hybrid&apos;s ~$790), surrender road-trip convenience,
            and still cost $5,000 more upfront. The hybrid saves him ~$1,000 a year in fuel over
            his old gas car with zero lifestyle change. Same two cars, opposite correct answers —
            decided by garage, miles, and trips. Finance either path with{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Reliability and battery notes</h2>
          <p className="mt-3">
            Conventional hybrids are among the most reliable vehicles sold — two decades of
            refinement, mature nickel and lithium packs with 8–10-year warranties, and failure
            rates so low that taxi fleets run them past 300,000 miles. EVs match them on
            drivetrain simplicity but add newer variables: battery thermal management, onboard
            chargers, and software-heavy architectures whose bugs surface as recalls rather than
            breakdowns. Both typically out-repair gas equivalents, but budget tires on either
            electrified car (instant torque and weight wear rubber faster).
          </p>
          <p className="mt-3">
            Cold climates deserve a paragraph: hybrids lose some economy but start and heat
            reliably; EVs lose 20–30 percent of winter range and charge slower in the cold —
            manageable with home charging and a heat pump, painful without. Roadside coverage and
            insurance should be quoted for the specific finalists at{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            , then folded into a{" "}
            <Link href="/total-cost-of-ownership-guide" className="text-amber-200 underline underline-offset-2">
              total-ownership comparison
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Is a hybrid or EV cheaper to own?</h3>
              <p className="mt-1">High-mileage home-chargers usually save most with EVs; moderate-mileage drivers without home charging usually save most with hybrids. Run your miles and energy prices — averages decide nothing.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do plug-in hybrids make sense?</h3>
              <p className="mt-1">Only if you plug in nightly and your daily driving fits the electric range. Unplugged PHEVs cost more than regular hybrids while saving little — honest charging habits decide.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How long do hybrid and EV batteries last?</h3>
              <p className="mt-1">Both typically carry 8–10-year warranties; real-world data shows most outlast the car. Replacement is rare but expensive, so verify warranty transfer on used purchases.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I road-trip an EV easily?</h3>
              <p className="mt-1">Yes on major corridors with 20–40-minute fast-charge stops every 200+ miles; hybrids remain simpler for remote routes, towing, and minimal planning. Match the car to your actual trips.</p>
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
            <Link href="/buy-vs-lease-guide" className="text-amber-200 underline underline-offset-2">
              buy vs. lease
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Prices, incentives, and energy rates
            vary by state and utility. Read our full{" "}
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
