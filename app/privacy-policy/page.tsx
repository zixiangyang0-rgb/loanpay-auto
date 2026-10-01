import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LoanPay Auto",
  description:
    "Privacy policy for auto.loanpaylogic.com: cookies, Google AdSense advertising, opt-out choices (Google Ads Settings, NAI, DAA), and CCPA/CPRA rights.",
  alternates: {
    canonical: "https://auto.loanpaylogic.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-xs text-slate-500">
        Last updated: October 2026 · Contact: support@loanpaylogic.com
      </p>

      <section className="mt-6">
        <h2 className="text-xl font-bold text-white">Who we are</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          LoanPay Auto (auto.loanpaylogic.com) publishes free car-buying education guides. We do
          not require accounts, and our on-page estimators run entirely in your browser — the
          numbers you type never leave your device or reach our servers.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold text-white">Information we collect</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
          <li>
            <strong className="text-white">Messages you send us.</strong> If you email{" "}
            <a
              href="mailto:support@loanpaylogic.com"
              className="text-amber-200 underline underline-offset-2"
            >
              support@loanpaylogic.com
            </a>
            , we receive your address and message and use them solely to respond. We never share
            email correspondence with advertisers.
          </li>
          <li>
            <strong className="text-white">Basic server logs.</strong> Our hosting provider may
            record standard technical data (e.g., requested pages, timestamps, approximate network
            information) to keep the site secure and reliable.
          </li>
          <li>
            <strong className="text-white">Cookies and similar storage.</strong> We and our
            advertising partners use cookies for site operation, ad delivery, and measurement, as
            described below.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold text-white">Cookies &amp; advertising</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Like most ad-supported publishers, we show ads from third-party vendors, including
          Google AdSense (publisher ID ca-pub-4906207495792820). Google may use cookies — including
          advertising cookies — to serve ads based on your prior visits to this and other websites.
          Google&apos;s use of advertising cookies enables it and its partners to serve ads to you
          based on your visit to our site and other sites on the internet.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          If you decline personalized ads in our consent banner, we request non-personalized ads
          from Google (npa=1 / requestNonPersonalizedAds). You can change your choice at any time
          by clearing this site&apos;s local storage entry
          <code className="mx-1 rounded bg-white/10 px-1">loanpay-auto-consent</code>
          and reloading the page.
        </p>
        <h3 className="mt-4 font-semibold text-white">Your ad choices</h3>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
          <li>
            Google Ads Settings:{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 underline underline-offset-2"
            >
              adssettings.google.com
            </a>{" "}
            — opt out of Google&apos;s personalized advertising.
          </li>
          <li>
            Network Advertising Initiative (NAI):{" "}
            <a
              href="http://optout.networkadvertising.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 underline underline-offset-2"
            >
              optout.networkadvertising.org
            </a>
          </li>
          <li>
            Digital Advertising Alliance (DAA):{" "}
            <a
              href="http://optout.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 underline underline-offset-2"
            >
              optout.aboutads.info
            </a>
          </li>
          <li>
            Your browser settings also let you block or delete cookies; blocking cookies may affect
            how some pages display but will not prevent you from reading our guides.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold text-white">California (CCPA/CPRA) and state rights</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          We do not sell personal information. Depending on your state of residence (including
          California under the CCPA/CPRA), you may have the right to know what personal information
          we hold, to request deletion or correction, and to opt out of certain sharing for
          cross-context behavioral advertising. To exercise any of these rights, email{" "}
          <a
            href="mailto:support@loanpaylogic.com"
            className="text-amber-200 underline underline-offset-2"
          >
            support@loanpaylogic.com
          </a>{" "}
          with the subject &ldquo;Privacy request&rdquo;. We will respond within the time frame
          required by applicable law and will never discriminate against you for exercising your
          rights.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold text-white">Children</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          This site is general-audience education content and is not directed to children under 13.
          We do not knowingly collect information from children.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold text-white">Changes &amp; contact</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          If we change this policy, we will post the updated version here with a new
          &ldquo;Last updated&rdquo; date. Questions? Email{" "}
          <a
            href="mailto:support@loanpaylogic.com"
            className="text-amber-200 underline underline-offset-2"
          >
            support@loanpaylogic.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
