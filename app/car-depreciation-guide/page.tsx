import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "Car Depreciation Guide: Curves, Rates & How to Slow It | LoanPay Auto",
  description:
    "How fast cars lose value: year-by-year depreciation curves, which factors accelerate it, and five strategies that protect resale — with a $35,000 example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/car-depreciation-guide",
  },
};

const CHECKLIST = [
  "Expect ~20% value loss in year one and ~40–50% by year four on a typical new car.",
  "Choose slow-depreciating segments (hybrids, compact SUVs, trucks) and mainstream colors.",
  "Keep annual mileage near 12,000 — excess miles accelerate depreciation measurably.",
  "Maintain full service records and fix paint and glass promptly; condition grades move prices.",
  "Avoid heavy options and modifications that narrow the resale audience.",
  "Time sales for spring demand peaks and before major redesigns or mileage thresholds.",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "How much does a new car depreciate in the first year?",
    "answer": "Roughly 20% on average — the steepest single year. Luxury and large sedans can exceed 25%; the strongest hybrids and trucks may lose only 12–15%."
  },
  {
    "question": "Do electric cars depreciate faster?",
    "answer": "Historically yes, due to tech change and price cuts — though tax-credit expirations and battery improvements keep shifting the pattern. See our EV cost comparison for 2026 context."
  },
  {
    "question": "Does mileage or age affect value more?",
    "answer": "Both, but mileage dominates early (per-mile deductions plus threshold cliffs like 100k), while age dominates late as condition and tech obsolescence take over."
  },
  {
    "question": "When is the best time to sell to avoid depreciation?",
    "answer": "Before major thresholds: under 100,000 miles, before a redesign lands, ahead of warranty expiry, and during spring demand peaks — with full records in hand."
  }
];

export default function DepreciationPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Car Depreciation Guide: Curves, Rates & How to Slow It | LoanPay Auto" description="How fast cars lose value: year-by-year depreciation curves, which factors accelerate it, and five strategies that protect resale — with a $35,000 example." slug="car-depreciation-guide" faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Ownership &middot; resale value
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Car Depreciation Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Depreciation is the largest cost of owning a nearly-new car — bigger than fuel,
          insurance, or repairs. Understand the curve, what bends it, and how to keep thousands
          more of your car&apos;s value when you sell.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Depreciation checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Depreciation feeds directly into{" "}
            <Link href="/total-cost-of-ownership-guide" className="text-amber-200 underline underline-offset-2">
              total cost of ownership
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The curve: what a new car loses and when</h2>
          <p className="mt-3">
            The classic pattern: a new car loses roughly 20 percent of its value in the first
            year (the drive-off-the-lot effect, as it becomes &ldquo;used&rdquo; instantly), then
            about 12–15 percent a year for years two through four, reaching roughly 40–50 percent
            total loss by year four or five. After that the curve flattens — years six through ten
            shed perhaps 6–8 percent annually — which is why long ownership is the great
            depreciation arbitrage: the cheapest miles of a car&apos;s life are the late ones.
            Luxury flagships and large sedans fall fastest (often 50–60 percent in five years),
            while compact pickups, hybrids, and sporty halo models routinely hold 55–65 percent.
          </p>
          <p className="mt-3">
            Two subtleties matter. First, percentages apply to transaction price, not MSRP — a car
            bought at a $4,000 discount depreciates from what you paid, softening the apparent
            curve. Second, inflation and supply shocks move the whole curve: the 2021–2022 used
            shortage briefly made one-year-old cars appreciate, an anomaly that has since
            normalized. Plan on the historical curve, treat any market spike as a selling
            opportunity rather than a planning assumption, and remember that financing does not
            change depreciation — it only determines whether you owe more or less than the falling
            value (see our{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down loan guide
            </Link>
            ).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Seven factors that bend the curve</h2>
          <p className="mt-3">
            Mileage is the master variable: appraisals deduct roughly $0.10–$0.25 per mile beyond
            the ~12,000-a-year norm, and crossing 100,000 miles triggers a psychological cliff
            that costs far more than the miles themselves justify — selling at 95,000 beats
            selling at 105,000 by far more than 10,000 miles&apos; worth. Condition grading
            (clean, average, rough) moves offers 10–20 percent; service records, matching tires,
            and unblemished paint push grades up. Color matters at the margins: white, black,
            silver, and gray resell easiest, while niche hues narrow the buyer pool and discount
            accordingly.
          </p>
          <p className="mt-3">
            Segment and powertrain trends reshape values over time: fuel-price spikes punish
            thirsty trucks and reward hybrids within months. Accident history typically discounts
            10–25 percent even after perfect repair — another reason to drive carefully and
            document everything. Oversupply kills values: ex-rental fleet models, outgoing
            generations facing redesigns, and brands with heavy incentives all sag faster than
            scarcity suggests. Finally, geography counts — convertibles command premiums in
            Florida and discounts in Minnesota; all-wheel drive reverses the pattern.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Five-year value table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Illustrative retained value on a $35,000 purchase by segment.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Age</th>
                  <th className="px-4 py-3 font-semibold">Typical car</th>
                  <th className="px-4 py-3 font-semibold">Slow depreciator</th>
                  <th className="px-4 py-3 font-semibold">Fast depreciator</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">1 year</td><td className="px-4 py-2">$28,000 (80%)</td><td className="px-4 py-2">$29,750 (85%)</td><td className="px-4 py-2">$26,250 (75%)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">3 years</td><td className="px-4 py-2">$21,000 (60%)</td><td className="px-4 py-2">$24,500 (70%)</td><td className="px-4 py-2">$17,500 (50%)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">5 years</td><td className="px-4 py-2">$16,800 (48%)</td><td className="px-4 py-2">$21,000 (60%)</td><td className="px-4 py-2">$14,000 (40%)</td></tr>
                <tr><td className="px-4 py-2">8 years</td><td className="px-4 py-2">$11,900 (34%)</td><td className="px-4 py-2">$15,400 (44%)</td><td className="px-4 py-2">$8,750 (25%)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: choosing the $7,000 difference</h2>
          <p className="mt-3">
            Two buyers each spend $35,000. Noor buys a hybrid compact SUV with top resale
            rankings; it retains ~62 percent at five years ($21,700). Chris buys a loaded
            large sedan from a heavy-incentive brand; it retains ~42 percent ($14,700). Same
            purchase price, $7,000 of sale-day difference — roughly $117 a month of hidden cost
            for choosing the faster depreciator, before fuel or insurance differences even enter.
            Noor&apos;s advantage compounds if she sells privately in spring with records in hand;
            Chris&apos;s best defense is keeping the car 10+ years, where the flattened late
            curve dilutes the early plunge.
          </p>
          <p className="mt-3">
            Mileage discipline adds a second lever. Driving 12,000 instead of 18,000 miles yearly
            saves ~30,000 miles over five years — worth roughly $3,000–$5,000 at appraisal plus
            the avoided 100k-mile cliff if timed right. None of this requires automotive
            enthusiasm: buy the boring reliable car in the popular color, service it on schedule,
            park it carefully, and sell before the big round numbers. Compare segments on running
            costs with our{" "}
            <Link href="/electric-vs-gas-cost-comparison" className="text-amber-200 underline underline-offset-2">
              electric vs. gas comparison
            </Link>{" "}
            and finance wisely via{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Slowing the fall: five practical strategies</h2>
          <p className="mt-3">
            Buy one to three years used instead of new and someone else absorbs the cliff years —
            the value proposition behind our{" "}
            <Link href="/used-car-buying-checklist" className="text-amber-200 underline underline-offset-2">
              used-car checklist
            </Link>
            . Keep terms short and down payments large so equity stays ahead of value (and gap
            coverage stays unnecessary — see{" "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap insurance
            </Link>
            ). Maintain obsessively with records, since documented maintenance is the cheapest
            appraisal upgrade available. Protect cosmetics — garage parking, prompt chip repair,
            and interior care — because graders punish visible neglect first. And sell
            strategically: spring listings, pre-redesign windows, and sub-100k odometers all
            command measurable premiums worth planning around.
          </p>
          <p className="mt-3">
            One caution: depreciation anxiety should not push you into perpetual leasing to
            &ldquo;avoid&rdquo; value loss — lease payments simply prepay depreciation plus profit
            (our{" "}
            <Link href="/buy-vs-lease-guide" className="text-amber-200 underline underline-offset-2">
              buy vs. lease guide
            </Link>{" "}
            runs the numbers). The genuine cure for depreciation is time: every additional year
            you keep a sound car spreads the early losses thinner. Budget the insurance side with{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            .
          </p>
        </section>

        <section>
          <AdSlot format="display" slot="TODO-auto-mid" />
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">How much does a new car depreciate in the first year?</summary>
              <p className="mt-1">Roughly 20% on average — the steepest single year. Luxury and large sedans can exceed 25%; the strongest hybrids and trucks may lose only 12–15%.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Do electric cars depreciate faster?</summary>
              <p className="mt-1">Historically yes, due to tech change and price cuts — though tax-credit expirations and battery improvements keep shifting the pattern. See our EV cost comparison for 2026 context.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Does mileage or age affect value more?</summary>
              <p className="mt-1">Both, but mileage dominates early (per-mile deductions plus threshold cliffs like 100k), while age dominates late as condition and tech obsolescence take over.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">When is the best time to sell to avoid depreciation?</summary>
              <p className="mt-1">Before major thresholds: under 100,000 miles, before a redesign lands, ahead of warranty expiry, and during spring demand peaks — with full records in hand.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/selling-car-private-vs-dealer" className="text-amber-200 underline underline-offset-2">
              selling private vs. dealer
            </Link>
            {" "}and{" "}
            <Link href="/how-to-trade-in-car-guide" className="text-amber-200 underline underline-offset-2">
              trading in
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Depreciation rates vary by model,
            region, and market conditions. Read our full{" "}
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
