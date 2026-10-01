import type { Metadata } from "next";
import Link from "next/link";
import BuyVsLeaseEstimator from "./estimator";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "Buy vs. Lease Guide: Full Cost Comparison With Examples | LoanPay Auto",
  description:
    "Should you buy or lease your next car? Compare total costs, mileage limits, equity, and flexibility with a $32,000 worked example and interactive numbers.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/buy-vs-lease-guide",
  },
};

const CHECKLIST = [
  "Estimate your annual mileage honestly — over 12,000–15,000 miles a year usually favors buying.",
  "Compare total cash out over the same horizon (e.g., 3 years), not just monthly payments.",
  "Remember leases build zero equity; purchases build equity after depreciation slows.",
  "Price insurance for both paths — leased cars typically require higher liability limits.",
  "Check lease fine print: acquisition fee, disposition fee, mileage rate, and wear standards.",
  "Match the choice to your holding period: keep cars 6+ years? Buying almost always wins.",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "Is it cheaper to buy or lease a car?",
    "answer": "Leasing is usually cheaper month to month, but buying is usually cheaper per year of ownership once equity and payment-free years count — especially if you keep cars six or more years."
  },
  {
    "question": "How many miles can I drive on a lease?",
    "answer": "Most leases allow 10,000–12,000 miles per year (15,000-mile terms cost more). Excess miles run $0.15–$0.30 each, so check your real driving history before signing."
  },
  {
    "question": "Can I negotiate a lease price?",
    "answer": "Yes — negotiate the capitalized cost (selling price) exactly as you would a purchase price, then verify the money factor converts to a fair APR (multiply by 2,400) and matches your credit tier."
  },
  {
    "question": "What happens at the end of a car lease?",
    "answer": "You can return the car (paying disposition and any wear or mileage bills), buy it at the preset residual value, extend the lease, or trade it toward a new vehicle."
  },
  {
    "question": "Does leasing hurt your credit less than buying?",
    "answer": "Both appear as installment accounts and affect your score similarly. Leases sometimes show lower balances, but on-time payments help and missed payments hurt either way."
  }
];

export default function BuyVsLeasePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Buy vs. Lease Guide: Full Cost Comparison With Examples | LoanPay Auto" description="Should you buy or lease your next car? Compare total costs, mileage limits, equity, and flexibility with a $32,000 worked example and interactive numbers." slug="buy-vs-lease-guide" faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Buy smart &middot; financing basics
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Buy vs. Lease: The Full Cost Comparison Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Leasing looks cheaper month to month, and buying looks cheaper over a decade — both can
          be true at once. This guide compares the two paths on identical terms, shows where the
          money really goes, and helps you match the choice to your mileage, budget, and how long
          you actually keep cars.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Decision checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Financing the purchase? Read our{" "}
            <Link href="/auto-loan-preapproval-guide" className="text-amber-200 underline underline-offset-2">
              auto loan preapproval guide
            </Link>{" "}
            first.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What you are actually comparing</h2>
          <p className="mt-3">
            A purchase and a lease are answers to different questions. When you buy — whether with
            cash or a loan — you pay for the entire car: its price, sales tax on the full price in
            most states, interest on any loan, and all depreciation. In exchange, every payment
            builds equity, and once the loan is gone you can drive payment-free for years. The
            average American keeps a new car for roughly eight years, which means the typical buyer
            enjoys several years with no payment at all, and those years are the cheapest motoring
            of the car&apos;s life.
          </p>
          <p className="mt-3">
            A lease, by contrast, pays only for the slice of the car&apos;s life you use — its
            depreciation during the lease term plus interest (called the money factor), fees, and
            tax on the payments in most states. That is why lease payments run 20 to 40 percent
            lower than loan payments on the same car. But at lease end you own nothing: you return
            the keys, pay any end-of-lease charges, and start over. Serial leasing means a car
            payment forever, while serial buying means payments for roughly half your driving
            life. Neither is morally better; they simply allocate money across time differently.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The mileage question decides most cases</h2>
          <p className="mt-3">
            Standard leases allow 10,000 to 12,000 miles per year, with 15,000-mile leases
            available at a higher payment. Excess miles typically cost 15 to 30 cents each at
            turn-in. Drive 18,000 miles a year on a 12,000-mile lease and you will owe roughly
            $900 to $1,800 per year in overage — enough to erase any monthly-payment advantage in
            a single year. High-mileage drivers also face wear-and-tear charges more often, since
            tires, brakes, and interiors age with use rather than with the calendar.
          </p>
          <p className="mt-3">
            Buying has no mileage penalty at all, though miles still cost you through faster
            depreciation and earlier maintenance. The honest move is to check your real history:
            look at your last two years of driving (insurance renewal notices or oil-change
            stickers often record mileage) rather than guessing. If your life — a long commute, a
            road-trip habit, or rideshare driving — pushes you past 15,000 miles annually, buying
            is usually the safer financial choice, and leasing contracts may even prohibit
            commercial rideshare use entirely.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Side-by-side comparison</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Buying with a 60-month loan vs. a 36-month lease, same vehicle.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Buying</th>
                  <th className="px-4 py-3 font-semibold">Leasing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Monthly payment</td><td className="px-4 py-2">Higher (pays full price + interest)</td><td className="px-4 py-2">Lower (pays depreciation + rent charge)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Upfront cash</td><td className="px-4 py-2">Down payment + tax on full price</td><td className="px-4 py-2">Due at signing + acquisition fee (~$650)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Equity at end</td><td className="px-4 py-2">You own a car with resale value</td><td className="px-4 py-2">None (or buy out at residual)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Mileage</td><td className="px-4 py-2">Unlimited</td><td className="px-4 py-2">10k–15k/yr; $0.15–$0.30 per extra mile</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">End-of-term costs</td><td className="px-4 py-2">None; keep driving free</td><td className="px-4 py-2">Disposition fee (~$350–$500) + wear bills</td></tr>
                <tr><td className="px-4 py-2">Best for</td><td className="px-4 py-2">Keepers, high-mileage, customizers</td><td className="px-4 py-2">New-car-every-3-years, low-mileage drivers</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: a $32,000 car over 3 years</h2>
          <p className="mt-3">
            Take a $32,000 sedan. Buyer A puts $4,000 down and finances $28,000 at 7 percent APR
            for 60 months: the payment is about $554 a month. Over 36 months she pays $4,000 plus
            36 × $554, or roughly $23,944 out of pocket — and she owns a three-year-old car worth
            roughly $19,000 to $20,000. Her net three-year cost (cash out minus remaining value)
            is therefore about $4,000 to $5,000, or under $140 a month in true depreciation cost.
          </p>
          <p className="mt-3">
            Lessee B pays $3,500 due at signing and $419 a month for 36 months: total outlay about
            $18,584, and he walks away with nothing. Month to month the lease felt $135 cheaper,
            yet the buyer ends the period thousands ahead once equity counts. The lease only wins
            this comparison if the buyer sells early, crashes into negative equity with a tiny
            down payment, or values a new car every three years so highly that the premium is
            worth it. Try your own figures in the estimator below — and if you finance, compare
            the loan against a bank offer using our{" "}
            <Link href="/dealer-financing-vs-bank" className="text-amber-200 underline underline-offset-2">
              dealer financing vs. bank guide
            </Link>
            .
          </p>
          <div className="mt-4">
            <BuyVsLeaseEstimator />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">When leasing genuinely makes sense</h2>
          <p className="mt-3">
            Leasing earns its keep in three situations. First, drivers who truly want a new car
            every two to three years — for the latest safety tech or simply the pleasure of it —
            pay less per year of newness with leases than with rapid buy-and-trade cycles, which
            eat the steepest depreciation years repeatedly. Second, business owners who can deduct
            the business-use portion of lease payments sometimes find the tax treatment simpler
            than depreciating a purchased vehicle, though you should confirm the details with a
            tax professional. Third, cautious EV adopters use short leases to sidestep battery
            degradation and fast-moving technology without committing to long-term resale values.
          </p>
          <p className="mt-3">
            Even then, negotiate the lease as a purchase: agree on the selling price (capitalized
            cost) first, then discuss the money factor and residual. A dealer who discounts the
            price by $2,000 saves a lessee roughly $55 a month — discounts are not
            &ldquo;buyers only.&rdquo; At lease end, know your{" "}
            <Link href="/lease-end-options-guide" className="text-amber-200 underline underline-offset-2">
              lease-end options
            </Link>
            : if your car is worth more than the residual, buying it out (or trading it) captures
            that equity instead of handing it back. For a deeper loan walkthrough, see{" "}
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
              <summary className="cursor-pointer font-semibold text-white">Is it cheaper to buy or lease a car?</summary>
              <p className="mt-1">Leasing is usually cheaper month to month, but buying is usually cheaper per year of ownership once equity and payment-free years count — especially if you keep cars six or more years.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">How many miles can I drive on a lease?</summary>
              <p className="mt-1">Most leases allow 10,000–12,000 miles per year (15,000-mile terms cost more). Excess miles run $0.15–$0.30 each, so check your real driving history before signing.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Can I negotiate a lease price?</summary>
              <p className="mt-1">Yes — negotiate the capitalized cost (selling price) exactly as you would a purchase price, then verify the money factor converts to a fair APR (multiply by 2,400) and matches your credit tier.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">What happens at the end of a car lease?</summary>
              <p className="mt-1">You can return the car (paying disposition and any wear or mileage bills), buy it at the preset residual value, extend the lease, or trade it toward a new vehicle.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Does leasing hurt your credit less than buying?</summary>
              <p className="mt-1">Both appear as installment accounts and affect your score similarly. Leases sometimes show lower balances, but on-time payments help and missed payments hurt either way.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/total-cost-of-ownership-guide" className="text-amber-200 underline underline-offset-2">
              total cost of ownership
            </Link>
            ,{" "}
            <Link href="/lease-end-options-guide" className="text-amber-200 underline underline-offset-2">
              lease-end options
            </Link>
            , and{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>{" "}
            to price coverage for either path.
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Payments above are rounded
            illustrations — your rate, taxes, and fees will differ. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and confirm financing decisions with your lender or a licensed professional.
          </p>
        </section>
      </article>
      <AdSlot format="multiplex" slot="TODO-auto-multiplex" />
    </div>
  );
}
