"use client";

import { useMemo, useState } from "react";

function num(v: string, fallback: number): number {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

export default function TcoEstimator() {
  const [price, setPrice] = useState("32000");
  const [down, setDown] = useState("4000");
  const [apr, setApr] = useState("7");
  const [insurance, setInsurance] = useState("1800");
  const [fuel, setFuel] = useState("1800");
  const [maint, setMaint] = useState("900");
  const [resale, setResale] = useState("16000");

  const result = useMemo(() => {
    const p = num(price, 32000);
    const d = Math.min(num(down, 4000), p);
    const r = num(apr, 7) / 100 / 12;
    const principal = Math.max(p - d, 0);
    const term = 60;
    const monthly =
      principal <= 0 ? 0 : r <= 0 ? principal / term : (principal * r) / (1 - Math.pow(1 + r, -term));
    const payments = monthly * term;
    const interest = payments - principal;
    const running = (num(insurance, 1800) + num(fuel, 1800) + num(maint, 900)) * 5;
    const total = d + payments + running - num(resale, 16000);
    return { monthly, interest, running, total, perMonth: total / 60 };
  }, [price, down, apr, insurance, fuel, maint, resale]);

  const money = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const row = "flex items-center justify-between gap-3";
  const input =
    "w-28 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-right text-sm text-white outline-none focus:border-amber-200/50";

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <h3 className="font-semibold text-white">Try the numbers: 5-year true cost</h3>
      <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
        <label className={row}>
          <span>Purchase price ($)</span>
          <input className={input} value={price} onChange={(e) => setPrice(e.target.value)} inputMode="decimal" />
        </label>
        <label className={row}>
          <span>Down payment ($)</span>
          <input className={input} value={down} onChange={(e) => setDown(e.target.value)} inputMode="decimal" />
        </label>
        <label className={row}>
          <span>Loan APR (%)</span>
          <input className={input} value={apr} onChange={(e) => setApr(e.target.value)} inputMode="decimal" />
        </label>
        <label className={row}>
          <span>Resale at year 5 ($)</span>
          <input className={input} value={resale} onChange={(e) => setResale(e.target.value)} inputMode="decimal" />
        </label>
        <label className={row}>
          <span>Insurance / year ($)</span>
          <input className={input} value={insurance} onChange={(e) => setInsurance(e.target.value)} inputMode="decimal" />
        </label>
        <label className={row}>
          <span>Fuel or charging / year ($)</span>
          <input className={input} value={fuel} onChange={(e) => setFuel(e.target.value)} inputMode="decimal" />
        </label>
        <label className={row}>
          <span>Maintenance+repairs / year ($)</span>
          <input className={input} value={maint} onChange={(e) => setMaint(e.target.value)} inputMode="decimal" />
        </label>
      </div>
      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 p-3">
          <p className="text-xs text-slate-400">Loan interest (60 mo)</p>
          <p className="mt-1 text-lg font-bold text-white">{money(result.interest)}</p>
        </div>
        <div className="rounded-lg border border-white/10 p-3">
          <p className="text-xs text-slate-400">5-year true cost</p>
          <p className="mt-1 text-lg font-bold text-white">{money(result.total)}</p>
        </div>
        <div className="rounded-lg border border-white/10 p-3">
          <p className="text-xs text-slate-400">True cost per month</p>
          <p className="mt-1 text-lg font-bold text-white">{money(result.perMonth)}</p>
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-400">
        True cost = down + all payments + 5 years of running costs − resale value. Taxes and fees
        excluded. Educational estimate only.
      </p>
    </div>
  );
}
