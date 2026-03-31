import { Link } from 'react-router-dom'

export default function AdminSystemAnalyticsPage() {
  const kpis = [
    { label: 'DAU (7d avg)', value: '12.4k', delta: '+6.2%', up: true, icon: 'person' },
    { label: 'Match API latency p95', value: '118ms', delta: '−12ms', up: true, icon: 'speed' },
    { label: 'Placement funnel conversion', value: '18.6%', delta: '+0.8pt', up: true, icon: 'filter_alt' },
    { label: 'Error rate (24h)', value: '0.09%', delta: '+0.02pt', up: false, icon: 'error_outline' },
  ]

  const trafficBars = [
    { label: 'Mon', h: 42 },
    { label: 'Tue', h: 58 },
    { label: 'Wed', h: 51 },
    { label: 'Thu', h: 72 },
    { label: 'Fri', h: 68 },
    { label: 'Sat', h: 38 },
    { label: 'Sun', h: 31 },
  ]

  const usageSegments = [
    { name: 'Search & browse', pct: 38, color: 'bg-primary' },
    { name: 'Applications', pct: 27, color: 'bg-tertiary' },
    { name: 'Messaging', pct: 18, color: 'bg-secondary' },
    { name: 'Reports & exports', pct: 17, color: 'bg-outline-variant' },
  ]

  const regions = [
    { name: 'Addis Ababa', placements: 4200, share: 34, trend: '+4%' },
    { name: 'Oromia', placements: 3100, share: 25, trend: '+2%' },
    { name: 'Amhara', placements: 2400, share: 19, trend: 'Flat' },
    { name: 'SNNPR', placements: 1500, share: 12, trend: '−1%' },
    { name: 'Other', placements: 1250, share: 10, trend: '+6%' },
  ]

  const algorithmHealth = [
    { name: 'Embedding refresh', status: 'Healthy', detail: 'Last job 14m ago', ok: true },
    { name: 'Ranking model v3.2', status: 'Canary 12%', detail: 'No regression vs v3.1', ok: true },
    { name: 'Rules engine', status: 'Degraded', detail: '2 slow queries >2s', ok: false },
    { name: 'Notification dispatch', status: 'Healthy', detail: 'Queue depth 340', ok: true },
  ]

  const funnels = [
    { name: 'Student → applied', stages: [
      { label: 'Profile complete', rate: 100 },
      { label: 'Viewed match', rate: 74 },
      { label: 'Applied', rate: 31 },
    ] },
    { name: 'Company → hire', stages: [
      { label: 'Posting live', rate: 100 },
      { label: 'Shortlist', rate: 52 },
      { label: 'Offer extended', rate: 19 },
    ] },
  ]

  return (
    <div className="pt-24 px-8 pb-12 space-y-8">
      <div>
        <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">System Analytics</h2>
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
          Operational KPIs, traffic shape, regional outcomes, matching stack health, and top conversion funnels for national oversight.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((k) => (
          <div key={k.label} className="p-6 rounded-xl shadow-sm bg-surface-container-lowest">
            <div className="flex items-center justify-between mb-3">
              <span className="material-symbols-outlined text-2xl text-primary">{k.icon}</span>
              <span className={`text-xs font-bold ${k.up ? 'text-tertiary' : 'text-error'}`}>{k.delta}</span>
            </div>
            <p className="text-3xl font-black text-on-surface mb-1">{k.value}</p>
            <p className="text-sm font-semibold text-on-surface">{k.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Traffic (requests / min, 7d)</h3>
          <p className="text-xs text-on-surface-variant mb-6">Synthetic weekly shape — peaks align with weekday application windows</p>
          <div className="flex items-end justify-between gap-2 h-48 px-2">
            {trafficBars.map((b) => (
              <div key={b.label} className="flex-1 flex flex-col items-center gap-2 min-w-0">
                <div className="w-full max-w-[48px] flex flex-col justify-end h-40 bg-surface-container-high rounded-t-md overflow-hidden">
                  <div
                    className="w-full bg-primary rounded-t-md transition-all"
                    style={{ height: `${b.h}%` }}
                  />
                </div>
                <span className="text-[10px] font-semibold text-on-surface-variant">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Usage by surface</h3>
          <p className="text-xs text-on-surface-variant mb-4">Share of authenticated session minutes</p>
          <div className="h-5 rounded-full overflow-hidden flex bg-surface-container-high mb-5">
            {usageSegments.map((s) => (
              <div
                key={s.name}
                className={`h-full ${s.color}`}
                style={{ width: `${s.pct}%` }}
                title={`${s.name}: ${s.pct}%`}
              />
            ))}
          </div>
          <svg className="w-full max-h-32 mb-2 text-primary" viewBox="0 0 320 80" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="usageFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            <path fill="url(#usageFill)" d="M0,60 Q40,20 80,35 T160,30 T240,45 T320,25 L320,80 L0,80 Z" />
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,60 Q40,20 80,35 T160,30 T240,45 T320,25" />
          </svg>
          <ul className="space-y-2">
            {usageSegments.map((s) => (
              <li key={s.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-on-surface">
                  <span className={`w-2.5 h-2.5 rounded-sm ${s.color}`} />
                  {s.name}
                </span>
                <span className="font-bold text-on-surface">{s.pct}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-5 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Regional performance</h3>
          <p className="text-xs text-on-surface-variant mb-4">Placements YTD vs national share</p>
          <div className="space-y-4">
            {regions.map((r) => (
              <div key={r.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-on-surface">{r.name}</span>
                  <span className="text-xs text-on-surface-variant">{r.placements.toLocaleString()} · {r.trend}</span>
                </div>
                <div className="h-2.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary rounded-full" style={{ width: `${r.share}%` }} />
                </div>
                <p className="text-[10px] text-on-surface-variant mt-0.5">{r.share}% of national placements</p>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-4 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Algorithm &amp; pipeline health</h3>
          <ul className="space-y-3">
            {algorithmHealth.map((a) => (
              <li key={a.name} className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-high">
                <span className={`material-symbols-outlined text-xl mt-0.5 ${a.ok ? 'text-tertiary' : 'text-error'}`}>
                  {a.ok ? 'check_circle' : 'warning'}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-on-surface">{a.name}</p>
                  <p className="text-xs font-semibold text-primary">{a.status}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{a.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            to="/admin/support"
            className="mt-4 block w-full py-2.5 bg-surface-container-highest text-on-surface rounded-lg font-semibold text-sm hover:bg-surface-container-high transition-colors text-center"
          >
            Open runbooks
          </Link>
        </div>

        <div className="xl:col-span-3 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Top funnels</h3>
          <div className="space-y-6">
            {funnels.map((f) => (
              <div key={f.name}>
                <p className="text-sm font-bold text-on-surface mb-3">{f.name}</p>
                <div className="space-y-2">
                  {f.stages.map((s, idx) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-on-surface-variant">{s.label}</span>
                        <span className="font-bold text-on-surface">{s.rate}%</span>
                      </div>
                      <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${idx === f.stages.length - 1 ? 'bg-primary' : 'bg-secondary-container'}`}
                          style={{ width: `${s.rate}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
