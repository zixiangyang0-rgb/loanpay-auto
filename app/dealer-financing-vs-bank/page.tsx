import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "Dealer Financing vs. Bank: Rate Markup & Buy Rate Explained | LoanPay Auto",
  description:
    "Dealer vs. bank auto loans compared: buy rate vs. contract rate, reserve markup,yo-yo scams, and how to force honest competition — with numbers.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/dealer-financing-vs-bank",
  },
};

const CHECKLIST = [
  "Arrive with a written preapproval so the dealer competes against a real number.",
  "Ask for the buy rate (what the lender approved) and the contract rate (what you pay) — in writing.",
  "Compare total interest and fees across offers, not monthly payments.",
  "Refuse spot-delivery pressure: do not take the car until financing is final and funded.",
  "Decline packed add-ons in the payment quote; price warranties and gap separately.",
  "Read the Retail Installment Contract before signing: rate, term, amount financed, total of payments.",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "Is dealer financing more expensive than a bank?",
    "answer": "Often, due to reserve markup — but not always. Captive subsidized rates can beat banks, so get a bank baseline and force the dealer to beat it in writing."
  },
  {
    "question": "What is the buy rate vs. the contract rate?",
    "answer": "The buy rate is what the lender approved wholesale; the contract rate is what you sign. The gap (up to ~2 points) is dealer reserve profit. Ask for both in writing."
  },
  {
    "question": "What is yo-yo financing?",
    "answer": "Spot delivery followed by a callback claiming financing “fell through” and demanding a higher rate. Prevent it by refusing possession until funding is final."
  },
  {
    "question": "Should I take the low APR or the cash rebate?",
    "answer": "Compute both all-in totals: (amount financed + total interest) with and without the rebate. Either can win depending on rate gap, term, and rebate size."
  }
];

export default function DealerVsBankPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Dealer Financing vs. Bank: Rate Markup & Buy Rate Explained | LoanPay Auto" description="Dealer vs. bank auto loans compared: buy rate vs. contract rate, reserve markup,yo-yo scams, and how to force honest competition — with numbers." slug="dealer-financing-vs-bank" faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Finance well &middot; loan sources
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Dealer Financing vs. Bank Loans
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The dealer&apos;s finance office is a loan store — convenient, competitive at times, and
          paid to mark up your rate. This guide explains buy rates, reserve, and the paperwork
          traps, so you can pit dealer and bank against each other and keep the savings.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Comparison checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Primer:{" "}
            <Link href="/auto-loan-preapproval-guide" className="text-amber-200 underline underline-offset-2">
              auto loan preapproval guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How dealer financing really works</h2>
          <p className="mt-3">
            Dealers rarely lend their own money. The finance manager submits your application to a
            network of banks, credit unions, and captive lenders (the automaker&apos;s finance
            arm), which return approvals at a wholesale &ldquo;buy rate&rdquo; — say, 6.9 percent
            for your tier. The dealer may then present a &ldquo;contract rate&rdquo; of 8.9
            percent and keep the 2-point spread as dealer reserve (participation), typically
            capped around 2 to 2.5 points by lender policy. On a $30,000 five-year loan, that
            single markup moves about $1,700 from your pocket to the dealership, invisible inside
            a $30-a-month payment bump.
          </p>
          <p className="mt-3">
            Banks and credit unions, by contrast, quote you the rate directly — no middleman
            spread, though also no access to captive subsidies. Captive lenders deserve special
            attention: manufacturer-subsidized rates (0.9 to 4.9 percent specials on new cars)
            routinely beat every bank, but they usually require top-tier credit and forfeit cash
            rebates as the tradeoff. The winning strategy is therefore triangular: secure a bank
            or credit-union baseline, solicit the dealer&apos;s best written offer (which may
            include a subsidized captive rate), and take whichever verified total cost is lower.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Head-to-head: strengths and weaknesses</h2>
          <p className="mt-3">
            Dealer financing wins on convenience (one stop, evenings and weekends), access to
            subsidized captive rates, and flexibility for challenged credit — special-finance
            departments place subprime loans banks would decline, albeit at steep APRs. Its
            weaknesses are opacity (buy rate hidden, add-ons packed into payments), pressure
            (the car, the clock, and the contract in one room), and the yo-yo scam, where buyers
            drive home on &ldquo;approved&rdquo; spot delivery, then get called back to sign a
            worse rate under threat of returning the car.
          </p>
          <p className="mt-3">
            Direct bank or credit-union lending wins on transparency (the quoted APR is the APR),
            generally lower used-car rates (credit unions especially), and freedom from the
            showroom clock. Its weaknesses: no captive subsidies, slower funding across
            institutions, and used-car age/mileage caps that can exclude older vehicles. Online
            lenders split the difference with fast quotes but impersonal service. None of these
            is categorically cheapest — the only honest answer is three written quotes on
            identical amount, term, and down payment, compared line by line.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Offer showdown table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Same $30,000 loan, 60 months — where the money goes.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">APR</th>
                  <th className="px-4 py-3 font-semibold">Payment</th>
                  <th className="px-4 py-3 font-semibold">Total interest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Credit union direct</td><td className="px-4 py-2">6.7%</td><td className="px-4 py-2">$589</td><td className="px-4 py-2">$5,347</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Bank direct</td><td className="px-4 py-2">7.4%</td><td className="px-4 py-2">$599</td><td className="px-4 py-2">$5,923</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Dealer (buy rate 6.9% + reserve)</td><td className="px-4 py-2">8.9%</td><td className="px-4 py-2">$621</td><td className="px-4 py-2">$7,238</td></tr>
                <tr><td className="px-4 py-2">Captive special (new, top tier)</td><td className="px-4 py-2">2.9%</td><td className="px-4 py-2">$538</td><td className="px-4 py-2">$2,292</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $1,891 markup</h2>
          <p className="mt-3">
            Jordan finances $30,000 for 60 months. Her credit-union preapproval reads 6.7 percent
            ($589/month, $5,347 interest). The dealer&apos;s finance office returns 8.9 percent
            ($621/month, $7,238 interest) without mentioning the 6.9 percent buy rate behind it.
            The $32 monthly difference looks trivial against a new-car high; its lifetime cost is
            $1,891 — a sum nobody would hand over as a single check, which is exactly why it is
            packaged as a payment. Asked directly, the manager drops to 7.2 percent
            (&ldquo;we&apos;re barely breaking even&rdquo;), still $576 above the credit union.
          </p>
          <p className="mt-3">
            Then the twist: the same dealer offers the captive 2.9 percent special — $538 a month,
            just $2,292 in interest — but only if Jordan forfeits a $2,000 cash rebate. Net
            comparison: special-rate route costs $28,000 financed + $2,292 interest = $30,292 all-in
            versus rebate route $26,000 + $5,347 = $31,347. The &ldquo;low rate&rdquo; genuinely
            wins by ~$1,000 here — but only visible because all four numbers sat side by side. For
            the amortization behind this, see{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Protecting yourself in the finance office</h2>
          <p className="mt-3">
            Three defenses cover most attacks. First, the written-offer rule: no number exists
            until it is printed with APR, term, amount financed, and total of payments — verbal
            rates evaporate at signing. Second, the unbundling rule: when the payment quote
            includes warranty, gap, or protection packages you did not request, ask for the
            payment with each item removed, one at a time, and price them independently (see our{" "}
            <Link href="/extended-warranty-pros-cons" className="text-amber-200 underline underline-offset-2">
              warranty guide
            </Link>{" "}
            and{" "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap guide
            </Link>
            ). Third, the spot-delivery rule: never take possession before funding is confirmed;
            if asked to sign a conditional-delivery agreement, leave the car until the loan is
            final — yo-yo callbacks prey on buyers already emotionally moved in.
          </p>
          <p className="mt-3">
            If your rate still feels high after purchase, refinancing windows open quickly — many
            lenders refinance after 3 to 6 months of on-time payments (our{" "}
            <Link href="/auto-refinance-guide" className="text-amber-200 underline underline-offset-2">
              refinance guide
            </Link>{" "}
            covers the math). And whatever you finance, confirm the insurance cost up front with{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            , since lenders mandate full coverage from day one.
          </p>
        </section>

        <section>
          <AdSlot format="display" slot="TODO-auto-mid" />
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Is dealer financing more expensive than a bank?</summary>
              <p className="mt-1">Often, due to reserve markup — but not always. Captive subsidized rates can beat banks, so get a bank baseline and force the dealer to beat it in writing.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">What is the buy rate vs. the contract rate?</summary>
              <p className="mt-1">The buy rate is what the lender approved wholesale; the contract rate is what you sign. The gap (up to ~2 points) is dealer reserve profit. Ask for both in writing.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">What is yo-yo financing?</summary>
              <p className="mt-1">Spot delivery followed by a callback claiming financing &ldquo;fell through&rdquo; and demanding a higher rate. Prevent it by refusing possession until funding is final.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Should I take the low APR or the cash rebate?</summary>
              <p className="mt-1">Compute both all-in totals: (amount financed + total interest) with and without the rebate. Either can win depending on rate gap, term, and rebate size.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/new-car-negotiation-guide" className="text-amber-200 underline underline-offset-2">
              new car negotiation
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
            This is general education, not financial advice. Lending practices and rate caps vary
            by state and lender. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and have every contract reviewed before signing.
          </p>
        </section>
      </article>
      <AdSlot format="multiplex" slot="TODO-auto-multiplex" />
    </div>
  );
}
