"use client";

import { useMemo, useState } from "react";

function num(v: string, fallback: number): number {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

export default function BuyVsLeaseEstimator() {
  const [price, setPrice] = useState("32000");
  const [down, setDown] = useState("4000");
  const [apr, setApr] = useState("7");
  const [leasePay, setLeasePay] = useState("419");
  const [leaseDue, setLeaseDue] = useState("3500");
  const [years, setYears] = useState("3");

  const result = useMemo(() => {
    const p = num(price, 32000);
    const d = Math.min(num(down, 4000), p);
    const r = num(apr, 7) / 100 / 12;
    const months = Math.round(num(years, 3) * 12);
    const principal = Math.max(p - d, 0);
    const term = 60;
    const monthly =
      principal <= 0 ? 0 : r <= 0 ? principal / term : (principal * r) / (1 - Math.pow(1 + r, -term));
    const paid = Math.min(months, term);
    const buyOut = d + monthly * paid;
    const leaseOut = num(leaseDue, 3500) + num(leasePay, 419) * months;
    return { monthly, buyOut, leaseOut, months, diff: buyOut - leaseOut };
  }, [price, down, apr, leasePay, leaseDue, years]);

  const money = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const row = "flex items-center justify-between gap-3";
  const input =
    "w-28 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-right text-sm text-white outline-none focus:border-amber-200/50";

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <h3 className="font-semibold text-white">Try the numbers: 3-year cash outlay</h3>
      <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
        <label className={row}>
          <span>Vehicle price ($)</span>
          <input className={input} value={price} onChange={(e) => setPrice(e.target.value)} inputMode="decimal" />
        </label>
        <label className={row}>
          <span>Buy: down payment ($)</span>
          <input className={input} value={down} onChange={(e) => setDown(e.target.value)} inputMode="decimal" />
        </label>
        <label className={row}>
          <span>Buy: loan APR (%)</span>
          <input className={input} value={apr} onChange={(e) => setApr(e.target.value)} inputMode="decimal" />
        </label>
        <label className={row}>
          <span>Compare over (years)</span>
          <input className={input} value={years} onChange={(e) => setYears(e.target.value)} inputMode="decimal" />
        </label>
        <label className={row}>
          <span>Lease: monthly ($)</span>
          <input className={input} value={leasePay} onChange={(e) => setLeasePay(e.target.value)} inputMode="decimal" />
        </label>
        <label className={row}>
          <span>Lease: due at signing ($)</span>
          <input className={input} value={leaseDue} onChange={(e) => setLeaseDue(e.target.value)} inputMode="decimal" />
        </label>
      </div>
      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 p-3">
          <p className="text-xs text-slate-400">Buy: monthly payment</p>
          <p className="mt-1 text-lg font-bold text-white">{money(result.monthly)}</p>
        </div>
        <div className="rounded-lg border border-white/10 p-3">
          <p className="text-xs text-slate-400">Buy: cash out ({result.months} mo)</p>
          <p className="mt-1 text-lg font-bold text-white">{money(result.buyOut)}</p>
        </div>
        <div className="rounded-lg border border-white/10 p-3">
          <p className="text-xs text-slate-400">Lease: cash out ({result.months} mo)</p>
          <p className="mt-1 text-lg font-bold text-white">{money(result.leaseOut)}</p>
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-400">
        {result.diff >= 0
          ? `Buying costs about ${money(result.diff)} more out of pocket over this period — but the buyer keeps equity in the car, while lease payments build none.`
          : `Leasing costs about ${money(Math.abs(result.diff))} more out of pocket over this period — and the buyer still keeps equity on top of that gap.`}{" "}
        60-month loan assumed; taxes and fees excluded. Educational estimate only.
      </p>
    </div>
  );
}
