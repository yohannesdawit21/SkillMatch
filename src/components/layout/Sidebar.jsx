import { Link, useLocation } from 'react-router-dom'

const navConfig = {
  student: {
    subtitle: 'THE DIGITAL REGISTRAR',
    width: 'w-72',
    items: [
      { icon: 'space_dashboard', label: 'Dashboard', path: '/student/dashboard' },
      { icon: 'travel_explore', label: 'Search Internships', path: '/student/search' },
      { icon: 'person', label: 'My Profile', path: '/student/profile' },
      { icon: 'description', label: 'Create CV', path: '/student/cv-builder' },
      { icon: 'auto_awesome', label: 'Suggested Internships', path: '/student/suggested' },
      { icon: 'inventory_2', label: 'Applications', path: '/student/requests' },
      { icon: 'edit_document', label: 'Weekly Reports', path: '/student/reports' },
      { icon: 'workspace_premium', label: 'Final Evaluation', path: '/student/evaluation' },
      { type: 'divider' },
      { icon: 'settings', label: 'Settings', path: '/student/settings' },
      { icon: 'logout', label: 'Logout', path: '/logout' },
    ],
  },
  company: {
    subtitle: 'EMPLOYER PORTAL',
    width: 'w-64',
    items: [
      { icon: 'dashboard', label: 'Dashboard', path: '/company/dashboard' },
      { icon: 'work', label: 'Post Internships', path: '/company/post' },
      { icon: 'supervisor_account', label: 'Supervisors', path: '/company/supervisors' },
      { icon: 'folder_open', label: 'Applications', path: '/company/applications' },
      { icon: 'notifications', label: 'Notifications', path: '/company/notifications' },
      { type: 'divider' },
      { type: 'button', icon: 'add', label: 'New Posting', path: '/company/post/new' },
      { icon: 'settings', label: 'Settings', path: '/company/settings' },
      { icon: 'logout', label: 'Logout', path: '/logout' },
    ],
  },
  university: {
    subtitle: 'ACADEMIC PORTAL',
    width: 'w-64',
    items: [
      { icon: 'account_balance', label: 'University Profile', path: '/university/dashboard' },
      { icon: 'person_add', label: 'Assign Advisors', path: '/university/advisors' },
      { icon: 'monitoring', label: 'Internship Monitoring', path: '/university/monitoring' },
      { icon: 'bar_chart', label: 'Statistics', path: '/university/statistics' },
      { icon: 'notifications', label: 'Notifications', path: '/university/notifications' },
      { icon: 'settings', label: 'Settings', path: '/university/settings' },
      { type: 'divider' },
      { icon: 'help', label: 'Help Center', path: '/university/help' },
      { icon: 'logout', label: 'Logout', path: '/logout' },
    ],
  },
  admin: {
    subtitle: 'SYSTEM ADMIN',
    width: 'w-64',
    items: [
      { icon: 'dashboard', label: 'Global Overview', path: '/admin/dashboard' },
      { icon: 'account_balance', label: 'Manage Universities', path: '/admin/universities' },
      { icon: 'business', label: 'Manage Companies', path: '/admin/companies' },
      { icon: 'group', label: 'User Management', path: '/admin/users' },
      { icon: 'analytics', label: 'System Analytics', path: '/admin/analytics' },
      { icon: 'settings', label: 'Settings', path: '/admin/settings' },
      { type: 'divider' },
      { icon: 'support_agent', label: 'Support', path: '/admin/support' },
      { icon: 'logout', label: 'Logout', path: '/logout' },
    ],
  },
}

export default function Sidebar({ role, isOpen = false, onClose }) {
  const location = useLocation()
  const config = navConfig[role] || navConfig.student
  const handleClose = () => {
    onClose?.()
  }

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={handleClose}
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 ${config.width} h-screen bg-slate-50 z-50 flex flex-col shadow-xl transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
      <div className="px-4 sm:px-6 pt-6 lg:pt-8 pb-5 lg:pb-6">
        <div className="flex items-start justify-between gap-3">
          <div>
        <Link to="/" className="text-2xl font-bold tracking-tighter text-blue-900 block">
          SkillMatch
        </Link>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-1 font-semibold">
          {config.subtitle}
        </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="lg:hidden text-slate-500 hover:text-slate-800"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <nav className="flex-1 px-3 sm:px-4 space-y-1 overflow-y-auto hide-scrollbar">
        {config.items.map((item, i) => {
          if (item.type === 'divider') {
            return <div key={i} className="my-4" />
          }

          if (item.type === 'button') {
            return (
              <Link
                key={i}
                to={item.path}
                onClick={handleClose}
                className="flex items-center gap-3 px-4 py-3 editorial-gradient text-white rounded-lg font-semibold text-sm mt-2"
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                {item.label}
              </Link>
            )
          }

          const isActive = location.pathname === item.path

          return (
            <Link
              key={i}
              to={item.path}
              onClick={handleClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-blue-100 text-blue-900 font-bold'
                  : 'text-slate-600 hover:bg-slate-200/50'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {role === 'student' && (
        <div className="mx-3 sm:mx-4 mb-5 lg:mb-6 p-5 editorial-gradient rounded-xl text-white">
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-1">Match Score</p>
          <p className="text-2xl font-extrabold mb-3">84% Complete</p>
          <div className="w-full bg-white/20 rounded-full h-2 mb-3">
            <div className="bg-white rounded-full h-2" style={{ width: '84%' }} />
          </div>
          <Link
            to="/student/suggested"
            onClick={handleClose}
            className="block w-full py-2 bg-white text-primary rounded-lg text-sm font-bold hover:bg-white/90 transition-colors text-center"
          >
            Check Match Score
          </Link>
        </div>
      )}

      {role === 'admin' && (
        <div className="mx-3 sm:mx-4 mb-5 lg:mb-6 p-4 bg-slate-100 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
            SA
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Super Admin</p>
            <p className="text-xs text-slate-500">admin@skillmatch.gov</p>
          </div>
        </div>
      )}
      </aside>
    </>
  )
}
