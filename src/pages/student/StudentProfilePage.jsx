import { Link } from 'react-router-dom'

const personalRows = [
  { label: 'Full name', value: 'Alex Morgan', icon: 'badge' },
  { label: 'University email', value: 'alex.morgan@student.cu.edu.eg', icon: 'mail' },
  { label: 'Phone', value: '+20 100 234 5678', icon: 'smartphone' },
  { label: 'City / Country', value: 'Cairo, Egypt', icon: 'location_on' },
  { label: 'LinkedIn', value: 'linkedin.com/in/alexmorgan', icon: 'link' },
]

const academicRows = [
  { label: 'University', value: 'Cairo University' },
  { label: 'Faculty', value: 'Engineering' },
  { label: 'Major', value: 'Computer Science & Engineering' },
  { label: 'Current year', value: '3rd Year' },
  { label: 'Expected graduation', value: 'June 2027' },
  { label: 'Cumulative GPA', value: '3.72 / 4.0' },
]

const experienceItems = [
  {
    title: 'Frontend Developer Intern',
    org: 'Starlight Systems',
    period: 'Jun 2025 – Aug 2025',
    summary: 'Shipped dashboard widgets in React; paired with design on a component library.',
    tags: ['React', 'Tailwind', 'REST'],
  },
  {
    title: 'Open Source Contributor',
    org: 'Campus Dev Guild',
    period: '2024 – Present',
    summary: 'Documentation and bug fixes for student tooling; mentored first-time contributors.',
    tags: ['Git', 'Community'],
  },
]

const skillItems = [
  { name: 'React', level: 88, tone: 'bg-primary' },
  { name: 'Python', level: 82, tone: 'bg-tertiary' },
  { name: 'UI/UX & Figma', level: 76, tone: 'bg-secondary-container' },
  { name: 'SQL / Analytics', level: 64, tone: 'bg-primary-container' },
]

const certifications = [
  { name: 'Python for Data Science', issuer: 'Coursera', year: '2025', icon: 'verified' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2024', icon: 'code' },
  { name: 'Agile Fundamentals', issuer: 'University Workshop', year: '2024', icon: 'groups' },
]

const completionSteps = [
  { label: 'Basic profile', done: true },
  { label: 'Education & GPA', done: true },
  { label: 'Skills & projects', done: true },
  { label: 'CV published', done: false },
  { label: 'Advisor verification', done: false },
]

export default function StudentProfilePage() {
  const doneCount = completionSteps.filter((s) => s.done).length
  const pct = Math.round((doneCount / completionSteps.length) * 100)

  return (
    <div className="pt-24 pb-12 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="mb-10">
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-base">person</span>
            Student profile
          </p>
          <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-3">My Profile</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Keep your academic record, skills, and visibility up to date so recruiters and your advisor see an accurate picture of you.
          </p>
        </div>

        {/* Hero / summary */}
        <div className="relative overflow-hidden bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 p-6 md:p-8 mb-10">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-tertiary-fixed/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex items-start gap-6">
              <div className="relative flex-shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJhlWL-rb-00IjzlDLsM56DkY1kqEDHHJJjGduEI6fNQJ_PghVnRAeLbXlhy-5OEeXCa1p8BieMZf47IFt4esKEkINQhalUZjbJH90kFSdhSqu4LdXCWxfbTxi7Gh7s9qEPyOmc8hMPggWg9-EMC5hNh1gUf0W2-7YUpbiHRvRtgwotyw5WrNzNDDmtxJPZG3QyKpM00S06baM3DKS-Alg-IhcJSpHZoX1vX8FA4RSDXTZWlQlgsGcmicFMGtVrSBGuzV8cEbnTmg"
                  alt="Alex Morgan"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover ring-4 ring-surface shadow-md"
                />
                <button
                  type="button"
                  className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary text-on-primary shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Change photo"
                >
                  <span className="material-symbols-outlined text-xl">photo_camera</span>
                </button>
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface">Alex Morgan</h2>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-tertiary-container text-on-tertiary-container">
                    Active seeker
                  </span>
                </div>
                <p className="text-on-surface-variant font-medium mb-4">Computer Science & Engineering · 3rd Year · Cairo University</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low">
                    <span className="material-symbols-outlined text-primary text-xl">school</span>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wide font-bold">GPA</p>
                      <p className="text-lg font-black text-on-surface">3.72</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low">
                    <span className="material-symbols-outlined text-tertiary text-xl">target</span>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wide font-bold">Match score</p>
                      <p className="text-lg font-black text-on-surface">91%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low">
                    <span className="material-symbols-outlined text-secondary text-xl">visibility</span>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wide font-bold">Profile views</p>
                      <p className="text-lg font-black text-on-surface">24</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:ml-auto lg:flex-col lg:items-stretch">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl editorial-gradient text-white font-bold text-sm shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="material-symbols-outlined text-lg">edit</span>
                Edit profile
              </button>
              <Link
                to="/student/cv-builder"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-outline-variant text-on-surface font-semibold text-sm hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-lg">description</span>
                Open CV builder
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-outline-variant text-on-surface font-semibold text-sm hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-lg">share</span>
                Share profile link
              </button>
            </div>
          </div>
        </div>

        {/* Two-column main */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            {/* Personal information */}
            <section className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">contact_page</span>
                  <h3 className="font-headline text-xl font-bold text-on-surface">Personal information</h3>
                </div>
                <button
                  type="button"
                  className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-lg">edit_square</span>
                  Edit
                </button>
              </div>
              <dl className="space-y-4">
                {personalRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-outline-variant/15 last:border-0"
                  >
                    <dt className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant sm:w-48 flex-shrink-0">
                      <span className="material-symbols-outlined text-lg text-primary/70">{row.icon}</span>
                      {row.label}
                    </dt>
                    <dd className="text-sm text-on-surface font-medium break-all">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Academic */}
            <section className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">account_balance</span>
                  <h3 className="font-headline text-xl font-bold text-on-surface">Academic information</h3>
                </div>
                <button
                  type="button"
                  className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-lg">edit_square</span>
                  Update
                </button>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {academicRows.map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-1">{row.label}</dt>
                    <dd className="text-sm font-semibold text-on-surface">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Experience & projects */}
            <section className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">work_history</span>
                  <h3 className="font-headline text-xl font-bold text-on-surface">Experience & projects</h3>
                </div>
                <button
                  type="button"
                  className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                  Add entry
                </button>
              </div>
              <ul className="space-y-5">
                {experienceItems.map((item) => (
                  <li
                    key={item.title}
                    className="relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:rounded-full before:bg-primary"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="font-bold text-on-surface">{item.title}</h4>
                      <span className="text-xs font-medium text-on-surface-variant whitespace-nowrap">{item.period}</span>
                    </div>
                    <p className="text-sm text-primary font-semibold mb-2">{item.org}</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-3">{item.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-container-low text-on-surface-variant"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="lg:col-span-5 space-y-8">
            {/* Skills */}
            <section className="bg-surface-container-low rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-2xl">psychology</span>
                  <h3 className="font-headline text-xl font-bold text-on-surface">Skills</h3>
                </div>
                <Link to="/student/cv-builder" className="text-sm font-bold text-primary hover:underline">
                  Manage
                </Link>
              </div>
              <ul className="space-y-4">
                {skillItems.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-semibold text-on-surface">{s.name}</span>
                      <span className="text-on-surface-variant font-medium">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-surface-container-highest overflow-hidden">
                      <div className={`h-full rounded-full ${s.tone}`} style={{ width: `${s.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Certifications */}
            <section className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-2xl">workspace_premium</span>
                  <h3 className="font-headline text-xl font-bold text-on-surface">Certifications & badges</h3>
                </div>
                <button type="button" className="text-sm font-bold text-primary hover:underline">
                  Add
                </button>
              </div>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container-high/80 transition-colors"
                  >
                    <span className="material-symbols-outlined text-tertiary text-2xl flex-shrink-0">{c.icon}</span>
                    <div className="min-w-0">
                      <p className="font-bold text-on-surface text-sm">{c.name}</p>
                      <p className="text-xs text-on-surface-variant">
                        {c.issuer} · {c.year}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Profile completion */}
            <section className="bg-primary text-on-primary rounded-xl p-6 md:p-8 shadow-md relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-headline text-xl font-bold">Profile completion</h3>
                  <span className="text-2xl font-black">{pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/20 mb-6 overflow-hidden">
                  <div className="h-full rounded-full bg-tertiary-fixed" style={{ width: `${pct}%` }} />
                </div>
                <ul className="space-y-3 mb-6">
                  {completionSteps.map((step) => (
                    <li key={step.label} className="flex items-center gap-3 text-sm">
                      <span
                        className={`material-symbols-outlined text-lg ${step.done ? 'text-tertiary-fixed' : 'text-white/50'}`}
                      >
                        {step.done ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                      <span className={step.done ? 'font-medium' : 'text-white/75'}>{step.label}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/student/cv-builder"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Finish remaining steps
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
