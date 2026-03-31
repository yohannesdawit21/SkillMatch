import { useState } from 'react'
import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function UniversityNotificationsPage() {
  const filters = ['All', 'Advisor', 'Student', 'Company', 'System']
  const [activeFilter, setActiveFilter] = useState('All')
  const [items, setItems] = useState([
    { id: 1, filter: 'Advisor', icon: 'school', title: 'Advisor capacity alert — Architecture', description: 'Three advisors are above 110% load. Consider redistributing twelve pending students.', time: '12 min ago', unread: true, urgent: false },
    { id: 2, filter: 'Student', icon: 'person', title: 'Bulk document upload completed', description: 'Cohort 2026-B uploaded 214 verification files. 6 files require manual review.', time: '1 hr ago', unread: true, urgent: true },
    { id: 3, filter: 'Company', icon: 'apartment', title: 'New MOU signed — Ethio Telecom', description: 'Partnership activated for CS and EE. Default placement rules have been applied.', time: '3 hr ago', unread: false, urgent: false },
    { id: 4, filter: 'System', icon: 'settings_suggest', title: 'Scheduled maintenance — Sat 02:00–04:00', description: 'Reporting exports may be delayed. No data loss expected.', time: '5 hr ago', unread: true, urgent: false },
    { id: 5, filter: 'Advisor', icon: 'assignment_turned_in', title: 'Prof. Sara Mengistu submitted mid-term batch', description: '47 mid-term evaluations ready for registrar sign-off.', time: 'Yesterday', unread: false, urgent: false },
    { id: 6, filter: 'Student', icon: 'gavel', title: 'Compliance hold lifted — 9 students', description: 'Insurance certificates validated. Students may resume placement search.', time: 'Yesterday', unread: false, urgent: true },
  ])
  const { notice, showNotice } = useActionNotice()

  const visible = activeFilter === 'All'
    ? items
    : items.filter((n) => n.filter === activeFilter)

  return (
    <div className="p-8 space-y-8">
      <ActionNotice message={notice} />

      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-black tracking-tight text-on-surface">Notifications</h1>
          <p className="text-sm text-on-surface-variant mt-2 max-w-xl leading-relaxed">
            Central feed for advisor actions, student milestones, employer updates, and platform events affecting your institution.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setItems((current) => current.map((item) => ({ ...item, unread: false })))
            showNotice('All university notifications marked as read.')
          }}
          className="text-sm font-bold text-primary hover:underline"
        >
          Mark all as read
        </button>
      </header>

      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              activeFilter === f
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-3">
          {visible.map((n) => (
            <article
              key={n.id}
              className={`rounded-xl p-5 shadow-sm border transition-colors ${
                n.unread
                  ? 'bg-surface-container-lowest border-primary/25'
                  : 'bg-surface-container-lowest/80 border-outline-variant/20'
              } ${n.urgent ? 'ring-2 ring-error/30' : ''}`}
            >
              <div className="flex gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${n.urgent ? 'bg-error-container text-error' : 'bg-primary/15 text-primary'}`}>
                  <span className="material-symbols-outlined text-xl">{n.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="text-sm font-bold text-on-surface">{n.title}</h2>
                    {n.unread && <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary text-on-primary">Unread</span>}
                    {n.urgent && <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-error-container text-error">Urgent</span>}
                    <span className="text-[10px] font-semibold text-on-surface-variant ml-auto">{n.filter}</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{n.description}</p>
                  <p className="text-xs text-on-surface-variant/80 mt-2 font-medium">{n.time}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-on-surface mb-4">Notification preferences</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Email digest (daily)', on: true },
                { label: 'SMS for urgent only', on: true },
                { label: 'Slack / Teams webhook', on: false },
              ].map((pref) => (
                <li key={pref.label} className="flex items-center justify-between gap-3">
                  <span className="text-on-surface-variant">{pref.label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={pref.on} />
                    <span className="w-10 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => showNotice('Notification channels opened for registrar delivery settings.')}
              className="mt-5 w-full py-2.5 rounded-lg font-bold text-sm border-2 border-primary text-primary hover:bg-primary/5 transition-colors"
            >
              Manage channels
            </button>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-container text-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold mb-2">Quick actions</h3>
            <p className="text-xs text-white/80 mb-4 leading-relaxed">Jump to workflows tied to recent notification types.</p>
            <ul className="space-y-2">
              {['Review advisor load', 'Open compliance queue', 'Sync employer directory'].map((a) => (
                <li key={a}>
                  <button
                    type="button"
                    onClick={() => showNotice(`${a} opened from notifications.`)}
                    className="w-full text-left text-sm font-semibold py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {a}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
