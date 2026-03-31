import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

const kpis = [
  { label: 'Active supervisors', value: '12', hint: 'Onboarding 2 this week', icon: 'supervisor_account' },
  { label: 'Available slots', value: '6', hint: 'Capacity before next cohort', icon: 'event_seat' },
  { label: 'Avg interns / supervisor', value: '2.1', hint: 'Target: 2.0', icon: 'groups' },
  { label: 'Pending approvals', value: '4', hint: 'Supervisor requests', icon: 'pending_actions' },
]

const supervisors = [
  { name: 'Sara Mengistu', team: 'Infrastructure', interns: 3, max: 4, status: 'Active', email: 's.mengistu@company.com' },
  { name: 'Yonas Alemayehu', team: 'Product Engineering', interns: 2, max: 3, status: 'Active', email: 'y.alemayehu@company.com' },
  { name: 'Helen Tesfaye', team: 'Design', interns: 2, max: 2, status: 'At capacity', email: 'h.tesfaye@company.com' },
  { name: 'Daniel Gebremariam', team: 'Info Security', interns: 1, max: 3, status: 'Active', email: 'd.gebremariam@company.com' },
  { name: 'Meron Haile', team: 'Business Intelligence', interns: 2, max: 3, status: 'Active', email: 'm.haile@company.com' },
  { name: 'Kaleb Solomon', team: 'Operations', interns: 0, max: 2, status: 'Leave', email: 'k.solomon@company.com' },
]

const workloadBars = [
  { team: 'Engineering', pct: 88, interns: 14, cap: 16 },
  { team: 'Design', pct: 100, interns: 6, cap: 6 },
  { team: 'Data & BI', pct: 67, interns: 8, cap: 12 },
  { team: 'Security', pct: 40, interns: 4, cap: 10 },
]

function statusStyle(status) {
  if (status === 'Active') return 'bg-tertiary-container text-on-tertiary-container'
  if (status === 'At capacity') return 'bg-error-container text-on-error-container'
  if (status === 'Leave') return 'bg-surface-container-high text-on-surface-variant'
  return 'bg-primary-container text-on-primary-container'
}

export default function CompanySupervisorsPage() {
  const { notice, showNotice } = useActionNotice()

  const handleExport = () => {
    const header = 'Supervisor,Team,Interns,Capacity,Status'
    const rows = supervisors.map((supervisor) => (
      `${supervisor.name},${supervisor.team},${supervisor.interns},${supervisor.max},${supervisor.status}`
    ))
    const link = document.createElement('a')

    link.href = `data:text/csv;charset=utf-8,${encodeURIComponent([header, ...rows].join('\n'))}`
    link.download = 'supervisors.csv'
    link.click()
    showNotice('Supervisor roster exported.')
  }

  return (
    <div className="pt-6 pb-12 px-4 sm:px-6 lg:pr-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <ActionNotice message={notice} />

        <div>
          <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">Supervisors</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
            Balance mentor capacity, track assignments, and keep every intern paired with a qualified supervisor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-surface-container-lowest p-5 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="material-symbols-outlined text-primary text-2xl">{k.icon}</span>
              </div>
              <p className="text-2xl font-black text-on-surface mb-0.5">{k.value}</p>
              <p className="text-sm font-semibold text-on-surface mb-1">{k.label}</p>
              <p className="text-xs text-on-surface-variant font-medium">{k.hint}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h3 className="font-headline text-xl font-bold text-on-surface">Supervisor roster</h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleExport}
                    className="px-3 py-2 rounded-lg bg-surface-container-highest text-on-surface text-xs font-semibold hover:bg-surface-container-high transition-colors"
                  >
                    Export CSV
                  </button>
                  <button
                    type="button"
                    onClick={() => showNotice('Supervisor filters toggled to show teams with open capacity first.')}
                    className="px-3 py-2 rounded-lg bg-primary text-on-primary text-xs font-bold hover:opacity-90 transition-opacity"
                  >
                    Filter
                  </button>
                </div>
              </div>
              <div className="space-y-3 lg:hidden">
                {supervisors.map((s) => (
                  <div key={s.email} className="rounded-xl bg-surface-container-low p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold text-on-surface">{s.name}</p>
                        <p className="text-xs text-on-surface-variant mt-1">{s.email}</p>
                      </div>
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${statusStyle(s.status)}`}>
                        {s.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mt-3">
                      <span className="text-on-surface-variant">{s.team}</span>
                      <span className="font-semibold text-on-surface">{s.interns} / {s.max}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full text-left text-sm min-w-[720px]">
                  <thead>
                    <tr className="border-b border-outline-variant/30">
                      <th className="pb-3 pr-4 font-semibold text-on-surface-variant">Supervisor</th>
                      <th className="pb-3 pr-4 font-semibold text-on-surface-variant">Team</th>
                      <th className="pb-3 pr-4 font-semibold text-on-surface-variant">Interns</th>
                      <th className="pb-3 font-semibold text-on-surface-variant">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supervisors.map((s) => (
                      <tr key={s.email} className="border-b border-outline-variant/20 last:border-0">
                        <td className="py-4 pr-4">
                          <p className="font-bold text-on-surface">{s.name}</p>
                          <p className="text-xs text-on-surface-variant">{s.email}</p>
                        </td>
                        <td className="py-4 pr-4 text-on-surface-variant">{s.team}</td>
                        <td className="py-4 pr-4">
                          <span className="font-semibold text-on-surface">{s.interns}</span>
                          <span className="text-on-surface-variant"> / {s.max}</span>
                        </td>
                        <td className="py-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${statusStyle(s.status)}`}>
                            {s.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-1">Workload distribution</h3>
              <p className="text-xs text-on-surface-variant mb-5">Interns assigned vs. team capacity</p>
              <div className="space-y-4">
                {workloadBars.map((w) => (
                  <div key={w.team}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-on-surface">{w.team}</span>
                      <span className="text-on-surface-variant">
                        {w.interns}/{w.cap}
                      </span>
                    </div>
                    <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${w.pct >= 95 ? 'bg-error' : 'bg-primary'}`}
                        style={{ width: `${w.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-container text-white p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10 space-y-3">
                <h3 className="font-headline text-lg font-bold">Grow your mentor bench</h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  Invite senior ICs or team leads to supervise interns and unlock more concurrent roles.
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => showNotice('Supervisor seat creation started for your hiring teams.')}
                    className="w-full py-2.5 bg-tertiary-fixed text-on-tertiary-fixed rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                  >
                    Add supervisor
                  </button>
                  <button
                    type="button"
                    onClick={() => showNotice('Invite email flow opened for new supervisors.')}
                    className="w-full py-2.5 bg-white/15 text-white rounded-lg font-semibold text-sm hover:bg-white/25 transition-colors"
                  >
                    Invite by email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
