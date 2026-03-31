import { useState } from 'react'

const notificationOptions = [
  {
    id: 'app_match',
    label: 'New internship matches',
    description: 'When our engine finds roles above your minimum match score.',
  },
  {
    id: 'app_deadline',
    label: 'Application deadlines',
    description: 'Reminders 48h and 24h before saved postings close.',
  },
  {
    id: 'app_status',
    label: 'Application status updates',
    description: 'When a company moves you to shortlist, interview, or final decision.',
  },
  {
    id: 'uni_announce',
    label: 'University & advisor messages',
    description: 'Mandatory notices, report deadlines, and advisor comments.',
  },
  {
    id: 'digest',
    label: 'Weekly digest email',
    description: 'Summary of new postings, profile views, and tasks.',
  },
]

const visibilityOptions = [
  { id: 'public_profile', label: 'Show my profile to verified companies', helper: 'Required for applying through the platform.' },
  { id: 'show_gpa', label: 'Display GPA on my public profile', helper: 'You can hide this and still apply internally.' },
  { id: 'show_projects', label: 'Highlight projects and experience', helper: 'Improves match quality for technical roles.' },
  { id: 'analytics', label: 'Allow anonymized analytics on how I use search', helper: 'Helps improve recommendations for all students.' },
]

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'ar', label: 'Arabic' },
]

const digestFrequency = [
  { value: 'off', label: 'Off' },
  { value: 'weekly', label: 'Weekly (Monday)' },
  { value: 'biweekly', label: 'Every two weeks' },
]

export default function StudentSettingsPage() {
  const [notifications, setNotifications] = useState({
    app_match: true,
    app_deadline: true,
    app_status: true,
    uni_announce: true,
    digest: false,
  })
  const [visibility, setVisibility] = useState({
    public_profile: true,
    show_gpa: true,
    show_projects: true,
    analytics: true,
  })
  const [twoFactor, setTwoFactor] = useState(false)
  const [sessionAlerts, setSessionAlerts] = useState(true)

  const toggleNotification = (id) => {
    setNotifications((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleVisibility = (id) => {
    setVisibility((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="pt-24 pb-12 px-8 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-base">settings</span>
            Preferences
          </p>
          <h1 className="font-headline text-4xl font-black tracking-tight text-on-surface mb-3">Settings</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Control how you sign in, what we email you, and how much of your academic profile companies and advisors can see.
          </p>
        </div>

        {/* Account */}
        <section className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/10 space-y-5">
          <div className="flex items-center gap-3 mb-1">
            <span className="material-symbols-outlined text-primary text-2xl">manage_accounts</span>
            <h2 className="font-headline text-xl font-bold text-on-surface">Account settings</h2>
          </div>
          <p className="text-xs text-on-surface-variant -mt-2">Linked to your university identity where applicable</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Display name</label>
              <input
                type="text"
                defaultValue="Alex Morgan"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Primary email</label>
              <input
                type="email"
                defaultValue="alex.morgan@student.cu.edu.eg"
                readOnly
                className="w-full px-4 py-3 rounded-xl bg-surface-container-high/50 border border-outline-variant/50 text-on-surface-variant text-sm cursor-not-allowed"
              />
              <p className="text-[11px] text-on-surface-variant mt-1">Managed by your university SSO. Contact IT to change.</p>
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Backup contact email</label>
              <input
                type="email"
                placeholder="personal@email.com"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Interface language</label>
              <select
                defaultValue="en"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {languageOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Time zone</label>
              <select className="w-full max-w-md px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Africa/Cairo (GMT+2)</option>
                <option>UTC</option>
                <option>Europe/London</option>
              </select>
            </div>
          </div>
          <button
            type="button"
            className="px-6 py-3 rounded-xl bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Save account changes
          </button>
        </section>

        {/* Notifications */}
        <section className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/10 space-y-5">
          <div className="flex items-center gap-3 mb-1">
            <span className="material-symbols-outlined text-primary text-2xl">notifications</span>
            <h2 className="font-headline text-xl font-bold text-on-surface">Notification preferences</h2>
          </div>
          <p className="text-xs text-on-surface-variant -mt-2">Choose what we send to your inbox and in-app bell</p>
          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Digest frequency</label>
            <select className="w-full max-w-md px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              {digestFrequency.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <ul className="divide-y divide-outline-variant/15 rounded-xl border border-outline-variant/20 overflow-hidden">
            {notificationOptions.map((item) => (
              <li key={item.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-surface-container-low/40">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-on-surface">{item.label}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{item.description}</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={notifications[item.id]}
                  onClick={() => toggleNotification(item.id)}
                  className={`relative flex-shrink-0 w-12 h-7 rounded-full transition-colors ${
                    notifications[item.id] ? 'bg-primary' : 'bg-surface-container-highest'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      notifications[item.id] ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="px-6 py-3 rounded-xl bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Update notifications
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-xl border border-outline-variant text-on-surface font-semibold text-sm hover:bg-surface-container-low transition-colors"
            >
              Reset to defaults
            </button>
          </div>
        </section>

        {/* Privacy */}
        <section className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/10 space-y-5">
          <div className="flex items-center gap-3 mb-1">
            <span className="material-symbols-outlined text-primary text-2xl">visibility</span>
            <h2 className="font-headline text-xl font-bold text-on-surface">Privacy & visibility</h2>
          </div>
          <p className="text-xs text-on-surface-variant -mt-2">Fine-tune what recruiters see without hiding your applications</p>
          <ul className="space-y-4">
            {visibilityOptions.map((opt) => (
              <li
                key={opt.id}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/10"
              >
                <div className="min-w-0 pr-4">
                  <p className="text-sm font-semibold text-on-surface">{opt.label}</p>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{opt.helper}</p>
                </div>
                <label className="inline-flex items-center gap-2 cursor-pointer flex-shrink-0 sm:pt-0.5">
                  <input
                    type="checkbox"
                    checked={visibility[opt.id]}
                    onChange={() => toggleVisibility(opt.id)}
                    className="w-4 h-4 rounded accent-primary"
                  />
                  <span className="text-xs font-medium text-on-surface-variant">On</span>
                </label>
              </li>
            ))}
          </ul>
          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">
              Default profile visibility
            </label>
            <select className="w-full max-w-md px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Companies I apply to + suggested matches</option>
              <option>Only companies I explicitly approve</option>
              <option>Hidden from discovery (apply-only mode)</option>
            </select>
          </div>
          <button
            type="button"
            className="px-6 py-3 rounded-xl bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Save privacy settings
          </button>
        </section>

        {/* Password & security */}
        <section className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/10 space-y-5">
          <div className="flex items-center gap-3 mb-1">
            <span className="material-symbols-outlined text-primary text-2xl">lock</span>
            <h2 className="font-headline text-xl font-bold text-on-surface">Password & security</h2>
          </div>
          <p className="text-xs text-on-surface-variant -mt-2">If you use university SSO, password changes may redirect to your campus portal</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Current password</label>
              <input
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">New password</label>
              <input
                type="password"
                autoComplete="new-password"
                placeholder="At least 12 characters"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Confirm new password</label>
              <input
                type="password"
                autoComplete="new-password"
                placeholder="Repeat password"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <div>
              <p className="text-sm font-semibold text-on-surface">Two-factor authentication (2FA)</p>
              <p className="text-xs text-on-surface-variant mt-1">Add an authenticator app for sensitive actions.</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={twoFactor}
              onClick={() => setTwoFactor(!twoFactor)}
              className={`relative flex-shrink-0 w-12 h-7 rounded-full transition-colors self-start sm:self-center ${
                twoFactor ? 'bg-primary' : 'bg-surface-container-highest'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                  twoFactor ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <label className="flex items-center justify-between gap-4 cursor-pointer p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/10">
            <div>
              <p className="text-sm font-semibold text-on-surface">Email me when a new device signs in</p>
              <p className="text-xs text-on-surface-variant mt-1">Recommended if you use shared lab computers.</p>
            </div>
            <input
              type="checkbox"
              checked={sessionAlerts}
              onChange={() => setSessionAlerts(!sessionAlerts)}
              className="w-4 h-4 rounded accent-primary flex-shrink-0"
            />
          </label>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              className="px-6 py-3 rounded-xl bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Update password
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-xl border border-outline-variant text-on-surface font-semibold text-sm hover:bg-surface-container-low transition-colors"
            >
              Sign out all other sessions
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
