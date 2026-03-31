export default function WeeklyReports() {
  const reports = [
    {
      week: 8,
      dates: 'Oct 21 - 27',
      status: 'Approved',
      rating: 'Exceeds Expectations',
      active: true,
    },
    {
      week: 7,
      dates: 'Oct 14 - 20',
      status: 'Approved',
      rating: 'Meets Expectations',
      active: false,
    },
    {
      week: 6,
      dates: 'Oct 07 - 13',
      status: 'Approved',
      rating: 'Exceeds Expectations',
      active: false,
    },
    {
      week: 9,
      dates: 'Oct 28 - Nov 03',
      status: 'upcoming',
      rating: 'Available in 4 days',
      active: false,
    },
  ]

  const tasks = [
    'Implemented M-Pesa API integration module for the payments microservice',
    'Identified and resolved a critical race condition bug in the transaction queue',
    'Collaborated with the QA team on end-to-end testing for the new checkout flow',
    'Authored comprehensive API documentation for three new endpoints',
  ]

  return (
    <div className="pt-16 min-h-screen">
      <div className="p-8 max-w-7xl mx-auto space-y-8">

        {/* Internship Status Header */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm relative overflow-hidden">
          <span className="material-symbols-outlined absolute -right-8 -top-8 text-[12rem] text-on-surface opacity-5 pointer-events-none select-none">
            corporate_fare
          </span>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full uppercase">Active Placement</span>
              <span className="px-3 py-1 bg-primary-fixed text-primary text-xs font-bold rounded-full uppercase flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span>
                Verified
              </span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-3">Software Development Intern at Safaricom</h2>
            <div className="flex items-center gap-6 text-on-surface-variant text-sm mb-6">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">calendar_today</span>
                Sept 01, 2023 - Nov 30, 2023
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">location_on</span>
                Nairobi, HQ
              </span>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-on-surface">Internship Progress</span>
                <span className="text-sm font-bold text-primary">65%</span>
              </div>
              <div className="w-full h-2.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all" style={{ width: '65%' }} />
              </div>
              <p className="text-xs text-on-surface-variant mt-1.5">8 of 12 weeks completed</p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Report History Sidebar */}
          <div className="lg:col-span-4">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-headline text-xl font-bold text-on-surface">Report History</h3>
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-lg">filter_list</span>
                </button>
                <button className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-lg">sort</span>
                </button>
              </div>
            </div>
            <div className="space-y-3">
              {reports.map((report) => (
                <button
                  key={report.week}
                  className={`w-full text-left rounded-xl p-4 transition-all ${
                    report.active
                      ? 'bg-primary-container/10 border-l-4 border-primary shadow-sm'
                      : report.status === 'upcoming'
                        ? 'bg-surface-container-lowest opacity-60'
                        : 'bg-surface-container-lowest hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-on-surface text-sm">Week {report.week}</span>
                    {report.status === 'upcoming' ? (
                      <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-xs rounded-full">Upcoming</span>
                    ) : (
                      <span className="px-2 py-0.5 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full">{report.status}</span>
                    )}
                  </div>
                  <p className="text-xs text-on-surface-variant mb-2">{report.dates}</p>
                  <p className={`text-xs font-medium flex items-center gap-1 ${
                    report.rating === 'Exceeds Expectations' ? 'text-tertiary' : report.status === 'upcoming' ? 'text-on-surface-variant' : 'text-on-surface'
                  }`}>
                    {report.rating === 'Exceeds Expectations' && (
                      <span className="material-symbols-outlined text-sm">star</span>
                    )}
                    {report.rating}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Report Detail */}
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest rounded-xl shadow-lg overflow-hidden">

              {/* Report Header */}
              <div className="bg-primary p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-headline text-2xl font-bold mb-1">Week 8 Progress Report</h3>
                    <p className="text-white/70 text-sm">October 21 - October 27, 2023</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <span className="material-symbols-outlined text-lg">print</span>
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <span className="material-symbols-outlined text-lg">download</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Report Body */}
              <div className="p-8 space-y-8">

                {/* Student View Notice */}
                <div className="bg-secondary-container/30 rounded-lg p-4 flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl mt-0.5">info</span>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    You are viewing the student&apos;s submitted copy of this report. Supervisor feedback and university advisor sign-off are shown below.
                  </p>
                </div>

                {/* Tasks & Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Tasks Completed */}
                  <div>
                    <h4 className="font-bold text-on-surface mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg">task_alt</span>
                      Tasks Completed
                    </h4>
                    <ul className="space-y-3">
                      {tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-on-surface leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Attendance & Compatibility */}
                  <div className="space-y-6">
                    {/* Attendance */}
                    <div className="bg-surface-container-low rounded-xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-on-surface text-sm">Attendance</h4>
                        <span className="text-2xl font-black text-on-surface">5/5</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-8">
                        {[1, 2, 3, 4, 5].map((day) => (
                          <div key={day} className="flex-1 bg-tertiary rounded-sm h-full" />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1.5">
                        {['M', 'T', 'W', 'T', 'F'].map((d, i) => (
                          <span key={i} className="flex-1 text-center text-xs text-on-surface-variant">{d}</span>
                        ))}
                      </div>
                    </div>

                    {/* Compatibility Score */}
                    <div className="bg-surface-container-low rounded-xl p-5 flex items-center gap-5">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="3" className="text-surface-container-highest" />
                          <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="97.4 97.4" strokeDashoffset="9.74" strokeLinecap="round" className="text-tertiary" />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-black text-on-surface">90%</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface text-sm mb-1">Compatibility Score</h4>
                        <p className="text-xs text-tertiary font-semibold">High Alignment</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supervisor Feedback */}
                <div>
                  <h4 className="font-bold text-on-surface mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">rate_review</span>
                    Supervisor Feedback
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    The supervisor has reviewed this week&apos;s report and provided the following assessment and qualitative feedback on performance.
                  </p>
                  <div className="bg-surface-container-low rounded-xl p-6 relative">
                    <span className="material-symbols-outlined text-5xl text-on-surface/10 absolute top-3 left-4">format_quote</span>
                    <p className="text-sm text-on-surface leading-relaxed pl-8 italic">
                      &ldquo;Exceptional work this week. The M-Pesa integration was handled with a level of maturity beyond what we expect from an intern. The proactive approach to documenting the API endpoints was particularly commendable. I am confident in increasing the scope of responsibilities for the remaining weeks.&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-5">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsB9d9TWBdOpcCz_MwLON_w80KGljj9N_bkULTMJizylVzlV9XnnwR79reYNbn452Y3LUkfDXmpVzxZxqSH91wu2ztwAkAraukIuoKsRsNc2G1CoWIk6vgnwxDQQFNCxUQRFK12tI2qEKsiGY2xVSt6WB8f-9Dv62dZB4T6vckmiSpc86Dfh0JHNy3pZdLZOOsuwEXk1XX1weo7RstnOAbxEwomGtY9R7mEyygGid5bI0PAnAa3zPfbMWcWMSMsvr8osfwQLSrP1k"
                      alt="Sarah Chen"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-on-surface text-sm">Sarah Chen</p>
                      <p className="text-xs text-on-surface-variant">Senior Lead Developer</p>
                      <p className="text-xs text-on-surface-variant">Safaricom Ltd.</p>
                    </div>
                  </div>
                </div>

                {/* University Advisor */}
                <div className="bg-surface-container-low rounded-xl p-6">
                  <h4 className="font-bold text-on-surface mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">school</span>
                    University Advisor Sign-off
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyXE9OPrc5S-HiVGMfCmpc4S3uhAzst4GnhygdGse3gtkzewmF97GlhfA0Phxo4oOkx5i9M-fUKdoBFV6hHqCUUFKAmb1CcyK5Kb6K6DAzWBQc69czisahT6V0OYglihwCp298hNq3geflYM3YFFrlx9146z0jPj2zEMuUuEberIdh4CLAyIMUaJmCR70Ik42CDYq3BwmGk5JnoRoZWWdfp-gFR0ZBQIQF5QyrrULoJnLvtKmi4eb3xsknc2RJN_cY5kYMGi6dwtA"
                        alt="Dr. Arthur Penhaligon"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-on-surface text-sm">Dr. Arthur Penhaligon</p>
                        <p className="text-xs text-on-surface-variant">Viewed: Oct 29, 2023</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full uppercase flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      Advisor Approved
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
