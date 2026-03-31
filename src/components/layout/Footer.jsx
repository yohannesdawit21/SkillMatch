import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full py-10 sm:py-12 bg-slate-50 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4 sm:px-6 lg:px-12 gap-6 max-w-7xl mx-auto">
        <div>
          <span className="font-bold text-blue-900 text-xl">SkillMatch</span>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-2">
            &copy; {new Date().getFullYear()} SkillMatch National Internship Platform
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <Link className="text-xs uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors" to="/privacy">Privacy Policy</Link>
          <Link className="text-xs uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors" to="/terms">Terms of Service</Link>
          <Link className="text-xs uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors" to="/support">Contact Support</Link>
          <Link className="text-xs uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors" to="/support#faq">FAQ</Link>
        </div>

        <div className="flex gap-4">
          <Link className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:opacity-80 transition-opacity" to="/opportunities" aria-label="Explore opportunities">
            <span className="material-symbols-outlined text-lg">public</span>
          </Link>
          <Link className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:opacity-80 transition-opacity" to="/support" aria-label="Contact support">
            <span className="material-symbols-outlined text-lg">alternate_email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
