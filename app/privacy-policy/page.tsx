import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LoanPay Auto",
  description:
    "Privacy policy for auto.loanpaylogic.com: what we collect, how we use it, and your choices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-xs text-slate-500">Last updated: October 2026</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Auto (auto.loanpaylogic.com) publishes free car-buying education guides. We do not
        require accounts, and our on-page estimators run entirely in your browser — the numbers
        you type never leave your device or reach our servers.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Like most ad-supported publishers, we use third-party vendors, including Google AdSense,
        which may use cookies to serve ads based on your prior visits to this and other websites.
        Google&apos;s use of advertising cookies enables it and its partners to serve ads based on
        your visit to our site. You may opt out of personalized advertising by visiting Google&apos;s
        Ads Settings. You can also control cookies through your browser settings; blocking cookies
        may affect how some pages display but will not prevent you from reading our guides.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        If you email us, we receive only what you send (your address and message) and use it
        solely to respond. We do not sell personal information, and we do not share email
        correspondence with advertisers. If you have privacy questions, contact
        support@loanpaylogic.com.
      </p>
    </div>
  );
}
