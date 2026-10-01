import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salvage Title Guide: Rebuilt Cars, Risks & Value | LoanPay Auto",
  description:
    "What salvage, rebuilt, flood, and lemon-law title brands mean for safety, insurance, financing, and resale — with a 40%-discount worked example.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/salvage-title-guide",
  },
};

const CHECKLIST = [
  "Learn your state's brand vocabulary: salvage, rebuilt, flood, junk, lemon-law buyback all differ.",
  "Demand pre-repair photos and the full damage/repair file — no documentation, no deal.",
  "Get a frame-and-structure inspection from a body specialist, not just a mechanical PPI.",
  "Confirm insurance and financing in advance — many carriers and lenders restrict branded titles.",
  "Discount ruthlessly: 30–50% under clean-title value is the starting point, not the floor.",
  "Plan the exit: branded cars resell only to bargain hunters, at steep discounts, slowly.",
];

export default function SalvagePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          Buy smart &middot; title brands
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Salvage Title Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Branded-title cars sell for thousands less — sometimes fairly, sometimes as traps for
          the uninformed. Learn what each brand means, when the discount is genuine value, and
          when to walk away.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Branded-title checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            For clean-title shopping:{" "}
            <Link href="/used-car-buying-checklist" className="text-amber-200 underline underline-offset-2">
              used-car checklist
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">What the brands actually mean</h2>
          <p className="mt-3">
            A &ldquo;salvage&rdquo; brand means an insurer declared the car a total loss —
            damage (collision, flood, fire, theft recovery, hail) approaching or exceeding a
            state threshold, commonly 70–80 percent of value. Salvage cars generally cannot be
            registered or driven until repaired and re-inspected, at which point many states
            issue a &ldquo;rebuilt&rdquo; (or reconstructed) brand permitting road use. The brand
            follows the VIN permanently through national databases — there is no washing it off
            legally, and &ldquo;title washing&rdquo; via lenient states is fraud in most
            jurisdictions.
          </p>
          <p className="mt-3">
            Related brands carry their own warnings. Flood titles signal corrosion and
            electronic gremlins that surface for years — the highest-risk brand, since damage
            hides everywhere. Lemon-law buybacks (see our{" "}
            <Link href="/lemon-law-guide" className="text-amber-200 underline underline-offset-2">
              lemon law guide
            </Link>
            ) were repurchased for unfixable defects; some are genuinely cured, others are
            chronic. Theft-recovery brands can be bargains when damage was cosmetic (stripped
            interiors, missing wheels), since nothing structural failed — the rare brand where
            the story favors the buyer. Hail brands are cosmetic-only in most cases, making them
            the second-best value when panels (not glass and trim) took the beating.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The three real risks</h2>
          <p className="mt-3">
            Safety first: poorly repaired structure — pulled frames, non-OEM welds, missing airbag
            modules, counterfeit or absent airbags — can fail catastrophically in the next crash.
            Only a body-shop frame inspection (measurements against factory specs, paint-depth
            mapping, airbag-system scans) verifies integrity; a mechanical PPI alone is
            insufficient. Flood cars add invisible risk: corroded harnesses and modules fail
            intermittently for years, stranding owners with un-diagnosable faults no inspection
            fully excludes.
          </p>
          <p className="mt-3">
            Money second: most mainstream lenders will not finance branded titles, and those that
            do charge higher rates at lower loan-to-value — expect to pay largely in cash. Many
            insurers offer liability-only on branded cars or cap comprehensive/collision payouts;
            confirm bindable full coverage in writing before purchase if you need it. Value
            third: branded cars resell at 30–50 percent under clean equivalents, to a small pool
            of cash buyers, after long market times. The discount you demand today is the
            discount you will grant tomorrow — price the exit before the entrance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Brand risk table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Common brands ranked — from occasional value to near-automatic pass.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Brand</th>
                  <th className="px-4 py-3 font-semibold">Typical discount</th>
                  <th className="px-4 py-3 font-semibold">Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Theft recovery (cosmetic)</td><td className="px-4 py-2">20–35%</td><td className="px-4 py-2">Possible value with full docs + inspection</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Hail (cosmetic panels)</td><td className="px-4 py-2">25–40%</td><td className="px-4 py-2">Possible value; verify glass/trim intact</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Rebuilt (documented collision)</td><td className="px-4 py-2">30–50%</td><td className="px-4 py-2">Case-by-case; frame inspection mandatory</td></tr>
                <tr className="border-b border-white/5"><td className="px-4 py-2">Lemon-law buyback</td><td className="px-4 py-2">30–50%</td><td className="px-4 py-2">Only if defect documented as cured</td></tr>
                <tr><td className="px-4 py-2">Flood / fire</td><td className="px-4 py-2">40–60%+</td><td className="px-4 py-2">Walk away — latent damage is unpriceable</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $11,000 hail car</h2>
          <p className="mt-3">
            Marcus finds a 2020 compact SUV, clean mechanically, with a hail brand: $11,000
            against $18,000 clean-title value — a 39 percent discount. Pre-repair photos show
            roof and hood dimpling with intact glass; the repair file documents professional
            paintless-dent work plus two replaced panels. A body-shop inspection ($180) confirms
            straight frame rails, factory welds undisturbed, and all airbags present and scanning
            clean. His insurer binds full coverage (with a branded-title note) after reviewing
            the file, and he pays cash, sidestepping lender restrictions.
          </p>
          <p className="mt-3">
            Total: $11,000 + $180 + $400 registration, for reliable transport at 60 percent of
            clean price. He plans a 6-year hold, at the end of which the car&apos;s remaining
            value (~$4,000 branded vs. ~$7,000 clean) still leaves him far ahead. The deal works
            because every condition held: cosmetic-only damage, full documentation, specialist
            inspection, cash purchase, confirmed insurance, long hold. Remove any two and the
            same car becomes someone else&apos;s lesson. Financing questions? See{" "}
            <a href="https://guides.loanpaylogic.com/auto-loan-guide" className="text-amber-200 underline underline-offset-2">
              our auto loan guide on guides.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Spotting washed and hidden brands</h2>
          <p className="mt-3">
            Because brands destroy value, sellers hide them. Defenses: run two history sources
            (one paid report plus the free NICB VIN check), inspect the title document itself for
            brand stamps and issue-state hopping, and beware fresh titles from distant states on
            local cars — the classic wash pattern. Check for mismatched VIN stickers, fresh
            undercoating hiding repairs, new carpet in an old car (flood tell), and silt in
            trunk wells and door pockets. A seller who &ldquo;lost&rdquo; the history, rushes
            the sale, or accepts only cash at a steep discount is narrating the ending.
          </p>
          <p className="mt-3">
            Price insurance before committing — get the branded-title quote in writing, since
            verbal assurances evaporate at binding time. Start at{" "}
            <a href="https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" className="text-amber-200 underline underline-offset-2">
              our auto insurance cost calculator
            </a>{" "}
            and confirm with a licensed agent, and budget honest upkeep with our{" "}
            <Link href="/car-maintenance-costs-guide" className="text-amber-200 underline underline-offset-2">
              maintenance guide
            </Link>
            . For nearly every first-time or financed buyer, the correct branded-title decision
            is the simplest: buy clean, sleep well.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is a rebuilt title?</h3>
              <p className="mt-1">A salvage car repaired and state-inspected for road use. It is legal to drive and register, but carries a permanent brand cutting value 30–50% and restricting financing and insurance.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can you insure a salvage-title car?</h3>
              <p className="mt-1">Often yes for liability; full coverage is harder — many carriers restrict or surcharge branded titles. Get a bindable quote in writing before purchase.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can you finance a rebuilt-title car?</h3>
              <p className="mt-1">Rarely through mainstream lenders, and then at higher rates with lower loan-to-value. Most branded-title deals are cash — budget accordingly.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are flood-damaged cars ever worth buying?</h3>
              <p className="mt-1">Almost never for drivers — corrosion and electronic faults surface for years and no inspection fully excludes them. The discount cannot price what cannot be found.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed">
          <p>
            Related reading:{" "}
            <Link href="/buying-car-out-of-state-guide" className="text-amber-200 underline underline-offset-2">
              buying out of state
            </Link>
            {" "}and{" "}
            <Link href="/lemon-law-guide" className="text-amber-200 underline underline-offset-2">
              lemon law basics
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not financial, legal, or safety advice. Title laws vary by
            state. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            , and have any branded car inspected by qualified specialists.
          </p>
        </section>
      </article>
    </div>
  );
}
