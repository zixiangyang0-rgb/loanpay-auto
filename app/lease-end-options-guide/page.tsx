import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "Lease-End Options Guide: Return, Buy Out, Extend or Trade | LoanPay Auto",
  description:
    "Your car lease is ending. Compare returning, buying out at residual, extending, or trading — with fee checklists, equity math, and a $18,400 example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/lease-end-options-guide",
  },
};

const CHECKLIST = [
  "Start 90 days out: read the lease for residual value, disposition fee, mileage allowance, and wear standards.",
  "Get the car's current market value from 2–3 sources — equity vs. residual decides everything.",
  "Schedule the free pre-return inspection and fix only what the inspector flags as chargeable.",
  "Compare buyout financing against market value; banks and credit unions fund lease buyouts.",
  "If returning, budget disposition ($350–$500) plus any mileage ($0.15–$0.30/mi) and wear bills.",
  "Never auto-renew or roll into a new lease at the same dealer without competing bids.",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "Should I buy my car at lease end?",
    "answer": "If market value clearly exceeds residual + tax/fees and you like the car — yes, you keep a known-history vehicle below market. If value trails residual, return it."
  },
  {
    "question": "What fees apply when returning a lease?",
    "answer": "Disposition ($350–$500), excess mileage ($0.15–$0.30/mi), and excess wear per the inspection. Get the free pre-inspection and fix retail-cheap flagged items."
  },
  {
    "question": "Can I extend my car lease?",
    "answer": "Most lessors allow month-to-month extensions up to 6–12 months — useful as a bridge to a redesign or payoff milestone, but not as a long-term plan."
  },
  {
    "question": "Can I trade in a leased car?",
    "answer": "Yes — dealers can buy out the lease and apply equity to your next car, subject to lessor third-party buyout rules. Get independent bids first so none of your equity leaks."
  }
];

export default function LeaseEndPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Lease-End Options Guide: Return, Buy Out, Extend or Trade | LoanPay Auto" description="Your car lease is ending. Compare returning, buying out at residual, extending, or trading — with fee checklists, equity math, and a $18,400 example." slug="lease-end-options-guide" faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Finance well &middot; leases
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Lease-End Options Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Four doors stand open when your lease ends — return, buy, extend, or trade. The right
          one depends on a single comparison: your car&apos;s market value versus its contract
          residual. Here is how to run it and avoid the classic turn-in traps.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">90-day checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Lease vs. buy background:{" "}
            <Link href="/buy-vs-lease-guide" className="text-amber-200 underline underline-offset-2">
              buy vs. lease guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The residual-vs.-market test</h2>
          <p className="mt-3">
            Your lease contract fixed a residual value years ago — the predicted worth at turn-in
            (say, $18,400 on a $32,000 car after 36 months). Reality diverged since: strong used
            markets leave cars worth more than residual (positive equity you can capture),
            while soft markets leave them worth less (a put option you should exercise by walking
            away). Get three live valuations (dealer bids count double — they are real money, not
            estimates) and subtract the residual plus any buyout fee ($0–$500). Positive
            difference means buy or trade; negative means return.
          </p>
          <p className="mt-3">
            This single test resolves most cases, but verify two contract details first. Some
            lessors (notably several captive finance arms in recent years) restrict third-party
            buyouts — only you or their franchised dealers may purchase, which caps your ability
            to sell the equity to the highest bidder. And buyouts trigger sales tax in most
            states plus registration transfer, so add ~6–9 percent to the residual when comparing
            against keeping the car. A $2,000 equity edge can shrink to $500 after tax and fees —
            still worth capturing, but no longer a windfall.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The four options in depth</h2>
          <p className="mt-3">
            Returning is cleanest when the car is worth less than residual or carries damage
            beyond normal wear: pay the disposition fee, settle mileage and wear bills, and walk
            away. The pre-return inspection (free from most lessors 30–60 days out) itemizes
            chargeable wear — tires below 4/32&quot;, dents over card-size, cracked glass,
            missing equipment — letting you fix items retail-cheaper than the lessor&apos;s
            penalty rates, or leave them when penalties run lower than repair quotes. Always
            attend the inspection logic with photos of your own.
          </p>
          <p className="mt-3">
            Buying out suits positive-equity cars you genuinely want to keep: finance the
            residual like a used-car purchase (credit unions fund these routinely — see{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            ), and you keep a known-history car below market price. Trading captures equity
            without keeping the car: any dealer can buy out the lease and credit the surplus
            toward your next purchase (subject to lessor third-party rules). Extending (month-to-
            month, usually up to 6–12 months) bridges timing gaps — a model redesign due in
            spring, a payoff milestone — but extends depreciation risk on a car you do not own,
            so use it as a bridge, not a plan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">End-of-lease cost table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Typical turn-in bills on a 36-month, 36,000-mile lease.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Charge</th>
                  <th className="px-4 py-3 font-semibold">Typical range</th>
                  <th className="px-4 py-3 font-semibold">Avoidance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Disposition fee</td><td className="px-4 py-2">$350–$500</td><td className="px-4 py-2">Often waived if you lease again same brand</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Excess mileage</td><td className="px-4 py-2">$0.15–$0.30/mi</td><td className="px-4 py-2">Buy out or trade when heavily over</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Excess wear (per item)</td><td className="px-4 py-2">$100–$500+</td><td className="px-4 py-2">Pre-inspection + fix retail-cheap items</td></tr>
                <tr><td className="px-4 py-2">Buyout purchase fee + tax</td><td className="px-4 py-2">$0–$500 + 6–9% tax</td><td className="px-4 py-2">Price into the equity comparison</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: capturing $2,600 of equity</h2>
          <p className="mt-3">
            Noah&apos;s 36-month lease ends with a contractual residual of $18,400. Live bids:
            $21,300, $21,000, and $20,700 — the market values his low-mileage, garaged car well
            above the prediction. Returning would donate ~$2,600 of equity to the lessor.
            Instead, he buys out at $18,400 plus a $350 purchase fee and 7 percent sales tax
            ($1,313), all-in $20,063, financed at 7 percent for 48 months through his credit
            union. He keeps a known-good car for an effective $20,063 against a $21,000+ market —
            or alternatively trades it the same week, pocketing ~$1,000 after all costs toward
            the next car.
          </p>
          <p className="mt-3">
            The mirror case warns equally: had bids come in at $16,500 against the $18,400
            residual, buying out would overpay by $1,900 before tax — the correct move is to
            return and let the lessor absorb the depreciation miss. That asymmetry (heads you
            capture equity, tails you walk away) is the lessee&apos;s built-in advantage; the
            only losing play is defaulting to whatever the dealer suggests without running the
            residual test. Confirm replacement insurance costs at{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Dealer tactics at turn-in time</h2>
          <p className="mt-3">
            Expect contact 3–6 months before maturity: &ldquo;pull-ahead&rdquo; offers waiving
            remaining payments if you lease again now. These are new-lease sales pitches wearing
            convenience costumes — evaluate the new lease on its own merits (selling price,
            money factor, residual) with competing bids per our{" "}
            <Link href="/new-car-negotiation-guide" className="text-amber-200 underline underline-offset-2">
              negotiation guide
            </Link>
            , not on the waived payments alone. Likewise, dealers may offer to &ldquo;handle the
            turn-in&rdquo; while quietly buying out your equity-positive car and keeping the
            spread; always know your bids before letting them intermediate.
          </p>
          <p className="mt-3">
            If you return, document everything: dated photos of all panels, odometer, and
            interior; copies of the inspection report; and the signed odometer statement. Keep
            records for at least a year — post-return &ldquo;additional wear&rdquo; bills arrive
            often enough that proof matters. And if you lease again, the cycle restarts: mileage
            honesty, residual realism, and fee awareness from day one.
          </p>
        </section>

        <section>
          <AdSlot format="display" slot="TODO-auto-mid" />
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Should I buy my car at lease end?</summary>
              <p className="mt-1">If market value clearly exceeds residual + tax/fees and you like the car — yes, you keep a known-history vehicle below market. If value trails residual, return it.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">What fees apply when returning a lease?</summary>
              <p className="mt-1">Disposition ($350–$500), excess mileage ($0.15–$0.30/mi), and excess wear per the inspection. Get the free pre-inspection and fix retail-cheap flagged items.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Can I extend my car lease?</summary>
              <p className="mt-1">Most lessors allow month-to-month extensions up to 6–12 months — useful as a bridge to a redesign or payoff milestone, but not as a long-term plan.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Can I trade in a leased car?</summary>
              <p className="mt-1">Yes — dealers can buy out the lease and apply equity to your next car, subject to lessor third-party buyout rules. Get independent bids first so none of your equity leaks.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/how-to-trade-in-car-guide" className="text-amber-200 underline underline-offset-2">
              trading in
            </Link>
            {" "}and{" "}
            <Link href="/auto-refinance-guide" className="text-amber-200 underline underline-offset-2">
              refinancing a buyout
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Lease terms and lessor policies vary
            — verify your contract. Read our full{" "}
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
