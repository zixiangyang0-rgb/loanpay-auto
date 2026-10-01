import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "Car Maintenance Costs Guide: Year-by-Year Budgets | LoanPay Auto",
  description:
    "What car maintenance really costs: year-by-year budgets from $500 basics to $1,200+ repair years, 30/60/90k services, tires, brakes, and batteries.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/car-maintenance-costs-guide",
  },
};

const CHECKLIST = [
  "Budget ~$600–$900/year for years 1–5, ~$1,000–$1,500/year after year 6 on mainstream cars.",
  "Follow the severe-service schedule if you do short trips, idling, dust, or towing.",
  "Price the 30/60/90k major services in advance — they run $400–$800 each at independent shops.",
  "Replace tires and brakes on wear, not on schedule; check tread and pads every oil change.",
  "Keep every receipt — documented maintenance measurably raises resale and warranty standing.",
  "Build a repair fund ($50–$100/month) so a $1,200 surprise never becomes credit-card debt.",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "How much should I budget for car maintenance yearly?",
    "answer": "Roughly $600–$900/year for years 1–5 and $1,000–$1,500/year after year 6 on mainstream cars; luxury models run 1.5–2×. A $100/month repair fund covers most profiles."
  },
  {
    "question": "What is the 30/60/90k service?",
    "answer": "Major scheduled services bundling fluids, filters, spark plugs, and inspections — typically $400–$800 at independent shops. Skipping them risks the costliest failures."
  },
  {
    "question": "Are dealer service departments worth the premium?",
    "answer": "For warranty work, complex diagnostics, and software updates — yes. For routine wear work, quality independents deliver equal results far cheaper. Split by job type."
  },
  {
    "question": "Do EVs cost less to maintain?",
    "answer": "Yes — roughly 30–40% less scheduled maintenance (no oil, fewer brakes). Tires wear faster and out-of-warranty battery failures are costly but rare; warranties cover 8yr/100k mi."
  }
];

export default function MaintenancePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Car Maintenance Costs Guide: Year-by-Year Budgets | LoanPay Auto" description="What car maintenance really costs: year-by-year budgets from $500 basics to $1,200+ repair years, 30/60/90k services, tires, brakes, and batteries." slug="car-maintenance-costs-guide" faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Ownership &middot; upkeep
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Car Maintenance Costs Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Maintenance is the most predictable part of car ownership — and the most neglected in
          budgets. Here are the real year-by-year numbers, the services that matter most, and how
          to keep a car reliable without overpaying the dealer.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Maintenance checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Total-cost context:{" "}
            <Link href="/total-cost-of-ownership-guide" className="text-amber-200 underline underline-offset-2">
              total cost of ownership
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Year-by-year: what upkeep really costs</h2>
          <p className="mt-3">
            Years 1–3 (often under factory warranty) average roughly $400–$700 a year for a
            mainstream car: synthetic oil changes ($60–$100 each, once or twice yearly), engine
            and cabin filters ($50–$120), tire rotations (often free with purchase), and a
            battery test. EVs run lighter still — tire rotations and cabin filters, roughly
            $200–$400 annually. Years 4–5 add the first real wear cycle: tires ($600–$1,000 a
            set), brakes ($300–$600 per axle), a 60,000-mile major service with transmission fluid
            and coolant ($400–$800), and the 12-volt battery ($200–$300). Annual averages climb to
            ~$800–$1,100.
          </p>
          <p className="mt-3">
            Years 6–10 are the repair era: suspension components, alternators, water pumps,
            wheel bearings, and air-conditioning work arrive stochastically at $400–$1,200 each,
            pushing averages to ~$1,000–$1,500 a year with high variance — one $1,800 year
            followed by a $500 year is normal, not a lemon. Luxury and European models run
            roughly 1.5–2× these figures across all years (parts pricing and labor complexity),
            while hybrids add little beyond eventual battery-fan servicing. The pattern is the
            point: budget the average monthly ($80–$125), and let surplus months fund the spike
            months.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The services that prevent the big bills</h2>
          <p className="mt-3">
            Oil discipline tops the list: modern synthetics tolerate 7,500–10,000-mile intervals
            under gentle highway use, but short-trip, dusty, or towing duty demands the severe
            schedule (often 5,000 miles) — sludge from stretched intervals kills engines worth
            $6,000+. Transmission fluid, increasingly marketed as &ldquo;lifetime,&rdquo; has a
            lifetime roughly equal to the warranty unless serviced; a $250 fluid exchange every
            50,000–60,000 miles prevents $4,000 rebuilds. Coolant, brake fluid, and power-steering
            fluid follow similar logic: cheap chemistry on schedule beats expensive metallurgy
            later.
          </p>
          <p className="mt-3">
            Tires and brakes deserve their own vigilance: check pressures monthly (under-
            inflation costs fuel and tire life), rotate every 5,000–7,500 miles, and replace at
            4/32&quot; for wet safety rather than the legal 2/32&quot; minimum. Timing belts
            (where fitted — many modern engines use chains) are the classic scheduled catastrophe:
            a $600–$1,000 belt job ignored past interval risks valve-to-piston contact totaling
            the engine. Know whether your engine uses belt or chain, and the interval if belted;
            it is the highest-leverage line in the owner&apos;s manual.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Common jobs price table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Typical independent-shop prices, mainstream sedan (dealers run 30–60% higher).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Job</th>
                  <th className="px-4 py-3 font-semibold">Typical cost</th>
                  <th className="px-4 py-3 font-semibold">Interval</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Synthetic oil + filter</td><td className="px-4 py-2">$60–$100</td><td className="px-4 py-2">5,000–10,000 mi</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Tire set (mainstream)</td><td className="px-4 py-2">$600–$1,000</td><td className="px-4 py-2">40,000–60,000 mi</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Brakes, per axle</td><td className="px-4 py-2">$300–$600</td><td className="px-4 py-2">30,000–70,000 mi</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">30/60/90k major service</td><td className="px-4 py-2">$400–$800</td><td className="px-4 py-2">Every 30,000 mi</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">12V battery</td><td className="px-4 py-2">$200–$300</td><td className="px-4 py-2">3–5 years</td></tr>
                <tr><td className="px-4 py-2">Timing belt kit</td><td className="px-4 py-2">$600–$1,000</td><td className="px-4 py-2">60,000–105,000 mi (if fitted)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: five years for $4,600</h2>
          <p className="mt-3">
            Dana buys a 3-year-old mainstream sedan at 36,000 miles and holds it to 96,000 over
            five years. Her ledger: ten oil changes ($850), one tire set ($800), front brakes
            once and rears once ($900), 60k and 90k major services ($1,200), one battery ($240),
            filters and wipers ($310), and one unscheduled repair — a wheel bearing at $380.
            Total: ~$4,680 over five years, or $78 a month — squarely in the band, with no single
            bill over $800 because scheduled work preempted cascading failures.
          </p>
          <p className="mt-3">
            The counterfactual: skipping the $500 transmission service and stretching oil to
            15,000 miles &ldquo;saves&rdquo; ~$700 over three years, then risks a $4,000
            transmission or a sludged engine — negative expected value with catastrophic tails.
            Deferred maintenance is the most expensive maintenance. Protect the plan with a
            standing $100 monthly transfer to a repair fund; invest the surplus years, draw the
            spike years, and never finance a repair at credit-card rates. Considering a warranty
            instead? See our{" "}
            <Link href="/extended-warranty-pros-cons" className="text-amber-200 underline underline-offset-2">
              warranty analysis
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Dealer vs. independent vs. DIY</h2>
          <p className="mt-3">
            Dealers charge 30–60 percent more per job but provide factory parts, model-specific
            expertise, software updates, and warranty-safe documentation — worth it for complex
            diagnostics, recalls, and warranty-period work. Quality independent shops match
            dealer competence on routine and wear work at far lower prices; find them via
            certification (ASE), specialization in your brand, and written estimates as policy.
            DIY suits filters, wipers, batteries, and (with care) brakes and oil — saving
            50–70 percent per job — but requires tools, torque discipline, and honest skill
            assessment. Whatever the venue, authorize nothing without a written estimate, approve
            additional work by phone only with prices stated, and keep every invoice.
          </p>
          <p className="mt-3">
            Insurance and financing frame the maintenance picture: full coverage protects the
            asset you are maintaining (quote at{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            ), and sane loan terms keep you from paying interest on a car whose upkeep you also
            fund (see{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            ). Maintain the car, protect the car, finance the car — the three budgets of sound
            ownership.
          </p>
        </section>

        <section>
          <AdSlot format="display" slot="TODO-auto-mid" />
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">How much should I budget for car maintenance yearly?</summary>
              <p className="mt-1">Roughly $600–$900/year for years 1–5 and $1,000–$1,500/year after year 6 on mainstream cars; luxury models run 1.5–2×. A $100/month repair fund covers most profiles.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">What is the 30/60/90k service?</summary>
              <p className="mt-1">Major scheduled services bundling fluids, filters, spark plugs, and inspections — typically $400–$800 at independent shops. Skipping them risks the costliest failures.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Are dealer service departments worth the premium?</summary>
              <p className="mt-1">For warranty work, complex diagnostics, and software updates — yes. For routine wear work, quality independents deliver equal results far cheaper. Split by job type.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Do EVs cost less to maintain?</summary>
              <p className="mt-1">Yes — roughly 30–40% less scheduled maintenance (no oil, fewer brakes). Tires wear faster and out-of-warranty battery failures are costly but rare; warranties cover 8yr/100k mi.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/car-depreciation-guide" className="text-amber-200 underline underline-offset-2">
              depreciation
            </Link>
            {" "}and{" "}
            <Link href="/used-car-buying-checklist" className="text-amber-200 underline underline-offset-2">
              used-car checklist
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Costs vary by model, region, and
            driving conditions. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and follow your owner&apos;s manual for service intervals.
          </p>
        </section>
      </article>
      <AdSlot format="multiplex" slot="TODO-auto-multiplex" />
    </div>
  );
}
