import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { ArticleJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "Lemon Law Guide: State Rules, Repair Attempts & Buybacks | LoanPay Auto",
  description:
    "Stuck with a defective car? How state lemon laws work: reasonable repair attempts, deadlines, documentation, buyback vs. replacement — with a case example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/lemon-law-guide",
  },
};

const CHECKLIST = [
  "Confirm your state covers your vehicle: most lemon laws target new cars under factory warranty (some cover used).",
  "Report defects in writing to the manufacturer or authorized dealer during the coverage window.",
  "Keep every repair order with dates, mileage, complaints, and days out of service.",
  "Learn your state's presumption: often 3–4 failed attempts for one defect or ~30 days out of service.",
  "Send required final-notice letters by certified mail before the deadline expires.",
  "Use state arbitration programs or a consumer attorney (many work on fee-shifting) before giving up.",
];

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "What qualifies a car as a lemon?",
    "answer": "A warranty-covered defect substantially impairing use, value, or safety that the manufacturer cannot fix after a reasonable number of attempts (often 3–4) or ~30 days out of service — exact tests vary by state."
  },
  {
    "question": "Do lemon laws cover used cars?",
    "answer": "Mostly they target new vehicles; some states extend to used cars still under factory warranty (e.g., New York's used-car law for dealer sales). Check your state — private sales are rarely covered."
  },
  {
    "question": "Refund or replacement — which is better?",
    "answer": "Refunds free you to choose any next car; replacements keep you in the brand without shopping. Compare the usage-offset deduction against the replacement's value before electing."
  },
  {
    "question": "Do I need a lawyer for a lemon claim?",
    "answer": "State arbitration programs handle many claims without one, but fee-shifting statutes mean consumer attorneys often cost you nothing upfront. Consult one before deadlines expire."
  }
];

export default function LemonLawPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <ArticleJsonLd title="Lemon Law Guide: State Rules, Repair Attempts & Buybacks | LoanPay Auto" description="Stuck with a defective car? How state lemon laws work: reasonable repair attempts, deadlines, documentation, buyback vs. replacement — with a case example." slug="lemon-law-guide" faqs={FAQS} />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Ownership &middot; consumer rights
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Lemon Law Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Every state has a lemon law, and no two are identical. Learn the shared framework —
          covered defects, reasonable attempts, deadlines, and remedies — plus exactly how to
          document a claim your state will honor.
        </p>
        <p className="mt-4 text-xs text-slate-500">By LoanPay Auto Editorial Team · Updated: October 2026</p>
      </section>
      <AdSlot format="in-article" slot="TODO-auto-in-article" />

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Claim checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Bought used with problems? Start with{" "}
            <Link href="/used-car-buying-checklist" className="text-amber-200 underline underline-offset-2">
              inspection basics
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The shared framework (and why states vary)</h2>
          <p className="mt-3">
            Lemon laws are state statutes giving buyers of seriously defective vehicles the right
            to a refund or replacement when the manufacturer cannot fix the problem after a
            reasonable number of attempts. The federal Magnuson-Moss Warranty Act backs them with
            baseline warranty rights nationwide, but the operative rules — which vehicles qualify,
            what counts as reasonable, how long you have, and how you file — are state law. A
            California claim (Song-Beverly Act, strong presumptions, 18-month/18,000-mile window)
            proceeds very differently from a claim in a state with shorter windows and no
            state-run arbitration.
          </p>
          <p className="mt-3">
            Three elements recur everywhere. The defect must substantially impair the
            vehicle&apos;s use, value, or safety — failed transmissions qualify; a squeaky trim
            panel does not — and must be covered by the manufacturer&apos;s warranty, not caused
            by abuse, neglect, or unauthorized modification. The manufacturer must receive a fair
            chance to repair through authorized channels. And the buyer must act within the
            state&apos;s window, commonly one to two years or 12,000–24,000 miles from delivery
            (New York: 2 years/18,000 miles; Florida&apos;s rights period: 24 months; Texas uses
            repair-attempt and serious-safety-hazard tests through the TxDMV process). Your
            state&apos;s attorney-general publication is the authoritative starting point —
            read it before anything else.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Reasonable attempts and presumptions</h2>
          <p className="mt-3">
            Most states create a &ldquo;presumption&rdquo; — a threshold where the vehicle is
            presumed a lemon unless the manufacturer proves otherwise. Common formulations: four
            unsuccessful repairs of the same defect; two attempts for defects threatening death
            or serious injury (brakes, steering); or roughly 30 cumulative days out of service
            within the window. Meeting a presumption does not auto-win (manufacturers rebut with
            abuse or non-substantiality arguments), and missing it does not auto-lose (patterns
            of failure still persuade arbitrators) — but the thresholds focus every claim
            strategy on counting attempts and days precisely.
          </p>
          <p className="mt-3">
            Documentation is therefore the claim. Every visit must generate a repair order
            stating your complaint verbatim, the mileage in and out, dates held, and work
            performed — review each order before leaving, because &ldquo;could not
            duplicate&rdquo; entries weaken patterns and missing dates destroy day-counts. Keep a
            contemporaneous log (photos, videos of the fault, correspondence), and send any
            state-required final-repair notice by certified or registered mail to the
            manufacturer (not just the dealer) at the address in your warranty book. Claims die
            far more often from thin paperwork than from weak facts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">State snapshots table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Illustrative examples — always verify your current state statute.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">State</th>
                  <th className="px-4 py-3 font-semibold">Typical window</th>
                  <th className="px-4 py-3 font-semibold">Common presumption</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">California</td><td className="px-4 py-2">18 mo / 18,000 mi</td><td className="px-4 py-2">4+ repairs (2 for serious safety) or 30+ days out</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">New York (new)</td><td className="px-4 py-2">2 yr / 18,000 mi</td><td className="px-4 py-2">4+ repairs or 30+ days out; AG arbitration</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Florida</td><td className="px-4 py-2">24-month rights period</td><td className="px-4 py-2">3+ same-defect repairs + final notice; state arbitration</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Texas</td><td className="px-4 py-2">Varies by test</td><td className="px-4 py-2">Repair-attempt or serious-hazard tests; TxDMV complaint</td></tr>
                <tr><td className="px-4 py-2">Washington</td><td className="px-4 py-2">30 mo for arbitration request</td><td className="px-4 py-2">4 claim categories; free AG arbitration hearing</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the stalling sedan that became a buyback</h2>
          <p className="mt-3">
            Eight months after buying new, Rosa&apos;s sedan begins stalling at idle. Visit 1
            (month 8): software update, &ldquo;could not duplicate after flash.&rdquo; Visit 2
            (month 9): throttle-body replacement; stalls recur within a week. Visit 3 (month 10):
            wiring-harness inspection, no fault found. Each time she keeps the order, logs dates
            and mileage, and videos two stalls. After visit 3 she mails the manufacturer&apos;s
            final-notice letter certified (as her state requires), and visit 4 (month 11) replaces
            the engine-control module — unsuccessfully. Four same-defect attempts plus 23 days out
            of service inside the window: the presumption trips cleanly.
          </p>
          <p className="mt-3">
            Through the state&apos;s arbitration program she wins a buyback: full purchase price
            minus a statutory mileage offset for the trouble-free early months, plus collateral
            charges (tax, registration) and attorney costs under the state&apos;s fee-shifting
            rule. Total recovery exceeds $30,000 on a car that endangered her at intersections.
            The deciding factors were never dramatic — written complaints matching across all
            four orders, unbroken day-counts, and a timely certified letter. Boring paperwork won
            a five-figure remedy, which is the entire moral of lemon law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Remedies, lawyers, and realistic expectations</h2>
          <p className="mt-3">
            Winning remedies are typically a refund (purchase price plus taxes, fees, and finance
            charges, minus a usage offset for pre-defect miles) or a comparable replacement
            vehicle — your election in many states, the manufacturer&apos;s in some. Attorney
            fees shift to the manufacturer in most statutes when you prevail, which is why
            consumer lemon-law attorneys commonly take strong cases at no upfront cost. Timelines
            run months (arbitration) to over a year (court); keep making loan or lease payments
            throughout, since the law provides no payment holiday and defaulting damages the very
            credit the recovery should protect.
          </p>
          <p className="mt-3">
            Set expectations honestly: intermittent electronics, &ldquo;normal characteristic&rdquo;
            defenses, and aftermarket modifications complicate claims, and used-car coverage (New
            York&apos;s used-car law is a national exception, not the rule) is thin in most
            states. If your car falls outside the lemon window, warranty litigation under
            Magnuson-Moss or state deceptive-practices theories may still help — consult a
            consumer attorney rather than abandoning the claim. And if you are shopping
            affordable risk instead, our{" "}
            <Link href="/certified-pre-owned-worth-it" className="text-amber-200 underline underline-offset-2">
              CPO guide
            </Link>{" "}
            and{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              auto loan guide on guides.loanpaylogic.com
            </a>{" "}
            cover safer ground.
          </p>
        </section>

        <section>
          <AdSlot format="display" slot="TODO-auto-mid" />
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">What qualifies a car as a lemon?</summary>
              <p className="mt-1">A warranty-covered defect substantially impairing use, value, or safety that the manufacturer cannot fix after a reasonable number of attempts (often 3–4) or ~30 days out of service — exact tests vary by state.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Do lemon laws cover used cars?</summary>
              <p className="mt-1">Mostly they target new vehicles; some states extend to used cars still under factory warranty (e.g., New York&apos;s used-car law for dealer sales). Check your state — private sales are rarely covered.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Refund or replacement — which is better?</summary>
              <p className="mt-1">Refunds free you to choose any next car; replacements keep you in the brand without shopping. Compare the usage-offset deduction against the replacement&apos;s value before electing.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4 group">
              <summary className="cursor-pointer font-semibold text-white">Do I need a lawyer for a lemon claim?</summary>
              <p className="mt-1">State arbitration programs handle many claims without one, but fee-shifting statutes mean consumer attorneys often cost you nothing upfront. Consult one before deadlines expire.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/salvage-title-guide" className="text-amber-200 underline underline-offset-2">
              title brands
            </Link>
            {" "}and{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal or financial advice. Lemon statutes differ by
            state and change over time. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and consult a licensed attorney in your state for advice about your claim.
          </p>
        </section>
      </article>
      <AdSlot format="multiplex" slot="TODO-auto-multiplex" />
    </div>
  );
}
