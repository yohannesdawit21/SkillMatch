import { useState } from 'react'
import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'hiring', label: 'Hiring' },
  { id: 'supervisors', label: 'Supervisors' },
  { id: 'system', label: 'System' },
]

const notifications = [
  {
    id: '1',
    tab: 'hiring',
    icon: 'person_add',
    title: 'New application received',
    description: 'Liya Assefa applied to Frontend Developer Intern · match 88%',
    time: '12 min ago',
    unread: true,
    urgent: false,
  },
  {
    id: '2',
    tab: 'hiring',
    icon: 'event_available',
    title: 'Interview completed',
    description: 'Feedback pending for Abeba Kebede — Data Analyst role.',
    time: '1 hr ago',
    unread: true,
    urgent: true,
  },
  {
    id: '3',
    tab: 'supervisors',
    icon: 'supervisor_account',
    title: 'Supervisor capacity warning',
    description: 'Design team is at 100% intern capacity. Pause new assignments or add a mentor.',
    time: '3 hr ago',
    unread: false,
    urgent: true,
  },
  {
    id: '4',
    tab: 'system',
    icon: 'shield_lock',
    title: 'Security: new device sign-in',
    description: 'Chrome on Linux · Addis Ababa. If this wasn’t you, reset your password.',
    time: 'Yesterday',
    unread: false,
    urgent: false,
  },
  {
    id: '5',
    tab: 'hiring',
    icon: 'description',
    title: 'Posting deadline in 48 hours',
    description: 'Software QA Internships closes Apr 2. Extend or close from Post Internships.',
    time: 'Yesterday',
    unread: true,
    urgent: false,
  },
  {
    id: '6',
    tab: 'system',
    icon: 'update',
    title: 'Platform maintenance',
    description: 'Scheduled Sunday 02:00–04:00 EAT. Brief read-only mode possible.',
    time: '2 days ago',
    unread: false,
    urgent: false,
  },
]

export default function CompanyNotificationsPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [items, setItems] = useState(notifications)
  const { notice, showNotice } = useActionNotice()

  const filtered =
    activeTab === 'all'
      ? items
      : items.filter((n) => n.tab === activeTab)

  const handleExport = () => {
    const header = 'Title,Category,Time'
    const rows = items.map((item) => `${item.title},${item.tab},${item.time}`)
    const link = document.createElement('a')

    link.href = `data:text/csv;charset=utf-8,${encodeURIComponent([header, ...rows].join('\n'))}`
    link.download = 'company-notifications.csv'
    link.click()
    showNotice('Notification log exported.')
  }

  return (
    <div className="pt-6 pb-12 pr-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <ActionNotice message={notice} />

        <div>
          <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">Notifications</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
            Stay on top of hiring events, supervisor updates, and account activity in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeTab === t.id
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low border border-outline-variant/20'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-2 shadow-sm">
              <ul className="divide-y divide-outline-variant/20">
                {filtered.map((n) => (
                  <li
                    key={n.id}
                    className={`flex gap-4 p-4 rounded-lg transition-colors ${
                      n.unread ? 'bg-primary-container/15' : ''
                    } ${n.urgent ? 'border-l-4 border-error pl-3' : ''}`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        n.urgent ? 'bg-error-container/40 text-error' : 'bg-surface-container-low text-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: n.unread ? "'FILL' 1" : undefined }}>
                        {n.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className={`text-sm font-bold ${n.unread ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                          {n.title}
                        </p>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {n.unread && <span className="w-2 h-2 rounded-full bg-primary" aria-hidden />}
                          <span className="text-[11px] text-on-surface-variant whitespace-nowrap">{n.time}</span>
                        </div>
                      </div>
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">{n.description}</p>
                      {n.urgent && (
                        <span className="inline-flex mt-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-error-container text-on-error-container">
                          Urgent
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Notification preferences</h3>
              <div className="space-y-4">
                {[
                  { id: 'email_apps', label: 'Email for new applications', defaultOn: true },
                  { id: 'email_deadlines', label: 'Deadline & posting reminders', defaultOn: true },
                  { id: 'push_supervisors', label: 'Supervisor capacity alerts', defaultOn: false },
                  { id: 'digest', label: 'Weekly hiring digest', defaultOn: true },
                ].map((pref) => (
                  <label key={pref.id} className="flex items-center justify-between gap-3 cursor-pointer">
                    <span className="text-sm text-on-surface font-medium">{pref.label}</span>
                    <input type="checkbox" defaultChecked={pref.defaultOn} className="w-4 h-4 rounded border-outline-variant accent-primary" />
                  </label>
                ))}
              </div>
              <button
                type="button"
                onClick={() => showNotice('Notification preferences saved locally.')}
                className="mt-6 w-full py-2.5 bg-primary text-on-primary rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Save preferences
              </button>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Quick actions</h3>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setItems((current) => current.map((item) => ({ ...item, unread: false })))
                    showNotice('All notifications marked as read.')
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-low text-left text-sm font-semibold text-on-surface hover:bg-surface-container-high transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-xl">done_all</span>
                  Mark all as read
                </button>
                <button
                  type="button"
                  onClick={() => showNotice('Hiring notifications muted for the next 24 hours.')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-low text-left text-sm font-semibold text-on-surface hover:bg-surface-container-high transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-xl">notifications_off</span>
                  Mute hiring for 24h
                </button>
                <button
                  type="button"
                  onClick={handleExport}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-low text-left text-sm font-semibold text-on-surface hover:bg-surface-container-high transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-xl">download</span>
                  Export notification log
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
