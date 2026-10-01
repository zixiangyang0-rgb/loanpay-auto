import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buying a Car Out of State: Taxes, Tags & Transport | LoanPay Auto",
  description:
    "Buy from another state safely: sales-tax rules, temp tags, remote inspections, shipping costs, and a $2,800-savings worked example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/buying-car-out-of-state-guide",
  },
};

const CHECKLIST = [
  "Confirm your home state's tax rule: most states credit tax paid elsewhere or tax you at registration.",
  "Get a remote pre-purchase inspection in the seller's city — never buy sight-unseen without one.",
  "Verify title, lien, and emissions/safety compliance for your state before money moves.",
  "Secure transit tags, insurance binding, and a bill of sale before driving or shipping.",
  "Compare door-to-door cost (price + transport + registration + time) against local deals.",
  "Budget registration deadlines (often 10–30 days) plus title, plate, and inspection fees.",
];

export default function OutOfStatePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Buy smart &middot; remote purchases
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Buying a Car Out of State
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The right car at the right price is often two states away. Interstate deals add tax,
          title, transport, and trust complications — all solvable with the sequence in this
          guide.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Interstate checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Inspection basics:{" "}
            <Link href="/used-car-buying-checklist" className="text-amber-200 underline underline-offset-2">
              used-car checklist
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Sales tax across state lines</h2>
          <p className="mt-3">
            The golden rule: you generally pay sales tax where you register the car, not where
            you buy it. Most states grant credit for legally paid tax in the purchase state, so a
            buyer from a 6-percent state who pays 4 percent at purchase owes roughly the 2-point
            difference at home registration. Dealers near borders handle this routinely via
            reciprocal paperwork; private sales usually collect no tax at all, leaving the full
            bill due at your DMV. A handful of states (notably California on most interstate
            purchases, with narrow exceptions) layer their own requirements — always confirm with
            your DMV before committing, never with the seller.
          </p>
          <p className="mt-3">
            Two edge cases bite buyers. First, &ldquo;no-sales-tax&rdquo; states (Oregon, New
            Hampshire, Montana, Delaware, Alaska-local): buying there saves nothing if your home
            state taxes the registration — the tax follows the plates. Second, Montana LLC
            schemes marketed to dodge tax on luxury cars: states aggressively audit these,
            with penalties dwarfing the avoided tax. Pay the lawful tax where you live; the
            exotic-car forums promising otherwise omit the audit chapters.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Remote verification: trust, then verify</h2>
          <p className="mt-3">
            Distance magnifies every used-car risk, so the verification stack must be stronger,
            not weaker. Run history reports and lien checks before travel or deposits. Hire a
            mobile inspection service or a local independent shop in the seller&apos;s city for a
            full PPI ($150–$300 including travel) — inspectors photograph underbody, codes, and
            paint depth, and a seller who refuses independent inspection has told you everything.
            Video-call walkarounds supplement but never replace the lift inspection; ask for cold
            starts, under-hood close-ups, and every panel in daylight.
          </p>
          <p className="mt-3">
            Money movement needs escrow discipline: never wire deposits to individuals on promise
            alone. For dealer purchases, use credit-card deposits (chargeback protection) and
            lender-direct funding. For private purchases, transact at the seller&apos;s bank where
            the lien (if any) can be verified and released on the spot, or use a licensed auto
            escrow service for high-value deals. Verify the seller&apos;s ID against the title,
            confirm no duplicate-title or bonded-title weirdness, and check your state&apos;s
            emissions and safety standards — California-emissions states can refuse registration
            of certain out-of-state configurations without costly retrofits.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Transport options table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Getting a 1,000-mile car home — typical costs and trade-offs.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Method</th>
                  <th className="px-4 py-3 font-semibold">Typical cost</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Fly in, drive home</td><td className="px-4 py-2">$200–$400 flight + fuel</td><td className="px-4 py-2">Cheapest; verify transit tags + insurance first</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Open carrier</td><td className="px-4 py-2">$700–$1,100</td><td className="px-4 py-2">Standard; 5–10 day window; photo condition</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Enclosed carrier</td><td className="px-4 py-2">$1,200–$1,800</td><td className="px-4 py-2">For valuable cars; weather + road protection</td></tr>
                <tr><td className="px-4 py-2">Dealer delivery / driveaway</td><td className="px-4 py-2">$500–$1,000</td><td className="px-4 py-2">Varies; confirm mileage + coverage terms</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: saving $2,800 from 900 miles away</h2>
          <p className="mt-3">
            Priya&apos;s local market prices a 2021 hybrid hatchback at $22,500; a same-spec car
            900 miles away lists at $19,200 from a franchised dealer with full records. Remote PPI
            ($229) passes with only $300 of upcoming maintenance flagged. She negotiates $18,900
            by email (see our{" "}
            <Link href="/new-car-negotiation-guide" className="text-amber-200 underline underline-offset-2">
              negotiation tactics
            </Link>
            ), books open-carrier shipping at $850 with photo documentation, and pays her
            home-state 6 percent tax ($1,134) at registration plus $250 in title and plate fees.
            Door-to-door: $18,900 + $850 + $229 + $1,134 + $250 = $21,363 — roughly $2,800 under
            the local equivalent after its own tax, with a documented inspection the local cars
            lacked.
          </p>
          <p className="mt-3">
            The deal works because every risk was priced and neutralized: PPI before deposit,
            dealer seller (recourse + reputation), carrier insurance verified, tax confirmed with
            the home DMV in advance. Had the PPI found frame repairs, the $229 would have been
            the cheapest exit in car buying. Financing across state lines works normally — start
            at{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>{" "}
            — and bind insurance before transit via{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Paperwork on arrival</h2>
          <p className="mt-3">
            Register promptly: most states allow 10–30 days from purchase or from establishing
            residency, with penalties for delay. Bring the signed title (or lienholder&apos;s
            transfer documents), bill of sale with VIN/mileage/price, out-of-state registration
            or transit permit, proof of insurance, ID, and proof of tax paid (if any) to claim
            the credit. Budget $200–$500 for title, plates, and inspection fees beyond sales tax.
            Some states require a VIN inspection or emissions test before issuing plates —
            schedule these in week one, not week four.
          </p>
          <p className="mt-3">
            New cars bought out of state add a wrinkle: factory warranties apply nationally, but
            courtesy perks (free loaners, dealer-specific programs) live with the selling dealer,
            and lemon-law jurisdiction follows complex purchase-vs.-registration rules (see our{" "}
            <Link href="/lemon-law-guide" className="text-amber-200 underline underline-offset-2">
              lemon law guide
            </Link>
            ). None of this blocks interstate deals — thousands close daily — but each item
            belongs on the pre-purchase confirmation list, verified with your DMV and insurer
            rather than assumed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do I pay sales tax in the buying state or my state?</h3>
              <p className="mt-1">Almost always your registration state, with credit for tax legally paid elsewhere. Confirm with your DMV before purchase — rules have state-specific exceptions.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How do I inspect a car in another state?</h3>
              <p className="mt-1">Hire a mobile inspector or local independent shop for a full PPI ($150–$300). Never buy sight-unseen; refuse any seller who blocks independent inspection.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How much does car shipping cost?</h3>
              <p className="mt-1">Roughly $700–$1,100 open carrier for 1,000 miles; $1,200–$1,800 enclosed. Flying in and driving home often costs under $400 all-in.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I register an out-of-state car with a lien?</h3>
              <p className="mt-1">Yes — lenders handle interstate titles routinely. Coordinate lienholder, seller, and your DMV so the title transfers directly without gaps.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/salvage-title-guide" className="text-amber-200 underline underline-offset-2">
              salvage titles
            </Link>
            {" "}and{" "}
            <Link href="/certified-pre-owned-worth-it" className="text-amber-200 underline underline-offset-2">
              CPO value
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial, tax, or legal advice. Tax and registration
            rules vary by state. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and confirm requirements with your DMV.
          </p>
        </section>
      </article>
    </div>
  );
}
