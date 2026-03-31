import { useState } from 'react'
import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

const tips = [
  {
    title: 'Lead with impact',
    body: 'Open with what interns will ship or learn in the first 30 days—not only generic “you’ll gain experience.”',
  },
  {
    title: 'Be specific on skills',
    body: 'List 5–8 concrete tools or concepts. Vague “good communicator” lines attract mismatched applicants.',
  },
  {
    title: 'Set a realistic deadline',
    body: 'Two to four weeks of open applications usually yields enough volume without burning out reviewers.',
  },
]

const approvalChecklist = [
  { label: 'Hiring manager sign-off', done: false },
  { label: 'Budget / headcount confirmed', done: true },
  { label: 'Supervisor assigned', done: false },
  { label: 'Legal review (if paid)', done: true },
]

const workModes = ['On-site', 'Hybrid', 'Remote']

export default function CompanyNewPostingPage() {
  const [workMode, setWorkMode] = useState('Hybrid')
  const { notice, showNotice } = useActionNotice()

  return (
    <div className="pt-6 pb-12 pr-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <ActionNotice message={notice} />

        <div>
          <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-2">New Posting</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
            Draft a role, align stakeholders, and publish when your checklist is green. Saved drafts sync to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Role title</label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineering Intern"
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Department</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <option>Product Engineering</option>
                    <option>Infrastructure</option>
                    <option>Business Intelligence</option>
                    <option>Design</option>
                    <option>Info Security</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="City, country or Remote"
                    defaultValue="Addis Ababa, Ethiopia"
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Duration</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <option>8 weeks</option>
                    <option>12 weeks</option>
                    <option>16 weeks</option>
                    <option>6 months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Openings</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue={2}
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Work mode</label>
                  <div className="flex flex-wrap gap-2">
                    {workModes.map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setWorkMode(mode)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                          workMode === mode ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Skills &amp; keywords</label>
                  <input
                    type="text"
                    placeholder="React, TypeScript, REST APIs, Git — comma separated"
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Description</label>
                  <textarea
                    rows={8}
                    placeholder="What will they build? Who will they work with? What are the must-have vs. nice-to-have qualifications?"
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y min-h-[180px]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">Application deadline</label>
                  <input
                    type="date"
                    className="w-full max-w-xs px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-outline-variant/20">
                <button
                  type="button"
                  onClick={() => showNotice('Draft saved locally.')}
                  className="px-6 py-3 rounded-lg bg-surface-container-highest text-on-surface font-bold text-sm hover:bg-surface-container-high transition-colors"
                >
                  Save Draft
                </button>
                <button
                  type="button"
                  onClick={() => showNotice('Role published to the company posting list.')}
                  className="px-6 py-3 rounded-lg bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Publish Role
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-1">Posting tips</h3>
              <p className="text-xs text-on-surface-variant mb-5">Strong listings convert better applicants</p>
              <ul className="space-y-4">
                {tips.map((tip) => (
                  <li key={tip.title} className="flex gap-3">
                    <span className="material-symbols-outlined text-primary text-xl shrink-0">lightbulb</span>
                    <div>
                      <p className="text-sm font-bold text-on-surface">{tip.title}</p>
                      <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{tip.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Approval checklist</h3>
              <ul className="space-y-3">
                {approvalChecklist.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span
                      className={`material-symbols-outlined text-xl ${item.done ? 'text-primary' : 'text-on-surface-variant'}`}
                      style={{ fontVariationSettings: item.done ? "'FILL' 1" : undefined }}
                    >
                      {item.done ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                    <span className={`text-sm ${item.done ? 'text-on-surface line-through opacity-70' : 'font-medium text-on-surface'}`}>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-on-surface-variant mt-4 leading-relaxed">
                Publishing is blocked until all required items are checked. Request approvals from the hiring panel in Settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
