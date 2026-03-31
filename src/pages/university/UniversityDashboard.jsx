import { Link } from 'react-router-dom'

export default function UniversityDashboard() {
  const departments = [
    { name: 'Computer Science', advisors: 84, placements: 85, status: 'OPTIMAL', statusColor: 'bg-tertiary-container text-on-tertiary-container' },
    { name: 'Mechanical Eng', advisors: 62, placements: 65, status: 'IN PROGRESS', statusColor: 'bg-secondary-container text-on-secondary-container' },
    { name: 'Clinical Medicine', advisors: 45, placements: 98, status: 'OPTIMAL', statusColor: 'bg-tertiary-container text-on-tertiary-container' },
    { name: 'Architecture', advisors: 28, placements: 42, status: 'ATTENTION', statusColor: 'bg-error-container text-error' },
    { name: 'Economics', advisors: 54, placements: 78, status: 'IN PROGRESS', statusColor: 'bg-secondary-container text-on-secondary-container' },
  ]

  const advisorActivity = [
    { name: 'Dr. Abebe Bikila', action: 'Assigned 12 students to new internship cohort', time: '2h ago', color: 'bg-primary' },
    { name: 'Prof. Sara Mengistu', action: 'Validated 5 placement reports', time: '4h ago', color: 'bg-tertiary' },
    { name: 'Dr. Marc Dubois', action: 'Flagged a student compliance file', time: '1d ago', color: 'bg-error' },
  ]

  const distribution = [
    { label: 'Tech', pct: 42 },
    { label: 'Public Health', pct: 28 },
    { label: 'Manufacturing', pct: 15 },
    { label: 'Other', pct: 15 },
  ]

  const donutRadius = 36
  const donutCircumference = 2 * Math.PI * donutRadius
  const matchRate = 92

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-container text-white rounded-xl p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-headline text-2xl sm:text-3xl font-black tracking-tight mb-3">Addis Ababa University Registrar Portal</h2>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            Your institution has 14 new advisor applications awaiting review. Assign advisors to departments and generate semester reports from this portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/university/advisors"
              className="w-full sm:w-auto text-center bg-tertiary-fixed text-on-tertiary-fixed px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Assign New Advisor
            </Link>
            <Link
              to="/university/statistics"
              className="w-full sm:w-auto text-center bg-white/10 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-white/20 transition-colors"
            >
              View Semester Statistics
            </Link>
          </div>
        </div>
        <span className="material-symbols-outlined absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/10 text-[5rem] sm:text-[8rem] pointer-events-none select-none">account_balance</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
          <p className="text-sm font-semibold text-on-surface-variant mb-1">Total Students</p>
          <p className="text-3xl font-black text-on-surface mb-2">12,482</p>
          <p className="text-xs text-tertiary font-medium">+4.2% from last semester</p>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
          <p className="text-sm font-semibold text-on-surface-variant mb-1">Active Advisors</p>
          <p className="text-3xl font-black text-on-surface mb-2">342</p>
          <p className="text-xs text-on-surface-variant font-medium">100% capacity allocated</p>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
          <p className="text-sm font-semibold text-on-surface-variant mb-1">Completed Internships</p>
          <p className="text-3xl font-black text-on-surface mb-2">1,890</p>
          <p className="text-xs text-on-surface-variant font-medium">Q2 Target: 2,000</p>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
          <p className="text-sm font-semibold text-on-surface-variant mb-1">Overall Match Rate</p>
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg className="w-16 h-16 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r={donutRadius} fill="none" stroke="currentColor" strokeWidth="7" className="text-surface-container-high" />
                <circle
                  cx="40" cy="40" r={donutRadius} fill="none" stroke="currentColor" strokeWidth="7"
                  className="text-tertiary"
                  strokeDasharray={donutCircumference}
                  strokeDashoffset={donutCircumference - (matchRate / 100) * donutCircumference}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-black text-on-surface">{matchRate}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* Departmental Table */}
        <div className="xl:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <h3 className="font-headline text-xl font-bold text-on-surface mb-6">Departmental Overview</h3>
          <div className="space-y-4 lg:hidden">
            {departments.map((dept) => (
              <div key={dept.name} className="rounded-xl bg-surface-container-low p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="font-semibold text-on-surface">{dept.name}</p>
                    <p className="text-xs text-on-surface-variant">{dept.advisors} advisors</p>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${dept.statusColor}`}>{dept.status}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${dept.placements}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-on-surface-variant">{dept.placements}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="text-left text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  <th className="pb-4">Department</th>
                  <th className="pb-4">Advisors</th>
                  <th className="pb-4">Active Placements</th>
                  <th className="pb-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {departments.map((dept) => (
                  <tr key={dept.name} className="group">
                    <td className="py-3 font-semibold text-on-surface">{dept.name}</td>
                    <td className="py-3 text-on-surface-variant">{dept.advisors}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${dept.placements}%` }} />
                        </div>
                        <span className="text-xs font-semibold text-on-surface-variant w-8 text-right">{dept.placements}%</span>
                      </div>
                    </td>
                    <td className="py-3 text-right">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${dept.statusColor}`}>{dept.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Recent Advisor Activity */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-on-surface mb-4">Recent Advisor Activity</h3>
            <div className="space-y-4">
              {advisorActivity.map((entry) => (
                <div key={entry.name} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full ${entry.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {entry.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-on-surface">{entry.name}</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{entry.action}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{entry.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placement Distribution */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-on-surface mb-4">Placement Distribution</h3>
            <div className="space-y-3">
              {distribution.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-on-surface">{item.label}</span>
                    <span className="text-xs font-semibold text-on-surface-variant">{item.pct}%</span>
                  </div>
                  <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
