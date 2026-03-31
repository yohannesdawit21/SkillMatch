import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'

export default function UniversityHelpCenterPage() {
  const faqs = [
    {
      q: 'How do I onboard a new college or institute?',
      a: 'Create a sub-unit under Institution Settings, map programs to placement templates, then invite department heads. Students inherit policies from the parent college until you override at program level.',
    },
    {
      q: 'What is the recommended advisor assignment workflow?',
      a: 'Start from Assign Advisors: approve pending faculty, set department caps, then use bulk assign to map cohorts. Always run the workload summary before locking the semester.',
    },
    {
      q: 'How are overdue reports escalated?',
      a: 'The monitoring view surfaces overdue logs first to advisors, then to department heads after configurable grace days. Critical paths can trigger SMS if enabled under Notification Settings.',
    },
    {
      q: 'Can employers self-register placements?',
      a: 'Yes, when Company Portal is enabled. Registrars receive a notification for MOU verification before any student can match to that host organization.',
    },
  ]

  const quickLinks = [
    { icon: 'rocket_launch', label: 'Onboarding checklist', desc: 'Colleges, SSO, data imports', path: '/university/settings' },
    { icon: 'group_add', label: 'Advisor assignment', desc: 'Seats, loads, approvals', path: '/university/advisors' },
    { icon: 'monitoring', label: 'Monitoring & risk', desc: 'Flags, reviews, escalations', path: '/university/monitoring' },
    { icon: 'summarize', label: 'Reports & exports', desc: 'Defaults, schedules, audits', path: '/university/statistics' },
  ]

  const [query, setQuery] = useState('')
  const filteredFaqs = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return faqs
    }

    return faqs.filter(
      (faq) =>
        faq.q.toLowerCase().includes(normalized) ||
        faq.a.toLowerCase().includes(normalized),
    )
  }, [faqs, query])

  return (
    <div className="p-8 space-y-8 max-w-4xl">
      <header>
        <h1 className="font-headline text-3xl font-black tracking-tight text-on-surface">Help Center</h1>
        <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
          Guides and answers for university administrators managing internships, advisors, and compliance across AAU.
        </p>
      </header>

      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">search</span>
        <input
          type="search"
          placeholder="Search topics, e.g. advisor permissions, exports, MOU…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest shadow-sm text-on-surface text-sm placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="flex gap-4 p-5 rounded-xl bg-surface-container-lowest shadow-sm border border-transparent hover:border-primary/20 transition-colors group"
          >
            <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0 group-hover:scale-105 transition-transform">{link.icon}</span>
            <div>
              <p className="font-bold text-on-surface text-sm">{link.label}</p>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{link.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div>
        <h2 className="font-headline text-xl font-bold text-on-surface mb-4">Frequently asked questions</h2>
        <div className="space-y-3">
          {filteredFaqs.map((item) => (
            <details key={item.q} className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 open:border-primary/25">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 font-semibold text-on-surface text-sm">
                <span>{item.q}</span>
                <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform flex-shrink-0">expand_more</span>
              </summary>
              <div className="px-5 pb-5 pt-0 text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/10">
                <p className="pt-4">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-primary-container text-white rounded-xl p-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h2 className="font-headline text-xl font-black mb-2">Contact support</h2>
          <p className="text-sm text-white/85 leading-relaxed mb-6">
            Dedicated success hours for institutional admins. Include your college code and a screenshot when reporting data issues.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white/90">mail</span>
              <a href="mailto:support@internship-portal.edu" className="font-semibold underline decoration-white/40 hover:decoration-white">support@internship-portal.edu</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white/90">call</span>
              <a href="tel:+251111234500" className="font-semibold underline decoration-white/40 hover:decoration-white">+251 11 123 4500</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white/90">schedule</span>
              <span className="text-white/90">Mon–Fri, 08:00–18:00 EAT · Emergency pager weekends</span>
            </li>
          </ul>
        </div>
        <span className="material-symbols-outlined absolute right-6 bottom-6 text-white/15 text-[6rem] pointer-events-none select-none">support_agent</span>
      </div>
    </div>
  )
}
