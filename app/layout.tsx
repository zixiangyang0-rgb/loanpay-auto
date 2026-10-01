import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ConsentBanner from "./lib/consent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://auto.loanpaylogic.com"),
  title: {
    default: "LoanPay Auto | Car-Buying, Financing & Ownership Guides",
    template: "%s | LoanPay Auto",
  },
  description:
    "LoanPay Auto offers plain-English guides to buying, financing, insuring, and selling cars in the United States — buy vs. lease, EV costs, loans, insurance, and ownership.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LoanPay Auto | Car-Buying, Financing & Ownership Guides",
    description:
      "Plain-English car-buying education: negotiation, financing, EV costs, insurance, maintenance, and selling — no signup required.",
    url: "https://auto.loanpaylogic.com",
    siteName: "LoanPay Auto",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Auto | Car-Buying, Financing & Ownership Guides",
    description:
      "Plain-English car-buying education: negotiation, financing, EV costs, insurance, maintenance, and selling.",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
      <Link href="/" className="text-lg font-bold tracking-tight">
        LoanPay <span className="text-gradient">Auto</span>
      </Link>
      <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 pb-10 pt-6 text-sm text-slate-400">
      <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
      <p className="mt-4">
        &copy; {new Date().getFullYear()} auto.loanpaylogic.com. General education only, not
        financial advice.
      </p>
      <p className="mt-2 text-xs">
        Contact:{" "}
        <a href="mailto:support@loanpaylogic.com" className="underline underline-offset-2">
          support@loanpaylogic.com
        </a>{" "}
        &middot;{" "}
        <a
          href="https://adssettings.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Google Ads Settings
        </a>{" "}
        &middot;{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2">
          Ad &amp; cookie choices
        </Link>
      </p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ConsentBanner />
        {/* Google Funding Choices (CMP): configure your message at https://fundingchoices.google.com
            and paste the Funding Choices tag here once approved. The ConsentBanner above stores
            the visitor choice and sets npa=1 (requestNonPersonalizedAds) on decline. */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
