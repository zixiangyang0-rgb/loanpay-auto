import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Usage-Based Insurance Guide: Telematics, Pay-Per-Mile & Privacy | LoanPay Auto",
  description:
    "How usage-based insurance works: telematics discounts up to 30%, pay-per-mile math, what data is collected, and a 8,000-mile worked example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/usage-based-insurance-guide",
  },
};

const CHECKLIST = [
  "Estimate your annual mileage first — under ~10,000 miles is where UBI usually wins.",
  "Know the two flavors: behavior telematics (how you drive) vs. pay-per-mile (how much).",
  "Ask what raises rates, not just what lowers them — some programs surcharge risky patterns.",
  "Check data terms: what is collected, who sees it, and whether it can be sold or subpoenaed.",
  "Trial it risk-free where offered: many carriers preview your discount before you commit.",
  "Recompute yearly — mileage and habits change, and the best program changes with them.",
];

export default function UbiPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Insurance &middot; telematics
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Usage-Based Insurance Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Traditional insurance prices the average driver like you. Usage-based insurance prices
          you like you — your miles, your braking, your late nights. For the right driver the
          savings reach 30 percent; for the wrong one, costs rise. Here is how to tell which you
          are.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">UBI checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Baseline your premium:{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              auto insurance cost calculator
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The two flavors of UBI</h2>
          <p className="mt-3">
            Behavior-based telematics (snapshot-style programs) score how you drive: hard braking
            events, rapid acceleration, cornering forces, phone handling, speeding, and time of
            day (midnight-to-4 a.m. miles rate worst). Safe patterns earn 10–30 percent off at
            renewal; several programs now also surcharge or non-renew the riskiest decile, so the
            trial is not always free money. Enrollment typically brings an immediate 5–10 percent
            participation discount, with the full personalized rate set after a 3–6-month
            observation period via app or plug-in device.
          </p>
          <p className="mt-3">
            Pay-per-mile programs charge a modest base rate plus a few cents per mile (commonly
            4–8 cents depending on profile and territory), verified by odometer photos or a
            device. The math is transparent: 8,000 miles at 6 cents costs $480 plus base, while
            18,000 miles costs $1,080 plus base — low-mileage drivers (remote workers, retirees,
            second-car households, city dwellers) win clearly, and high-mileage drivers should
            stay traditional. Some carriers blend both: per-mile pricing adjusted by behavior
            scores, rewarding gentle low-mileage drivers doubly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who wins and who loses</h2>
          <p className="mt-3">
            Clear winners: smooth, daytime, low-mileage drivers — the retiree running 6,000
            gentle miles, the remote worker whose car rests all week, the careful teen whose
            telematics discount offsets the new-driver surcharge (see our{" "}
            <Link href="/car-insurance-new-drivers-guide" className="text-amber-200 underline underline-offset-2">
              new-driver guide
            </Link>
            ). Clear losers: late-night commuters, hard brakers in stop-and-go traffic (the
            algorithm cannot tell defensive braking from aggressive driving), high-mileage
            road warriors, and anyone whose phone mounts as a work tool — handling events ding
            scores even for navigation glances.
          </p>
          <p className="mt-3">
            The privacy tradeoff is real and should be priced honestly. Programs collect
            granular location and motion data, retained for years under most privacy policies;
            disclosures generally permit sharing with affiliates and service providers, and data
            in carrier hands can be subpoenaed after accidents. If that exchange unsettles you,
            odometer-based low-mileage discounts (no tracking, just periodic photos) capture
            much of the savings with none of the surveillance. Never trade data you would not
            happily show a claims adjuster — because one day you might.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Program comparison table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Typical UBI structures and their ideal drivers.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Program type</th>
                  <th className="px-4 py-3 font-semibold">Typical saving</th>
                  <th className="px-4 py-3 font-semibold">Ideal driver</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Behavior telematics</td><td className="px-4 py-2">10–30% off renewal</td><td className="px-4 py-2">Smooth, daytime, phone-free drivers</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Pay-per-mile</td><td className="px-4 py-2">20–40% under 8k mi/yr</td><td className="px-4 py-2">Remote workers, second cars, retirees</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Odometer low-mileage</td><td className="px-4 py-2">5–15% under 7.5k mi/yr</td><td className="px-4 py-2">Privacy-conscious low-mileage drivers</td></tr>
                <tr><td className="px-4 py-2">Trial-then-decide</td><td className="px-4 py-2">Preview before switch</td><td className="px-4 py-2">Skeptics wanting risk-free data</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the 8,000-mile remote worker</h2>
          <p className="mt-3">
            Jordan works from home and drives 8,000 miles a year, mostly daytime errands. Her
            traditional premium: $1,900. Option A, pay-per-mile: $35/month base ($420) plus 6
            cents × 8,000 miles ($480) = $900 — a $1,000 saving, 53 percent. Option B, behavior
            telematics: smooth driving earns 25 percent off, or $1,425 — a $475 saving with
            continuous location tracking attached. She takes pay-per-mile (odometer-verified, no
            app tracking) and banks the larger saving with the smaller data footprint.
          </p>
          <p className="mt-3">
            Contrast her brother, a 20,000-mile sales rep with a heavy right foot: pay-per-mile
            would cost him $420 + $1,200 = $1,620 before behavior adjustments (roughly
            break-even), while telematics would likely surcharge his hard-braking highway
            pattern. He stays traditional — correctly. The lesson: UBI rewards measured personal
            inputs, never assumptions. Carrying a loan on either car? The mechanics at{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>{" "}
            still apply.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Shopping and switching safely</h2>
          <p className="mt-3">
            Compare UBI against your best traditional quote, not your current bill — a 25 percent
            telematics discount off an overpriced base still loses to a cheap competitor&apos;s
            standard rate. Favor carriers offering trial periods that preview the discount (or
            confirm no surcharge) before you move the policy. Ask explicitly: can scores raise my
            rate, what data is retained and shared, does the discount survive a single claim, and
            what happens to the device data if I leave? Get the answers in the policy documents,
            not the marketing page.
          </p>
          <p className="mt-3">
            Revisit annually alongside mileage: a return to commuting can flip pay-per-mile from
            hero to villain in one renewal, while improved habits deepen telematics discounts
            over time. And keep the rest of the insurance stack sound — adequate liability
            limits, well-chosen deductibles, and gap coverage where loans demand it (see{" "}
            <Link href="/gap-insurance-explained" className="text-amber-200 underline underline-offset-2">
              gap insurance
            </Link>
            ). UBI optimizes price; only sound coverage choices optimize protection.
          </p>
          <p className="mt-3">
            One final filter: multiply any quoted percentage saving by your actual premium
            before getting excited. A 30 percent telematics discount on a $900 policy saves $270
            a year — worth an app, certainly — while the same 30 percent on a $3,600 teen policy
            saves over $1,000 and may decide which car the family buys. Percentage discounts are
            marketing; dollar savings are decisions. Compute yours with the carrier&apos;s trial
            quote in one hand and your current declarations page in the other, and switch only
            when the dollars — net of any lost bundling or loyalty discounts — clearly favor the
            move.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How much can telematics save?</h3>
              <p className="mt-1">Typically 10–30% for safe patterns, plus 5–10% just for enrolling. Aggressive patterns may earn little — and a few programs surcharge the riskiest drivers.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Is pay-per-mile worth it?</h3>
              <p className="mt-1">Usually yes under ~10,000 miles/year — savings of 20–40% are common. Above ~15,000 miles, traditional policies typically win. Do the per-mile math on your odometer.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What data do UBI programs collect?</h3>
              <p className="mt-1">Location, speed, braking, acceleration, cornering, phone handling, and time of day — retained for years and shareable under the privacy policy. Odometer-only programs collect far less.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can UBI raise my rates?</h3>
              <p className="mt-1">With most behavior programs your discount simply shrinks; a minority surcharge risky patterns. Ask before enrolling, and prefer trial-then-decide offers if you are unsure.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do I need special hardware for telematics?</h3>
              <p className="mt-1">Most 2026 programs run on your smartphone — no plug-in device needed. A few still offer OBD-II dongles for cars without connected services; either way, setup takes minutes and removal restores the standard rate.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/total-cost-of-ownership-guide" className="text-amber-200 underline underline-offset-2">
              total cost of ownership
            </Link>
            {" "}and{" "}
            <Link href="/car-maintenance-costs-guide" className="text-amber-200 underline underline-offset-2">
              maintenance costs
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not insurance or financial advice. Programs, discounts,
            and privacy terms vary by state and carrier. Read our full{" "}
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
