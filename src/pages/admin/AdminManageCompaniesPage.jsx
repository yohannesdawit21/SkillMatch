import { useMemo, useState } from 'react'
import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function AdminManageCompaniesPage() {
  const summary = [
    { label: 'Active Companies', value: '1,186', icon: 'corporate_fare', sub: 'Posting in last 30d', highlight: false },
    { label: 'Pending Verification', value: '34', icon: 'hourglass_top', sub: 'KYC + domain check', highlight: false },
    { label: 'Suspended', value: '12', icon: 'block', sub: 'Policy or fraud holds', highlight: false },
    { label: 'Open Roles', value: '4,902', icon: 'work', sub: 'Live internship slots', highlight: true },
  ]

  const companies = [
    { name: 'Ethio Telecom Digital', sector: 'Telecom', verification: 'Verified', vColor: 'bg-tertiary-container text-on-tertiary-container', openings: '128' },
    { name: 'Awash Bank IT', sector: 'Finance', verification: 'Verified', vColor: 'bg-tertiary-container text-on-tertiary-container', openings: '44' },
    { name: 'GreenLeaf AgriTech', sector: 'Agriculture', verification: 'Pending', vColor: 'bg-secondary-container text-on-secondary-container', openings: '—' },
    { name: 'Addis Software Studio', sector: 'Technology', verification: 'Verified', vColor: 'bg-tertiary-container text-on-tertiary-container', openings: '62' },
    { name: 'Nile Manufacturing', sector: 'Industrial', verification: 'Suspended', vColor: 'bg-error-container text-on-error-container', openings: '0' },
    { name: 'Horizon Health Systems', sector: 'Healthcare', verification: 'Verified', vColor: 'bg-tertiary-container text-on-tertiary-container', openings: '91' },
  ]

  const pipeline = [
    { stage: 'Document upload', count: 14, pct: 100 },
    { stage: 'Domain & registry', count: 11, pct: 79 },
    { stage: 'Manual review', count: 6, pct: 43 },
    { stage: 'Approved', count: 4, pct: 29 },
  ]

  const partnerHealth = [
    { label: 'Avg response time', value: '14h', trend: '↓ 3h vs last month', good: true },
    { label: 'Offer acceptance rate', value: '71%', trend: 'Stable', good: true },
    { label: 'Ghost postings (flagged)', value: '1.2%', trend: 'Within SLA', good: true },
    { label: 'Dispute rate', value: '0.4%', trend: '↑ 0.1%', good: false },
  ]

  const [sectorFilter, setSectorFilter] = useState('All sectors')
  const { notice, showNotice } = useActionNotice()
  const filteredCompanies = useMemo(() => {
    if (sectorFilter === 'All sectors') {
      return companies
    }

    return companies.filter((company) => company.sector === sectorFilter)
  }, [companies, sectorFilter])

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-12 space-y-8">
      <ActionNotice message={notice} />

      <div>
        <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">Manage Companies</h2>
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
          Verify corporate partners, monitor hiring capacity, and intervene when verification or policy issues arise.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summary.map((s) => (
          <div
            key={s.label}
            className={`p-6 rounded-xl shadow-sm ${s.highlight ? 'bg-primary text-white' : 'bg-surface-container-lowest'}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`material-symbols-outlined text-2xl ${s.highlight ? 'text-white' : 'text-primary'}`}>{s.icon}</span>
            </div>
            <p className={`text-3xl font-black mb-1 ${s.highlight ? 'text-white' : 'text-on-surface'}`}>{s.value}</p>
            <p className={`text-sm font-semibold mb-1 ${s.highlight ? 'text-white/90' : 'text-on-surface'}`}>{s.label}</p>
            <p className={`text-xs font-medium ${s.highlight ? 'text-white/70' : 'text-on-surface-variant'}`}>{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h3 className="font-headline text-xl font-bold text-on-surface">Company directory</h3>
            <div className="flex flex-wrap gap-2">
              <select
                value={sectorFilter}
                onChange={(event) => setSectorFilter(event.target.value)}
                className="px-3 py-2 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface"
              >
                <option>All sectors</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
              </select>
              <button
                type="button"
                onClick={() => showNotice('Partner onboarding flow is ready for the next company registration.')}
                className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg"
              >
                Add partner
              </button>
            </div>
          </div>
          <div className="space-y-3 lg:hidden">
            {filteredCompanies.map((c) => (
              <div key={c.name} className="rounded-xl bg-surface-container-low p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-on-surface">{c.name}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{c.sector}</p>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${c.vColor}`}>{c.verification}</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm font-semibold text-on-surface">{c.openings} openings</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => showNotice(`Opened ${c.name} partner profile.`)}
                      className="px-2.5 py-1 text-xs font-bold rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
                    >
                      Profile
                    </button>
                    <button
                      type="button"
                      onClick={() => showNotice(`Verification review started for ${c.name}.`)}
                      className="px-2.5 py-1 text-xs font-bold rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
                    >
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="text-left text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  <th className="pb-4">Company</th>
                  <th className="pb-4">Sector</th>
                  <th className="pb-4">Verification</th>
                  <th className="pb-4 text-right">Openings</th>
                  <th className="pb-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredCompanies.map((c) => (
                  <tr key={c.name} className="border-t border-outline-variant/30">
                    <td className="py-3 font-semibold text-on-surface">{c.name}</td>
                    <td className="py-3 text-on-surface-variant">{c.sector}</td>
                    <td className="py-3">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${c.vColor}`}>{c.verification}</span>
                    </td>
                    <td className="py-3 text-right font-semibold text-on-surface">{c.openings}</td>
                    <td className="py-3 text-right">
                      <div className="flex justify-end gap-1 flex-wrap">
                        <button
                          type="button"
                          onClick={() => showNotice(`Opened ${c.name} partner profile.`)}
                          className="px-2.5 py-1 text-xs font-bold rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
                        >
                          Profile
                        </button>
                        <button
                          type="button"
                          onClick={() => showNotice(`Verification review started for ${c.name}.`)}
                          className="px-2.5 py-1 text-xs font-bold rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
                        >
                          Verify
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Verification pipeline</h3>
            <p className="text-xs text-on-surface-variant mb-4">Current batch — companies with at least one doc submitted</p>
            <div className="space-y-4">
              {pipeline.map((p) => (
                <div key={p.stage}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-on-surface">{p.stage}</span>
                    <span className="text-xs font-bold text-on-surface-variant">{p.count}</span>
                  </div>
                  <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${p.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => showNotice('Verification queue opened for pending company reviews.')}
              className="mt-5 w-full py-2.5 bg-surface-container-highest text-on-surface rounded-lg font-semibold text-sm hover:bg-surface-container-high transition-colors"
            >
              Open verification queue
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Partner health</h3>
            <ul className="space-y-3">
              {partnerHealth.map((h) => (
                <li key={h.label} className="flex items-center justify-between gap-2 py-2 border-b border-outline-variant/20 last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{h.label}</p>
                    <p className={`text-xs ${h.good ? 'text-tertiary' : 'text-error'}`}>{h.trend}</p>
                  </div>
                  <span className="text-lg font-black text-primary">{h.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
