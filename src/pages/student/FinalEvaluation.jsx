import { Link } from 'react-router-dom'
import ActionNotice from '../../components/shared/ActionNotice'
import useActionNotice from '../../hooks/useActionNotice'

export default function FinalEvaluation() {
  const skills = [
    { label: 'Technical Proficiency', filled: 5 },
    { label: 'Teamwork', filled: 4 },
    { label: 'Problem Solving', filled: 5 },
    { label: 'Communication', filled: 4 },
  ]

  const competencies = ['React & Node.js', 'Agile', 'CI/CD', 'Cloud Infrastructure']
  const { notice, showNotice } = useActionNotice()

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ActionNotice message={notice} />

        {/* Header */}
        <div className="mb-12 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl font-black text-on-surface mb-4">Final Evaluation &amp; Certification</h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-on-surface-variant">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">person</span>
                James K. Mwangi
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">business</span>
                Safaricom Ltd.
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">calendar_today</span>
                Sept - Nov 2023
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0 w-full xl:w-auto">
            <button
              onClick={() => showNotice('Print view prepared for the final evaluation record.')}
              className="px-5 py-2.5 bg-surface-container-highest text-on-surface rounded-lg font-semibold text-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">print</span>
              Print Record
            </button>
            <button
              onClick={() => showNotice('Certificate PDF download prepared.')}
              className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary-container text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Download Official Certificate (PDF)
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <p className="text-sm text-on-surface-variant font-medium mb-2">Weeks Completed</p>
            <p className="text-3xl font-black text-on-surface mb-3">12/12</p>
            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full w-full" />
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <p className="text-sm text-on-surface-variant font-medium mb-2">Final Attendance</p>
            <p className="text-3xl font-black text-on-surface mb-1">98%</p>
            <p className="text-xs text-tertiary font-semibold">Exemplary record</p>
          </div>
          <div className="bg-tertiary/5 rounded-xl p-6 shadow-sm">
            <p className="text-sm text-on-surface-variant font-medium mb-3">Overall Match Score</p>
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full animate-spin" style={{ animationDuration: '8s' }}>
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="3" className="text-surface-container-highest" />
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="91.5 97.4" strokeLinecap="round" className="text-tertiary" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-black text-on-surface">94%</span>
              </div>
              <div>
                <p className="text-xs font-bold text-tertiary uppercase tracking-wider">Outstanding Performance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Document Content */}
        <div className="bg-surface-container-lowest rounded-xl p-5 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          <span className="material-symbols-outlined absolute right-4 sm:right-10 top-6 sm:top-10 text-[8rem] sm:text-[12rem] lg:text-[16rem] text-on-surface opacity-[0.03] pointer-events-none select-none">
            school
          </span>

          <div className="relative z-10 space-y-10">

            {/* Supervisor's Final Assessment */}
            <div className="pb-8 border-b border-outline-variant/20">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">rate_review</span>
                Supervisor&apos;s Final Assessment
              </h2>
              <div className="grid md:grid-cols-2 gap-8">

                {/* Skills Breakdown */}
                <div>
                  <h4 className="font-bold text-on-surface text-sm mb-4 uppercase tracking-wider">Skills Breakdown</h4>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.label} className="flex items-center justify-between">
                        <span className="text-sm text-on-surface">{skill.label}</span>
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`material-symbols-outlined text-lg ${star <= skill.filled ? 'text-primary' : 'text-surface-container-highest'}`}
                              style={star <= skill.filled ? { fontVariationSettings: "'FILL' 1" } : {}}
                            >
                              star
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remarks */}
                <div>
                  <h4 className="font-bold text-on-surface text-sm mb-4 uppercase tracking-wider">Remarks</h4>
                  <div className="bg-surface-container-low rounded-xl p-5 relative mb-4">
                    <span className="material-symbols-outlined text-4xl text-on-surface/10 absolute top-2 left-3">format_quote</span>
                    <p className="text-sm text-on-surface leading-relaxed pl-6 italic">
                      &ldquo;James has demonstrated an outstanding capacity for growth throughout this placement. His technical contributions have been on par with mid-level engineers, and his collaborative spirit has made him an invaluable member of the team.&rdquo;
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {competencies.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Final Grading */}
            <div className="pb-8 border-b border-outline-variant/20">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">military_tech</span>
                Final Grading
              </h2>

              <div className="bg-primary/5 rounded-xl p-5 sm:p-8 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl font-black text-white">A+</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Internship Successfully Completed</h3>
                    <p className="text-sm text-on-surface-variant mb-3">Certificate ID: SKM-2023-NAI-0847</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full uppercase flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        Certified
                      </span>
                      <button
                        onClick={() => showNotice('LinkedIn share draft prepared for your certification post.')}
                        className="px-4 py-1.5 bg-[#0077B5] text-white text-xs font-bold rounded-full hover:opacity-90 transition-opacity flex items-center gap-1.5"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        Share to LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="border-b border-outline-variant/30 pb-3 mb-3 mx-8">
                    <p className="font-headline text-lg font-bold text-on-surface italic">Sarah Chen</p>
                  </div>
                  <p className="text-sm text-on-surface font-medium">Industry Supervisor</p>
                  <p className="text-xs text-on-surface-variant">Date: Nov 30, 2023</p>
                </div>
                <div className="text-center">
                  <div className="border-b border-outline-variant/30 pb-3 mb-3 mx-8">
                    <p className="font-headline text-lg font-bold text-on-surface italic">Dr. Arthur Penhaligon</p>
                  </div>
                  <p className="text-sm text-on-surface font-medium">University Advisor</p>
                  <p className="text-xs text-on-surface-variant">Date: Dec 02, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-on-surface-variant">&copy; 2023 SkillMatch — National Internship Placement Platform</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Link to="/privacy" className="text-xs text-primary hover:underline">Privacy Policy</Link>
            <span className="text-xs text-on-surface-variant">·</span>
            <Link to="/terms" className="text-xs text-primary hover:underline">Terms of Service</Link>
            <span className="text-xs text-on-surface-variant">·</span>
            <Link to="/support" className="text-xs text-primary hover:underline">Contact Support</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
