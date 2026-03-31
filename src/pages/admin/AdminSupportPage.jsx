import { useMemo, useState } from 'react'
import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function AdminSupportPage() {
  const tickets = [
    { id: 'SUP-4821', subject: 'Bulk placement export timing out', requester: 'HU Registrar', priority: 'P1', status: 'In progress', age: '2h', sla: 'Breached' },
    { id: 'SUP-4819', subject: 'Company cannot verify domain (DNS)', requester: 'GreenLeaf AgriTech', priority: 'P2', status: 'Waiting', age: '5h', sla: 'On track' },
    { id: 'SUP-4816', subject: 'Student profile photo upload fails', requester: 'Meron A.', priority: 'P3', status: 'New', age: '1d', sla: 'On track' },
    { id: 'SUP-4812', subject: 'Advisor reassignment batch job', requester: 'Jimma Univ.', priority: 'P3', status: 'Resolved', age: '2d', sla: 'Met' },
    { id: 'SUP-4808', subject: 'Incorrect match scores for CS cohort', requester: 'AASTU', priority: 'P2', status: 'Escalated', age: '3d', sla: 'At risk' },
    { id: 'SUP-4801', subject: 'Invoice / billing contact update', requester: 'Horizon Health', priority: 'P4', status: 'New', age: '4d', sla: 'On track' },
  ]

  const slaSummary = [
    { label: 'P1 median first response', value: '22m', target: '<30m', ok: true },
    { label: 'P2 resolution (7d)', value: '94%', target: '90%', ok: true },
    { label: 'Tickets over SLA', value: '7', target: '0', ok: false },
    { label: 'CSAT (rolling 30d)', value: '4.6/5', target: '4.5', ok: true },
  ]

  const channels = [
    { name: 'National ops bridge', detail: 'Slack #placement-ops', icon: 'forum' },
    { name: 'Pager / phone', detail: '+251-11-XXX-XXXX (P1 only)', icon: 'call' },
    { name: 'Vendor escalation', detail: 'support@infra-vendor.example', icon: 'cloud' },
  ]

  const faq = [
    { q: 'How to freeze a university tenant?', a: 'Settings → Institutions → toggle “suspend postings” (read-only mode for students).' },
    { q: 'Webhook retries?', a: 'Exponential backoff to 24h; after 12 failures route to dead-letter + ops digest.' },
    { q: 'Data residency notes', a: 'PII stays in primary region; analytics aggregates may cross to DR for reporting only.' },
  ]

  const quickActions = [
    { label: 'Create incident', icon: 'emergency' },
    { label: 'Post status page', icon: 'rss_feed' },
    { label: 'Run health check', icon: 'monitor_heart' },
    { label: 'Notify partners', icon: 'campaign' },
  ]

  const priorityClass = (p) => {
    if (p === 'P1') return 'bg-error-container text-on-error-container'
    if (p === 'P2') return 'bg-secondary-container text-on-secondary-container'
    return 'bg-surface-container-highest text-on-surface-variant'
  }

  const statusClass = (s) => {
    if (s === 'Resolved') return 'text-tertiary'
    if (s === 'Escalated' || s === 'In progress') return 'text-primary'
    return 'text-on-surface'
  }

  const [priorityFilter, setPriorityFilter] = useState('All priorities')
  const { notice, showNotice } = useActionNotice()
  const filteredTickets = useMemo(() => {
    if (priorityFilter === 'All priorities') {
      return tickets
    }

    if (priorityFilter === 'P3+') {
      return tickets.filter((ticket) => ticket.priority === 'P3' || ticket.priority === 'P4')
    }

    return tickets.filter((ticket) => ticket.priority === priorityFilter)
  }, [priorityFilter, tickets])

  const handleCopyRunbook = async () => {
    try {
      await navigator.clipboard.writeText('https://skillmatch.local/runbooks/admin-support')
      showNotice('Runbook link copied to clipboard.')
    } catch {
      showNotice('Runbook link ready: https://skillmatch.local/runbooks/admin-support')
    }
  }

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-12 space-y-8">
      <ActionNotice message={notice} />

      <div>
        <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">Support</h2>
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
          National support inbox, SLA posture, escalation paths, and runbook snippets for operators covering the placement platform.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
              <h3 className="font-headline text-xl font-bold text-on-surface">Support queue</h3>
              <div className="flex flex-wrap gap-2">
                <select
                  value={priorityFilter}
                  onChange={(event) => setPriorityFilter(event.target.value)}
                  className="px-3 py-2 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface"
                >
                  <option>All priorities</option>
                  <option>P1</option>
                  <option>P2</option>
                  <option>P3+</option>
                </select>
                <button
                  type="button"
                  onClick={() => showNotice('New ticket draft opened for the admin support queue.')}
                  className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg"
                >
                  New ticket
                </button>
              </div>
            </div>
            <div className="space-y-3 lg:hidden">
              {filteredTickets.map((t) => (
                <div key={t.id} className="rounded-xl bg-surface-container-low p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs font-bold text-primary">{t.id}</p>
                      <p className="font-semibold text-on-surface mt-1">{t.subject}</p>
                      <p className="text-xs text-on-surface-variant mt-1">{t.requester}</p>
                    </div>
                    <span className={`px-2 py-0.5 text-[10px] font-black rounded ${priorityClass(t.priority)}`}>{t.priority}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
                    <span className={statusClass(t.status)}>{t.status}</span>
                    <span className="text-on-surface-variant">{t.age}</span>
                    <span className={`${t.sla === 'Met' || t.sla === 'On track' ? 'text-tertiary' : t.sla === 'At risk' ? 'text-secondary' : 'text-error'} font-bold`}>
                      {t.sla}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="text-left text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    <th className="pb-3">ID</th>
                    <th className="pb-3">Subject</th>
                    <th className="pb-3">Requester</th>
                    <th className="pb-3">Priority</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Age</th>
                    <th className="pb-3 text-right">SLA</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {filteredTickets.map((t) => (
                    <tr key={t.id} className="border-t border-outline-variant/30">
                      <td className="py-3 font-mono text-xs font-bold text-primary">{t.id}</td>
                      <td className="py-3 font-semibold text-on-surface max-w-[200px]">{t.subject}</td>
                      <td className="py-3 text-on-surface-variant">{t.requester}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 text-[10px] font-black rounded ${priorityClass(t.priority)}`}>{t.priority}</span>
                      </td>
                      <td className={`py-3 font-semibold ${statusClass(t.status)}`}>{t.status}</td>
                      <td className="py-3 text-on-surface-variant">{t.age}</td>
                      <td className="py-3 text-right">
                        <span className={`text-xs font-bold ${t.sla === 'Met' || t.sla === 'On track' ? 'text-tertiary' : t.sla === 'At risk' ? 'text-secondary' : 'text-error'}`}>
                          {t.sla}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-4">SLA summary</h3>
              <ul className="space-y-3">
                {slaSummary.map((row) => (
                  <li key={row.label} className="flex items-start justify-between gap-2 py-2 border-b border-outline-variant/20 last:border-0">
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{row.label}</p>
                      <p className="text-xs text-on-surface-variant">Target: {row.target}</p>
                    </div>
                    <span className={`text-sm font-black shrink-0 ${row.ok ? 'text-tertiary' : 'text-error'}`}>{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-4">FAQ &amp; ops notes</h3>
              <ul className="space-y-4">
                {faq.map((f) => (
                  <li key={f.q}>
                    <p className="text-sm font-bold text-on-surface">{f.q}</p>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{f.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-primary text-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-2xl">support_agent</span>
              <h3 className="font-headline text-lg font-bold">Contact &amp; escalation</h3>
            </div>
            <p className="text-sm text-white/90 leading-relaxed mb-4">
              For P1 production incidents, page the national bridge first, then open a vendor ticket if infrastructure is involved.
            </p>
            <p className="text-xs font-semibold text-white/70 uppercase tracking-wide mb-1">Primary</p>
            <p className="text-sm font-bold">ops-national@placement.et</p>
            <p className="text-xs text-white/80 mt-3">Reference cluster: <span className="font-mono">et-prod-01</span></p>
            <button
              type="button"
              onClick={handleCopyRunbook}
              className="mt-4 w-full py-2.5 bg-white/15 hover:bg-white/25 rounded-lg font-bold text-sm transition-colors"
            >
              Copy runbook link
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Escalation channels</h3>
            <ul className="space-y-3">
              {channels.map((c) => (
                <li key={c.name} className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-xl shrink-0">{c.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{c.name}</p>
                    <p className="text-xs text-on-surface-variant">{c.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Quick actions</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((a) => (
                <button
                  key={a.label}
                  type="button"
                  onClick={() => showNotice(`${a.label} started from support operations.`)}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-colors text-center"
                >
                  <span className="material-symbols-outlined text-primary">{a.icon}</span>
                  <span className="text-xs font-bold text-on-surface leading-tight">{a.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
