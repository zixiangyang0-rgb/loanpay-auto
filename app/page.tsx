import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LoanPay Auto | Car-Buying, Financing, EV & Ownership Guides",
  description:
    "Free plain-English guides to buying, financing, insuring, and selling cars: buy vs. lease, negotiation, EV costs, auto loans, insurance, maintenance, and resale.",
};

type Card = { title: string; description: string; href: string; badge: string };
type Cluster = { id: string; heading: string; blurb: string; cards: Card[] };

const clusters: Cluster[] = [
  {
    id: "buy",
    heading: "A · Buy smart",
    blurb: "Negotiation, inspections, first-timer mistakes, and tricky titles — before you sign.",
    cards: [
      {
        title: "Buy vs. Lease Guide",
        description: "Total-cost math for a $32,000 car: when buying wins and when leasing does.",
        href: "/buy-vs-lease-guide",
        badge: "Guide",
      },
      {
        title: "New Car Negotiation Guide",
        description: "Out-the-door pricing, invoice vs. MSRP, and scripts that lower fees.",
        href: "/new-car-negotiation-guide",
        badge: "Guide",
      },
      {
        title: "Used Car Buying Checklist",
        description: "A 40-point inspection flow: history, test drive, PPI, and title checks.",
        href: "/used-car-buying-checklist",
        badge: "Checklist",
      },
      {
        title: "Is Certified Pre-Owned Worth It?",
        description: "CPO premiums vs. warranty value, with inspection and age-limit details.",
        href: "/certified-pre-owned-worth-it",
        badge: "Guide",
      },
      {
        title: "First-Time Car Buyer Guide",
        description: "Budget, credit, insurance, and paperwork — start to finish for beginners.",
        href: "/first-time-car-buyer-guide",
        badge: "Guide",
      },
      {
        title: "Buying a Car Out of State",
        description: "Taxes, temp tags, transport, and remote inspections across state lines.",
        href: "/buying-car-out-of-state-guide",
        badge: "Guide",
      },
      {
        title: "Salvage Title Guide",
        description: "What rebuilt and salvage brands mean for safety, insurance, and value.",
        href: "/salvage-title-guide",
        badge: "Guide",
      },
    ],
  },
  {
    id: "finance",
    heading: "B · Finance well",
    blurb: "Preapproval, dealer vs. bank rates, refinancing, trade-ins, and lease-end math.",
    cards: [
      {
        title: "Auto Loan Preapproval Guide",
        description: "How preapproval works, what it costs your score, and rate-shopping windows.",
        href: "/auto-loan-preapproval-guide",
        badge: "Guide",
      },
      {
        title: "Dealer Financing vs. Bank",
        description: "Markup, buy rate vs. contract rate, and how to compare two loan offers.",
        href: "/dealer-financing-vs-bank",
        badge: "Guide",
      },
      {
        title: "Auto Refinance Guide",
        description: "When refinancing saves money: rate drops, term math, and fee traps.",
        href: "/auto-refinance-guide",
        badge: "Guide",
      },
      {
        title: "Upside-Down Car Loan Guide",
        description: "Owing more than your car is worth: causes, fixes, and rollover danger.",
        href: "/upside-down-car-loan-guide",
        badge: "Guide",
      },
      {
        title: "How to Trade In Your Car",
        description: "Separate the trade from the purchase: quotes, timing, and tax credits.",
        href: "/how-to-trade-in-car-guide",
        badge: "Guide",
      },
      {
        title: "Lease-End Options Guide",
        description: "Return, buy out, extend, or trade: residual math and fee checklists.",
        href: "/lease-end-options-guide",
        badge: "Guide",
      },
    ],
  },
  {
    id: "ev",
    heading: "C · Go electric",
    blurb: "2026 EV credit reality, charging math, and gas-vs-electric break-even points.",
    cards: [
      {
        title: "EV Tax Credit 2026 Guide",
        description: "Federal credits ended Sept 30, 2025 — what remains for 2026 buyers.",
        href: "/ev-tax-credit-2026-guide",
        badge: "Guide",
      },
      {
        title: "Electric vs. Gas Cost Comparison",
        description: "Fuel, maintenance, insurance, and depreciation over 5 years and 75,000 miles.",
        href: "/electric-vs-gas-cost-comparison",
        badge: "Guide",
      },
      {
        title: "Hybrid vs. Electric Guide",
        description: "No-plug simplicity vs. max savings: driving patterns that decide it.",
        href: "/hybrid-vs-electric-guide",
        badge: "Guide",
      },
    ],
  },
  {
    id: "own",
    heading: "D · Insurance & ownership",
    blurb: "Coverage choices, depreciation curves, and the real yearly cost of your car.",
    cards: [
      {
        title: "GAP Insurance Explained",
        description: "What covers the loan-to-value gap after a total loss — and who needs it.",
        href: "/gap-insurance-explained",
        badge: "Guide",
      },
      {
        title: "Car Insurance for New Drivers",
        description: "Why teen and new-driver premiums run high — and six ways to lower them.",
        href: "/car-insurance-new-drivers-guide",
        badge: "Guide",
      },
      {
        title: "Usage-Based Insurance Guide",
        description: "Telematics, mileage plans, and privacy trade-offs that set your discount.",
        href: "/usage-based-insurance-guide",
        badge: "Guide",
      },
      {
        title: "Car Depreciation Guide",
        description: "The 20%-in-year-one curve: which years lose most and how to slow it.",
        href: "/car-depreciation-guide",
        badge: "Guide",
      },
      {
        title: "Total Cost of Ownership Guide",
        description: "Price plus 5 years of fuel, insurance, repairs, and resale — with estimator.",
        href: "/total-cost-of-ownership-guide",
        badge: "Guide",
      },
      {
        title: "Extended Warranty Pros & Cons",
        description: "Service contracts decoded: pricing, exclusions, and the self-insure test.",
        href: "/extended-warranty-pros-cons",
        badge: "Guide",
      },
      {
        title: "Car Maintenance Costs Guide",
        description: "Year-by-year upkeep budgets from $500 basics to $1,200+ repair years.",
        href: "/car-maintenance-costs-guide",
        badge: "Guide",
      },
      {
        title: "Lemon Law Guide",
        description: "State-by-state basics: repair attempts, deadlines, and buyback remedies.",
        href: "/lemon-law-guide",
        badge: "Guide",
      },
    ],
  },
  {
    id: "sell",
    heading: "E · Sell well",
    blurb: "One private-party vs. dealer showdown: net proceeds, effort, and timing.",
    cards: [
      {
        title: "Selling: Private vs. Dealer",
        description: "$2,000+ gaps explained: offers, prep, paperwork, and scam screens.",
        href: "/selling-car-private-vs-dealer",
        badge: "Guide",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-14 text-center sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          auto.loanpaylogic.com
        </p>
        <h1 className="hero-title mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          Car-Buying Answers in Plain English
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          LoanPay Auto turns confusing dealership, loan, EV, insurance, and resale rules into
          short, friendly guides and checklists. Compare buy vs. lease, decode financing offers,
          price EV ownership honestly, and sell without regrets — no signup required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/buy-vs-lease-guide"
            className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
          >
            Start with buy vs. lease
          </Link>
          <Link
            href="/used-car-buying-checklist"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30"
          >
            Get the used-car checklist
          </Link>
        </div>
      </section>

      {clusters.map((cluster) => (
        <section key={cluster.id} className="mt-12">
          <h2 className="text-2xl font-bold">{cluster.heading}</h2>
          <p className="mt-2 text-sm text-slate-400">{cluster.blurb}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cluster.cards.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="glass-card block rounded-2xl p-6 transition hover:border-amber-200/30"
              >
                <span className="inline-block rounded-full border border-amber-200/30 px-3 py-1 text-xs font-medium text-amber-200">
                  {tool.badge}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="glass-card mt-12 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">Why study before you shop?</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          A car deal bundles at least four separate transactions — the vehicle price, the
          financing or lease terms, add-on products like warranties and gap coverage, and often
          your old car&apos;s trade-in value. Dealers negotiate each one, and profit can hide in
          any of them: a discounted sticker price paired with a marked-up interest rate, or a
          generous trade offer offset by inflated fees. Understanding out-the-door pricing, loan
          math, depreciation curves, and insurance costs before you visit the lot lets you compare
          offers line by line instead of judging a deal by its monthly payment. The guides on
          auto.loanpaylogic.com walk through each piece with checklists and dollar examples so you
          can bring better questions to the dealer, the lender, and your insurer.
        </p>
        <p className="mt-4 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
          Disclaimer: everything on this site is general education only and is not financial, legal,
          or insurance advice. Prices, rates, and rules change often and vary by state. Confirm
          important decisions with licensed professionals. Read our full{" "}
          <Link href="/disclaimer" className="underline underline-offset-2">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
