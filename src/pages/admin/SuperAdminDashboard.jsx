import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'

export default function SuperAdminDashboard() {
  const metrics = [
    { label: 'Total Students', value: '85,420', icon: 'school', sub: '+12% vs last year', highlight: false },
    { label: 'Partner Universities', value: '42', icon: 'account_balance', sub: '4 New Applied', highlight: false },
    { label: 'Registered Companies', value: '1,248', icon: 'corporate_fare', sub: '+24 this month', highlight: false },
    { label: 'Successful Placements', value: '15,412', icon: 'verified', sub: 'National total', highlight: true },
  ]

  const universities = [
    { name: 'Addis Ababa Science & Technology University', status: 'Active', statusColor: 'bg-tertiary-container text-on-tertiary-container', placements: '1,402' },
    { name: 'Hawassa University', status: 'Active', statusColor: 'bg-tertiary-container text-on-tertiary-container', placements: '984' },
    { name: 'Jimma University', status: 'Pending', statusColor: 'bg-secondary-container text-on-secondary-container', placements: '—' },
  ]

  const companies = [
    { name: 'Ethio Telecom Digital', status: 'Active', statusColor: 'bg-tertiary-container text-on-tertiary-container', placements: '128 openings' },
    { name: 'Horizon Health Systems', status: 'Active', statusColor: 'bg-tertiary-container text-on-tertiary-container', placements: '91 openings' },
    { name: 'GreenLeaf AgriTech', status: 'Pending', statusColor: 'bg-secondary-container text-on-secondary-container', placements: '12 openings' },
  ]

  const systemLogs = [
    { event: 'New Company Registration', time: '2 min ago', icon: 'corporate_fare', color: 'bg-primary' },
    { event: 'Academic Load Rebalanced', time: '14 min ago', icon: 'sync', color: 'bg-tertiary' },
    { event: 'New User Access Request', time: '42 min ago', icon: 'person_add', color: 'bg-secondary' },
    { event: 'API Error Resolved', time: '1 hr ago', icon: 'check_circle', color: 'bg-error' },
  ]

  const [activeView, setActiveView] = useState('universities')
  const stakeholderRows = useMemo(
    () => (activeView === 'universities' ? universities : companies),
    [activeView],
  )

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-12 space-y-8">

      {/* Welcome */}
      <div>
        <h2 className="font-headline text-2xl sm:text-3xl font-black tracking-tight text-on-surface mb-2">National Oversight Dashboard</h2>
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
          Centralized monitoring of all Ethiopian higher-education institutions, corporate partners, and student placement pipelines.
        </p>
      </div>

      {/* Global Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div
            key={m.label}
            className={`p-6 rounded-xl shadow-sm ${m.highlight ? 'bg-primary text-white' : 'bg-surface-container-lowest'}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`material-symbols-outlined text-2xl ${m.highlight ? 'text-white' : 'text-primary'}`}>{m.icon}</span>
            </div>
            <p className={`text-3xl font-black mb-1 ${m.highlight ? 'text-white' : 'text-on-surface'}`}>{m.value}</p>
            <p className={`text-sm font-semibold mb-1 ${m.highlight ? 'text-white/90' : 'text-on-surface'}`}>{m.label}</p>
            <p className={`text-xs font-medium ${m.highlight ? 'text-white/70' : 'text-on-surface-variant'}`}>{m.sub}</p>
          </div>
        ))}
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Regional Map */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Regional Activity Map</h3>
          <div className="rounded-lg overflow-hidden mb-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2tMq9ULSBi4f1ctnXo77UejWJkxbVsgQj430amnGILm6kqPT7InJYQ01H09JgGcv-Xvvp73kg9MaXSrtXNpS3nxejdviHRNC2tAmbMQAN-L7mrF53Eou9EgquJVjaAUtZnFA682IH_YrQC4TxKkGZJvgp_1UI2IdzBwBA8jFYoVrtO6CFZid-EdfEnalwdYkTCoBBOhp4y6SW412m2UyagnJd-nfsyVglbY_pb-TDBUdpxde0rXcmBc4_xGbpX2hJyap1ocIHcFo"
              alt="Regional activity map of Ethiopia"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs font-medium text-on-surface-variant">High Activity</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary-container" />
              <span className="text-xs font-medium text-on-surface-variant">Developing</span>
            </div>
          </div>
        </div>

        {/* Match Efficiency */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col">
          <h3 className="font-headline text-xl font-bold text-on-surface mb-6">Match Efficiency</h3>
          <div className="space-y-6 flex-1">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-on-surface">Placement Rate</span>
                <span className="text-sm font-black text-on-surface">78.4%</span>
              </div>
              <div className="h-3 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '78.4%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-on-surface">Avg Match Score</span>
                <span className="text-sm font-black text-on-surface">92.1</span>
              </div>
              <div className="h-3 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-tertiary rounded-full" style={{ width: '92.1%' }} />
              </div>
            </div>
          </div>
          <Link
            to="/admin/analytics"
            className="mt-6 block w-full py-2.5 bg-surface-container-highest text-on-surface rounded-lg font-semibold text-sm hover:bg-surface-container-high transition-colors text-center"
          >
            View Algorithm Health
          </Link>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-12 gap-6">

        {/* Stakeholder Table */}
        <div className="col-span-12 xl:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline text-xl font-bold text-on-surface">Stakeholder Overview</h3>
            <div className="flex flex-wrap gap-1">
              <button
                type="button"
                onClick={() => setActiveView('universities')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${activeView === 'universities' ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
              >
                Universities
              </button>
              <button
                type="button"
                onClick={() => setActiveView('companies')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${activeView === 'companies' ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
              >
                Companies
              </button>
            </div>
          </div>
          <div className="space-y-3 lg:hidden">
            {stakeholderRows.map((row) => (
              <div key={row.name} className="rounded-xl bg-surface-container-low p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-on-surface">{row.name}</p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      {activeView === 'universities' ? 'Placements' : 'Open roles'}: {row.placements}
                    </p>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${row.statusColor}`}>{row.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="text-left text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  <th className="pb-4">{activeView === 'universities' ? 'Institution' : 'Company'}</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4 text-right">{activeView === 'universities' ? 'Placements' : 'Open roles'}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {stakeholderRows.map((row) => (
                  <tr key={row.name}>
                    <td className="py-3 font-semibold text-on-surface">{row.name}</td>
                    <td className="py-3">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${row.statusColor}`}>{row.status}</span>
                    </td>
                    <td className="py-3 text-right font-semibold text-on-surface">{row.placements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Health Log */}
        <div className="col-span-12 xl:col-span-4 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <h3 className="font-bold text-on-surface mb-4">System Health Log</h3>
          <div className="space-y-4">
            {systemLogs.map((log, i) => (
              <div key={i} className="flex items-start gap-3 relative">
                {i < systemLogs.length - 1 && (
                  <div className="absolute left-4 top-9 bottom-0 w-px bg-surface-container-high -translate-x-1/2" />
                )}
                <div className={`w-8 h-8 rounded-full ${log.color} flex items-center justify-center flex-shrink-0 relative z-10`}>
                  <span className="material-symbols-outlined text-white text-sm">{log.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-on-surface">{log.event}</p>
                  <p className="text-xs text-on-surface-variant">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
