import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function PublicNav() {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const sectionLinks = [
    { label: 'About', id: 'about' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Universities', id: 'universities' },
    { label: 'Companies', id: 'companies' },
  ]

  const handleSectionClick = (sectionId) => {
    setMobileOpen(false)

    if (location.pathname === '/') {
      const target = document.getElementById(sectionId)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    navigate(`/#${sectionId}`)
  }

  return (
    <nav className="fixed top-0 w-full z-50 glass-header shadow-sm">
      <div className="flex justify-between items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl sm:text-2xl font-bold tracking-tighter text-blue-900 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">school</span>
          SkillMatch
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {sectionLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleSectionClick(link.id)}
              className="font-['Manrope'] text-sm font-semibold tracking-tight text-slate-600 hover:text-blue-800 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/opportunities"
            className="font-['Manrope'] text-sm font-semibold tracking-tight text-slate-600 hover:text-blue-800 transition-colors"
          >
            Opportunities
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/auth"
            className="bg-primary text-on-primary px-4 sm:px-6 py-2 rounded-md font-semibold text-sm hover:opacity-90 active:scale-95 transition-all editorial-gradient"
          >
            Login
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="md:hidden text-primary"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/40 bg-white/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
            {sectionLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleSectionClick(link.id)}
                className="text-left font-['Manrope'] text-sm font-semibold tracking-tight text-slate-700 hover:text-blue-800 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/opportunities"
              onClick={() => setMobileOpen(false)}
              className="font-['Manrope'] text-sm font-semibold tracking-tight text-slate-700 hover:text-blue-800 transition-colors"
            >
              Opportunities
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
