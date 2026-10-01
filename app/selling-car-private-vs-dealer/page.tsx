import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selling Your Car Private vs. Dealer: Net Proceeds Compared | LoanPay Auto",
  description:
    "Private sale vs. dealer vs. instant cash: net proceeds, effort, timing, paperwork, and scam screens — with a $16,000 worked example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/selling-car-private-vs-dealer",
  },
};

const CHECKLIST = [
  "Value the car three ways: instant-cash bids (floor), dealer appraisals (middle), private listings (ceiling).",
  "Prep for the chosen channel: detail + records for private; basic clean for instant buyers.",
  "If private: price from comparable sold listings, screen buyers, meet safe, verify funds before signing.",
  "If trading: separate trade and purchase negotiations, and compute your state's tax credit.",
  "Clear the loan first in every channel — get the 10-day payoff and route funds through the lienholder.",
  "File release-of-liability / transfer notice with your DMV immediately after handover.",
];

export default function SellingPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Sell well &middot; exit strategies
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Selling Your Car: Private vs. Dealer
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The same car can net $13,000 or $16,000 depending on where you sell it — the gap is
          effort, timing, and risk. Compare all three channels honestly, then execute the winner
          without drama.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Selling checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Trading toward another car? See{" "}
            <Link href="/how-to-trade-in-car-guide" className="text-amber-200 underline underline-offset-2">
              how to trade in
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The three channels, honestly priced</h2>
          <p className="mt-3">
            Private-party sale pays most — typically 10–20 percent above dealer bids — because the
            buyer pays retail without a middleman&apos;s reconditioning and profit. The costs are
            yours: listings and photos, showings to strangers, test drives (verify their
            insurance and ride along, holding the keys to their car as custom suggests), price
            haggling, payment risk, and timeline uncertainty measured in weeks. Desirable,
            sensibly priced mainstream cars move in days; niche, modified, or overpriced cars
            linger for months while depreciating and insuring against you.
          </p>
          <p className="mt-3">
            Dealer trade or direct purchase pays wholesale-minus — the appraiser&apos;s number
            less reconditioning and margin — but closes in hours with zero stranger risk, handles
            loan payoffs internally, and may earn a sales-tax credit worth $500–$1,500 where you
            buy simultaneously (see our{" "}
            <Link href="/how-to-trade-in-car-guide" className="text-amber-200 underline underline-offset-2">
              trade-in guide
            </Link>
            ). Instant-cash buyers (online retailers, chain stores) sit between: firm seven-day
            offers near dealer money with the least friction of all — the rational floor every
            seller should establish before choosing. None of the channels is &ldquo;best&rdquo;;
            each is best for a different seller.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Channel comparison table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Net results on a car with $16,000 private-party value.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Channel</th>
                  <th className="px-4 py-3 font-semibold">Typical net</th>
                  <th className="px-4 py-3 font-semibold">Time / effort</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Private party</td><td className="px-4 py-2">$15,200–$16,000</td><td className="px-4 py-2">1–4 weeks; listings, showings, paperwork</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Dealer trade (+ tax credit)</td><td className="px-4 py-2">$13,800–$14,800 effective</td><td className="px-4 py-2">Same day; bundled with purchase</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Instant-cash buyer</td><td className="px-4 py-2">$13,500–$14,500</td><td className="px-4 py-2">1–2 days; one appointment</td></tr>
                <tr><td className="px-4 py-2">Dealer direct (no purchase)</td><td className="px-4 py-2">$13,000–$14,000</td><td className="px-4 py-2">Same day; negotiable with bids</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $16,000 decision tree</h2>
          <p className="mt-3">
            Sam&apos;s 2019 sedan carries $16,000 of private-party value and a paid-off title.
            Instant bids: $13,900 and $14,200. Dealer appraisal: $13,600 — but he is buying a
            $30,000 replacement in a 6.5-percent-tax state, where trading credits $13,600 × 6.5%
            = $884 in sales-tax savings, for an effective $14,484. Private sale at a realistic
            $15,600 (slight haggle discount) nets $15,600 minus ~$100 in listing/detail costs =
            $15,500 — about $1,000 ahead of the trade route, for an estimated 10–15 hours of
            effort across two weekends.
          </p>
          <p className="mt-3">
            Sam values his weekends and dislikes stranger meetings, but $1,000 for ~12 hours
            ($83/hour, tax-free — private auto sales are generally not taxable income on
            depreciated personal cars) beats his overtime rate. He lists at $16,200 with superb
            photos and records, sells in nine days at $15,700, transacts at the buyer&apos;s bank
            with a verified cashier&apos;s check, and files the DMV release the same evening.
            Had he carried a loan balance near value, the trade route&apos;s payoff handling plus
            tax credit might have won — channel choice always prices personal constraints, not
            just gross proceeds.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Private-sale execution and scam screens</h2>
          <p className="mt-3">
            Price from sold comparables (not asking prices), present the car detailed with
            daylight photos from every angle plus interior, odometer, and flaws disclosed
            upfront — disclosed flaws build trust and rarely reduce price, while discovered ones
            kill deals. Write ads with VIN, mileage, trim, service history, title status, and
            reason for selling; omit your home address and use a call-screening number. Meet in
            daylight at public locations (many police stations offer sale zones), verify the
            buyer&apos;s license and insurance before any drive, and ride along on every test
            drive.
          </p>
          <p className="mt-3">
            Payment discipline is non-negotiable: cashier&apos;s checks verified by phone with
            the issuing bank (not the printed number), wire transfers confirmed in your account,
            or cash counted at your bank — never personal checks, overpayment &ldquo;refunds,&rdquo;
            gift cards, or off-platform escrow links (all classic scams). With a lien, transact
            at your lender or the buyer&apos;s bank so payoff and title release happen in one
            supervised sitting. Complete a bill of sale (VIN, mileage, price, as-is, signatures),
            file the state release-of-liability immediately, cancel or transfer insurance only
            after funds clear, and remove plates per your state&apos;s rule. Financing your next
            car? Start at{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Timing and prep that lift every channel</h2>
          <p className="mt-3">
            Sell in spring for peak demand (tax refunds, summer-trip planning), with fresh
            inspection, serviced fluids, and every record organized — the same $200 of prep lifts
            private prices and dealer appraisals alike (see our{" "}
            <Link href="/car-depreciation-guide" className="text-amber-200 underline underline-offset-2">
              depreciation timing notes
            </Link>
            ). Sell before mileage thresholds (60k, 100k) and before major service intervals come
            due, since buyers and appraisers deduct retail repair costs. Fuel and insure the
            replacement before listing — a sold car with no next car is a rental bill, and
            coverage gaps invite disaster. Quote the new policy early at{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            .
          </p>
          <p className="mt-3">
            Underwater sellers need the trade-or-cash calculus from our{" "}
            <Link href="/upside-down-car-loan-guide" className="text-amber-200 underline underline-offset-2">
              upside-down guide
            </Link>
            : private sale maximizes value against the payoff, while trading minimizes hassle at
            a lower number. Either way, get the 10-day payoff in writing first — every channel
            prices off that figure, and verbal balances drift.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do I get more selling private or to a dealer?</h3>
              <p className="mt-1">Private sale typically nets 10–20% more — often $1,000–$3,000 on mainstream cars — at the cost of weeks of effort and stranger risk. Dealer and instant buyers trade dollars for speed and safety.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How do I avoid scams selling my car?</h3>
              <p className="mt-1">Accept only verifiable funds (bank-verified cashier&apos;s check, confirmed wire, or bank-lobby cash), meet publicly, never accept overpayments, and complete lien payoffs inside a bank.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I sell a car with a loan on it?</h3>
              <p className="mt-1">Yes — get the 10-day payoff quote, then transact at a bank so the buyer&apos;s funds retire the lien and the title releases cleanly. Any equity above payoff is yours.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">When is trading in smarter than selling private?</h3>
              <p className="mt-1">When the sales-tax credit plus convenience nears private net, when you carry tricky payoff logistics, or when your time values above the ~$1,000–$2,000 typical gap.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/car-depreciation-guide" className="text-amber-200 underline underline-offset-2">
              depreciation
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
            This is general education, not financial advice. Values, taxes, and procedures vary
            by state and market. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
