import { Link } from 'react-router-dom'
import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

const postings = [
  {
    id: '1',
    title: 'Junior Network Engineer',
    department: 'Infrastructure',
    openings: 4,
    status: 'Live',
    deadline: 'Apr 18, 2026',
  },
  {
    id: '2',
    title: 'Data Analyst Intern',
    department: 'Business Intelligence',
    openings: 2,
    status: 'Live',
    deadline: 'Apr 02, 2026',
  },
  {
    id: '3',
    title: 'Cybersecurity Associate',
    department: 'Info Security',
    openings: 3,
    status: 'Review',
    deadline: 'May 01, 2026',
  },
  {
    id: '4',
    title: 'Frontend Developer Intern',
    department: 'Product Engineering',
    openings: 2,
    status: 'Draft',
    deadline: '—',
  },
  {
    id: '5',
    title: 'Product Design Intern',
    department: 'Design',
    openings: 1,
    status: 'Paused',
    deadline: 'Mar 28, 2026',
  },
]

const checklistItemsStatic = [
  { label: 'Role description approved', done: true },
  { label: 'Compensation band set', done: true },
  { label: 'Supervisor assigned', done: false },
  { label: 'Careers page imagery', done: false },
]

const funnelStages = [
  { name: 'Applied', count: 186, pct: 100 },
  { name: 'Screened', count: 94, pct: 51 },
  { name: 'Interview', count: 38, pct: 20 },
  { name: 'Offer', count: 9, pct: 5 },
]

function statusPill(status) {
  const map = {
    Live: 'bg-tertiary-container text-on-tertiary-container',
    Review: 'bg-primary-container text-on-primary-container',
    Draft: 'bg-surface-container-high text-on-surface-variant',
    Paused: 'bg-error-container text-on-error-container',
  }
  return map[status] || map.Draft
}

export default function CompanyPostInternshipsPage() {
  const { notice, showNotice } = useActionNotice()

  return (
    <div className="pt-6 pb-12 px-4 sm:px-6 lg:pr-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <ActionNotice message={notice} />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">Post Internships</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xl">
              Manage open roles, keep descriptions fresh, and publish new internships when your teams are ready to hire.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => showNotice('Select a posting from the list to edit its details.')}
              className="px-4 py-2.5 rounded-lg bg-surface-container-highest text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors"
            >
              Edit Posting
            </button>
            <button
              type="button"
              onClick={() => showNotice('Posting duplicated into a new draft role.')}
              className="px-4 py-2.5 rounded-lg bg-surface-container-highest text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors"
            >
              Duplicate
            </button>
            <Link
              to="/company/post/new"
              className="px-4 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Publish New Role
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm hidden lg:block">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-xl font-bold text-on-surface">Existing &amp; open postings</h3>
                <span className="text-xs font-semibold text-on-surface-variant">{postings.length} roles</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm min-w-[640px]">
                  <thead>
                    <tr className="border-b border-outline-variant/30">
                      <th className="pb-3 pr-4 font-semibold text-on-surface-variant">Title</th>
                      <th className="pb-3 pr-4 font-semibold text-on-surface-variant">Department</th>
                      <th className="pb-3 pr-4 font-semibold text-on-surface-variant">Openings</th>
                      <th className="pb-3 pr-4 font-semibold text-on-surface-variant">Status</th>
                      <th className="pb-3 font-semibold text-on-surface-variant">Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {postings.map((row) => (
                      <tr key={row.id} className="border-b border-outline-variant/20 last:border-0">
                        <td className="py-4 pr-4">
                          <p className="font-bold text-on-surface">{row.title}</p>
                        </td>
                        <td className="py-4 pr-4 text-on-surface-variant">{row.department}</td>
                        <td className="py-4 pr-4 font-semibold text-on-surface">{row.openings}</td>
                        <td className="py-4 pr-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${statusPill(row.status)}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="py-4 text-on-surface-variant font-medium">{row.deadline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
              <div className="md:col-span-2 flex items-center justify-between mb-2 px-1">
                <h3 className="font-headline text-lg font-bold text-on-surface">Open postings</h3>
                <span className="text-xs font-semibold text-on-surface-variant">{postings.length} roles</span>
              </div>
              {postings.map((row) => (
                <div key={row.id} className="bg-surface-container-low rounded-xl p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-bold text-on-surface text-sm">{row.title}</h4>
                    <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold ${statusPill(row.status)}`}>
                      {row.status}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-3">{row.department}</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Openings</span>
                    <span className="font-bold text-on-surface">{row.openings}</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-on-surface-variant">Deadline</span>
                    <span className="font-medium text-on-surface">{row.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Posting checklist</h3>
              <ul className="space-y-3">
                {checklistItemsStatic.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span
                      className={`material-symbols-outlined text-xl shrink-0 ${item.done ? 'text-primary' : 'text-on-surface-variant'}`}
                      style={{ fontVariationSettings: item.done ? "'FILL' 1" : undefined }}
                    >
                      {item.done ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                    <span className={`text-sm ${item.done ? 'text-on-surface line-through opacity-70' : 'text-on-surface font-medium'}`}>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => showNotice('Checklist settings opened for posting requirements.')}
                className="mt-5 w-full py-2.5 bg-surface-container-highest text-on-surface rounded-lg font-semibold text-sm hover:bg-surface-container-high transition-colors"
              >
                Open checklist settings
              </button>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-1">Hiring funnel</h3>
              <p className="text-xs text-on-surface-variant mb-5">Across all live postings (last 30 days)</p>
              <div className="space-y-4">
                {funnelStages.map((stage) => (
                  <div key={stage.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-on-surface">{stage.name}</span>
                      <span className="text-on-surface-variant">{stage.count}</span>
                    </div>
                    <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${stage.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
