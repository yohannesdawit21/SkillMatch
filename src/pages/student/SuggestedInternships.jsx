import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ActionNotice from '../../components/shared/ActionNotice'
import FAB from '../../components/shared/FAB'
import useActionNotice from '../../hooks/useActionNotice'

export default function SuggestedInternships() {
  const navigate = useNavigate()
  const [appliedTitles, setAppliedTitles] = useState([])
  const { notice, showNotice } = useActionNotice()
  const recommendations = [
    {
      icon: "terminal",
      matchLabel: "98% Match",
      matchBg: "bg-tertiary-fixed",
      title: "Frontend Engineer Intern",
      company: "Atlassian",
      location: "Remote · Sydney",
      duration: "12 Weeks",
      gpa: "No GPA req",
      skills: ["React", "TypeScript", "Tailwind"],
      slots: "3 Interns needed Q3",
    },
    {
      icon: "database",
      matchLabel: "72% Match",
      matchBg: "bg-surface-container-high",
      title: "Data Science Analyst",
      company: "Spotify",
      location: "Stockholm, SE",
      duration: "4 Months",
      gpa: "GPA 3.5",
      skills: ["Python", "SQL", "Tableau"],
      slots: "2 Interns Q4",
    },
    {
      icon: "campaign",
      matchLabel: "88% Match",
      matchBg: "bg-tertiary-fixed",
      title: "Growth Marketing Intern",
      company: "Notion",
      location: "San Francisco, US",
      duration: "6 Months",
      gpa: "GPA 3.2",
      skills: ["Analytics", "Copywriting"],
      slots: "1 Intern immediately",
    },
  ]

  const handleApply = (title) => {
    setAppliedTitles((current) => (current.includes(title) ? current : [...current, title]))
    showNotice(`${title} saved to your application requests.`)
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <ActionNotice message={notice} />

      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold font-headline text-primary">
          Suggested Internships
        </h2>
        <p className="text-on-surface-variant mt-2 text-lg">
          Based on your CV skills and academic performance.
        </p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Match Insights Card */}
        <div className="lg:col-span-4 bg-secondary-container rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded-full mb-4">
              Profile Strength
            </span>
            <h3 className="font-headline text-xl font-bold text-on-secondary-container mb-4 leading-snug">
              Your CV matches 85% of local tech roles.
            </h3>
          </div>
          <button
            onClick={() => navigate('/student/cv-builder')}
            className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity self-start"
          >
            Update CV
          </button>
          <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] text-on-secondary-container/5 pointer-events-none select-none">
            analytics
          </span>
        </div>

        {/* Featured Internship Hero Card */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Image */}
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAas1_XlmxCp5PBnozHrFD9HPy3OVpPqKqzW_55r3JGlXHQzfw9gEyN5no6LSuAq3csqH7x7dxZChGdA24gxufcZkrT1Qk2oQeF6kdJCMeEmIN3odBjfoIJKuscY2rc5QFwm6zBIjQnx_b7aEt0cT4M10lv74_vhTm70grAJJfvRSYAYYYfNLdLprpuB1qLCkk5zyRFbiPFL5d2iE6YWtQybYZGpYe2bGhfjLW6cKPZY-sT6L9A0Eu5KbgFtp_w44pQfE78NIbbiAo"
                alt="Senior UX Research Intern"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Right: Details */}
            <div className="flex-1 flex flex-col">
              <span className="text-xs font-bold text-tertiary uppercase tracking-widest mb-2">
                Featured Match
              </span>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-1">
                Senior UX Research Intern
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                Google • Product Design Dept
              </p>

              {/* Match Meter */}
              <div className="flex items-center gap-3 mb-5">
                <svg width="56" height="56" viewBox="0 0 56 56" className="transform -rotate-90">
                  <circle cx="28" cy="28" r="24" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-surface-container-highest" />
                  <circle cx="28" cy="28" r="24" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-tertiary" strokeDasharray={2 * Math.PI * 24} strokeDashoffset={2 * Math.PI * 24 * (1 - 0.9)} strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.5s ease" }} />
                </svg>
                <span className="text-2xl font-black text-tertiary">90%</span>
                <span className="text-sm text-on-surface-variant">Match Score</span>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm mb-5">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  Zurich, Switzerland
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-base">schedule</span>
                  6 Months
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-base">group</span>
                  5 Positions
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-base">school</span>
                  GPA 3.8+
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Figma", "User Interviews"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleApply('Senior UX Research Intern')}
                className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity self-start mt-auto"
              >
                {appliedTitles.includes('Senior UX Research Intern') ? 'Applied' : 'Apply Now'}
              </button>
            </div>
          </div>
        </div>

        {/* Recommendation Cards */}
        <div className="lg:col-span-12 mt-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {recommendations.map((rec) => (
              <div
                key={rec.title}
                className="bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl transition-shadow duration-300"
              >
                {/* Top: Icon + Match Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary-fixed p-2.5 rounded-xl">
                    <span className="material-symbols-outlined text-on-primary-fixed-variant">
                      {rec.icon}
                    </span>
                  </div>
                  <span className={`px-3 py-1 ${rec.matchBg} text-xs font-bold rounded-full`}>
                    {rec.matchLabel}
                  </span>
                </div>

                <h4 className="font-headline font-bold text-lg text-on-surface mb-1">
                  {rec.title}
                </h4>
                <p className="text-sm text-primary font-medium mb-4">{rec.company}</p>

                {/* Details Table Rows */}
                <div className="space-y-2 text-sm text-on-surface-variant mb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    {rec.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    {rec.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">school</span>
                    {rec.gpa}
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {rec.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-xs font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-xs text-on-surface-variant">{rec.slots}</span>
                  <button
                    onClick={() => handleApply(rec.title)}
                    className="bg-primary-container text-white px-5 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity"
                  >
                    {appliedTitles.includes(rec.title) ? 'Applied' : 'Apply Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FAB icon="add" label="Search More Roles" onClick={() => navigate('/student/search')} />
    </div>
  )
}
