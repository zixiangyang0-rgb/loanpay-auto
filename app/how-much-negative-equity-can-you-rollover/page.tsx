import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "How Much Negative Equity Can You Rollover? Lender Caps & Cost | LoanPay Auto",
  description:
    "How much negative equity can you roll into a new car loan? Lender LTV caps (110-125%), $3K/$6K/$10K cost examples, and when rolling over is never worth it.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/how-much-negative-equity-can-you-rollover",
  },
};

const CHECKLIST = [
  "Get your 10-day payoff quote and a realistic trade value to compute the exact shortfall.",
  "Ask the lender for its max loan-to-value cap (typically 110-125% of the new car's value).",
  "Model the rolled payment and total interest before signing — $6,000 at 8% over 72 months costs ~$2,570 extra.",
  "Compare cheaper exits first: extra principal payments, private sale, or refinancing.",
  "Price gap insurance if the new loan starts above 100% loan-to-value.",
  "Never roll negative equity twice in a row without a large down payment and a short term.",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "How much negative equity can you roll into a new car loan?",
    "answer": "Most lenders cap the total loan at 110-125% of the new car's value (loan-to-value). On a $30,000 car at a 120% cap, the ceiling is $36,000 financed — so at most about $6,000 of negative equity rolls over with zero down, less after taxes and fees."
  },
  {
    "question": "Can you roll $10,000 of negative equity into a new loan?",
    "answer": "Rarely without a large down payment or a cheap, high-value replacement. $10,000 of shortfall on a $28,000 car means financing ~136% of value, which prime lenders reject. Subprime lenders may allow it at very high APRs, which compounds the damage."
  },
  {
    "question": "Is it smart to roll negative equity into a new car?",
    "answer": "Usually not. You pay interest on the old shortfall plus the new car's depreciation, often ending up deeper underwater within a year. It only makes sense for an unsafe or dead car, with a short term, a big down payment, and gap coverage."
  },
  {
    "question": "Does rolling over negative equity hurt your new loan rate?",
    "answer": "Yes. A higher loan-to-value ratio signals more risk, so lenders charge a higher APR, require full coverage insurance, and may shorten the maximum term they offer you."
  },
  {
    "question": "What is better than rolling over negative equity?",
    "answer": "Extra principal payments on the current loan, selling privately and paying the gap in cash, or refinancing to a lower rate. Our upside-down car loan guide ranks all five exits from cheapest to most expensive."
  },
];

export default function NegativeEquityRolloverPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="How Much Negative Equity Can You Rollover? Lender Caps & Cost | LoanPay Auto" description="How much negative equity can you roll into a new car loan? Lender LTV caps (110-125%), $3K/$6K/$10K cost examples, and when rolling over is never worth it." slug="how-much-negative-equity-can-you-rollover" faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Finance well &middot; negative equity
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          How Much Negative Equity Can You Rollover?
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Dealers say &ldquo;we&apos;ll pay off your trade no matter what you owe.&rdquo; Lenders say
          otherwise: loan-to-value caps decide how much shortfall can ride into the next loan — and
          the math decides whether you should let it. Here are the caps, the costs, and the exits.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Action checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Start with the full picture in our{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down car loan guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The short answer: lenders cap rollovers at 110–125% of value</h2>
          <p className="mt-3">
            Negative equity rollover is not limited by how much you owe — it is limited by how much
            the lender will finance against the new car. Almost every lender enforces a maximum
            loan-to-value (LTV) ratio: the total amount financed, including the rolled shortfall,
            taxes, and fees, divided by the new car&apos;s value. For prime and near-prime auto
            lenders that ceiling usually sits between 110 and 125 percent. Captive finance arms
            (the manufacturer&apos;s own lender) sometimes stretch toward 130 percent on new cars
            with subsidized rates, while subprime lenders may go higher still — at punishing APRs
            that make the hole worse.
          </p>
          <p className="mt-3">
            The arithmetic is unforgiving. Take a $30,000 replacement car with a lender cap of 120
            percent: the maximum amount financed is $36,000. After $2,000 in taxes and fees, only
            about $4,000 of headroom remains for rolled negative equity with zero down. Bring a
            $5,000 down payment and the same cap absorbs roughly $9,000 of shortfall. That is why
            the honest answer to &ldquo;how much can I roll?&rdquo; is always another question:
            what is the new car worth, what is the lender&apos;s cap, and how much cash are you
            bringing? Anything above the cap must be paid in cash or the deal does not fund. Our{" "}
            <Link href="/how-to-trade-in-car-guide" className="text-amber-200 underline underline-offset-2">
              trade-in guide
            </Link>{" "}
            walks through how dealers present this number — and where the presentation hides profit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Rollover cost table: $3,000 vs. $6,000 vs. $10,000</h2>
          <p className="mt-3">
            Caps decide what is possible; interest decides what is wise. Rolling a shortfall means
            paying interest on debt secured by a car you no longer own, stacked on top of the new
            car&apos;s own first-year depreciation of roughly 20 percent. The table below prices a
            $28,000 replacement at 8 percent APR over 72 months with no down payment, so the cost
            of the rolled amount is visible in isolation.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                $28,000 car at 8% / 72 months; rolled shortfall added to amount financed.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Rolled shortfall</th>
                  <th className="px-4 py-3 font-semibold">Amount financed</th>
                  <th className="px-4 py-3 font-semibold">Payment</th>
                  <th className="px-4 py-3 font-semibold">Total interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$0 (clean purchase)</td><td className="px-4 py-2">$28,000</td><td className="px-4 py-2">$489</td><td className="px-4 py-2">$7,196</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$3,000 rolled</td><td className="px-4 py-2">$31,000</td><td className="px-4 py-2">$541</td><td className="px-4 py-2">$7,970</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">$6,000 rolled</td><td className="px-4 py-2">$34,000</td><td className="px-4 py-2">$594</td><td className="px-4 py-2">$8,738</td></tr>
                <tr><td className="px-4 py-2">$10,000 rolled</td><td className="px-4 py-2">$38,000</td><td className="px-4 py-2">$663</td><td className="px-4 py-2">$9,768</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            A $6,000 rollover costs about $105 more every month and roughly $1,540 more in total
            interest than the clean purchase — before the new car&apos;s own depreciation recreates
            the underwater position. Twelve months later, that borrower typically owes about $9,000
            more than the car is worth: the old hole plus the new car&apos;s first-year value drop.
            A $10,000 rollover pushes the starting LTV to about 136 percent, beyond most prime caps
            entirely, which is why large shortfalls either get rejected or get approved only at
            subprime rates that accelerate the treadmill. Check where your car sits on the curve in
            our{" "}
            <Link href="/car-depreciation-guide" className="text-amber-200 underline underline-offset-2">
              car depreciation guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: $5,200 underwater at the dealership</h2>
          <p className="mt-3">
            Marcus owes $19,200 on a sedan worth $14,000 — $5,200 of negative equity after a
            zero-down 72-month loan at 11 percent. The dealer offers a $26,000 certified used car
            at 9 percent for 72 months and promises to &ldquo;absorb&rdquo; the trade. With $1,800
            in taxes and fees and no down payment, the amount financed becomes $32,200 against a
            $26,000 car: 124 percent LTV, right at the lender&apos;s ceiling. Payment: $580 a
            month. Total interest: about $9,560. A clean buyer putting $3,000 down on the same car
            finances $24,800, pays $446 a month, and pays roughly $7,300 in interest — saving $134
            monthly and more than $2,200 in interest while starting near positive equity instead of
            $6,200 underwater on day one.
          </p>
          <p className="mt-3">
            Marcus&apos;s cheaper path is unglamorous: keep the sedan (reliable, 65,000 miles),
            redirect $250 a month into extra principal, and reach the surface in about 12 months
            instead of 28, saving roughly $900 in interest. If the car were genuinely unsafe, the
            least-bad rollover would pair the new loan with a 60-month term, at least 10 percent
            down, and{" "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap insurance
            </Link>{" "}
            from day one — shrinking both the rate and the window of exposure. Refinancing the
            current loan first can also narrow the gap; see our{" "}
            <Link href="/auto-refinance-guide" className="text-amber-200 underline underline-offset-2">
              auto refinance guide
            </Link>{" "}
            for LTV qualification rules.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">When rolling over makes sense — and when it never does</h2>
          <p className="mt-3">
            Rolling over is defensible in exactly one situation: the current car must go — failed
            transmission, flood damage, safety recall with no fix — and no cash exists to cover the
            gap. Even then, three guardrails apply. Keep the new loan at 60 months or less so
            principal falls faster than value. Bring the largest down payment available to pull
            starting LTV back toward 110 percent. And buy gap coverage immediately, because a loan
            that starts 115–125 percent financed is one collision away from a deficiency balance.
          </p>
          <p className="mt-3">
            It never makes sense as a lifestyle upgrade: trading a functional car to &ldquo;reset
            payments&rdquo; while financing the old shortfall at interest. It never makes sense
            twice in a row — serial rollovers stack hole upon hole until no lender funds the deal
            at any rate the borrower can pay. And it never makes sense stretched over 72–84 months
            to make the payment &ldquo;affordable,&rdquo; because the longer term slows principal
            paydown exactly when the new car depreciates fastest. Each of these paths converts a
            one-time $5,000 problem into a multi-year $10,000 problem. The full ranking of exits,
            cheapest to most expensive, is laid out in our{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down car loan guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Cheaper exits to price first</h2>
          <p className="mt-3">
            Before signing a rollover, price four alternatives with real numbers. First, extra
            principal payments: even $150–$250 a month attacks the highest-interest debt most
            underwater borrowers carry, and the car&apos;s depreciation curve flattens with age, so
            the two curves meet sooner than minimum payments imply. Second, a private sale: private
            buyers routinely pay 10–15 percent more than trade-in offers, and covering a smaller
            remaining gap in cash ends interest on a depreciating asset permanently (compare the
            channels in{" "}
            <Link href="/selling-car-private-vs-dealer" className="text-amber-200 underline underline-offset-2">
              selling private vs. dealer
            </Link>
            ). Third, refinancing to a lower APR at the same or shorter term, if LTV allows — the
            balance does not change, but more of each payment hits principal. Fourth, simply
            keeping the car past year three, when depreciation slows and each payment builds equity
            faster. Any dealer worksheet that skips these four is selling a car, not solving a
            debt problem.
          </p>
        </section>

        <section>
          <AdSlot format="display" slot="TODO-auto-mid" />
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">How much negative equity can you roll into a new car loan?</summary>
              <p className="mt-1">Most lenders cap the total loan at 110-125% of the new car&apos;s value (loan-to-value). On a $30,000 car at a 120% cap, the ceiling is $36,000 financed — so at most about $6,000 of negative equity rolls over with zero down, less after taxes and fees.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Can you roll $10,000 of negative equity into a new loan?</summary>
              <p className="mt-1">Rarely without a large down payment or a cheap, high-value replacement. $10,000 of shortfall on a $28,000 car means financing ~136% of value, which prime lenders reject. Subprime lenders may allow it at very high APRs, which compounds the damage.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Is it smart to roll negative equity into a new car?</summary>
              <p className="mt-1">Usually not. You pay interest on the old shortfall plus the new car&apos;s depreciation, often ending up deeper underwater within a year. It only makes sense for an unsafe or dead car, with a short term, a big down payment, and gap coverage.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Does rolling over negative equity hurt your new loan rate?</summary>
              <p className="mt-1">Yes. A higher loan-to-value ratio signals more risk, so lenders charge a higher APR, require full coverage insurance, and may shorten the maximum term they offer you.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">What is better than rolling over negative equity?</summary>
              <p className="mt-1">Extra principal payments on the current loan, selling privately and paying the gap in cash, or refinancing to a lower rate. Our upside-down car loan guide ranks all five exits from cheapest to most expensive.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down car loan guide
            </Link>
            {", "}
            <Link href="/how-to-trade-in-car-guide" className="text-amber-200 underline underline-offset-2">
              trading in
            </Link>
            {", "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap insurance explained
            </Link>
            {" "}and{" "}
            <Link href="/auto-refinance-guide" className="text-amber-200 underline underline-offset-2">
              auto refinance guide
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
      <AdSlot format="multiplex" slot="TODO-auto-multiplex" />
    </div>
  );
}
