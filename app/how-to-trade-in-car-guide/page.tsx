import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "How to Trade In Your Car: Value, Timing & Tax Credits | LoanPay Auto",
  description:
    "Get top dollar for your trade-in: instant quotes, appraisal tactics, separating trade from purchase, sales-tax credits, and a $14,000 worked example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/how-to-trade-in-car-guide",
  },
};

const CHECKLIST = [
  "Collect 3+ written offers (dealer appraisals plus two instant-cash buyers) before negotiating.",
  "Clean, photograph, and fix cheap flaws — $50 of detailing can add hundreds in appraisal.",
  "Get the trade appraised before discussing the new car's price; settle each deal separately.",
  "Bring both key fobs, service records, title or payoff letter, and registration.",
  "Ask your state about trade-in sales-tax credits — they can be worth $500–$1,500.",
  "Compare the best trade offer against private-party value minus your time and hassle (see our selling guide).",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "Do dealers give fair trade-in values?",
    "answer": "They give wholesale-based values minus reconditioning and margin. Collect instant-cash quotes first so you know your floor, then make dealers beat the best one."
  },
  {
    "question": "How does the trade-in tax credit work?",
    "answer": "In most states you pay sales tax only on (new-car price − trade value). On a $13,000 trade at 6.5% tax that saves ~$845. A few states offer no credit — check yours."
  },
  {
    "question": "Should I fix my car before trading it in?",
    "answer": "Do cheap cosmetic fixes and detailing; skip expensive mechanical work like tires and brakes — dealers recondition at wholesale cost and you will not recover retail spending."
  },
  {
    "question": "Can I trade in a car I still owe money on?",
    "answer": "Yes — the dealer pays off the lender and applies any equity (or adds any shortfall) to the new deal. Get your 10-day payoff quote yourself and verify it on the contract."
  }
];

export default function TradeInPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="How to Trade In Your Car: Value, Timing & Tax Credits | LoanPay Auto" description="Get top dollar for your trade-in: instant quotes, appraisal tactics, separating trade from purchase, sales-tax credits, and a $14,000 worked example." slug="how-to-trade-in-car-guide" faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Finance well &middot; trade-ins
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          How to Trade In Your Car
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Your old car is a second negotiation hiding inside the first. Dealers can show you a
          generous trade value while quietly inflating the new car&apos;s price — or vice versa.
          This guide separates the two deals so you win both.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Trade-in checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Considering selling outright? Compare with{" "}
            <Link href="/selling-car-private-vs-dealer" className="text-amber-200 underline underline-offset-2">
              selling private vs. dealer
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How appraisals work behind the desk</h2>
          <p className="mt-3">
            A trade appraisal blends three inputs: wholesale market data (recent auction results
            for your year, trim, mileage, and region), reconditioning cost (what the dealer must
            spend to retail your car — tires, brakes, detailing, certification), and lot needs (a
            store short on used SUVs bids aggressively for yours; one drowning in sedans lowballs
            them). The appraiser&apos;s walkaround scores paint, tires, glass, interior, warning
            lights, and modifications against that math in about fifteen minutes. Understanding
            this explains why identical cars fetch different bids at different stores on different
            weeks.
          </p>
          <p className="mt-3">
            Instant-cash buyers (large online retailers and chain stores) changed the game by
            publishing firm offers valid for seven days. These bids set your floor: no dealer
            trade offer below the best instant quote deserves consideration, and the quotes cost
            nothing to collect. Get at least two instant offers plus one traditional dealer
            appraisal before negotiating — the spread between highest and lowest routinely
            exceeds $1,500 on mainstream cars, which tells you how much judgment (and margin)
            lives in any single number.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Preparation that pays</h2>
          <p className="mt-3">
            Reconditioning math favors cheap fixes and punishes expensive ones. A $150 interior
            and exterior detail, $20 of touch-up paint, replacing a $15 cabin air filter that
            silences a musty smell, and presenting both key fobs (a missing second key costs you
            $200–$400 in appraisal deductions) routinely return multiples of their cost. Service
            records demonstrating oil changes and major maintenance reassure appraisers about
            unseen mechanicals — print them. Conversely, do not install new tires or brakes before
            trading: you will recover only a fraction of their cost, since dealers recondition at
            wholesale rates far below your retail bill.
          </p>
          <p className="mt-3">
            Remove personal items, uninstall toll tags, unpair phones, and factory-reset
            infotainment (your home address and garage codes live in that system). Photograph the
            odometer, VIN plate, and overall condition before handover — disputes about
            post-appraisal damage are rare but cheap to prevent. If you owe more than the car is
            worth, read our{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down loan guide
            </Link>{" "}
            before rolling any shortfall into the next loan, because that decision compounds.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Outlet comparison table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Where to sell your current car — typical trade-offs on a $14,000 vehicle.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Outlet</th>
                  <th className="px-4 py-3 font-semibold">Typical offer</th>
                  <th className="px-4 py-3 font-semibold">Speed / effort</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">New-car dealer (trade)</td><td className="px-4 py-2">$12,500–$13,500 + tax credit</td><td className="px-4 py-2">Same day, one trip</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Instant-cash buyer</td><td className="px-4 py-2">$12,800–$13,800 firm 7 days</td><td className="px-4 py-2">An hour, no haggle</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Used-car chain store</td><td className="px-4 py-2">$12,500–$13,500</td><td className="px-4 py-2">Same day appraisal</td></tr>
                <tr><td className="px-4 py-2">Private party</td><td className="px-4 py-2">$14,500–$16,000</td><td className="px-4 py-2">Days–weeks of effort</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $14,000 crossover and its $840 tax credit</h2>
          <p className="mt-3">
            Ana&apos;s 2019 crossover has a $14,000 private-party value. Instant quotes come in at
            $12,900 and $13,100; the selling dealer appraises $12,600 while discounting the new
            car $1,000 below the next-best bid — the classic shell game. She counters by
            separating the deals: &ldquo;Match the $13,100 instant offer on my trade, and match
            the $1,000 discount on the new car, and we sign today.&rdquo; The dealer agrees to
            $13,000 on the trade with the full new-car discount intact.
          </p>
          <p className="mt-3">
            Then the tax credit lands: her state taxes only the price difference (new car minus
            trade), so a $13,000 trade at a 6.5 percent tax rate saves $845 in sales tax versus
            selling privately and buying separately. Net trade outcome: $13,000 + $845 = $13,845
            effective value — within $155 of the $14,000 private-party dream, with zero listings,
            zero strangers, and zero timing risk. In states without this credit the math tilts
            toward private sale; always compute your state&apos;s rule before choosing. For loan
            context see{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Negotiation sequence that protects both deals</h2>
          <p className="mt-3">
            The order of operations is everything. First, finalize the new car&apos;s out-the-door
            price without mentioning a trade (our{" "}
            <Link href="/new-car-negotiation-guide" className="text-amber-200 underline underline-offset-2">
              negotiation guide
            </Link>{" "}
            covers the email-bid process). Second, introduce the trade with competing written
            offers in hand and demand the dealer beat the best one. Third, settle financing
            separately with your preapproval as the baseline. Any attempt to bundle — &ldquo;we
            can do $X a month with your trade&rdquo; — restarts the shell game; insist on three
            separate numbers on paper before any combined math.
          </p>
          <p className="mt-3">
            Time your trade with the market, not just your mood. Late spring brings peak used-car
            demand (tax refunds, summer road trips), while values typically soften in winter.
            Trading a car with an expiring inspection sticker, bald tires, or an imminent major
            service? Get quotes now — appraisers deduct retail repair costs, so every worn item
            costs you more at appraisal than the repair would. And confirm replacement insurance
            pricing before committing, via{" "}
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
              <summary className="cursor-pointer font-semibold text-white">Do dealers give fair trade-in values?</summary>
              <p className="mt-1">They give wholesale-based values minus reconditioning and margin. Collect instant-cash quotes first so you know your floor, then make dealers beat the best one.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">How does the trade-in tax credit work?</summary>
              <p className="mt-1">In most states you pay sales tax only on (new-car price − trade value). On a $13,000 trade at 6.5% tax that saves ~$845. A few states offer no credit — check yours.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Should I fix my car before trading it in?</summary>
              <p className="mt-1">Do cheap cosmetic fixes and detailing; skip expensive mechanical work like tires and brakes — dealers recondition at wholesale cost and you will not recover retail spending.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Can I trade in a car I still owe money on?</summary>
              <p className="mt-1">Yes — the dealer pays off the lender and applies any equity (or adds any shortfall) to the new deal. Get your 10-day payoff quote yourself and verify it on the contract.</p>
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
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down loans
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Trade values and tax rules vary by
            state and market. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and verify payoff and contract figures before signing.
          </p>
        </section>
      </article>
      <AdSlot format="multiplex" slot="TODO-auto-multiplex" />
    </div>
  );
}
