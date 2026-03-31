import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { partnerUniversities } from '../../data/landingData'

export default function CVBuilder() {
  const navigate = useNavigate()
  const [skills, setSkills] = useState(['React', 'Python', 'UI/UX Design', 'Accounting', 'Figma'])
  const [skillInput, setSkillInput] = useState('')
  const [saved, setSaved] = useState(false)

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index))
  }

  const addSkill = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault()
      setSkills([...skills, skillInput.trim()])
      setSkillInput('')
    }
  }

  const handleSaveAndNext = () => {
    setSaved(true)
    window.setTimeout(() => {
      navigate('/student/suggested')
    }, 250)
  }

  const steps = [
    { label: 'Personal Info', completed: true },
    { label: 'Education', active: true },
    { label: 'Experience', future: true },
    { label: 'Review', future: true },
  ]

  const skillColors = {
    React: 'bg-primary text-white',
    Python: 'bg-primary text-white',
    'UI/UX Design': 'bg-primary text-white',
    Accounting: 'bg-primary text-white',
    Figma: 'bg-secondary-container text-on-secondary-container',
  }

  const universityOptions = [...partnerUniversities]
    .map((university) => university.name)
    .sort((a, b) => a.localeCompare(b))

  return (
    <div className="pt-24 pb-12 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-3">
            <span className="material-symbols-outlined text-base">edit_note</span>
            Step 2 of 4
          </div>
          <h1 className="font-headline font-extrabold text-4xl text-on-surface mb-3">Education & Expertise</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Add your academic background and core skills so our SkillMatch Engine can pair you with the most relevant opportunities.
          </p>
        </div>

        {/* Stepper Progress */}
        <div className="mb-12 flex items-center gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              {/* Step circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step.completed
                      ? 'bg-tertiary text-on-tertiary'
                      : step.active
                        ? 'bg-primary text-on-primary ring-4 ring-primary-fixed'
                        : 'bg-surface-container-highest text-on-surface-variant opacity-40'
                  }`}
                >
                  {step.completed ? (
                    <span className="material-symbols-outlined text-lg">check</span>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className={`text-xs mt-2 font-medium ${step.future ? 'text-on-surface-variant opacity-40' : 'text-on-surface'}`}>
                  {step.label}
                </span>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className={`w-24 h-[2px] mx-2 mt-[-1rem] ${
                    step.completed ? 'bg-tertiary' : 'bg-surface-container-highest'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Editor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Main Form */}
          <div className="lg:col-span-8 space-y-6">

            {/* Education Card */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">account_balance</span>
                <h2 className="text-xl font-bold text-on-surface">University Details</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5">University Name</label>
                  <select className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select your university...</option>
                    {universityOptions.map((university) => (
                      <option key={university}>{university}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Department / Major</label>
                  <input
                    type="text"
                    defaultValue="Computer Science & Engineering"
                    className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Current Year</label>
                    <select defaultValue="3rd Year" className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Cumulative GPA</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="3.5"
                        className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 pr-12 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">/4.0</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-on-surface-variant mb-1.5">Expected Graduation</label>
                    <input
                      type="date"
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">psychology</span>
                <h2 className="text-xl font-bold text-on-surface">Core Competencies</h2>
              </div>
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-4 min-h-[120px]">
                <div className="flex flex-wrap gap-2 mb-3">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                        skillColors[skill] || 'bg-secondary-container text-on-secondary-container'
                      }`}
                    >
                      {skill}
                      <button onClick={() => removeSkill(i)} className="hover:opacity-70 transition-opacity">
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={addSkill}
                  placeholder="Type a skill and press Enter..."
                  className="w-full bg-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none text-sm py-1"
                />
              </div>
              <p className="text-xs text-on-surface-variant mt-3">
                Suggested: <span className="text-primary font-medium cursor-pointer">Node.js</span>, <span className="text-primary font-medium cursor-pointer">Project Management</span>, <span className="text-primary font-medium cursor-pointer">SQL</span>
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4">
              <Link to="/student/profile" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface font-medium transition-colors">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back to Profile
              </Link>
              <div className="flex items-center gap-3">
                <button className="px-6 py-3 rounded-xl border border-outline-variant text-on-surface font-medium hover:bg-surface-container-low transition-colors">
                  Preview CV
                </button>
                <button
                  type="button"
                  onClick={handleSaveAndNext}
                  className="px-6 py-3 rounded-xl editorial-gradient text-white font-bold shadow-md hover:shadow-lg transition-shadow"
                >
                  Save & Next
                </button>
              </div>
            </div>
            {saved && (
              <p className="text-sm text-tertiary font-medium mt-3">
                CV saved successfully. Redirecting to your suggested internships...
              </p>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">

            {/* Why this matters */}
            <div className="bg-tertiary/5 border border-tertiary/10 rounded-xl p-6">
              <h3 className="font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-xl">auto_awesome</span>
                Why this matters
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Our <span className="font-semibold text-tertiary">SkillMatch Engine</span> cross-references your education and skills against 1,200+ internship requirements to surface the best-fit opportunities.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-base mt-0.5">verified</span>
                  Verified academic credentials boost match scores by up to 35%
                </div>
                <div className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-base mt-0.5">verified</span>
                  Skills are validated against industry taxonomy standards
                </div>
              </div>
            </div>

            {/* CV Tips */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-on-surface mb-4">CV Tips</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary-fixed text-primary text-xs font-bold flex items-center justify-center shrink-0">1</span>
                  <p className="text-sm text-on-surface-variant">Keep your GPA up to date — recruiters filter by this field first.</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary-fixed text-primary text-xs font-bold flex items-center justify-center shrink-0">2</span>
                  <p className="text-sm text-on-surface-variant">Add at least 5 skills to maximize visibility in search results.</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary-fixed text-primary text-xs font-bold flex items-center justify-center shrink-0">3</span>
                  <p className="text-sm text-on-surface-variant">Use specific skill names (e.g. "React" instead of "Web Development").</p>
                </div>
              </div>
            </div>

            {/* Tutorial Image */}
            <div className="rounded-xl overflow-hidden relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTgeSLxQcnBw9A4vOE8WWWUIltuGapDPe8OpXQvqXd_x-QA9DkdEqdFVPNq34ehcDd27elUWTHn6nDqqJF-x-AEt5giXdUvoW3TR2LSuemOz9EQoUNnR-J9VTh0JnoqqMyIG2z76LK2rdC1oezGZG7kmxzIrKFpz3SLQOBg2LVPx71YCMh5J-1aZOEhmTnx2NeAPCj_BTdrMUHK8ANPEVUwlDM0DYV6PLIJA790GB_1nyPTaiGG5qNqkNtVmnJhQwOOOZweqrlHuQ"
                alt="CV building tutorial"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div>
                  <p className="text-white font-bold text-sm">Watch: Build a Winning CV</p>
                  <p className="text-white/70 text-xs">3 min tutorial</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
