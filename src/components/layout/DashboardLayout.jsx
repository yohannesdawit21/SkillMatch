import { useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopNav from './TopNav'
import { useAuth } from '../../context/AuthContext'

export default function DashboardLayout({ role }) {
  const location = useLocation()
  const { role: activeRole } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const marginClass = role === 'student' ? 'lg:ml-72' : 'lg:ml-64'

  if (!activeRole) {
    return <Navigate to="/auth" replace state={{ from: location.pathname }} />
  }

  if (activeRole !== role) {
    return <Navigate to={`/${activeRole}/dashboard`} replace />
  }

  return (
    <div className="min-h-screen bg-surface overflow-x-hidden">
      <Sidebar role={role} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <TopNav role={role} onMenuToggle={() => setSidebarOpen((current) => !current)} />
      <main className={`${marginClass} pt-24 lg:pt-16 min-h-screen`}>
        <Outlet />
      </main>
    </div>
  )
}
