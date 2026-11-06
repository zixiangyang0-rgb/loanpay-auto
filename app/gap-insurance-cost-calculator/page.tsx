import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "Gap Insurance Cost Calculator: Price, Math & Cancel Timing | LoanPay Auto",
  description:
    "How much gap insurance costs in 2026 ($20-$50/yr via insurers vs $400-$800 at dealers), how to calculate your gap, and when to cancel with a yearly checklist.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/gap-insurance-cost-calculator",
  },
};

const CHECKLIST = [
  "Pull your 10-day payoff quote from the lender — that is the real number you owe, not the monthly statement balance.",
  "Estimate actual cash value with KBB, Edmunds, and two dealer offers; use the lowest realistic figure for math.",
  "Subtract value from payoff: payoff minus ACV equals your current gap exposure.",
  "Price gap from your auto insurer first — target $20-$50 per year before you ever hear the dealer price.",
  "If payoff is already below ACV by $2,000 or more and trending down, skip gap and re-check in 12 months.",
  "Calendar a yearly cancel check: drop gap once equity stays solidly positive, and claim any pro-rata refund in writing.",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "How much does gap insurance cost per year?",
    "answer":
      "Added through your auto insurer, gap usually costs $20-$50 per year, or roughly $2-$4 per month. Dealer-sold gap costs $400-$800 as a one-time charge, credit unions charge $200-$400, and standalone online sellers charge $250-$500. Same basic protection, very different price tags.",
  },
  {
    "question": "How do I calculate whether I need gap insurance?",
    "answer":
      "Get your 10-day loan payoff, estimate actual cash value from KBB plus dealer offers, then subtract: payoff minus ACV equals your gap. A positive number is your exposure. If the gap exceeds one year of gap premiums by a wide margin and your loan is young, gap usually pays for itself.",
  },
  {
    "question": "Is dealer gap insurance worth $700?",
    "answer":
      "Rarely when your insurer sells the same coverage for $30 a year. A $700 dealer waiver financed at 8% over 72 months costs over $900 with interest. Only consider dealer gap if your insurer does not offer it, your loan is deeply underwater, or the policy covers items your insurer excludes.",
  },
  {
    "question": "When should I cancel gap insurance?",
    "answer":
      "Cancel when your payoff drops safely below actual cash value and stays there — often in year 2-3 of a 60-month loan with 10% down, or year 3-4 of a 72-month loan with little down. Re-check yearly: payoff quote versus market value. Cancel in writing and ask for a pro-rata refund.",
  },
  {
    "question": "Do I get a refund if I cancel gap early?",
    "answer":
      "Insurer-billed gap stops with your next premium — you simply remove the endorsement, no refund paperwork. Dealer or lender gap waivers often allow a pro-rata refund if you cancel early and the loan is in good standing, but you must request it in writing. Financed gap products rarely refund the interest already paid.",
  },
];

export default function GapCostPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd
        title="Gap Insurance Cost Calculator: Price, Math & Cancel Timing | LoanPay Auto"
        description="How much gap insurance costs in 2026 ($20-$50/yr via insurers vs $400-$800 at dealers), how to calculate your gap, and when to cancel with a yearly checklist."
        slug="gap-insurance-cost-calculator"
        faqs={FAQS}
      />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Insurance &middot; cost calculator
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Gap Insurance Cost Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Gap insurance is cheap from the right seller and expensive from the wrong one.
          This guide prices every source in 2026 dollars, shows the exact payoff-minus-value
          math with two worked examples, and gives you a yearly cancel checklist so you
          stop paying the moment the gap closes.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Gap cost and cancel checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            New to gap coverage? Start with our{" "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap insurance explained guide
            </Link>{" "}
            for coverage rules and exclusions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How much does gap insurance cost in 2026?</h2>
          <p className="mt-3">
            The product is nearly identical everywhere — it pays the lender the difference
            between your loan balance and the car&apos;s actual cash value after a total loss —
            but the price depends almost entirely on where you buy it. Your own auto insurer
            is almost always cheapest: most national carriers add gap as an endorsement for
            $20 to $50 per year, which appears as $2 to $5 per month on your premium. You can
            add it mid-policy with a phone call, and you can remove it the same way when the
            gap closes. No financing charges, no paperwork maze, and the coverage follows
            standard regulated insurance cancellation rules.
          </p>
          <p className="mt-3">
            Credit unions sit in the middle at $200 to $400 one-time, usually offered at loan
            signing and sometimes refundable on a pro-rata basis. Standalone online gap sellers
            charge $250 to $500 one-time for a fixed term, often 3 to 7 years, with varying
            refund rights. Dealership finance offices are the most expensive at $400 to $800
            one-time — and the real cost is higher when that charge is rolled into your auto
            loan. A $600 dealer waiver financed at 8 percent over 72 months adds roughly $300
            in interest, turning a $600 product into a $900 product. That is why the order of
            operations matters: get the insurer quote first, then decide whether any other
            offer deserves a second look. If you are comparing lender offers more broadly, our{" "}
            <Link href="/dealer-financing-vs-bank" className="text-amber-200 underline underline-offset-2">
              dealer vs. bank financing guide
            </Link>{" "}
            shows how F&amp;I markups compound across the whole loan.
          </p>
          <p className="mt-3">
            Two factors move your personal quote within those ranges. New cars with fast
            first-year depreciation, 72- to 84-month terms, down payments under 10 percent,
            and rolled-over negative equity all push insurers toward the $40 to $50 end —
            still trivial next to the risk. Short 36- to 48-month loans with 20 percent down
            sit at the $20 end, and many such borrowers can skip gap entirely because no
            meaningful gap ever opens. Mileage matters too: driving 20,000 miles a year
            depreciates the car faster than the amortization schedule assumes, widening the
            window where gap pays off.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The 3-minute gap math: payoff minus value</h2>
          <p className="mt-3">
            You do not need a spreadsheet to price your risk. Step one: request a 10-day
            payoff quote from your lender — the exact amount required to close the loan
            today, including accrued interest. Your monthly statement balance understates
            this by a few days of interest, so use the payoff figure. Step two: estimate
            actual cash value conservatively. Check Kelley Blue Book and Edmunds for
            private-party and trade-in values in fair condition, then get one or two real
            dealer buy offers if possible. Insurers settle at market value, not asking price,
            so use the lowest realistic number — optimism here is how borrowers talk
            themselves out of protection they need.
          </p>
          <p className="mt-3">
            Step three: subtract. Payoff minus ACV equals your gap exposure. Positive means
            you are underwater: a total loss tomorrow leaves that bill on a car you can no
            longer drive. Negative means you have equity and probably do not need gap. Step
            four: compare the exposure against the premium. A $4,000 gap protected by a $36
            annual endorsement is a 111-to-1 payoff ratio — an easy buy. A $600 gap protected
            by a $600 dealer waiver is a 1-to-1 ratio before interest — an easy decline.
            Re-run this subtraction once a year, because amortization and depreciation move
            at different speeds. Early in a long loan the gap widens; around the midpoint it
            peaks; then payoff catches up and the gap collapses. Your cancel decision lives
            in that third phase. For the depreciation curve behind the value side, see our{" "}
            <Link href="/car-depreciation-guide" className="text-amber-200 underline underline-offset-2">
              car depreciation guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Price comparison: 5-year true cost</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Same protection, very different 5-year cost — insurer billing wins unless you cancel dealer gap fast.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">Sticker price</th>
                  <th className="px-4 py-3 font-semibold">5-year true cost</th>
                  <th className="px-4 py-3 font-semibold">Refundable</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Auto insurer endorsement</td><td className="px-4 py-2">$20–$50 per year</td><td className="px-4 py-2">$100–$250, stop anytime</td><td className="px-4 py-2">Yes, pro-rata by premium</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Credit union at signing</td><td className="px-4 py-2">$200–$400 one-time</td><td className="px-4 py-2">$200–$400</td><td className="px-4 py-2">Usually yes</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Dealer F&amp;I waiver</td><td className="px-4 py-2">$400–$800 one-time</td><td className="px-4 py-2">$500–$1,050 with loan interest</td><td className="px-4 py-2">Often, with friction</td></tr>
                <tr><td className="px-4 py-2">Standalone online</td><td className="px-4 py-2">$250–$500 one-time</td><td className="px-4 py-2">$250–$500</td><td className="px-4 py-2">Varies by contract</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            The table assumes you hold coverage for five years, which most borrowers should
            not — the point of the cancel checklist below is to cut that tail off. If you
            buy insurer gap at $36 a year and cancel after 30 months, lifetime cost is $90.
            If you finance a $650 dealer waiver at 8 percent and forget to cancel, lifetime
            cost exceeds $850 with zero added protection in the later years. Set the
            calendar reminder at purchase; the most expensive gap policy is the one you
            keep two years too long.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked examples: when $36 a year saves $5,000</h2>
          <p className="mt-3">
            Example one: Marcus buys a $28,000 sedan with $2,000 down, financing $26,000 at
            7.9 percent for 72 months. After 20 months he still owes about $21,800, but the
            car&apos;s value has fallen to $17,200 — a $4,600 gap. A hailstorm totals it.
            Comprehensive coverage pays $17,200 minus his $1,000 deductible, or $16,200 to
            the lender. Without gap he owes $5,600 on a destroyed car. His insurer gap
            endorsement cost $3 a month, $60 so far, and covers the $5,600 shortfall subject
            to its $1,000 deductible allowance. Sixty dollars neutralized a five-thousand
            dollar bill, exactly the early-loan window gap is designed for.
          </p>
          <p className="mt-3">
            Example two: Priya leases a $45,000 electric SUV with $3,000 due at signing. Her
            lease already includes gap — many do — so her calculated exposure is zero
            regardless of depreciation, and buying additional gap would be pure waste. She
            verifies the inclusion in writing on the lease agreement&apos;s early-termination
            page rather than trusting the salesperson&apos;s memory. Contrast that with a
            used-car buyer who puts 25 percent down on a 48-month loan: payoff $15,000,
            value $17,500, equity positive $2,500. No gap needed at any price — the math
            itself is the calculator output. If your numbers look like Priya&apos;s or the
            used-car buyer&apos;s, skip the product and redirect the money to the loan
            principal. If they look like Marcus&apos;s, buy the cheapest source immediately.
            Unsure which camp your loan falls in? Our{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down loan guide
            </Link>{" "}
            walks through negative-equity math in detail.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Hidden costs: interest, caps, and exclusions</h2>
          <p className="mt-3">
            Three details change the true price. First, financed gap accrues interest. Any
            one-time fee rolled into the loan balance compounds at your auto rate for the
            full term, so always compare cash price plus interest, not the sticker. Paying
            $400 cash for a credit-union waiver beats financing a $500 dealer waiver at 9
            percent. Second, payout caps bite deeply underwater loans. Many policies pay at
            most 25 percent over ACV — on a $18,000-value car, coverage tops out at $4,500
            above value. If you rolled $7,000 of negative equity from a prior trade into
            this loan, part of your gap may be uncovered by design. Read the cap before you
            rely on the math.
          </p>
          <p className="mt-3">
            Third, exclusions shrink the covered gap. Overdue payments, late fees, interest
            accrued after the loss date, service contracts and warranties bundled into the
            loan, and prior-damage deductions from the primary settlement are routinely
            excluded. A $5,000 arithmetic gap can become a $3,800 covered gap once $1,200
            of excluded add-ons are stripped out. None of this makes gap a bad buy — it
            makes the insurer&apos;s $36 version a far better buy than the dealer&apos;s
            $700 version with identical exclusions. Keep full coverage (collision plus
            comprehensive) active, because gap pays only after the primary total-loss
            settlement, never standalone. Factor the whole ownership picture with our{" "}
            <Link href="/total-cost-of-ownership-guide" className="text-amber-200 underline underline-offset-2">
              total cost of ownership guide
            </Link>
            .
          </p>
        </section>

        <section>
          <AdSlot format="display" slot="TODO-auto-mid" />
          <h2 className="text-xl font-bold text-white">When to cancel: the yearly 10-minute check</h2>
          <p className="mt-3">
            Gap is temporary by design — you rent it while the loan exceeds the value, then
            you drop it. Once a year, on the loan anniversary, spend ten minutes: request
            the payoff quote, look up market value, subtract. If payoff is below value by a
            comfortable margin ($1,500 to $2,000 for most cars, more for fast-depreciating
            models), and the trend has been narrowing for two consecutive checks, cancel.
            Typical timelines: 60-month loan with 10 percent down often turns safe around
            month 24 to 30; 72-month loan with zero down often needs month 36 to 48; leases
            with included gap need no action until lease-end decisions. Never cancel on a
            single optimistic value estimate — require two data points and a cushion for
            the next year of depreciation.
          </p>
          <p className="mt-3">
            Cancel correctly to keep the savings. Insurer gap: call or message your agent,
            remove the endorsement effective immediately, confirm the new premium in
            writing. Dealer or lender waiver: send a written cancellation request, keep the
            receipt, follow up until the pro-rata refund posts to the loan or your account
            — refunds typically take 4 to 8 weeks. If you refinanced or paid off the loan,
            gap on the old loan ends automatically, but dealer waivers may still owe you a
            partial refund, so ask rather than assume. And if you trade in while underwater,
            re-run the full calculation on the new loan instead of assuming the old gap
            policy transfers — it does not.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">How much does gap insurance cost per year?</summary>
              <p className="mt-1">Added through your auto insurer, gap usually costs $20-$50 per year, or roughly $2-$4 per month. Dealer-sold gap costs $400-$800 as a one-time charge, credit unions charge $200-$400, and standalone online sellers charge $250-$500. Same basic protection, very different price tags.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">How do I calculate whether I need gap insurance?</summary>
              <p className="mt-1">Get your 10-day loan payoff, estimate actual cash value from KBB plus dealer offers, then subtract: payoff minus ACV equals your gap. A positive number is your exposure. If the gap exceeds one year of gap premiums by a wide margin and your loan is young, gap usually pays for itself.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Is dealer gap insurance worth $700?</summary>
              <p className="mt-1">Rarely when your insurer sells the same coverage for $30 a year. A $700 dealer waiver financed at 8% over 72 months costs over $900 with interest. Only consider dealer gap if your insurer does not offer it, your loan is deeply underwater, or the policy covers items your insurer excludes.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">When should I cancel gap insurance?</summary>
              <p className="mt-1">Cancel when your payoff drops safely below actual cash value and stays there — often in year 2-3 of a 60-month loan with 10% down, or year 3-4 of a 72-month loan with little down. Re-check yearly: payoff quote versus market value. Cancel in writing and ask for a pro-rata refund.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Do I get a refund if I cancel gap early?</summary>
              <p className="mt-1">Insurer-billed gap stops with your next premium — you simply remove the endorsement, no refund paperwork. Dealer or lender gap waivers often allow a pro-rata refund if you cancel early and the loan is in good standing, but you must request it in writing. Financed gap products rarely refund the interest already paid.</p>
            </details>
          </div>
        </section>

                <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
              <li>
                <Link className="text-amber-200 underline underline-offset-2" href="/gap-insurance-explained">GAP Insurance Explained</Link> — what GAP covers, what it costs, and who actually needs it.
              </li>
              <li>
                <Link className="text-amber-200 underline underline-offset-2" href="/upside-down-car-loan-guide">Upside-Down Car Loan Guide</Link> — causes, fixes, and why rolling negative equity compounds the problem.
              </li>
              <li>
                <Link className="text-amber-200 underline underline-offset-2" href="/auto-loan-preapproval-guide">Auto Loan Preapproval Guide</Link> — rates by credit tier, timing, and how preapproval strengthens offers.
              </li>
              <li>
                <Link className="text-amber-200 underline underline-offset-2" href="/how-much-negative-equity-can-you-rollover">Negative Equity Rollover Guide</Link> — lender caps on rolling negative equity and the true cost.
              </li>
          </ul>
        </nav>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial or insurance advice. Prices, caps, and
            refund rights vary by state, carrier, and contract. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and confirm terms with your insurer before relying on them.
          </p>
        </section>
      </article>
      <AdSlot format="multiplex" slot="TODO-auto-multiplex" />
    </div>
  );
}
