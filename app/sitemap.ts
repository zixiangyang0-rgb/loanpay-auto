import type { MetadataRoute } from "next";

const BASE = "https://auto.loanpaylogic.com";

const ROUTES: { url: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  // Cluster A — buy
  { url: "/buy-vs-lease-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/new-car-negotiation-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/used-car-buying-checklist", priority: 0.9, changeFrequency: "monthly" },
  { url: "/certified-pre-owned-worth-it", priority: 0.8, changeFrequency: "monthly" },
  { url: "/first-time-car-buyer-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/buying-car-out-of-state-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/salvage-title-guide", priority: 0.8, changeFrequency: "monthly" },
  // Cluster B — finance
  { url: "/auto-loan-preapproval-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/dealer-financing-vs-bank", priority: 0.9, changeFrequency: "monthly" },
  { url: "/auto-refinance-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/upside-down-car-loan-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/how-to-trade-in-car-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/lease-end-options-guide", priority: 0.8, changeFrequency: "monthly" },
  // Cluster C — EV
  { url: "/ev-tax-credit-2026-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/electric-vs-gas-cost-comparison", priority: 0.9, changeFrequency: "monthly" },
  { url: "/hybrid-vs-electric-guide", priority: 0.8, changeFrequency: "monthly" },
  // Cluster D — insurance & ownership
  { url: "/gap-insurance-explained", priority: 0.9, changeFrequency: "monthly" },
  { url: "/car-insurance-new-drivers-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/usage-based-insurance-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/car-depreciation-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/total-cost-of-ownership-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/extended-warranty-pros-cons", priority: 0.8, changeFrequency: "monthly" },
  { url: "/car-maintenance-costs-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/lemon-law-guide", priority: 0.8, changeFrequency: "monthly" },
  // Cluster E — sell
  { url: "/selling-car-private-vs-dealer", priority: 0.9, changeFrequency: "monthly" },
  // Legal pages
  { url: "/about", priority: 0.5, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { url: "/privacy-policy", priority: 0.4, changeFrequency: "monthly" },
  { url: "/terms", priority: 0.4, changeFrequency: "monthly" },
  { url: "/disclaimer", priority: 0.4, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-01");
  return ROUTES.map((route) => ({
    url: `${BASE}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
