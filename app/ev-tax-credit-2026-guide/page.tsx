import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV Tax Credit 2026 Guide: What Remains After Expiry | LoanPay Auto",
  description:
    "Federal EV credits ended Sept. 30, 2025. What 2026 buyers need to know: expired $7,500/$4,000 rules, state incentives, used-EV pricing, and lease math.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/ev-tax-credit-2026-guide",
  },
};

const CHECKLIST = [
  "Know the headline: federal new ($7,500) and used ($4,000) clean-vehicle credits ended for vehicles acquired after Sept. 30, 2025.",
  "If you bought before the deadline, confirm dealer registration and seller reports so your claim survives.",
  "Shop state and utility incentives — they are the main 2026 savings lever now.",
  "Price used EVs against their post-credit history; expired credits shifted the whole value curve.",
  "Compare lease deals carefully: expired commercial-credit pass-throughs changed lease pricing.",
  "Track legislation — credit policy has reversed before and could change again.",
];

export default function EvCreditPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Go electric &middot; 2026 tax reality
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          EV Tax Credit 2026 Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The federal EV credit era ended September 30, 2025 — a fact many 2026 shoppers have not
          absorbed. This guide explains what expired, what the old rules were (so you can decode
          used listings and old advice), and where the real 2026 savings now live.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">2026 credit checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            EV running costs:{" "}
            <Link href="/electric-vs-gas-cost-comparison" className="text-amber-200 underline underline-offset-2">
              electric vs. gas comparison
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What ended on September 30, 2025</h2>
          <p className="mt-3">
            Under the 2025 reconciliation law (Public Law 119-21, the Working Families Tax Cuts
            legislation), the three federal clean-vehicle credits — the new-vehicle credit worth
            up to $7,500 (Section 30D), the previously-owned-vehicle credit worth up to $4,000
            (Section 25E), and the commercial credit (Section 45W) — ceased for vehicles acquired
            after September 30, 2025. The IRS confirms: only buyers who acquired their vehicle on
            or before that date (demonstrated by a binding written contract plus payment, with
            possession counting as placed-in-service) remain eligible to claim. Vehicles acquired
            later get no federal credit regardless of model, battery, or assembly location.
          </p>
          <p className="mt-3">
            This matters because the internet is full of evergreen &ldquo;2026 EV credit&rdquo;
            articles describing live programs. Treat any page that does not mention the September
            2025 sunset as stale. Dealer advertising referencing credits on newly acquired 2026
            inventory should be questioned in writing. And if a salesperson suggests the credit
            &ldquo;comes back at tax time,&rdquo; ask them to cite the current statute — the
            credit sections as amended no longer authorize post-September-2025 acquisitions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The old rules, decoded (for used buyers and old claims)</h2>
          <p className="mt-3">
            Understanding the expired regime still pays: it explains used-EV price history and
            protects buyers who acquired before the deadline. The new-vehicle credit offered up
            to $7,500 in two halves — $3,750 for critical-mineral sourcing and $3,750 for battery
            components — with final assembly required in North America, MSRP caps of $80,000 for
            vans, SUVs, and pickups ($55,000 for other vehicles), and buyer income caps based on
            the lesser of current- or prior-year modified AGI: $300,000 joint, $225,000 head of
            household, $150,000 single. From 2024, buyers could transfer the credit to a
            registered dealer for point-of-sale savings.
          </p>
          <p className="mt-3">
            The used-vehicle credit paid 30 percent of the sale price up to $4,000, for cars
            priced $25,000 or less, at least two model years old, sold by a dealer — with lower
            income caps ($150,000 joint, $75,000 single). If you acquired a qualifying vehicle on
            or before September 30, 2025, preserve everything: the dealer&apos;s seller report,
            your binding contract and payment proof, and the VIN-level qualification record.
            File with the credit forms for the correct tax year and confirm the dealer completed
            IRS registration — unregistered seller reports invalidate claims.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Then vs. now table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Federal clean-vehicle credits: the expired regime vs. 2026 reality.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Program</th>
                  <th className="px-4 py-3 font-semibold">Before Oct 2025</th>
                  <th className="px-4 py-3 font-semibold">2026 status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">New clean vehicle (30D)</td><td className="px-4 py-2">Up to $7,500, income + MSRP caps</td><td className="px-4 py-2">Ended for acquisitions after 9/30/2025</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Used clean vehicle (25E)</td><td className="px-4 py-2">30% up to $4,000, ≤$25,000 price</td><td className="px-4 py-2">Ended for acquisitions after 9/30/2025</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Commercial (45W) + lease pass-through</td><td className="px-4 py-2">Up to $7,500; subsidized many leases</td><td className="px-4 py-2">Ended; lease pricing reset higher</td></tr>
                <tr><td className="px-4 py-2">State + utility incentives</td><td className="px-4 py-2">Stacked on top of federal</td><td className="px-4 py-2">Now the primary savings lever</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: pricing a 2026 EV honestly</h2>
          <p className="mt-3">
            Consider a $42,000 electric crossover bought in March 2026. No federal credit applies
            — the $7,500 that would have cut a 2024 purchase to $34,500 is gone. The buyer&apos;s
            state offers a $2,000 rebate for EVs under $55,000 MSRP plus a $500 utility
            charger credit, bringing the effective price to $39,500 before dealer discounts.
            Against a comparable $36,000 gas SUV, the EV carries a ~$3,500 effective premium
            (less if the dealer discounts slow-moving EV inventory, which 2026 data shows is
            common — always solicit competing bids per our{" "}
            <Link href="/new-car-negotiation-guide" className="text-amber-200 underline underline-offset-2">
              negotiation guide
            </Link>
            ).
          </p>
          <p className="mt-3">
            The premium then amortizes through running costs: at 12,000 miles a year, home
            charging at $0.16/kWh (~$550/year) versus gas at $3.50/gallon in a 28-mpg SUV
            (~$1,500/year) saves ~$950 annually, plus ~$300–$500 a year in reduced maintenance
            (no oil, fewer brakes). Break-even lands around year 2–3 before resale differences —
            see the full math in our{" "}
            <Link href="/electric-vs-gas-cost-comparison" className="text-amber-200 underline underline-offset-2">
              electric vs. gas comparison
            </Link>
            . Financing context at{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Where 2026 savings actually live</h2>
          <p className="mt-3">
            First, state programs: over a dozen states still offer purchase rebates, tax credits,
            or HOV-lane access for qualifying EVs and plug-in hybrids, with amounts from $500 to
            several thousand dollars and frequent income or MSRP screens — check your state energy
            office, not a national blog, for current figures. Second, utility incentives: home
            charger rebates, time-of-use EV rates that halve overnight charging costs, and
            occasional used-EV bonuses. Third, dealer discounts: with the federal credit gone and
            EV supply ample, transaction prices on many 2026 EVs sit thousands under MSRP —
            negotiated discounts now do the work credits once did.
          </p>
          <p className="mt-3">
            Fourth, the used market: off-lease EVs whose original prices reflected credit-era
            residuals now trade at steep discounts, making 2–3-year-old electrics among the
            strongest value plays in the market — verify battery health reports and remaining
            battery warranty (usually 8 years/100,000 miles) before buying. Quote insurance early
            via{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            , since EV premiums run above comparable gas cars.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Is there a federal EV tax credit in 2026?</h3>
              <p className="mt-1">No — the new ($7,500), used ($4,000), and commercial clean-vehicle credits all ended for vehicles acquired after Sept. 30, 2025. Only pre-deadline acquisitions remain claimable.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What were the old EV credit income caps?</h3>
              <p className="mt-1">For the expired new-vehicle credit: $300,000 joint, $225,000 head of household, $150,000 single (lesser of purchase or prior year). They matter now mainly for pre-deadline claims.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do leased EVs still get credit discounts in 2026?</h3>
              <p className="mt-1">The commercial-credit pass-through that subsidized many EV leases also ended. Compare 2026 lease payments against financing — the old lease advantage has largely reset.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What incentives can 2026 EV buyers still get?</h3>
              <p className="mt-1">State rebates/credits, utility charger and rate incentives, and dealer discounts on ample EV inventory. Check your state energy office for current amounts and screens.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/hybrid-vs-electric-guide" className="text-amber-200 underline underline-offset-2">
              hybrid vs. electric
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
            This is general education, not tax or financial advice. Credit statutes and state
            programs change — verify current law with the IRS or a tax professional. Read our
            full{" "}
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
