import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Upside-Down Car Loan Guide: Causes, Fixes & Rollover Danger | LoanPay Auto",
  description:
    "Owe more than your car is worth? Why negative equity happens, five ways out, why rolling it over compounds the damage — with a $6,000 example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/upside-down-car-loan-guide",
  },
};

const CHECKLIST = [
  "Confirm the gap: get your 10-day payoff quote and compare against realistic private-party value.",
  "Stop the bleeding: no skipped payments, no title loans, no voluntary repo without advice.",
  "Attack principal with extra payments while keeping full coverage (lenders require it).",
  "Do NOT roll negative equity into the next loan unless you have modeled the compounded cost.",
  "Price gap insurance immediately if you are underwater without it.",
  "If selling, compare private sale (highest value) vs. trade (tax credit) on net proceeds.",
];

export default function UpsideDownPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Finance well &middot; negative equity
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Upside-Down Car Loan Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Being &ldquo;underwater&rdquo; — owing more than the car can sell for — traps millions
          of borrowers. It is fixable, but the most common fix (rolling the shortfall into the
          next loan) usually deepens the hole. Here are the five exits, ranked.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Action checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Protection gap? Read{" "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap insurance explained
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How loans go underwater</h2>
          <p className="mt-3">
            Negative equity is arithmetic: the loan balance falls slower than the car&apos;s
            value. Four accelerants dominate. Tiny down payments (or zero-down offers) start the
            loan at or above the car&apos;s value on day one. Long terms — 72, 75, even 84 months —
            amortize so slowly that two years of payments barely dent principal while
            depreciation takes its usual 30-percent bite. High APRs divert early payments to
            interest instead of principal. And rolled-in shortfalls from a previous underwater
            trade start the new loan thousands above value before the first payment. Combine zero
            down with an 84-month subprime loan on a fast-depreciating car, and the borrower can
            owe 130 percent of value within a year.
          </p>
          <p className="mt-3">
            The trap matters because it removes options. You cannot sell or trade without paying
            the shortfall in cash. You cannot refinance beyond lender loan-to-value caps (~110–
            125 percent). A total loss leaves you billed for the gap (which is exactly what{" "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap coverage
            </Link>{" "}
            exists for). And every month underwater, interest accrues on value you no longer own.
            Measuring the gap precisely — payoff quote minus realistic sale value — is step one,
            because every exit strategy prices off that number.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Five exits, ranked best to worst</h2>
          <p className="mt-3">
            First, pay down aggressively: extra principal payments (even $100–$200 a month) attack
            the highest-interest debt most underwater borrowers hold, while the car&apos;s
            depreciation curve flattens with age — the two curves converge faster than minimum
            payments suggest. Second, sell privately and cover the shortfall in cash: painful
            once, but it ends interest on a depreciating asset and frees the payment for savings
            or a cheaper replacement. Third, keep driving payment-disciplined to the crossover
            point — every month of ownership past year three bends the curves together, and a
            reliable car&apos;s cheapest miles lie ahead (see our{" "}
            <Link href="/car-depreciation-guide" className="text-amber-200 underline underline-offset-2">
              depreciation guide
            </Link>
            ).
          </p>
          <p className="mt-3">
            Fourth, refinance to a lower rate at the same-or-shorter term if loan-to-value allows
            (our{" "}
            <Link href="/auto-refinance-guide" className="text-amber-200 underline underline-offset-2">
              refinance guide
            </Link>{" "}
            covers qualification) — this shrinks the gap without extending it. Fifth and last,
            roll the shortfall into the next loan: the dealer-friendly &ldquo;solution&rdquo;
            that finances the old hole plus the new car&apos;s first-year depreciation at
            interest, frequently producing deeper negative equity within months. Choose it only
            with eyes open, a short new term, and a large down payment — otherwise it is a debt
            treadmill, not an exit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Rollover math table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Rolling $6,000 of negative equity into a $28,000 car at 8% / 72 months.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Scenario</th>
                  <th className="px-4 py-3 font-semibold">Amount financed</th>
                  <th className="px-4 py-3 font-semibold">Payment</th>
                  <th className="px-4 py-3 font-semibold">Total interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Clean purchase ($4k down)</td><td className="px-4 py-2">$24,000</td><td className="px-4 py-2">$419</td><td className="px-4 py-2">$6,168</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Rollover, no down payment</td><td className="px-4 py-2">$34,000</td><td className="px-4 py-2">$594</td><td className="px-4 py-2">$8,738</td></tr>
                <tr><td className="px-4 py-2">Rollover + $4k down</td><td className="px-4 py-2">$30,000</td><td className="px-4 py-2">$524</td><td className="px-4 py-2">$7,710</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $6,000 hole and its compound cost</h2>
          <p className="mt-3">
            Elena owes $21,000 on a car worth $15,000 — $6,000 underwater after a zero-down,
            72-month loan at 10 percent. The dealer offers to &ldquo;take care of it&rdquo; by
            rolling the $6,000 into a $28,000 replacement at 8 percent for 72 months: $34,000
            financed, $594 a month, $8,738 in interest. Versus a clean purchase with $4,000 down
            ($24,000 financed, $419/month, $6,168 interest), the rollover costs $175 more monthly
            and $2,570 more in interest — while the new car&apos;s own first-year depreciation
            (~$5,600) stacks atop the rolled hole, leaving her ~$9,000 underwater twelve months
            later. The &ldquo;solution&rdquo; reproduced the disease at higher dosage.
          </p>
          <p className="mt-3">
            Her better path: keep the current car (reliable, 70,000 miles), redirect $300 a month
            in extra principal, and reach positive equity in roughly 14 months instead of 30 —
            saving ~$1,100 in interest along the way. If the car were unreliable, selling
            privately at $15,000 and covering the $6,000 shortfall from savings would still beat
            compounding it at 8 percent for six years. Loan mechanics behind all of this at{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Preventing the next hole</h2>
          <p className="mt-3">
            Future-proof every purchase with four rules: at least 10–20 percent down (20 percent
            on fast-depreciating models), terms of 60 months or less, a car whose value curve you
            have actually checked (see{" "}
            <Link href="/car-depreciation-guide" className="text-amber-200 underline underline-offset-2">
              depreciation
            </Link>
            ), and gap coverage whenever the loan starts near or above value (see{" "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap insurance
            </Link>
            ). Price insurance before signing — an underwater borrower who also skimps on coverage
            courts the worst case: a totaled car, a loan balance, and no gap check. Run premiums
            at{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            .
          </p>
          <p className="mt-3">
            And treat dealer offers to absorb negative equity as what they are: financing, not
            forgiveness. Any proposal that starts with &ldquo;we&apos;ll pay off your
            trade&rdquo; should be re-read as &ldquo;we&apos;ll lend you the shortfall at
            interest.&rdquo; Sometimes that loan is still the least-bad option (an unsafe car
            must go), but it should be chosen from the ranked list above — not accepted as the
            only door out of the room.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What does upside down on a car loan mean?</h3>
              <p className="mt-1">You owe more than the car&apos;s market value — negative equity. Common with small down payments, long terms, high rates, or rolled-over trade shortfalls.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I trade in a car I owe more on than it is worth?</h3>
              <p className="mt-1">Yes, but the shortfall is added to the new loan (plus interest), deepening the hole. Paying down principal or selling privately with cash for the gap is usually cheaper.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How do I get out of an upside-down loan fastest?</h3>
              <p className="mt-1">Extra principal payments plus keeping the car past the depreciation curve&apos;s steep part. Refinancing to a lower rate at the same term helps if loan-to-value allows.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does gap insurance help if I am upside down?</h3>
              <p className="mt-1">Only after a total loss — it pays the lender the shortfall. It does not reduce the balance day to day. Buy it as protection while you pay the gap down.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/how-to-trade-in-car-guide" className="text-amber-200 underline underline-offset-2">
              trading in
            </Link>
            {" "}and{" "}
            <Link href="/selling-car-private-vs-dealer" className="text-amber-200 underline underline-offset-2">
              selling private vs. dealer
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Balances, values, and lender caps
            vary by situation. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and consult a licensed professional before major loan decisions.
          </p>
        </section>
      </article>
    </div>
  );
}
