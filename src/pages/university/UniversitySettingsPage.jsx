import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function UniversitySettingsPage() {
  const { notice, showNotice } = useActionNotice()

  return (
    <div className="p-8 space-y-8 max-w-5xl">
      <ActionNotice message={notice} />

      <header>
        <h1 className="font-headline text-3xl font-black tracking-tight text-on-surface">Settings</h1>
        <p className="text-sm text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
          Configure how your institution appears to partners, how notifications route, and what advisors can change without registrar approval.
        </p>
      </header>

      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">domain</span>
          <h2 className="font-headline text-lg font-bold text-on-surface">Institution profile</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Legal name</span>
            <input
              type="text"
              defaultValue="Addis Ababa University"
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-high/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Short name</span>
            <input
              type="text"
              defaultValue="AAU"
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-high/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>
          <label className="block space-y-1.5 md:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Primary contact email</span>
            <input
              type="email"
              defaultValue="registrar@aau.edu.et"
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-high/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>
          <label className="block space-y-1.5 md:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Public portal tagline</span>
            <input
              type="text"
              defaultValue="Internship coordination for all colleges and institutes"
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-high/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>
        </div>
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={() => showNotice('University profile saved locally.')}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Save profile
          </button>
        </div>
      </section>

      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">notifications_active</span>
          <h2 className="font-headline text-lg font-bold text-on-surface">Notification preferences</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Default digest time</span>
            <select className="w-full px-4 py-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-high/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
              <option>06:00 (EAT)</option>
              <option>08:00 (EAT)</option>
              <option>18:00 (EAT)</option>
            </select>
          </label>
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Escalation channel</span>
            <select className="w-full px-4 py-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-high/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
              <option>Email + in-app</option>
              <option>Email only</option>
              <option>In-app only</option>
            </select>
          </label>
        </div>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" />
          <span className="text-sm text-on-surface">Notify department heads when placement targets slip below 85%</span>
        </label>
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={() => showNotice('Notification preferences saved locally.')}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Save notifications
          </button>
        </div>
      </section>

      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
          <h2 className="font-headline text-lg font-bold text-on-surface">Advisor permissions</h2>
        </div>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          Controls what academic advisors may edit without a registrar override. Stricter modes reduce errors but increase your review queue.
        </p>
        <label className="block space-y-1.5 max-w-md">
          <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Placement edit policy</span>
          <select className="w-full px-4 py-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-high/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
            <option>Advisors may propose; registrar approves</option>
            <option>Advisors may edit within own department</option>
            <option>View-only for advisors</option>
          </select>
        </label>
        <div className="space-y-2">
          {[
            { label: 'Allow bulk student reassignment', checked: false },
            { label: 'Allow supervisor contact edits', checked: true },
            { label: 'Allow extension requests without ticket', checked: true },
          ].map((row) => (
            <label key={row.label} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked={row.checked} className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" />
              <span className="text-sm text-on-surface">{row.label}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={() => showNotice('Advisor permission settings saved locally.')}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Save permissions
          </button>
        </div>
      </section>

      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">analytics</span>
          <h2 className="font-headline text-lg font-bold text-on-surface">Reporting defaults</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Default export format</span>
            <select className="w-full px-4 py-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-high/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
              <option>CSV (UTF-8)</option>
              <option>Excel (.xlsx)</option>
              <option>PDF summary</option>
            </select>
          </label>
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Fiscal year start month</span>
            <select className="w-full px-4 py-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-high/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
              <option>July</option>
              <option>September</option>
              <option>January</option>
            </select>
          </label>
          <label className="md:col-span-2 block space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Include anonymized benchmarks in exports</span>
            <select className="w-full px-4 py-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-high/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
              <option>Yes — national cohort only</option>
              <option>Yes — regional peers</option>
              <option>No</option>
            </select>
          </label>
        </div>
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={() => showNotice('Reporting defaults saved locally.')}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Save reporting
          </button>
        </div>
      </section>
    </div>
  )
}
