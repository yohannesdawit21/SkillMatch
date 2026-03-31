import { useState } from 'react'
import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function AdminSettingsPage() {
  const [maintenance, setMaintenance] = useState(false)
  const [strictDomain, setStrictDomain] = useState(true)
  const [escalateFailures, setEscalateFailures] = useState(true)
  const [auditExports, setAuditExports] = useState(true)
  const { notice, showNotice } = useActionNotice()

  const sections = [
    {
      id: 'platform',
      title: 'Platform configuration',
      description: 'Core toggles that affect all tenants and public surfaces.',
    },
    {
      id: 'verification',
      title: 'Verification rules',
      description: 'Corporate and institutional onboarding requirements.',
    },
    {
      id: 'notifications',
      title: 'Notifications & escalations',
      description: 'Who gets paged when SLAs slip or queues back up.',
    },
    {
      id: 'security',
      title: 'Security & audit',
      description: 'Session policy, export logging, and compliance posture.',
    },
  ]

  return (
    <div className="pt-24 px-8 pb-12 space-y-8">
      <ActionNotice message={notice} />

      <div>
        <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">Settings</h2>
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
          Configure platform behavior, verification thresholds, alerting, and audit defaults. Changes apply after save and propagate within a few minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-1">{s.title}</h3>
            <p className="text-xs text-on-surface-variant mb-5">{s.description}</p>

            {s.id === 'platform' && (
              <div className="space-y-4">
                <label className="block">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Default locale</span>
                  <select className="mt-1 w-full px-3 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface">
                    <option>English (Ethiopia)</option>
                    <option>Amharic</option>
                    <option>Oromo</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Placement year</span>
                  <input
                    type="text"
                    defaultValue="2025/2026"
                    className="mt-1 w-full px-3 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface"
                  />
                </label>
                <label className="flex items-center justify-between gap-4 py-2 border-t border-outline-variant/30">
                  <span className="text-sm font-semibold text-on-surface">Maintenance banner</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={maintenance}
                    onClick={() => setMaintenance(!maintenance)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${maintenance ? 'bg-primary' : 'bg-surface-container-highest'}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${maintenance ? 'left-6' : 'left-1'}`} />
                  </button>
                </label>
                <button
                  type="button"
                  onClick={() => showNotice('Platform settings saved locally.')}
                  className="w-full py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Save platform settings
                </button>
              </div>
            )}

            {s.id === 'verification' && (
              <div className="space-y-4">
                <label className="block">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Min. company age (months)</span>
                  <input
                    type="number"
                    min={0}
                    defaultValue={6}
                    className="mt-1 w-full px-3 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">University doc checklist</span>
                  <select className="mt-1 w-full px-3 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface">
                    <option>Standard (MoE + registrar)</option>
                    <option>Expanded (+ accreditation letter)</option>
                    <option>Minimal (pilot partners only)</option>
                  </select>
                </label>
                <label className="flex items-center justify-between gap-4 py-2 border-t border-outline-variant/30">
                  <span className="text-sm font-semibold text-on-surface">Strict email domain match</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={strictDomain}
                    onClick={() => setStrictDomain(!strictDomain)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${strictDomain ? 'bg-primary' : 'bg-surface-container-highest'}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${strictDomain ? 'left-6' : 'left-1'}`} />
                  </button>
                </label>
                <button
                  type="button"
                  onClick={() => showNotice('Verification rules saved locally.')}
                  className="w-full py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Save verification rules
                </button>
              </div>
            )}

            {s.id === 'notifications' && (
              <div className="space-y-4">
                <label className="block">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Ops email (P1)</span>
                  <input
                    type="email"
                    defaultValue="ops-national@placement.et"
                    className="mt-1 w-full px-3 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Digest frequency</span>
                  <select className="mt-1 w-full px-3 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface">
                    <option>Hourly (business hours)</option>
                    <option>Daily at 08:00 EAT</option>
                    <option>Weekly (Mondays)</option>
                  </select>
                </label>
                <label className="flex items-center justify-between gap-4 py-2 border-t border-outline-variant/30">
                  <span className="text-sm font-semibold text-on-surface">Escalate failed webhooks</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={escalateFailures}
                    onClick={() => setEscalateFailures(!escalateFailures)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${escalateFailures ? 'bg-primary' : 'bg-surface-container-highest'}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${escalateFailures ? 'left-6' : 'left-1'}`} />
                  </button>
                </label>
                <button
                  type="button"
                  onClick={() => showNotice('Notification settings saved locally.')}
                  className="w-full py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Save notification settings
                </button>
              </div>
            )}

            {s.id === 'security' && (
              <div className="space-y-4">
                <label className="block">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Session timeout (minutes)</span>
                  <input
                    type="number"
                    min={5}
                    defaultValue={45}
                    className="mt-1 w-full px-3 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">MFA policy</span>
                  <select className="mt-1 w-full px-3 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-high text-on-surface">
                    <option>Admins only</option>
                    <option>All staff roles</option>
                    <option>Optional globally</option>
                  </select>
                </label>
                <label className="flex items-center justify-between gap-4 py-2 border-t border-outline-variant/30">
                  <span className="text-sm font-semibold text-on-surface">Log bulk exports</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={auditExports}
                    onClick={() => setAuditExports(!auditExports)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${auditExports ? 'bg-primary' : 'bg-surface-container-highest'}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${auditExports ? 'left-6' : 'left-1'}`} />
                  </button>
                </label>
                <button
                  type="button"
                  onClick={() => showNotice('Security settings saved locally.')}
                  className="w-full py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Save security settings
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
