import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "GAP Insurance Explained: Costs, Coverage & Who Needs It | LoanPay Auto",
  description:
    "What gap insurance covers after a total loss, what it excludes, typical costs ($20–$50/yr via insurers), and a $30,000 worked example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/gap-insurance-explained",
  },
};

const CHECKLIST = [
  "Check whether you are upside down: loan balance minus the car's actual cash value.",
  "Get gap quotes from your auto insurer first — usually $20–$50 a year added to your policy.",
  "Compare against the dealer's one-time price ($400–$800); insurer billing almost always wins.",
  "Read exclusions: deductibles, late fees, rolled-over negative equity, and add-ons may not be covered.",
  "Confirm whether your lease already includes gap — many do, some do not.",
  "Cancel gap when your loan balance drops safely below the car's value; stop paying for nothing.",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "How much does gap insurance cost?",
    "answer": "Through an auto insurer, typically $20–$50 per year. Dealer-sold gap runs $400–$800 one-time — get the insurer quote first and compare."
  },
  {
    "question": "Does gap insurance cover my deductible?",
    "answer": "Sometimes up to a cap — many policies include $500–$1,000 of deductible coverage, but some exclude it. Check the terms before assuming."
  },
  {
    "question": "Is gap insurance required on a lease?",
    "answer": "Many leases include it automatically; some require you to buy it. Read the lease agreement — never pay for duplicate gap you already have."
  },
  {
    "question": "When should I cancel gap insurance?",
    "answer": "When your loan balance drops safely below the car's actual cash value — often around year 2–3 of a standard loan. Re-check payoff vs. market value yearly."
  }
];

export default function GapPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="GAP Insurance Explained: Costs, Coverage & Who Needs It | LoanPay Auto" description="What gap insurance covers after a total loss, what it excludes, typical costs ($20–$50/yr via insurers), and a $30,000 worked example." slug="gap-insurance-explained" faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Insurance &middot; loan protection
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          GAP Insurance Explained
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Standard auto insurance pays what your car was worth — not what you still owe. When
          those numbers diverge, guaranteed asset protection (gap) insurance covers the
          difference. Here is how the gap forms, what the coverage costs, and who actually needs
          it.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">GAP decision checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Owe more than it is worth? See{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down loans
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How the gap forms</h2>
          <p className="mt-3">
            Two curves create the problem. Your loan balance falls slowly at first because early
            payments are mostly interest (amortization), while your car&apos;s value falls fast —
            new cars typically lose around 20 percent in year one and roughly 15 percent annually
            for the next few years. Finance $30,000 with little down at 8 percent for 72 months,
            and after one year you may owe ~$27,000 on a car worth ~$23,500: a $3,500 gap. Small
            down payments, long terms, high rates, and rolled-in negative equity from a prior
            trade all widen it; large down payments and short terms shrink it.
          </p>
          <p className="mt-3">
            When a covered total loss occurs — a severe crash, theft, flood, or fire — your
            collision or comprehensive coverage pays the car&apos;s actual cash value (ACV) minus
            your deductible, and the lender still demands the full remaining balance. Without
            gap coverage you write a check for the shortfall on a car you can no longer drive.
            Gap insurance exists for exactly this moment: after the primary settlement, it pays
            the lender the difference up to the policy&apos;s limits, subject to exclusions. It
            requires underlying full coverage (collision + comprehensive) and covers only total
            losses — never repairs, maintenance, or partial damage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What gap covers — and what it does not</h2>
          <p className="mt-3">
            A standard gap policy covers the loan-or-lease balance minus the ACV settlement,
            sometimes including up to a capped amount of the deductible. What it typically does
            not cover matters just as much: overdue payments and late fees, interest accrued
            after the loss date, extended warranties or other products rolled into the loan,
            carry-over balances from previous loans rolled into the current one, and amounts the
            primary insurer deducted for prior damage or excessive wear. Some policies also cap
            payout at 25 percent over ACV — a problem for deeply underwater loans.
          </p>
          <p className="mt-3">
            Watch the product type. True gap insurance (from an auto insurer) is regulated
            insurance you can cancel for a pro-rata refund. Dealer-sold &ldquo;gap&rdquo; is often
            a debt-cancellation waiver — a lender contract with different cancellation rules and
            frequently a far higher price ($400–$800 one-time, sometimes financed at interest).
            Both can work, but compare them as different products: price, cancellability, and the
            exclusion list side by side. And check your lease first — many leases bundle gap
            automatically, in which case buying it again is pure waste.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Cost comparison table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Typical gap pricing by source — same protection, very different prices.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">Typical cost</th>
                  <th className="px-4 py-3 font-semibold">Billing</th>
                  <th className="px-4 py-3 font-semibold">Cancellable</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Auto insurer add-on</td><td className="px-4 py-2">$20–$50 per year</td><td className="px-4 py-2">With premium</td><td className="px-4 py-2">Yes, anytime</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Credit union at loan signing</td><td className="px-4 py-2">$200–$400 one-time</td><td className="px-4 py-2">Upfront or financed</td><td className="px-4 py-2">Usually yes</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Dealer F&amp;I (insurance)</td><td className="px-4 py-2">$400–$800 one-time</td><td className="px-4 py-2">Often rolled into loan</td><td className="px-4 py-2">Often, with friction</td></tr>
                <tr><td className="px-4 py-2">Standalone online providers</td><td className="px-4 py-2">$250–$500 one-time</td><td className="px-4 py-2">Upfront</td><td className="px-4 py-2">Varies by contract</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $5,500 bill that vanished</h2>
          <p className="mt-3">
            Jasmine finances a $30,000 car with $1,000 down at 7.5 percent for 72 months. Eighteen
            months later the car is stolen and unrecovered. Her comprehensive coverage values the
            car at $22,500 ACV and, after her $1,000 deductible, pays $21,500 to the lender. But
            slow early amortization means she still owes $27,000. The gap is $5,500 — owed on a
            car that no longer exists, while she simultaneously needs a down payment on a
            replacement.
          </p>
          <p className="mt-3">
            Because she added gap through her insurer at $36 a year ($54 paid so far), the gap
            policy covers the $5,500 shortfall (her policy includes the deductible up to its cap;
            some policies would leave the $1,000 deductible with her — another reason to read the
            terms). Total protection cost: under $60. Had she declined gap, the $5,500 would have
            come from savings or a personal loan on top of replacement-car costs. The coverage is
            most valuable in exactly these early, low-equity years — which is also when
            cancelling it later, once the balance drops below ACV, stops the meter. Price your
            underlying coverage with{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who needs it, and when to drop it</h2>
          <p className="mt-3">
            Buy gap when the loan starts underwater or near it: down payments under 20 percent,
            terms over 60 months, rolled-in negative equity, high-mileage driving that accelerates
            depreciation, or vehicles with steep first-year value drops. Leases without included
            gap qualify too. Skip it when you put 20 percent-plus down on a short loan, when the
            car is several years old with a balance below market value, or when your lease
            already bundles it — paying twice protects nothing.
          </p>
          <p className="mt-3">
            Revisit the decision yearly: compare your payoff quote against the car&apos;s private
            market value, and cancel when equity turns solidly positive (many advisors suggest
            dropping gap once you owe clearly less than ACV for a full year). If your loan
            originated at a dealership, review the broader financing picture with our{" "}
            <Link href="/dealer-financing-vs-bank" className="text-amber-200 underline underline-offset-2">
              dealer vs. bank guide
            </Link>
            , and understand the loan mechanics at{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <AdSlot format="display" slot="TODO-auto-mid" />
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">How much does gap insurance cost?</summary>
              <p className="mt-1">Through an auto insurer, typically $20–$50 per year. Dealer-sold gap runs $400–$800 one-time — get the insurer quote first and compare.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Does gap insurance cover my deductible?</summary>
              <p className="mt-1">Sometimes up to a cap — many policies include $500–$1,000 of deductible coverage, but some exclude it. Check the terms before assuming.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Is gap insurance required on a lease?</summary>
              <p className="mt-1">Many leases include it automatically; some require you to buy it. Read the lease agreement — never pay for duplicate gap you already have.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">When should I cancel gap insurance?</summary>
              <p className="mt-1">When your loan balance drops safely below the car&apos;s actual cash value — often around year 2–3 of a standard loan. Re-check payoff vs. market value yearly.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/car-insurance-new-drivers-guide" className="text-amber-200 underline underline-offset-2">
              insurance for new drivers
            </Link>
            {" "}and{" "}
            <Link href="/lease-end-options-guide" className="text-amber-200 underline underline-offset-2">
              lease-end options
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial or insurance advice. Policy terms, caps, and
            availability vary by state and carrier. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and confirm coverage with your insurer before relying on it.
          </p>
        </section>
      </article>
      <AdSlot format="multiplex" slot="TODO-auto-multiplex" />
    </div>
  );
}
