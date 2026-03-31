import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function CompanySettingsPage() {
  const { notice, showNotice } = useActionNotice()

  return (
    <div className="pt-6 pb-12 pr-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <ActionNotice message={notice} />

        <div>
          <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">Settings</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
            Update your company profile, hiring defaults, notifications, and how candidates experience your careers presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-3 mb-1">
              <span className="material-symbols-outlined text-primary text-2xl">apartment</span>
              <h3 className="font-headline text-xl font-bold text-on-surface">Company profile</h3>
            </div>
            <p className="text-xs text-on-surface-variant -mt-2">Shown to applicants and on your public careers page</p>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Legal name</label>
              <input
                type="text"
                defaultValue="Horizon Tech Solutions PLC"
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Industry</label>
              <select className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                <option>Technology / Software</option>
                <option>Financial services</option>
                <option>Telecommunications</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Company size</label>
              <select className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                <option>201–500</option>
                <option>501–1000</option>
                <option>1000+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Headquarters</label>
              <input
                type="text"
                defaultValue="Addis Ababa, Ethiopia"
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <button
              type="button"
              onClick={() => showNotice('Company profile saved locally.')}
              className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Save profile
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-3 mb-1">
              <span className="material-symbols-outlined text-primary text-2xl">tune</span>
              <h3 className="font-headline text-xl font-bold text-on-surface">Hiring preferences</h3>
            </div>
            <p className="text-xs text-on-surface-variant -mt-2">Defaults for new internship postings</p>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Default application deadline (weeks)</label>
              <input
                type="number"
                min="1"
                defaultValue={3}
                className="w-full max-w-xs px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Minimum match score to surface</label>
              <input
                type="range"
                min="50"
                max="100"
                defaultValue="80"
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-[10px] text-on-surface-variant mt-1">
                <span>50</span>
                <span>80 (default)</span>
                <span>100</span>
              </div>
            </div>
            <label className="flex items-center justify-between gap-3 cursor-pointer py-2">
              <span className="text-sm font-medium text-on-surface">Require university email verification</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-primary" />
            </label>
            <label className="flex items-center justify-between gap-3 cursor-pointer py-2">
              <span className="text-sm font-medium text-on-surface">Auto-notify supervisors on new shortlist</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-primary" />
            </label>
            <button
              type="button"
              onClick={() => showNotice('Hiring preferences saved locally.')}
              className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Save hiring preferences
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-3 mb-1">
              <span className="material-symbols-outlined text-primary text-2xl">notifications</span>
              <h3 className="font-headline text-xl font-bold text-on-surface">Notification settings</h3>
            </div>
            <p className="text-xs text-on-surface-variant -mt-2">Where we reach your hiring team</p>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Primary hiring inbox</label>
              <input
                type="email"
                defaultValue="talent@horizontech.et"
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Digest frequency</label>
              <select className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                <option>Daily summary</option>
                <option>Weekly digest</option>
                <option>Real-time only</option>
              </select>
            </div>
            <label className="flex items-center justify-between gap-3 cursor-pointer py-2">
              <span className="text-sm font-medium text-on-surface">SMS for urgent supervisor alerts</span>
              <input type="checkbox" className="w-4 h-4 rounded accent-primary" />
            </label>
            <button
              type="button"
              onClick={() => showNotice('Notification settings saved locally.')}
              className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Save notifications
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-3 mb-1">
              <span className="material-symbols-outlined text-primary text-2xl">palette</span>
              <h3 className="font-headline text-xl font-bold text-on-surface">Branding / careers page</h3>
            </div>
            <p className="text-xs text-on-surface-variant -mt-2">Public-facing careers experience</p>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Careers page slug</label>
              <div className="flex rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container-low">
                <span className="px-3 py-3 text-xs text-on-surface-variant bg-surface-container-high shrink-0 flex items-center">
                  careers.horizontech.et/
                </span>
                <input
                  type="text"
                  defaultValue="internships"
                  className="flex-1 min-w-0 px-3 py-3 bg-transparent text-on-surface text-sm focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Accent color</label>
              <div className="flex items-center gap-3">
                <input type="color" defaultValue="#6750a4" className="w-12 h-12 rounded-lg border border-outline-variant/30 cursor-pointer bg-transparent" />
                <span className="text-sm text-on-surface-variant">Used for buttons and highlights on your careers site</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Hero tagline</label>
              <textarea
                rows={3}
                defaultValue="Build real products with mentors who care — internships that turn into careers."
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => showNotice('Careers page preview prepared with current branding values.')}
                className="px-6 py-2.5 rounded-lg bg-surface-container-highest text-on-surface font-semibold text-sm hover:bg-surface-container-high transition-colors"
              >
                Preview careers page
              </button>
              <button
                type="button"
                onClick={() => showNotice('Branding settings saved locally.')}
                className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Save branding
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
