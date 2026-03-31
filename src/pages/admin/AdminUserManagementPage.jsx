import { useMemo, useState } from 'react'
import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function AdminUserManagementPage() {
  const summary = [
    { label: 'Total Users', value: '86,104', icon: 'groups', sub: '+1.8% vs last month', highlight: true },
    { label: 'Students', value: '81,920', icon: 'school', sub: 'Active accounts', highlight: false },
    { label: 'University Admins', value: '312', icon: 'admin_panel_settings', sub: 'Across 38 partners', highlight: false },
    { label: 'Company Admins', value: '3,872', icon: 'badge', sub: 'With posting rights', highlight: false },
  ]

  const users = [
    { name: 'Hanna Tadesse', email: 'h.tadesse@student.aau.edu.et', role: 'Student', roleColor: 'bg-secondary-container text-on-secondary-container', status: 'Active', last: '2 min ago' },
    { name: 'Dr. Lemma Bekele', email: 'l.bekele@hu.edu.et', role: 'Univ. Admin', roleColor: 'bg-primary-container text-on-primary-container', status: 'Active', last: '1 hr ago' },
    { name: 'Sara Mohammed', email: 's.mohammed@ethiotelecom.et', role: 'Company Admin', roleColor: 'bg-tertiary-container text-on-tertiary-container', status: 'Active', last: 'Today' },
    { name: 'Yonas Girma', email: 'y.girma@gmail.com', role: 'Student', roleColor: 'bg-secondary-container text-on-secondary-container', status: 'Invited', last: '—' },
    { name: 'Aster Worku', email: 'a.worku@jimma.edu.et', role: 'Univ. Admin', roleColor: 'bg-primary-container text-on-primary-container', status: 'Suspended', last: 'Mar 20' },
    { name: 'Daniel Haile', email: 'd.haile@horizonhealth.et', role: 'Company Admin', roleColor: 'bg-tertiary-container text-on-tertiary-container', status: 'Active', last: 'Yesterday' },
  ]

  const accessRequests = [
    { who: 'Meron Alemayehu', what: 'Elevate to dept. coordinator', when: 'Mar 30' },
    { who: 'Biniam Tesfaye', what: 'API access (read-only)', when: 'Mar 29' },
    { who: 'Ruth Demissie', what: 'Bulk export — placements', when: 'Mar 28' },
  ]

  const roleDistribution = [
    { role: 'Students', pct: 95.1, width: '95.1%' },
    { role: 'Company admins', pct: 4.5, width: '4.5%' },
    { role: 'University admins', pct: 0.4, width: '0.4%' },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('All roles')
  const { notice, showNotice } = useActionNotice()
  const filteredUsers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return users.filter((user) => {
      const matchesQuery =
        !query ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)

      const matchesRole =
        roleFilter === 'All roles' ||
        (roleFilter === 'Students' && user.role === 'Student') ||
        (roleFilter === 'University admins' && user.role === 'Univ. Admin') ||
        (roleFilter === 'Company admins' && user.role === 'Company Admin')

      return matchesQuery && matchesRole
    })
  }, [roleFilter, searchTerm, users])

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-12 space-y-8">
      <ActionNotice message={notice} />

      <div>
        <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">User Management</h2>
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
          Search accounts, review access requests, and audit role distribution across the national placement network.
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
            <h3 className="font-headline text-xl font-bold text-on-surface">User directory</h3>
            <div className="flex flex-wrap gap-2">
              <input
                type="search"
                placeholder="Name or email…"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="px-3 py-2 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface placeholder:text-on-surface-variant min-w-[180px]"
              />
              <select
                value={roleFilter}
                onChange={(event) => setRoleFilter(event.target.value)}
                className="px-3 py-2 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface"
              >
                <option>All roles</option>
                <option>Students</option>
                <option>University admins</option>
                <option>Company admins</option>
              </select>
            </div>
          </div>
          <div className="space-y-3 lg:hidden">
            {filteredUsers.map((u) => (
              <div key={u.email} className="rounded-xl bg-surface-container-low p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-on-surface">{u.name}</p>
                    <p className="text-xs text-on-surface-variant break-all mt-1">{u.email}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => showNotice(`Managing access controls for ${u.name}.`)}
                    className="px-2.5 py-1 text-xs font-bold rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
                  >
                    Manage
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${u.roleColor}`}>{u.role}</span>
                  <span className={`text-xs font-bold ${u.status === 'Active' ? 'text-tertiary' : u.status === 'Suspended' ? 'text-error' : 'text-on-surface-variant'}`}>
                    {u.status}
                  </span>
                  <span className="text-xs text-on-surface-variant">{u.last}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="text-left text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  <th className="pb-4">User</th>
                  <th className="pb-4">Role</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Last active</th>
                  <th className="pb-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredUsers.map((u) => (
                  <tr key={u.email} className="border-t border-outline-variant/30">
                    <td className="py-3">
                      <p className="font-semibold text-on-surface">{u.name}</p>
                      <p className="text-xs text-on-surface-variant truncate max-w-[220px]">{u.email}</p>
                    </td>
                    <td className="py-3">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${u.roleColor}`}>{u.role}</span>
                    </td>
                    <td className="py-3">
                      <span className={`text-xs font-bold ${u.status === 'Active' ? 'text-tertiary' : u.status === 'Suspended' ? 'text-error' : 'text-on-surface-variant'}`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="py-3 text-on-surface-variant">{u.last}</td>
                    <td className="py-3 text-right">
                      <button
                        type="button"
                        onClick={() => showNotice(`Managing access controls for ${u.name}.`)}
                        className="px-2.5 py-1 text-xs font-bold rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
                      >
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline text-lg font-bold text-on-surface">Access requests</h3>
              <span className="text-xs font-bold text-primary">{accessRequests.length} pending</span>
            </div>
            <ul className="space-y-3">
              {accessRequests.map((r) => (
                <li key={r.who} className="p-3 rounded-lg bg-surface-container-high">
                  <p className="text-sm font-semibold text-on-surface">{r.who}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{r.what}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-on-surface-variant">{r.when}</span>
                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={() => showNotice(`Approved request for ${r.who}.`)}
                        className="px-2 py-1 text-xs font-bold text-tertiary"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        onClick={() => showNotice(`Denied request for ${r.who}.`)}
                        className="px-2 py-1 text-xs font-bold text-on-surface-variant"
                      >
                        Deny
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Role distribution</h3>
            <p className="text-xs text-on-surface-variant mb-4">Share of accounts with verified email</p>
            <div className="h-4 rounded-full overflow-hidden flex bg-surface-container-high mb-4">
              {roleDistribution.map((r, i) => (
                <div
                  key={r.role}
                  title={`${r.role}: ${r.pct}%`}
                  className={`h-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-tertiary' : 'bg-secondary'}`}
                  style={{ width: r.width }}
                />
              ))}
            </div>
            <ul className="space-y-2">
              {roleDistribution.map((r, i) => (
                <li key={r.role} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-on-surface">
                    <span className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-tertiary' : 'bg-secondary'}`} />
                    {r.role}
                  </span>
                  <span className="font-bold text-on-surface">{r.pct}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
