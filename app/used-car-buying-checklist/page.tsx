import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Used Car Buying Checklist: 40-Point Inspection Flow | LoanPay Auto",
  description:
    "Buy a used car with confidence: history reports, test-drive tests, pre-purchase inspection, title checks, pricing, and a $18,000 worked example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/used-car-buying-checklist",
  },
};

const CHECKLIST = [
  "Set an out-the-door budget including tax, registration, insurance change, and a $1,000 repair reserve.",
  "Pull history reports and verify VIN matches on dash, door jamb, title, and reports.",
  "Test drive 20+ minutes: cold start, highway, braking, full-lock turns, and every electronic feature.",
  "Book an independent pre-purchase inspection (PPI) — $150–$250 that saves thousands.",
  "Check title status: clean, lien, salvage, rebuilt, flood, or lemon-law buyback brands.",
  "Compare asking price against at least two pricing sources for the same trim, mileage, and region.",
];

export default function UsedCarChecklistPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Buy smart &middot; inspections
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Used Car Buying Checklist
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A used car hides its history in plain sight — for buyers who know where to look. Follow
          this six-stage flow from budget to paperwork: history screening, physical inspection,
          test drive, professional inspection, price analysis, and title verification.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Master checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Considering certified instead? Compare with{" "}
            <Link href="/certified-pre-owned-worth-it" className="text-amber-200 underline underline-offset-2">
              is certified pre-owned worth it
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Stage 1–2: Budget, then screen the history</h2>
          <p className="mt-3">
            Start with money, not metal. A sensible used-car budget caps the out-the-door total at
            a level whose loan payment fits the 15-percent rule (all car costs under 15 percent of
            take-home pay) and reserves $1,000 for the surprises nearly every used car brings —
            tires, brakes, or a battery in the first year. Get preapproved before shopping so a
            dealer cannot inflate your rate; our{" "}
            <Link href="/auto-loan-preapproval-guide" className="text-amber-200 underline underline-offset-2">
              preapproval guide
            </Link>{" "}
            walks through the rate-shopping window that counts multiple inquiries as one.
          </p>
          <p className="mt-3">
            Screening begins online. Run the VIN through at least one paid history report and the
            free federal resources: the National Insurance Crime Bureau VIN check (theft and
            total-loss records) and NHTSA&apos;s recall lookup (open recalls, which a dealer
            should fix free). Reject cars with salvage, flood, fire, or lemon-law brands unless
            you specifically set out to buy a project — and read our{" "}
            <Link href="/salvage-title-guide" className="text-amber-200 underline underline-offset-2">
              salvage title guide
            </Link>{" "}
            first if you do. Flag odometer rollbacks (mileage that drops between records),
            title-washing patterns (rapid re-titling across states), and long gaps in registration
            that suggest sitting or unreported damage. A $25 report that kills a bad candidate is
            the cheapest money in car buying.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Stage 3: The 20-minute inspection you can do</h2>
          <p className="mt-3">
            Arrive early and insist on a cold start — a warm engine hides starting and idle
            problems. Walk every panel in daylight: mismatched paint texture, uneven gaps, and
            overspray on trim signal accident repair. Check tire wear patterns (inner-edge wear
            means alignment or suspension issues), look under the oil cap for milky residue
            (possible head-gasket failure), and sniff for coolant, burning oil, or mold. Inside,
            operate everything: windows, locks, air conditioning on max, heat, infotainment,
            backup camera, and all lights. Flood cars betray themselves through silt under seats,
            fogged gauges, and musty trunk wells — pull the spare-tire cover and look.
          </p>
          <p className="mt-3">
            The test drive should last at least 20 minutes across city, highway, and a parking
            lot. Listen for grinding brakes, humming wheel bearings that change pitch with speed,
            and clunks over bumps. On a straight, empty stretch, briefly relax steering input to
            check for pulling; brake firmly from 40 mph to feel pulsing rotors or veering. Do
            full-lock circles both directions to expose clicking CV joints. Finally, park on clean
            pavement, idle for five minutes with the air on, then check underneath for drips and
            watch the temperature gauge. None of this replaces a professional inspection, but cars
            that fail your screening never cost you a PPI fee.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Red-flag reference table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Findings ranked by severity — walk away from the top rows.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Finding</th>
                  <th className="px-4 py-3 font-semibold">Likely meaning</th>
                  <th className="px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Salvage / flood brand on title</td><td className="px-4 py-2">Total-loss history, hidden damage</td><td className="px-4 py-2">Walk away (unless project-priced)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Milky oil cap or white exhaust smoke</td><td className="px-4 py-2">Head-gasket or engine failure</td><td className="px-4 py-2">Walk away</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Transmission slipping or harsh shifts</td><td className="px-4 py-2">$3,000–$6,000 rebuild looming</td><td className="px-4 py-2">Walk away or discount fully</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Frame / structural repair notes</td><td className="px-4 py-2">Major collision, alignment risk</td><td className="px-4 py-2">PPI must verify; usually walk</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Worn brakes / tires</td><td className="px-4 py-2">$500–$1,200 routine wear</td><td className="px-4 py-2">Negotiate the replacement cost off</td></tr>
                <tr><td className="px-4 py-2">Minor scratches, one-key-only</td><td className="px-4 py-2">Cosmetic / $200 key</td><td className="px-4 py-2">Negotiate lightly; budget fixes</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $18,000 sedan that cost $15,900</h2>
          <p className="mt-3">
            Daniel finds a 2021 midsize sedan listed at $18,000 with 52,000 miles. Pricing tools
            show comparable trims transacting at $16,500 to $17,500 nearby, so the ask is already
            warm. History is clean — one owner, regular dealer service records, no accidents. His
            test drive reveals pulsing brakes and two tires near the wear bars. The independent
            PPI ($189) confirms: brakes and tires needed ($950), plus a seeping valve-cover
            gasket ($350), but compression, transmission, frame, and electronics all check out.
          </p>
          <p className="mt-3">
            Armed with the written PPI estimate, Daniel offers $15,900 — market-correct price
            minus the $1,300 in near-term work, rounded. The dealer counters $16,400 with new
            wiper blades and a full tank thrown in; Daniel accepts. Total first-year outlay:
            $16,400 plus tax and the $1,300 in repairs he budgeted from the start, versus $18,000
            plus surprises for an uninspected buyer. The process took one extra day and $189 — the
            highest-return spending in the entire purchase. Financing it? Compare offers with our{" "}
            <Link href="/dealer-financing-vs-bank" className="text-amber-200 underline underline-offset-2">
              dealer vs. bank guide
            </Link>{" "}
            or{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Stage 5–6: Price it and paper it correctly</h2>
          <p className="mt-3">
            Price analysis means comparing identical trim, mileage band (within ~10,000 miles),
            and region — a sunroof-and-leather trim is not comparable to a base car $2,000
            cheaper. Private-party cars should run 10 to 20 percent under dealer retail for the
            same car, reflecting the absence of warranty, reconditioning, and recourse. Present
            your number as out-the-door with supporting listings, then negotiate needed repairs
            as deductions backed by the PPI estimate rather than vague &ldquo;it needs
            work&rdquo; claims.
          </p>
          <p className="mt-3">
            Paperwork closes the deal safely. Verify the seller&apos;s ID matches the title name,
            confirm no active lien (or arrange payoff through the lienholder directly), and
            complete a bill of sale stating VIN, mileage, price, and as-is terms. In most states
            you must transfer title and register within 10 to 30 days — budget $200 to $500 for
            taxes and fees beyond the price. Notify your insurer before driving away; a coverage
            gap of even one day can be catastrophic. Price that coverage with{" "}
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
              <h3 className="font-semibold text-white">How much does a pre-purchase inspection cost?</h3>
              <p className="mt-1">Typically $150–$250 at an independent shop for a lift inspection, scan, and written report. It is the highest-value spending in used-car buying.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What mileage is too high for a used car?</h3>
              <p className="mt-1">Condition and maintenance history matter more than the odometer. A documented 120,000-mile car with new timing components can outlast a neglected 70,000-mile one — budget per-mile wear either way.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should I buy a used car with an accident history?</h3>
              <p className="mt-1">Minor cosmetic claims with professional repair can be fine at a 10–15% discount. Walk away from frame damage, airbag deployments, or flood records unless the price reflects project-car risk.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Dealer or private party for a used car?</h3>
              <p className="mt-1">Dealers charge more but offer reconditioning, possible warranties, and financing convenience. Private sellers run cheaper but sell strictly as-is — the PPI matters even more there.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/car-maintenance-costs-guide" className="text-amber-200 underline underline-offset-2">
              car maintenance costs
            </Link>
            ,{" "}
            <Link href="/lemon-law-guide" className="text-amber-200 underline underline-offset-2">
              lemon law basics
            </Link>
            , and{" "}
            <Link href="/selling-car-private-vs-dealer" className="text-amber-200 underline underline-offset-2">
              selling private vs. dealer
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Inspection findings and prices vary
            by vehicle and market. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and have any used car inspected by a qualified independent mechanic before purchase.
          </p>
        </section>
      </article>
    </div>
  );
}
