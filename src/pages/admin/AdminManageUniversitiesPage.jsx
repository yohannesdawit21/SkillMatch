import { useMemo, useState } from 'react'
import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function AdminManageUniversitiesPage() {
  const summary = [
    { label: 'Active Universities', value: '38', icon: 'school', sub: 'Across 11 regions', highlight: false },
    { label: 'Pending Approvals', value: '7', icon: 'pending_actions', sub: 'Avg review 2.1 days', highlight: false },
    { label: 'Flagged Institutions', value: '3', icon: 'flag', sub: 'Compliance follow-up', highlight: false },
    { label: 'Total Placements', value: '14,892', icon: 'trending_up', sub: 'YTD national', highlight: true },
  ]

  const universities = [
    { name: 'Addis Ababa University', region: 'Addis Ababa', status: 'Active', statusColor: 'bg-tertiary-container text-on-tertiary-container', placements: '2,104' },
    { name: 'Bahir Dar University', region: 'Amhara', status: 'Active', statusColor: 'bg-tertiary-container text-on-tertiary-container', placements: '1,241' },
    { name: 'Mekelle University', region: 'Tigray', status: 'Active', statusColor: 'bg-tertiary-container text-on-tertiary-container', placements: '987' },
    { name: 'Jimma University', region: 'Oromia', status: 'Pending', statusColor: 'bg-secondary-container text-on-secondary-container', placements: '—' },
    { name: 'Hawassa University', region: 'Sidama', status: 'Active', statusColor: 'bg-tertiary-container text-on-tertiary-container', placements: '1,156' },
    { name: 'Wollo University', region: 'Amhara', status: 'Flagged', statusColor: 'bg-error-container text-on-error-container', placements: '412' },
  ]

  const recentActions = [
    { action: 'AAU updated placement caps', time: '18 min ago', icon: 'edit_calendar', color: 'bg-primary' },
    { action: 'Jimma submitted accreditation docs', time: '1 hr ago', icon: 'upload_file', color: 'bg-tertiary' },
    { action: 'Wollo flagged for data mismatch', time: '3 hr ago', icon: 'warning', color: 'bg-error' },
    { action: 'Mekelle renewed MoU', time: 'Yesterday', icon: 'handshake', color: 'bg-secondary' },
  ]

  const approvalQueue = [
    { name: 'Dire Dawa University', submitted: 'Mar 29', type: 'New partner' },
    { name: 'Debre Markos University', submitted: 'Mar 28', type: 'Profile expansion' },
    { name: 'Arba Minch University', submitted: 'Mar 27', type: 'Initial onboarding' },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const { notice, showNotice } = useActionNotice()
  const filteredUniversities = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) {
      return universities
    }

    return universities.filter(
      (university) =>
        university.name.toLowerCase().includes(query) ||
        university.region.toLowerCase().includes(query) ||
        university.status.toLowerCase().includes(query),
    )
  }, [searchTerm, universities])

  const handleExport = () => {
    const header = 'University,Region,Status,Placements'
    const rows = filteredUniversities.map(
      (university) => `${university.name},${university.region},${university.status},${university.placements}`,
    )
    const link = document.createElement('a')

    link.href = `data:text/csv;charset=utf-8,${encodeURIComponent([header, ...rows].join('\n'))}`
    link.download = 'universities.csv'
    link.click()
    showNotice('University directory exported.')
  }

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-12 space-y-8">
      <ActionNotice message={notice} />

      <div>
        <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">Manage Universities</h2>
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
          Review partner institutions, track approvals, and monitor placement throughput across regions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summary.map((s) => (
          <div
            key={s.label}
            className={`p-6 rounded-xl shadow-sm ${s.highlight ? 'bg-primary text-white' : 'bg-surface-container-lowest'}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`material-symbols-outlined text-2xl ${s.highlight ? 'text-white' : 'text-primary'}`}>{s.icon}</span>
            </div>
            <p className={`text-3xl font-black mb-1 ${s.highlight ? 'text-white' : 'text-on-surface'}`}>{s.value}</p>
            <p className={`text-sm font-semibold mb-1 ${s.highlight ? 'text-white/90' : 'text-on-surface'}`}>{s.label}</p>
            <p className={`text-xs font-medium ${s.highlight ? 'text-white/70' : 'text-on-surface-variant'}`}>{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h3 className="font-headline text-xl font-bold text-on-surface">University directory</h3>
            <div className="flex flex-wrap gap-2">
              <input
                type="search"
                placeholder="Search institutions…"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="px-3 py-2 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface placeholder:text-on-surface-variant min-w-[200px]"
              />
              <button type="button" onClick={handleExport} className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg">Export CSV</button>
            </div>
          </div>
          <div className="space-y-3 lg:hidden">
            {filteredUniversities.map((u) => (
              <div key={u.name} className="rounded-xl bg-surface-container-low p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-on-surface">{u.name}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{u.region}</p>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${u.statusColor}`}>{u.status}</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm font-semibold text-on-surface">{u.placements}</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => showNotice(`Opened ${u.name} summary.`)}
                      className="px-2.5 py-1 text-xs font-bold rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() => showNotice(`Editing controls for ${u.name} are ready for the next workflow pass.`)}
                      className="px-2.5 py-1 text-xs font-bold rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="text-left text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  <th className="pb-4">Institution</th>
                  <th className="pb-4">Region</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4 text-right">Placements</th>
                  <th className="pb-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredUniversities.map((u) => (
                  <tr key={u.name} className="border-t border-outline-variant/30">
                    <td className="py-3 font-semibold text-on-surface">{u.name}</td>
                    <td className="py-3 text-on-surface-variant">{u.region}</td>
                    <td className="py-3">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${u.statusColor}`}>{u.status}</span>
                    </td>
                    <td className="py-3 text-right font-semibold text-on-surface">{u.placements}</td>
                    <td className="py-3 text-right">
                      <div className="flex justify-end gap-1 flex-wrap">
                        <button
                          type="button"
                          onClick={() => showNotice(`Opened ${u.name} summary.`)}
                          className="px-2.5 py-1 text-xs font-bold rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          onClick={() => showNotice(`Editing controls for ${u.name} are ready for the next workflow pass.`)}
                          className="px-2.5 py-1 text-xs font-bold rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Recent university actions</h3>
            <div className="space-y-4">
              {recentActions.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="material-symbols-outlined text-white text-sm">{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-on-surface">{item.action}</p>
                    <p className="text-xs text-on-surface-variant">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline text-lg font-bold text-on-surface">Approval queue</h3>
              <span className="text-xs font-bold text-primary">{approvalQueue.length} open</span>
            </div>
            <ul className="space-y-3">
              {approvalQueue.map((q) => (
                <li key={q.name} className="flex items-start justify-between gap-2 p-3 rounded-lg bg-surface-container-high">
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{q.name}</p>
                    <p className="text-xs text-on-surface-variant">{q.type}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-on-surface-variant">{q.submitted}</p>
                    <button
                      type="button"
                      onClick={() => showNotice(`Opened approval review for ${q.name}.`)}
                      className="mt-1 text-xs font-bold text-primary hover:underline"
                    >
                      Review
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
