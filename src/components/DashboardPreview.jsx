import React, { useMemo, useState } from 'react';
import { BarChart3, Calendar } from 'lucide-react';

// Lightweight sparkline using plain SVG to avoid extra chart deps
function Sparkline({ data, color = '#22c55e' }) {
  const path = useMemo(() => {
    if (!data.length) return '';
    const max = Math.max(...data);
    const min = Math.min(...data);
    const w = 180;
    const h = 40;
    const step = w / (data.length - 1 || 1);
    const scaleY = (v) => (h - 4) - ((v - min) / (max - min || 1)) * (h - 8);
    return data
      .map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * step + 2} ${scaleY(v)}`)
      .join(' ');
  }, [data]);

  return (
    <svg width="100%" height="40" viewBox="0 0 184 40">
      <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function StatCard({ title, value, sub, colorClass = 'text-emerald-400', accent = '#22c55e', series = [] }) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
      <div className="flex items-baseline justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-400">{title}</p>
          <p className={`mt-1 text-xl font-semibold text-white`}>{value}</p>
          {sub && <p className="text-xs text-neutral-400">{sub}</p>}
        </div>
      </div>
      {series.length > 0 && (
        <div className="mt-3">
          <Sparkline data={series} color={accent} />
        </div>
      )}
    </div>
  );
}

export default function DashboardPreview() {
  const [range, setRange] = useState({ from: '', to: '' });

  const sample = useMemo(
    () => ({
      tws: 14,
      volumeLoad: 18250,
      topE1RM: 142.5,
      twsSeries: [6, 8, 10, 14, 12, 16, 18, 14, 15, 17, 12, 13],
      vlSeries: [12, 14, 10, 22, 18, 24, 28, 26, 22, 20, 27, 30],
      e1rmSeries: [100, 102, 103, 105, 108, 110, 111, 113, 115, 118, 120, 122],
    }),
    []
  );

  return (
    <section className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-violet-400" />
          <h2 className="text-base font-semibold text-white">Dashboard Preview</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Calendar className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
            <input
              type="date"
              value={range.from}
              onChange={(e) => setRange((r) => ({ ...r, from: e.target.value }))}
              className="w-40 rounded-md border border-neutral-800 bg-neutral-900/80 px-9 py-2 text-sm text-neutral-100 outline-none ring-violet-500/30 focus:ring"
            />
          </div>
          <span className="text-neutral-500">to</span>
          <input
            type="date"
            value={range.to}
            onChange={(e) => setRange((r) => ({ ...r, to: e.target.value }))}
            className="w-40 rounded-md border border-neutral-800 bg-neutral-900/80 px-3 py-2 text-sm text-neutral-100 outline-none ring-violet-500/30 focus:ring"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          title="Total Weekly Sets"
          value={`${sample.tws}`}
          sub="Target 12–20"
          colorClass="text-emerald-400"
          accent="#22c55e"
          series={sample.twsSeries}
        />
        <StatCard
          title="Volume Load (kg)"
          value={`${sample.volumeLoad.toLocaleString()}`}
          sub="Trend last 12 weeks"
          colorClass="text-sky-400"
          accent="#38bdf8"
          series={sample.vlSeries}
        />
        <StatCard
          title="Top e1RM (kg)"
          value={`${sample.topE1RM}`}
          sub="Estimated 1RM trend"
          colorClass="text-violet-400"
          accent="#a78bfa"
          series={sample.e1rmSeries}
        />
      </div>

      <p className="mt-4 text-xs text-neutral-400">
        This preview shows the kind of metrics Health Ultra will chart from your training log. Date range selection will filter charts when backend APIs are connected.
      </p>
    </section>
  );
}
