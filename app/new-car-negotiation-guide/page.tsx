import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Car Negotiation Guide: Out-the-Door Tactics That Work | LoanPay Auto",
  description:
    "Negotiate a new car like a pro: invoice vs. MSRP, out-the-door pricing, fee traps, email scripts, and a $35,000 worked example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/new-car-negotiation-guide",
  },
};

const CHECKLIST = [
  "Get preapproved for a loan before visiting any dealer, so rate markup cannot hide in the payment.",
  "Negotiate the out-the-door price (all taxes and fees included), never the monthly payment.",
  "Solicit written bids from 3–5 dealers by email, including the VIN, stock number, and fee breakdown.",
  "Separate the three deals: purchase price, trade-in value, and financing — settle each on its own.",
  "Decline add-ons in the finance office until you have priced them independently (warranties, coatings, VIN etching).",
  "Shop at month-end or quarter-end when volume bonuses make managers flexible — but never rush past a bad number.",
];

export default function NegotiationPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Buy smart &middot; dealer tactics
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          New Car Negotiation Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Dealers negotiate car deals every day; most buyers do it once every few years. This
          guide closes that experience gap: how pricing really works, which fees are flexible,
          what to say by email and in person, and how a disciplined process saves thousands on a
          typical $35,000 purchase.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Negotiation checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            New to the whole process? Start with our{" "}
            <Link href="/first-time-car-buyer-guide" className="text-amber-200 underline underline-offset-2">
              first-time buyer guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How dealer pricing actually works</h2>
          <p className="mt-3">
            Every new car carries three important numbers. MSRP (the window sticker) is the
            manufacturer&apos;s suggested price — a starting point, not a market verdict. Invoice
            is roughly what the dealer paid the factory, typically 6 to 9 percent below MSRP, but
            even invoice overstates true cost because of holdback (a 2 to 3 percent rebate the
            factory pays the dealer after sale) and occasional stair-step bonuses for hitting
            monthly volume targets. A dealer selling $500 &ldquo;below invoice&rdquo; can still
            profit once holdback and bonuses land.
          </p>
          <p className="mt-3">
            Your target should be the market transaction price, not any of these landmarks.
            Third-party pricing tools aggregate real reported sales in your ZIP code — if a
            $35,000-MSRP crossover typically transacts at $32,500 nearby, that is your anchor,
            regardless of what invoice says. Setting your goal from live market data rather than
            from the sticker keeps you from &ldquo;winning&rdquo; a $1,000 discount on a car that
            routinely sells for $3,000 off. Print or save two or three data points before contact;
            specific numbers beat vague asks every time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Out-the-door price: the only number that matters</h2>
          <p className="mt-3">
            Dealers love to negotiate monthly payments because payments hide everything: price,
            rate markup, term stretching, fees, and add-ons all dissolve into one friendly number.
            A $35,000 car at 9 percent over 84 months can show nearly the same payment as a
            $31,000 car at 6 percent over 60 months — one deal costs you roughly $8,000 more in
            total. Insist instead on the out-the-door (OTD) figure: selling price plus tax, title,
            registration, and every fee, minus rebates. When every dealer quotes OTD on the
            identical VIN, comparison becomes arithmetic instead of theater.
          </p>
          <p className="mt-3">
            Expect the fee section to carry the padding. Documentation fees range from under $100
            in capped states to $800 or more elsewhere; they are rarely removable but always
            offsettable — a $699 doc fee simply means your price target drops $699. Watch for
            duplicates (a &ldquo;dealer prep&rdquo; charge on top of destination), market
            adjustments on scarce models, and pre-installed add-ons like nitrogen fills or door
            guards billed at multiples of their value. Ask for an itemized buyer&apos;s order
            before agreeing to anything, and treat any fee the dealer cannot explain as negotiable
            by definition.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Fee and add-on decoder</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Common line items on a buyer&apos;s order, and how to handle each.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Line item</th>
                  <th className="px-4 py-3 font-semibold">Typical range</th>
                  <th className="px-4 py-3 font-semibold">Your move</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Doc / processing fee</td><td className="px-4 py-2">$100–$800+</td><td className="px-4 py-2">Rarely removed; reduce price by the same amount</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Market adjustment</td><td className="px-4 py-2">$0–$5,000+</td><td className="px-4 py-2">Refuse or walk; shop a competing dealer</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">VIN etching / nitrogen / guards</td><td className="px-4 py-2">$200–$1,200</td><td className="px-4 py-2">Decline; worth a fraction of the charge</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Extended warranty / GAP in F&amp;I</td><td className="px-4 py-2">$1,500–$3,500</td><td className="px-4 py-2">Price independently first (see our warranty guide)</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Paint / fabric protection</td><td className="px-4 py-2">$400–$1,000</td><td className="px-4 py-2">Decline; detail shops do it for far less</td></tr>
                <tr><td className="px-4 py-2">Destination charge</td><td className="px-4 py-2">$1,100–$1,700</td><td className="px-4 py-2">Legitimate and fixed; already on the sticker</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: saving $3,400 on a $35,000 car</h2>
          <p className="mt-3">
            Maya targets a crossover with a $35,000 MSRP that pricing data shows transacting at
            $32,800 locally. She emails five dealers: &ldquo;Please quote your best out-the-door
            price on stock #A4123, 36-month/10k lease numbers excluded, with itemized taxes and
            fees, valid through Friday.&rdquo; Three respond with OTD figures from $35,900 to
            $37,200. She replies to the lowest two with the competing number and asks each to beat
            it by $300. The winner lands at $35,400 OTD — roughly a $31,900 selling price plus 8
            percent tax and modest fees — about $3,400 under a typical no-haggle first pencil.
          </p>
          <p className="mt-3">
            In the finance office she declines a $2,400 warranty (later priced at $1,450 from
            another dealer&apos;s online department — see our{" "}
            <Link href="/extended-warranty-pros-cons" className="text-amber-200 underline underline-offset-2">
              extended warranty guide
            </Link>
            ) and finances with her 6.5 percent preapproval instead of the 8.9 percent first
            offered, saving another ~$2,300 in interest over 60 months. Total discipline dividend:
            nearly $5,700. None of this required confrontation — just written bids, separated
            decisions, and willingness to leave. For loan mechanics, see{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Scripts that actually work</h2>
          <p className="mt-3">
            By email, specificity is leverage: name the exact VIN or stock number, request OTD with
            itemization, set a decision date, and mention you are soliciting multiple bids. In
            person, anchor on your researched number (&ldquo;My data shows $32,500 all-in before
            tax; can you get there?&rdquo;), then stop talking — silence is the buyer&apos;s
            cheapest tool. When the salesperson &ldquo;checks with the manager,&rdquo; let them;
            the manager&apos;s counter tells you where the real floor sits. And when numbers stall,
            switch currency: ask for accessories, service credits, or a fee deletion of equal
            value rather than grinding the same dollar.
          </p>
          <p className="mt-3">
            Two traps deserve special attention. The &ldquo;payment buyer&rdquo; trap reroutes
            every answer into monthly terms — counter by repeating &ldquo;let&apos;s settle the
            out-the-door first; we&apos;ll discuss payments after.&rdquo; The trade-in blur mixes
            your old car&apos;s value into the new car&apos;s price so neither can be judged —
            insist on a written trade appraisal before price talks (our{" "}
            <Link href="/how-to-trade-in-car-guide" className="text-amber-200 underline underline-offset-2">
              trade-in guide
            </Link>{" "}
            covers the sequence). Finally, never negotiate under manufactured urgency:
            &ldquo;this price expires tonight&rdquo; is a tactic, and genuine incentives return
            next month under a new name.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is a good discount off MSRP on a new car?</h3>
              <p className="mt-1">It varies by model and region — check live transaction data for your ZIP code rather than chasing a fixed percent. Mainstream cars often transact 5–10% under MSRP; scarce or redesigned models may sell at sticker.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should I negotiate monthly payment or total price?</h3>
              <p className="mt-1">Total out-the-door price, always. Monthly payments can hide rate markup, stretched terms, and packed fees. Settle price first, then evaluate financing separately.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">When is the best time to buy a new car?</h3>
              <p className="mt-1">Month-end and quarter-end help because of volume bonuses, and model-year changeover (late summer–fall) discounts outgoing years. But a competitive multi-dealer bid beats any calendar trick.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are dealer doc fees negotiable?</h3>
              <p className="mt-1">They are rarely deleted (dealers cite policy), but they are always offsettable — simply lower your price offer by the fee amount and compare out-the-door totals.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/dealer-financing-vs-bank" className="text-amber-200 underline underline-offset-2">
              dealer financing vs. bank
            </Link>
            ,{" "}
            <Link href="/how-to-trade-in-car-guide" className="text-amber-200 underline underline-offset-2">
              how to trade in your car
            </Link>
            , and{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>{" "}
            to budget coverage on the new car.
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Prices, fees, and incentives vary by
            dealer, region, and model. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and confirm every figure on your buyer&apos;s order before signing.
          </p>
        </section>
      </article>
    </div>
  );
}
