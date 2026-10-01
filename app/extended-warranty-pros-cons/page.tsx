import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "Extended Warranty Pros & Cons: Service Contracts Decoded | LoanPay Auto",
  description:
    "Should you buy an extended car warranty? Pricing, exclusion lists, claim realities, and the self-insure test — with a $2,400 worked example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/extended-warranty-pros-cons",
  },
};

const CHECKLIST = [
  "Identify what factory warranty remains — never pay to duplicate coverage you already have.",
  "Demand the full exclusion list and sample contract before discussing price.",
  "Check who administers claims and pays the shop: manufacturer, dealer, or third party.",
  "Compare at least two quotes (another dealer's internet department, your bank or insurer).",
  "Verify cancellation terms: pro-rata refunds should be available within 30–60 days.",
  "Run the self-insure test: could you cover the likeliest repair from savings instead?",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "Are extended car warranties worth it?",
    "answer": "Sometimes — mainly for repair-prone vehicles owned past factory coverage by buyers without a repair reserve. On reliable cars, the average holder claims less than the premium."
  },
  {
    "question": "Can I buy an extended warranty later?",
    "answer": "Yes. Manufacturer contracts are usually available until the factory warranty expires, and third-party plans anytime. Never let urgency force a finance-office signature."
  },
  {
    "question": "What voids an extended warranty?",
    "answer": "Common killers: missed scheduled maintenance, unapproved modifications, commercial use on a personal contract, and pre-existing conditions found at claim time. Read the booklet."
  },
  {
    "question": "Can I cancel an extended warranty?",
    "answer": "Usually yes — full refund within 30–60 days, pro-rata after (minus a fee). If financed, the refund goes to the lender and lowers your balance rather than your pocket."
  }
];

export default function WarrantyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Extended Warranty Pros & Cons: Service Contracts Decoded | LoanPay Auto" description="Should you buy an extended car warranty? Pricing, exclusion lists, claim realities, and the self-insure test — with a $2,400 worked example." slug="extended-warranty-pros-cons" faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Ownership &middot; protection products
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Extended Warranty Pros &amp; Cons
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          In the finance office, an extended warranty can feel like cheap peace of mind rolled
          into the payment. This guide decodes what these service contracts really cover, what
          they cost, when they pay off — and when your savings account is the better warranty.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Buyer checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Also consider the related decision:{" "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap insurance explained
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What you are actually buying</h2>
          <p className="mt-3">
            Despite the name, most &ldquo;extended warranties&rdquo; are vehicle service contracts,
            not warranties: prepaid repair agreements regulated differently from factory coverage.
            Manufacturer-backed contracts (sold through franchised dealers, administered by the
            automaker) mirror factory terms, are honored at any same-brand dealer, and generally
            pay claims with the least friction. Third-party contracts vary wildly — from reputable
            national administrators to thinly capitalized marketers whose business model depends
            on denied claims and lapsed cancellations.
          </p>
          <p className="mt-3">
            Coverage tiers matter more than brand names. Exclusionary (&ldquo;bumper-to-bumper
            style&rdquo;) contracts list only what is NOT covered and cover everything else —
            the strongest tier. Stated-component contracts list covered parts and cover nothing
            else; powertrain-only plans cover engine, transmission, and drivetrain while excluding
            the electronics and climate systems that generate most modern repair bills. A $1,800
            powertrain plan on a car whose likely failures are infotainment and suspension is
            nearly worthless, while a $2,600 exclusionary plan on a repair-prone luxury car can
            be rational. Always match the tier to the car&apos;s documented weak points.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The honest pros and cons</h2>
          <p className="mt-3">
            The genuine advantages: budget smoothing (a fixed $2,400 contract beats a surprise
            $3,800 transmission bill for cash-tight households), access to dealer-quality repair
            without haggling over diagnostics, and higher resale value on private sales where a
            transferable contract reassures buyers. For complex, repair-prone vehicles owned past
            80,000 miles — German luxury SUVs, early-model-year redesigns, high-tech EVs out of
            battery warranty — expected claim values can exceed the premium, especially for buyers
            without a repair reserve.
          </p>
          <p className="mt-3">
            The genuine disadvantages: steep markups (finance-office contracts often carry 50 to
            100 percent markup over the dealer&apos;s cost, which is why the price drops when you
            hesitate), broad exclusions (wear items, trim, software, pre-existing conditions, and
            failures caused by missed maintenance are nearly always excluded), claim friction
            (prior authorization, teardown fees if the claim is denied, and shops that refuse
            certain administrators), and overlap with factory powertrain coverage you already own.
            Consumer data consistently shows the average contract holder claims less than the
            premium — that gap is the industry&apos;s profit, and your expected loss.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Contract comparison table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Typical 5-year/100,000-mile quotes for a 3-year-old mainstream SUV.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Contract type</th>
                  <th className="px-4 py-3 font-semibold">Typical price</th>
                  <th className="px-4 py-3 font-semibold">Deductible</th>
                  <th className="px-4 py-3 font-semibold">Claim ease</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Manufacturer exclusionary</td><td className="px-4 py-2">$2,200–$3,000</td><td className="px-4 py-2">$0–$100</td><td className="px-4 py-2">High — any brand dealer</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Manufacturer powertrain</td><td className="px-4 py-2">$1,400–$2,000</td><td className="px-4 py-2">$100</td><td className="px-4 py-2">High — but narrow coverage</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Reputable third-party exclusionary</td><td className="px-4 py-2">$1,800–$2,800</td><td className="px-4 py-2">$100–$250</td><td className="px-4 py-2">Medium — authorization required</td></tr>
                <tr><td className="px-4 py-2">Budget third-party stated-part</td><td className="px-4 py-2">$900–$1,500</td><td className="px-4 py-2">$250+</td><td className="px-4 py-2">Low — long exclusion lists</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $2,400 decision</h2>
          <p className="mt-3">
            Priya buys a 3-year-old crossover with 45,000 miles. The finance office offers an
            exclusionary manufacturer contract: $2,400, 5 years/100,000 miles, $100 deductible. She
            pauses, calls two other same-brand dealers&apos; internet departments, and gets
            $1,850 for the identical contract — first lesson: the product is commoditized, the
            markup is not. Her model&apos;s data shows average covered repairs of ~$550/year in
            years 4–7, or ~$2,200 expected claims over the contract window, against an $1,850
            premium plus maybe $200 in deductibles.
          </p>
          <p className="mt-3">
            Expected value is roughly break-even ($2,200 in claims vs. $2,050 all-in cost), so the
            tiebreakers decide: she keeps no emergency fund yet (favors buying), drives 18,000
            miles a year (will use the coverage fast — favors buying), but her car&apos;s
            reliability record is above average (favors skipping). She buys at the $1,850 price
            for budget smoothing, and cancels nothing. Had the only offer stayed $2,400 with a
            third-party administrator, the math plus the friction would have pointed to
            self-insuring: routing $100 a month into a repair fund instead. Either answer is
            defensible — what is never defensible is signing at first pencil without a competing
            quote.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Rules for buying well (or skipping wisely)</h2>
          <p className="mt-3">
            Never buy under time pressure in the finance office; every legitimate contract is
            available for weeks after purchase (often up to the factory warranty&apos;s end).
            Price the identical manufacturer contract from high-volume dealers online, your bank,
            or your auto insurer — mechanical-breakdown coverage from insurers is frequently the
            cheapest option for qualifying cars. Read the exclusion list and the maintenance
            clause: missed oil changes can void claims, and modified vehicles often void
            powertrain coverage entirely.
          </p>
          <p className="mt-3">
            Skip the contract when the car is highly reliable with cheap parts, when you drive
            little (time-based expiry wastes coverage), when you will sell before the factory
            warranty ends, or when you hold six months of expenses in savings — self-insuring
            beats the average contract by design. And remember the finance-office bundle: a
            warranty rolled into your loan accrues interest (a $2,400 contract at 8 percent over
            60 months costs ~$2,900 all-in). See{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>{" "}
            for that math, and budget baseline upkeep with our{" "}
            <Link href="/car-maintenance-costs-guide" className="text-amber-200 underline underline-offset-2">
              maintenance costs guide
            </Link>
            .
          </p>
        </section>

        <section>
          <AdSlot format="display" slot="TODO-auto-mid" />
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Are extended car warranties worth it?</summary>
              <p className="mt-1">Sometimes — mainly for repair-prone vehicles owned past factory coverage by buyers without a repair reserve. On reliable cars, the average holder claims less than the premium.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Can I buy an extended warranty later?</summary>
              <p className="mt-1">Yes. Manufacturer contracts are usually available until the factory warranty expires, and third-party plans anytime. Never let urgency force a finance-office signature.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">What voids an extended warranty?</summary>
              <p className="mt-1">Common killers: missed scheduled maintenance, unapproved modifications, commercial use on a personal contract, and pre-existing conditions found at claim time. Read the booklet.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Can I cancel an extended warranty?</summary>
              <p className="mt-1">Usually yes — full refund within 30–60 days, pro-rata after (minus a fee). If financed, the refund goes to the lender and lowers your balance rather than your pocket.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/certified-pre-owned-worth-it" className="text-amber-200 underline underline-offset-2">
              is CPO worth it
            </Link>
            {" "}and{" "}
            <Link href="/total-cost-of-ownership-guide" className="text-amber-200 underline underline-offset-2">
              total cost of ownership
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial advice. Contract terms and prices vary by
            provider and vehicle. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and read every contract booklet before you pay.
          </p>
        </section>
      </article>
      <AdSlot format="multiplex" slot="TODO-auto-multiplex" />
    </div>
  );
}
