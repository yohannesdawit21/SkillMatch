import { useState } from 'react'
import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

const summary = [
  { label: 'Total applicants', value: '342', delta: '+28 this week', icon: 'inbox' },
  { label: 'Shortlisted', value: '86', delta: '25% of pipeline', icon: 'star' },
  { label: 'Interviews', value: '41', delta: '12 scheduled', icon: 'event' },
  { label: 'Offers', value: '9', delta: '3 pending response', icon: 'assignment_turned_in' },
]

const applications = [
  { id: '1', candidate: 'Abeba Kebede', role: 'Data Analyst Intern', university: 'AAU Computer Science', status: 'Interview', score: 98 },
  { id: '2', candidate: 'Dawit Tadesse', role: 'Junior Network Engineer', university: 'ASTU', status: 'Shortlisted', score: 94 },
  { id: '3', candidate: 'Liya Assefa', role: 'Frontend Developer Intern', university: 'Jimma University', status: 'Applied', score: 88 },
  { id: '4', candidate: 'Binyam Worku', role: 'Cybersecurity Associate', university: 'Bahir Dar Institute', status: 'Offer', score: 91 },
  { id: '5', candidate: 'Ruth Getachew', role: 'Product Design Intern', university: 'Addis Ababa Science & Tech', status: 'Shortlisted', score: 89 },
  { id: '6', candidate: 'Samuel Tesfaye', role: 'Data Analyst Intern', university: 'Hawassa University', status: 'Rejected', score: 62 },
]

const reviewQueue = [
  { title: 'Screen 14 new applicants', sub: 'Data Analyst — due today', urgent: true },
  { title: 'Collect interview feedback', sub: '3 candidates · Infrastructure', urgent: false },
  { title: 'Extend offer — B. Worku', sub: 'Security role · legal review', urgent: true },
]

const filterChips = ['All roles', 'Engineering', 'Data', 'Design', 'Security']

function statusBadge(status) {
  const map = {
    Applied: 'bg-surface-container-high text-on-surface-variant',
    Shortlisted: 'bg-primary-container text-on-primary-container',
    Interview: 'bg-tertiary-container text-on-tertiary-container',
    Offer: 'bg-tertiary-fixed text-on-tertiary-fixed',
    Rejected: 'bg-error-container text-on-error-container',
  }
  return map[status] || map.Applied
}

export default function CompanyApplicationsPage() {
  const [activeFilter, setActiveFilter] = useState('All roles')
  const [minimumScore, setMinimumScore] = useState(75)
  const { notice, showNotice } = useActionNotice()
  const filteredApplications = applications.filter((row) => {
    const matchesDepartment =
      activeFilter === 'All roles' ||
      (activeFilter === 'Engineering' && /(Engineer|Developer)/i.test(row.role)) ||
      (activeFilter === 'Data' && /Data/i.test(row.role)) ||
      (activeFilter === 'Design' && /Design/i.test(row.role)) ||
      (activeFilter === 'Security' && /Security/i.test(row.role))

    return matchesDepartment && row.score >= minimumScore
  })

  return (
    <div className="pt-6 pb-12 px-4 sm:px-6 lg:pr-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <ActionNotice message={notice} />

        <div>
          <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">Applications</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
            Track every candidate from first touch to offer. Prioritize high-match profiles and keep your hiring team aligned.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summary.map((s) => (
            <div key={s.label} className="bg-surface-container-lowest p-5 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="material-symbols-outlined text-primary text-2xl">{s.icon}</span>
              </div>
              <p className="text-2xl font-black text-on-surface mb-0.5">{s.value}</p>
              <p className="text-sm font-semibold text-on-surface mb-1">{s.label}</p>
              <p className="text-xs text-on-surface-variant font-medium">{s.delta}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h3 className="font-headline text-xl font-bold text-on-surface">All applications</h3>
                <button
                  type="button"
                  onClick={() => showNotice('Bulk review mode opened for the current filtered applications.')}
                  className="self-start sm:self-auto px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  Bulk actions
                </button>
              </div>
              <div className="space-y-3 lg:hidden">
                {filteredApplications.map((row) => (
                  <div key={row.id} className="rounded-xl bg-surface-container-low p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold text-on-surface">{row.candidate}</p>
                        <p className="text-sm text-on-surface-variant mt-1">{row.role}</p>
                        <p className="text-xs text-on-surface-variant mt-1">{row.university}</p>
                      </div>
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${statusBadge(row.status)}`}>
                        {row.status}
                      </span>
                    </div>
                    <p className="text-sm font-black text-on-surface mt-3">{row.score}<span className="text-on-surface-variant text-xs ml-1 font-medium">match</span></p>
                  </div>
                ))}
              </div>
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full text-left text-sm min-w-[700px]">
                  <thead>
                    <tr className="border-b border-outline-variant/30">
                      <th className="pb-3 pr-4 font-semibold text-on-surface-variant">Candidate</th>
                      <th className="pb-3 pr-4 font-semibold text-on-surface-variant">Role</th>
                      <th className="pb-3 pr-4 font-semibold text-on-surface-variant">University</th>
                      <th className="pb-3 pr-4 font-semibold text-on-surface-variant">Status</th>
                      <th className="pb-3 font-semibold text-on-surface-variant">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplications.map((row) => (
                      <tr key={row.id} className="border-b border-outline-variant/20 last:border-0 hover:bg-surface-container-low/50">
                        <td className="py-4 pr-4 font-bold text-on-surface">{row.candidate}</td>
                        <td className="py-4 pr-4 text-on-surface-variant">{row.role}</td>
                        <td className="py-4 pr-4 text-on-surface-variant text-xs max-w-[200px]">{row.university}</td>
                        <td className="py-4 pr-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${statusBadge(row.status)}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className="font-black text-on-surface">{row.score}</span>
                          <span className="text-on-surface-variant text-xs ml-1">match</span>
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
              <h3 className="font-headline text-lg font-bold text-on-surface mb-1">Review queue</h3>
              <p className="text-xs text-on-surface-variant mb-4">What needs attention next</p>
              <ul className="space-y-3">
                {reviewQueue.map((item) => (
                  <li
                    key={item.title}
                    className={`p-3 rounded-lg border ${item.urgent ? 'border-error/40 bg-error-container/10' : 'border-outline-variant/30 bg-surface-container-low'}`}
                  >
                    <div className="flex items-start gap-2">
                      {item.urgent && (
                        <span className="material-symbols-outlined text-error text-lg shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                          priority_high
                        </span>
                      )}
                      <div>
                        <p className="text-sm font-bold text-on-surface">{item.title}</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => showNotice('Review queue opened for pending recruiter actions.')}
                className="mt-4 w-full py-2.5 bg-surface-container-highest text-on-surface rounded-lg font-semibold text-sm hover:bg-surface-container-high transition-colors"
              >
                Open full queue
              </button>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Filters</h3>
              <p className="text-xs text-on-surface-variant mb-3">Narrow by department or stage</p>
              <div className="flex flex-wrap gap-2">
                {filterChips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setActiveFilter(chip)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      activeFilter === chip
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                <label className="block text-xs font-semibold text-on-surface-variant">Minimum match score</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={minimumScore}
                  onChange={(event) => setMinimumScore(Number(event.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[10px] text-on-surface-variant">
                  <span>Any</span>
                  <span>{minimumScore}+</span>
                  <span>100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
