import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const userInfoByRole = {
  student: { name: 'Alex Rivers', title: 'Computer Science, Year 3' },
  company: { name: 'Sarah Chen', title: 'HR Manager, TechCorp' },
  university: { name: 'Dr. Kebede', title: 'Dean of Internships' },
  admin: { name: 'Super Admin', title: 'System Administrator' },
}

const topNavLinks = {
  student: {
    resources: '/opportunities',
    help: '/support',
    notifications: '/student/requests',
    chat: '/support',
  },
  company: {
    resources: '/company/post',
    help: '/support',
    notifications: '/company/notifications',
    chat: '/company/notifications',
  },
  university: {
    resources: '/university/statistics',
    help: '/university/help',
    notifications: '/university/notifications',
    chat: '/university/help',
  },
  admin: {
    resources: '/admin/analytics',
    help: '/admin/support',
    notifications: '/admin/support',
    chat: '/admin/support',
  },
}

const quickSearchTarget = {
  student: '/student/search',
  company: '/company/applications',
  university: '/university/help',
  admin: '/admin/analytics',
}

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export default function TopNav({ role, onMenuToggle }) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')
  const baseUser = userInfoByRole[role] || userInfoByRole.student
  const displayUser = useMemo(() => {
    const mergedUser = { ...baseUser, ...user }

    return {
      ...mergedUser,
      initials: mergedUser.initials || getInitials(mergedUser.name || baseUser.name),
    }
  }, [baseUser, user])
  const links = topNavLinks[role] || topNavLinks.student
  const leftClass = role === 'student' ? 'lg:left-72' : 'lg:left-64'

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    navigate(quickSearchTarget[role] || '/support', {
      state: searchTerm ? { searchTerm } : undefined,
    })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 ${leftClass} z-40 bg-white/80 backdrop-blur-xl shadow-sm`}>
      <div className="flex flex-col gap-3 px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuToggle}
            className="lg:hidden text-slate-600 hover:text-primary transition-colors"
            aria-label="Open navigation"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>

        <form onSubmit={handleSearchSubmit} className="relative min-w-0 flex-1 lg:max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search and press Enter..."
            className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
          />
        </form>
        </div>

        <div className="flex items-center justify-between gap-3 sm:justify-end sm:gap-6">
          {(links.resources || links.help) && (
            <>
              <div className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-600">
                {links.resources && (
                  <Link to={links.resources} className="hover:text-primary transition-colors">Resources</Link>
                )}
                {links.help && (
                  <Link to={links.help} className="hover:text-primary transition-colors">Help Center</Link>
                )}
              </div>

              <div className="h-6 w-px bg-slate-200 hidden xl:block" />
            </>
          )}

          <div className="flex items-center gap-3 sm:gap-4">
            <Link to={links.notifications} className="relative text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">notifications</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
            </Link>

            <Link to={links.chat} className="text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">chat_bubble</span>
            </Link>
          </div>

          <div className="h-6 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800">{displayUser.name}</p>
              <p className="text-xs text-slate-500">{displayUser.title}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
              {displayUser.initials}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
