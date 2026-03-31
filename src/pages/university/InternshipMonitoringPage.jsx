import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function InternshipMonitoringPage() {
  const kpis = [
    { label: 'Active placements', value: '1,247', delta: '+38 this week', icon: 'work', tone: 'text-primary' },
    { label: 'Overdue reports', value: '23', delta: '4 critical', icon: 'warning', tone: 'text-error' },
    { label: 'Supervisor check-ins', value: '892', delta: 'Due in 7 days: 61', icon: 'check_circle', tone: 'text-tertiary' },
    { label: 'Risk flags', value: '11', delta: '2 escalated', icon: 'flag', tone: 'text-on-surface' },
  ]

  const placements = [
    { student: 'Kidist Alemu', company: 'Ethio Telecom R&D', advisor: 'Dr. Abebe Bikila', status: 'On track', progress: 78, statusColor: 'bg-tertiary-container text-on-tertiary-container' },
    { student: 'Daniel Haile', company: 'Addis Card Manufacturing', advisor: 'Prof. Sara Mengistu', status: 'Report overdue', progress: 45, statusColor: 'bg-error-container text-error' },
    { student: 'Marta Yohannes', company: 'Ministry of Health', advisor: 'Dr. Meron Alemayehu', status: 'Review scheduled', progress: 62, statusColor: 'bg-secondary-container text-on-secondary-container' },
    { student: 'Yared Tesfaye', company: 'Gebeta Software', advisor: 'Dr. Abebe Bikila', status: 'On track', progress: 91, statusColor: 'bg-tertiary-container text-on-tertiary-container' },
    { student: 'Selamawit Bekele', company: 'AAU Teaching Hospital', advisor: 'Dr. Marc Dubois', status: 'Supervisor flag', progress: 34, statusColor: 'bg-secondary-container text-on-secondary-container' },
  ]

  const priorityCases = [
    { title: 'Daniel Haile — weekly log missing', detail: 'Manufacturing · Day 12 overdue', urgent: true },
    { title: 'Selamawit Bekele — site visit conflict', detail: 'Clinical · Advisor notified', urgent: true },
    { title: 'Anonymous cohort — bulk upload error', detail: '12 rows rejected · IT ticket #4481', urgent: false },
  ]

  const upcomingReviews = [
    { title: 'Mid-term review — Kidist Alemu', when: 'Tomorrow, 10:00' },
    { title: 'Supervisor sync — Gebeta Software', when: 'Wed, Mar 2' },
    { title: 'Compliance audit sample', when: 'Fri, Mar 4' },
  ]

  const { notice, showNotice } = useActionNotice()

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <ActionNotice message={notice} />

      <header>
        <h1 className="font-headline text-3xl font-black tracking-tight text-on-surface">Internship Monitoring</h1>
        <p className="text-sm text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
          Track live placements, supervisor engagement, and reporting health. Escalations surface here before they hit accreditation deadlines.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {kpis.map((k) => (
          <div key={k.label} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="flex items-start justify-between gap-2 mb-3">
              <p className="text-sm font-semibold text-on-surface-variant">{k.label}</p>
              <span className="material-symbols-outlined text-on-surface-variant/60 text-xl">{k.icon}</span>
            </div>
            <p className={`text-3xl font-black mb-1 ${k.tone}`}>{k.value}</p>
            <p className="text-xs font-medium text-on-surface-variant">{k.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <h2 className="font-headline text-xl font-bold text-on-surface mb-6">Active placements</h2>
          <div className="space-y-3 lg:hidden">
            {placements.map((p) => (
              <div key={p.student} className="rounded-xl bg-surface-container-low p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-on-surface">{p.student}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{p.company}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{p.advisor}</p>
                  </div>
                  <span className={`inline-flex px-2.5 py-1 text-xs font-bold rounded-full ${p.statusColor}`}>{p.status}</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${p.progress}%` }} />
                  </div>
                  <span className="text-xs font-bold text-on-surface-variant">{p.progress}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="text-left text-xs font-semibold text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/30">
                  <th className="pb-3 pr-4">Student</th>
                  <th className="pb-3 pr-4">Company</th>
                  <th className="pb-3 pr-4">Advisor</th>
                  <th className="pb-3 pr-4">Progress</th>
                  <th className="pb-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {placements.map((p) => (
                  <tr key={p.student} className="border-b border-outline-variant/20 last:border-0">
                    <td className="py-3.5 pr-4 font-semibold text-on-surface">{p.student}</td>
                    <td className="py-3.5 pr-4 text-on-surface-variant">{p.company}</td>
                    <td className="py-3.5 pr-4 text-on-surface-variant">{p.advisor}</td>
                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-2 max-w-[140px]">
                        <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="text-xs font-bold text-on-surface-variant w-8">{p.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3.5 text-right">
                      <span className={`inline-flex px-2.5 py-1 text-xs font-bold rounded-full ${p.statusColor}`}>{p.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-on-surface mb-4">Priority cases</h3>
            <ul className="space-y-4">
              {priorityCases.map((c) => (
                <li key={c.title} className="flex gap-3">
                  <span className={`material-symbols-outlined text-xl flex-shrink-0 ${c.urgent ? 'text-error' : 'text-on-surface-variant'}`}>
                    {c.urgent ? 'priority_high' : 'info'}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{c.title}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{c.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => showNotice('Case queue opened for flagged placements and overdue reports.')}
              className="mt-5 w-full py-2.5 rounded-lg font-bold text-sm bg-surface-container-high text-on-surface hover:opacity-90 transition-opacity"
            >
              Open case queue
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-on-surface mb-4">Upcoming reviews</h3>
            <ul className="space-y-3">
              {upcomingReviews.map((r) => (
                <li key={r.title} className="flex items-start justify-between gap-3 pb-3 border-b border-outline-variant/20 last:border-0 last:pb-0">
                  <p className="text-sm font-medium text-on-surface leading-snug">{r.title}</p>
                  <span className="text-xs font-semibold text-primary whitespace-nowrap">{r.when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
