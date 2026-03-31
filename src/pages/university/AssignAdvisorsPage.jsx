import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function AssignAdvisorsPage() {
  const pendingAdvisors = [
    { id: 1, name: 'Dr. Helen Tadesse', department: 'Computer Science', studentsAssigned: 0, status: 'Pending review', statusTone: 'bg-secondary-container text-on-secondary-container' },
    { id: 2, name: 'Prof. Yonas Bekele', department: 'Mechanical Engineering', studentsAssigned: 0, status: 'Documents incomplete', statusTone: 'bg-error-container text-error' },
    { id: 3, name: 'Dr. Meron Alemayehu', department: 'Clinical Medicine', studentsAssigned: 0, status: 'Awaiting department head', statusTone: 'bg-secondary-container text-on-secondary-container' },
    { id: 4, name: 'Dr. Samuel Girma', department: 'Economics', studentsAssigned: 0, status: 'Ready to assign', statusTone: 'bg-tertiary-container text-on-tertiary-container' },
    { id: 5, name: 'Prof. Liya Haile', department: 'Architecture', studentsAssigned: 0, status: 'Background check', statusTone: 'bg-secondary-container text-on-secondary-container' },
  ]

  const workloadSummary = [
    { label: 'Under capacity', count: 42, tone: 'text-tertiary' },
    { label: 'At target', count: 198, tone: 'text-on-surface' },
    { label: 'Over capacity', count: 12, tone: 'text-error' },
  ]

  const { notice, showNotice } = useActionNotice()

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <ActionNotice message={notice} />

      <header className="space-y-2">
        <h1 className="font-headline text-3xl font-black tracking-tight text-on-surface">Assign Advisors</h1>
        <p className="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
          Review pending advisor applications, validate department alignment, and allocate student cohorts. Approvals propagate to placement workflows and reporting automatically.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="font-headline text-xl font-bold text-on-surface">Pending advisor applications</h2>
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{pendingAdvisors.length} in queue</span>
          </div>
          <div className="space-y-3 lg:hidden">
            {pendingAdvisors.map((row) => (
              <div key={row.id} className="rounded-xl bg-surface-container-low p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-on-surface">{row.name}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">Application #{String(2400 + row.id)}</p>
                  </div>
                  <span className={`inline-flex px-2.5 py-1 text-xs font-bold rounded-full ${row.statusTone}`}>{row.status}</span>
                </div>
                <div className="flex justify-between text-sm mt-3">
                  <span className="text-on-surface-variant">{row.department}</span>
                  <span className="font-medium text-on-surface">{row.studentsAssigned} students</span>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="text-left text-xs font-semibold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/30">
                  <th className="pb-3 pr-4">Advisor</th>
                  <th className="pb-3 pr-4">Department</th>
                  <th className="pb-3 pr-4">Students assigned</th>
                  <th className="pb-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {pendingAdvisors.map((row) => (
                  <tr key={row.id} className="border-b border-outline-variant/20 last:border-0">
                    <td className="py-4 pr-4">
                      <p className="font-semibold text-on-surface">{row.name}</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">Application #{String(2400 + row.id)}</p>
                    </td>
                    <td className="py-4 pr-4 text-on-surface-variant">{row.department}</td>
                    <td className="py-4 pr-4 font-medium text-on-surface">{row.studentsAssigned}</td>
                    <td className="py-4 text-right">
                      <span className={`inline-flex px-2.5 py-1 text-xs font-bold rounded-full ${row.statusTone}`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-outline-variant/30">
            <button
              type="button"
              onClick={() => showNotice('Advisor approvals submitted for assignment.')}
              className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Approve &amp; Assign
            </button>
            <button
              type="button"
              onClick={() => showNotice('Advisor profile review opened for the current queue.')}
              className="bg-surface-container-high text-on-surface px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Review Profile
            </button>
            <button
              type="button"
              onClick={() => showNotice('New advisor seat creation started.')}
              className="border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/5 transition-colors"
            >
              Create Advisor Seat
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-on-surface mb-4">Quick actions</h3>
            <ul className="space-y-3">
              {[
                { icon: 'person_add', label: 'Bulk import advisor roster', desc: 'CSV or SIS sync' },
                { icon: 'swap_horiz', label: 'Rebalance department loads', desc: 'Suggest transfers' },
                { icon: 'history', label: 'Audit recent assignments', desc: 'Last 30 days' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => showNotice(`${item.label} opened from advisor management.`)}
                    className="w-full text-left flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-high/80 transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">{item.icon}</span>
                    <span>
                      <span className="block text-sm font-semibold text-on-surface">{item.label}</span>
                      <span className="block text-xs text-on-surface-variant mt-0.5">{item.desc}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-on-surface mb-4">Advisor workload summary</h3>
            <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
              Live counts across all active advisors this semester. Use this before approving new seats.
            </p>
            <div className="space-y-4">
              {workloadSummary.map((w) => (
                <div key={w.label} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-on-surface">{w.label}</span>
                  <span className={`text-lg font-black ${w.tone}`}>{w.count}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 h-2 bg-surface-container-high rounded-full overflow-hidden flex">
              <div className="h-full bg-tertiary" style={{ width: '16%' }} title="Under" />
              <div className="h-full bg-primary" style={{ width: '76%' }} title="Target" />
              <div className="h-full bg-error" style={{ width: '8%' }} title="Over" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
