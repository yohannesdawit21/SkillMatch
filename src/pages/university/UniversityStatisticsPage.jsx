import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function UniversityStatisticsPage() {
  const headlines = [
    { label: 'Students in placement', value: '8,420', sub: 'Across 14 colleges' },
    { label: 'Completion rate (YTD)', value: '94.2%', sub: '+1.1% vs prior year' },
    { label: 'Avg. time to match', value: '11 days', sub: 'Institution median' },
    { label: 'Employer partners', value: '312', sub: 'Active MOUs' },
  ]

  const trendMonths = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']
  const trendBars = [62, 68, 71, 74, 79, 84]

  const departments = [
    { name: 'Computer Science', placementRate: 96, satisfaction: 4.6, placements: 1240 },
    { name: 'Mechanical Engineering', placementRate: 91, satisfaction: 4.3, placements: 890 },
    { name: 'Clinical Medicine', placementRate: 98, satisfaction: 4.7, placements: 2100 },
    { name: 'Economics', placementRate: 88, satisfaction: 4.1, placements: 560 },
  ]

  const distribution = [
    { label: 'Domestic private', pct: 44, color: 'bg-primary' },
    { label: 'Public sector', pct: 28, color: 'bg-tertiary' },
    { label: 'NGO / multilateral', pct: 18, color: 'bg-secondary' },
    { label: 'International', pct: 10, color: 'bg-on-surface-variant' },
  ]

  const linePoints = trendBars.map((v, i) => `${(i / (trendBars.length - 1)) * 100},${100 - v}`).join(' ')
  const { notice, showNotice } = useActionNotice()

  const handleExport = () => {
    const header = 'Department,Placement Rate,Satisfaction,Placements'
    const rows = departments.map(
      (department) => `${department.name},${department.placementRate}%,${department.satisfaction},${department.placements}`,
    )
    const link = document.createElement('a')

    link.href = `data:text/csv;charset=utf-8,${encodeURIComponent([header, ...rows].join('\n'))}`
    link.download = 'university-statistics.csv'
    link.click()
    showNotice('Statistics summary exported.')
  }

  return (
    <div className="p-8 space-y-8">
      <ActionNotice message={notice} />

      <header>
        <h1 className="font-headline text-3xl font-black tracking-tight text-on-surface">Statistics</h1>
        <p className="text-sm text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
          Institution-wide internship metrics, semester trends, and department benchmarks. Figures refresh nightly from verified placement records.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {headlines.map((h) => (
          <div key={h.label} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <p className="text-sm font-semibold text-on-surface-variant mb-1">{h.label}</p>
            <p className="text-3xl font-black text-primary mb-2">{h.value}</p>
            <p className="text-xs text-on-surface-variant font-medium">{h.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-headline text-xl font-bold text-on-surface">Placement funnel trend</h2>
            <p className="text-xs text-on-surface-variant mt-1">Indexed placement confirmations by month (baseline = 100)</p>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-tertiary">Last 6 months</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-end justify-between gap-2 h-48 px-1">
              {trendBars.map((h, i) => (
                <div key={trendMonths[i]} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full max-w-[48px] mx-auto flex flex-col justify-end h-40 bg-surface-container-high/50 rounded-t-lg overflow-hidden">
                    <div
                      className="w-full bg-primary rounded-t-lg transition-all"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-on-surface-variant uppercase">{trendMonths[i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-48 rounded-xl bg-surface-container-high/30 p-4 flex items-center">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-tertiary"
                points={linePoints}
              />
              <polygon
                fill="currentColor"
                className="text-tertiary/20"
                points={`0,100 ${linePoints} 100,100`}
              />
            </svg>
            <div className="absolute bottom-2 left-4 right-4 flex justify-between text-[10px] font-semibold text-on-surface-variant">
              {trendMonths.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="font-headline text-xl font-bold text-on-surface">Department performance</h2>
          {departments.map((d) => (
            <div key={d.name} className="bg-surface-container-lowest rounded-xl p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <p className="font-bold text-on-surface">{d.name}</p>
                <span className="text-xs font-semibold text-on-surface-variant">{d.placements.toLocaleString()} active</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">Placement rate</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary rounded-full" style={{ width: `${d.placementRate}%` }} />
                    </div>
                    <span className="text-xs font-black text-on-surface w-10 text-right">{d.placementRate}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">Satisfaction (5.0)</p>
                  <p className="text-lg font-black text-primary">{d.satisfaction}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm h-fit">
          <h2 className="font-headline text-xl font-bold text-on-surface mb-2">Placement distribution</h2>
          <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
            Share of confirmed internships by host organization type for the current academic year.
          </p>
          <div className="h-4 rounded-full overflow-hidden flex mb-6">
            {distribution.map((seg) => (
              <div key={seg.label} className={`h-full ${seg.color}`} style={{ width: `${seg.pct}%` }} title={seg.label} />
            ))}
          </div>
          <ul className="space-y-3">
            {distribution.map((seg) => (
              <li key={seg.label} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${seg.color}`} />
                  <span className="font-medium text-on-surface">{seg.label}</span>
                </span>
                <span className="font-bold text-on-surface-variant">{seg.pct}%</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={handleExport}
            className="mt-6 w-full py-2.5 rounded-lg font-bold text-sm bg-primary text-on-primary hover:opacity-90 transition-opacity"
          >
            Export summary (CSV)
          </button>
        </div>
      </div>
    </div>
  )
}
