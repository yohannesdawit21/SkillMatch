import { Link, useNavigate } from 'react-router-dom'
import FAB from '../../components/shared/FAB'

export default function StudentDashboard() {
  const navigate = useNavigate()

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-10">

      {/* Header Editorial Section */}
      <div className="mb-12">
        <p className="text-primary font-bold tracking-widest text-xs uppercase mb-2">Academic Dashboard</p>
        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-on-surface mb-4">Welcome back, Alex.</h1>
        <p className="text-on-surface-variant text-base sm:text-lg max-w-2xl leading-relaxed">
          Your digital registrar has curated new matches based on your recent Python certification and project updates.
        </p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-6 lg:gap-8">

        {/* Quick Stats Bento */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:bg-primary-fixed transition-colors group">
            <span className="material-symbols-outlined text-primary text-3xl mb-6 block">send</span>
            <p className="text-4xl font-black text-on-surface mb-1">3</p>
            <p className="text-sm text-on-surface-variant font-medium">Applied Internships</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:bg-tertiary-fixed transition-colors group">
            <span className="material-symbols-outlined text-tertiary text-3xl mb-6 block">bolt</span>
            <p className="text-4xl font-black text-on-surface mb-1">5</p>
            <p className="text-sm text-on-surface-variant font-medium">Suggested Matches</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:bg-secondary-fixed transition-colors group">
            <span className="material-symbols-outlined text-secondary text-3xl mb-6 block">visibility</span>
            <p className="text-4xl font-black text-on-surface mb-1">2</p>
            <p className="text-sm text-on-surface-variant font-medium">Profile Views</p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="col-span-12 lg:col-span-4 bg-primary text-white p-8 rounded-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="font-headline text-2xl font-bold mb-3">Boost Your Reach</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Complete your CV profile to unlock 10+ new matches and increase visibility to top tier-1 recruiters.
            </p>
            <Link
              to="/student/cv-builder"
              className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Complete CV Now
            </Link>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="col-span-12 lg:col-span-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <h2 className="font-headline text-2xl font-bold text-on-surface">Recent Applications</h2>
            <Link to="/student/requests" className="text-sm font-semibold text-primary hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            <Link to="/student/requests" className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 hover:shadow-md transition-shadow">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJhlWL-rb-00IjzlDLsM56DkY1kqEDHHJJjGduEI6fNQJ_PghVnRAeLbXlhy-5OEeXCa1p8BieMZf47IFt4esKEkINQhalUZjbJH90kFSdhSqu4LdXCWxfbTxi7Gh7s9qEPyOmc8hMPggWg9-EMC5hNh1gUf0W2-7YUpbiHRvRtgwotyw5WrNzNDDmtxJPZG3QyKpM00S06baM3DKS-Alg-IhcJSpHZoX1vX8FA4RSDXTZWlQlgsGcmicFMGtVrSBGuzV8cEbnTmg"
                alt="Starlight Systems"
                className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-on-surface">Frontend Developer Intern</h4>
                <p className="text-sm text-on-surface-variant">Starlight Systems • Remote</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full uppercase">Pending</span>
                <span className="text-xs text-on-surface-variant">Applied 2 days ago</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant self-end sm:self-auto">chevron_right</span>
            </Link>

            <Link to="/student/requests" className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 hover:shadow-md transition-shadow">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEaX6-OopiIwGM8n99qxWYUn6C3FHXjP5XBVFPhn7lgW1Rf9ATEyZ4NKH1Bv5VrrKErPQ2Uz5CgsyPzyRpBk1GoW0Ocd8PAlz8XdgRX-r9gMMSMxszzsQ4XVBfGSsRdnnMgPry4Xoj_4u1u7Ug8-dARSPDi7gleBOyeI_mahn_bDGxjeNZQ35KwXZHQ_-sVVTICPffrnlfrzK4xENf-64jugTy9SgkGLxuSzfG6JdGXkFg3rstWQOJ6wS5HTCC-Jy2zGtY9ZMZqyc"
                alt="Global Fin-Tech"
                className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-on-surface">Data Analyst Trainee</h4>
                <p className="text-sm text-on-surface-variant">Global Fin-Tech • London, UK</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full uppercase">Approved</span>
                <span className="text-xs text-on-surface-variant">Applied 1 week ago</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant self-end sm:self-auto">chevron_right</span>
            </Link>
          </div>
        </div>

        {/* Top Skill Matches */}
        <div className="col-span-12 lg:col-span-4">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">Top Skill Matches</h2>
          <div className="bg-surface-container-low rounded-xl p-6 space-y-5">
            <div className="relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-tertiary">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h4 className="font-bold text-on-surface">UI/UX Designer</h4>
                  <p className="text-xs text-on-surface-variant">Creative Pulse Studio</p>
                </div>
                <span className="px-2 py-0.5 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full whitespace-nowrap">98% Match</span>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface-variant text-xs rounded-full">Figma</span>
                <span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface-variant text-xs rounded-full">User Research</span>
              </div>
            </div>

            <div className="relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-primary-container">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h4 className="font-bold text-on-surface">Product Manager</h4>
                  <p className="text-xs text-on-surface-variant">Nexus Logistics</p>
                </div>
                <span className="px-2 py-0.5 bg-primary-fixed text-primary text-xs font-bold rounded-full whitespace-nowrap">82% Match</span>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface-variant text-xs rounded-full">Agile</span>
                <span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface-variant text-xs rounded-full">Analytics</span>
              </div>
            </div>

            <div className="relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-secondary-container">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h4 className="font-bold text-on-surface">Junior Developer</h4>
                  <p className="text-xs text-on-surface-variant">Open Source Found.</p>
                </div>
                <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold rounded-full whitespace-nowrap">75% Match</span>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface-variant text-xs rounded-full">Python</span>
                <span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface-variant text-xs rounded-full">Git</span>
              </div>
            </div>

            <Link
              to="/student/suggested"
              className="block w-full py-3 bg-surface-container-highest text-on-surface rounded-xl font-semibold text-sm hover:bg-surface-container-high transition-colors text-center"
            >
              Discover All Matches
            </Link>
          </div>
        </div>
      </div>

      <FAB icon="add" label="Create New CV" onClick={() => navigate('/student/cv-builder')} />
    </div>
  )
}
