import { Link, useNavigate } from 'react-router-dom'
import FAB from '../../components/shared/FAB'

export default function CompanyDashboard() {
  const navigate = useNavigate()
  const internships = [
    { title: 'Junior Network Engineer', dept: 'Infrastructure', applicants: 84, progress: 75 },
    { title: 'Data Analyst Intern', dept: 'Business Intelligence', applicants: 112, progress: 40 },
    { title: 'Cybersecurity Associate', dept: 'Info Security', applicants: 45, progress: 90 },
  ]

  const topMatches = [
    {
      name: 'Abeba Kebede',
      school: 'AAU Computer Science',
      match: 98,
      skills: ['Python', 'React', 'Docker'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEzUW99EHvwQybhPxl8SeD2hrUE4QgE5GWokFeAohHGmq-CKMD-OaYB01ElisCgmoNJedC4X4EOGSMYW30KM9wrCz_2wYzHwgw-8eklUZsm6gJPFv5si3YD80xrMB-Ksxry17OwSuHECxYRQidwHGyxa5trdQZFjdq4IMJvUAF7wL3EbE9VZ5BrFsNXg1XLK6zPS0hMUby6XxCRODkd33OwF39buNYw_LPagMbu7o8Zs559Ce0Jk-MB_edADYvPZp8x11TD4kEU2o',
    },
    {
      name: 'Dawit Tadesse',
      school: 'ASTU Data Engineering',
      match: 94,
      skills: ['SQL', 'Tableau', 'ETL'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOsD8w5mwk6A7NIJFHEgaDLoABUsMa8mhYxc2y2j5U0hkgSMFKu_uxILOxXNw3k0T5YZDFMscTzIYtUfsd8fFcZUWnktYfSZNQnG7_fo24Z3w_hkUoK9LbF6tB__tKMO5Lhegs-DICsdKtEHRq4NAdvOSEZ8QlMFNL-iNDQcy5OODtL9GhsnFVOA4NTyW7WE_bnlA7PzvszWSaqggKwpY6wLtgykRlxOh1x83I6JjFnnQr98_k5HJ1aw4ogWH6T5RfEKuy2kO_wWc',
    },
  ]

  const supervisors = [
    'https://lh3.googleusercontent.com/a/default-user=s40',
    'https://lh3.googleusercontent.com/a/default-user=s40',
    'https://lh3.googleusercontent.com/a/default-user=s40',
  ]

  const capacityUsed = 24
  const capacityTotal = 30
  const circumference = 2 * Math.PI * 36

  return (
    <div className="pt-6 pb-12 px-4 sm:px-6 lg:pr-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Welcome & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h2 className="font-headline text-2xl sm:text-3xl font-black tracking-tight text-on-surface mb-2">Dashboard Overview</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">Reviewing talent pipeline for Q3 2024</p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">groups</span>
              </div>
              <p className="text-3xl font-black text-on-surface mb-1">124</p>
              <p className="text-sm font-semibold text-on-surface mb-1">Total Interns</p>
              <p className="text-xs text-tertiary font-medium">+12% from last month</p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">work</span>
              </div>
              <p className="text-3xl font-black text-on-surface mb-1">18</p>
              <p className="text-sm font-semibold text-on-surface mb-1">Active Postings</p>
              <p className="text-xs text-on-surface-variant font-medium">4 positions closing soon</p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">description</span>
              </div>
              <p className="text-3xl font-black text-on-surface mb-1">342</p>
              <p className="text-sm font-semibold text-on-surface mb-1">Pending Apps</p>
              <p className="text-xs text-error font-medium">86 awaiting initial review</p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">

          {/* Active Internships */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-xl font-bold text-on-surface">Active Internships</h3>
                <Link to="/company/applications" className="text-sm font-semibold text-primary hover:underline">View All</Link>
              </div>
              <div className="space-y-4">
                {internships.map((item) => (
                  <div key={item.title} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-surface-container-low rounded-lg">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-on-surface text-sm">{item.title}</h4>
                      <p className="text-xs text-on-surface-variant">{item.dept}</p>
                    </div>
                    <div className="sm:text-right flex-shrink-0 sm:mr-4">
                      <p className="text-sm font-bold text-on-surface">{item.applicants}</p>
                      <p className="text-xs text-on-surface-variant">applicants</p>
                    </div>
                    <div className="w-full sm:w-32 flex-shrink-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-on-surface-variant">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Top Matches */}
            <div className="mt-6">
              <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Recent Top Matches</h3>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {topMatches.map((candidate) => (
                  <div key={candidate.name} className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={candidate.img}
                        alt={candidate.name}
                        className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-on-surface">{candidate.name}</h4>
                        <p className="text-xs text-on-surface-variant">{candidate.school}</p>
                      </div>
                      <span className="px-2.5 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full whitespace-nowrap">
                        {candidate.match}% Match
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {candidate.skills.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 bg-surface-container-low text-on-surface-variant text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/company/applications"
                      className="block w-full py-2.5 bg-surface-container-highest text-on-surface rounded-lg font-semibold text-sm hover:bg-surface-container-high transition-colors text-center"
                    >
                      Review Profile
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-4 space-y-6">

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary to-primary-container text-white p-8 rounded-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="font-headline text-2xl font-bold mb-3">Grow your team faster</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Leverage AI-powered matching to find the perfect interns for your open positions.
                </p>
                <Link
                  to="/company/post/new"
                  className="inline-flex bg-tertiary-fixed text-on-tertiary-fixed px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Post New Position
                </Link>
              </div>
            </div>

            {/* Supervisor Widget */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-on-surface mb-4">Supervisor Capacity</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <svg className="w-24 h-24 -rotate-90" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="6" className="text-surface-container-high" />
                    <circle
                      cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="6"
                      className="text-tertiary"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference - (capacityUsed / capacityTotal) * circumference}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-black text-on-surface">{capacityUsed}/{capacityTotal}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-2xl font-black text-on-surface">{capacityUsed}</p>
                    <p className="text-xs text-on-surface-variant">Active</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-on-surface">{capacityTotal - capacityUsed}</p>
                    <p className="text-xs text-on-surface-variant">Available</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                {supervisors.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Supervisor"
                    className="w-8 h-8 rounded-full bg-surface-container-high"
                    style={{ marginLeft: i > 0 ? '-0.5rem' : 0 }}
                  />
                ))}
                <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-on-surface-variant">
                  +5
                </span>
              </div>
              <Link
                to="/company/supervisors"
                className="block w-full text-center py-2.5 bg-surface-container-highest text-on-surface rounded-lg font-semibold text-sm hover:bg-surface-container-high transition-colors"
              >
                Manage Supervisors
              </Link>
            </div>

            {/* Deadline Widget */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-error text-xl">schedule</span>
                <h4 className="font-bold text-on-surface text-sm">Closing Soon</h4>
              </div>
              <p className="font-semibold text-on-surface mb-1">Software QA Internships</p>
              <p className="text-sm text-error font-bold">Closes in 2 days</p>
            </div>
          </div>
        </div>
      </div>

      <FAB icon="bolt" label="Post New Role" color="bg-tertiary" onClick={() => navigate('/company/post/new')} />
    </div>
  )
}
