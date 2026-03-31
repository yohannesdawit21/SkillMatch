import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PublicNav from '../../components/layout/PublicNav'
import Footer from '../../components/layout/Footer'
import InternshipCard from '../../components/shared/InternshipCard'
import SectionShowcase from '../../components/shared/SectionShowcase'
import {
  featuredOpportunities,
  industryCategories,
  partnerCompanies,
  partnerUniversities,
} from '../../data/landingData'

const platformSteps = [
  {
    title: 'Sign Up',
    icon: 'how_to_reg',
    description: 'Students, universities, and companies join the same verified national platform.',
  },
  {
    title: 'Build Your Profile',
    icon: 'description',
    description: 'Create a skills-based profile or internship posting aligned with real academic needs.',
  },
  {
    title: 'Explore & Match',
    icon: 'travel_explore',
    description: 'Discover curated opportunities and recommendations powered by the SkillMatch engine.',
  },
  {
    title: 'Apply & Get Hired',
    icon: 'verified_user',
    description: 'Submit applications, get approvals, and move into monitored workplace experience.',
  },
]

export default function LandingPage() {
  useEffect(() => {
    if (!window.location.hash) {
      return
    }

    const sectionId = window.location.hash.replace('#', '')
    const timeoutId = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)

    return () => window.clearTimeout(timeoutId)
  }, [])

  const renderUniversityCard = (university) => (
    <article className="bg-surface-container-lowest p-1 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group h-full">
      <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-xl bg-white">
        <img
          alt={university.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
          src={university.image}
        />
        <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-widest">
          {university.type}
        </div>
      </div>
      <div className="p-4 sm:p-6 flex flex-col h-[calc(100%-10rem)] sm:h-[calc(100%-12rem)]">
        <div className="mb-4">
          <h3 className="font-bold text-lg sm:text-xl text-primary mb-2">{university.name}</h3>
          <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-3">
            <span className="material-symbols-outlined text-sm">location_on</span>
            {university.location}, Ethiopia
          </p>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {university.description}
          </p>
        </div>
        <div className="pt-4 mt-auto border-t border-outline-variant/20 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-semibold text-on-surface-variant">Verified academic partner</span>
          <a
            href={university.website}
            target="_blank"
            rel="noreferrer"
            className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
          >
            Learn more
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
      </div>
    </article>
  )

  const renderIndustryCard = (industry) => (
    <article className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
      <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-2xl">{industry.icon}</span>
      </div>
      <h3 className="font-bold text-lg sm:text-xl text-primary mb-2">{industry.name}</h3>
      <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
        {industry.summary}
      </p>
      <div className="pt-4 mt-auto border-t border-outline-variant/20 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-bold text-tertiary uppercase tracking-widest">
          {industry.openings}
        </span>
        <Link
          to="/opportunities"
          className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
        >
          Browse roles
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </div>
    </article>
  )

  const renderCompanyCard = (company) => (
    <article className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 font-black text-primary text-sm">
        {company.initials}
      </div>
      <h3 className="font-bold text-lg sm:text-xl text-primary mb-1">{company.name}</h3>
      <p className="text-xs text-on-surface-variant mb-4 uppercase tracking-wider font-bold">
        {company.sector}
      </p>
      <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
        {company.description}
      </p>
      <div className="pt-4 mt-auto border-t border-outline-variant/20 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-bold text-tertiary">{company.openings}</span>
        <Link
          to="/opportunities"
          className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
        >
          See roles
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </div>
    </article>
  )

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      <PublicNav />

      {/* Hero Section */}
      <header className="relative pt-24 sm:pt-28 md:pt-40 lg:pt-48 pb-16 sm:pb-20 md:pb-24 lg:pb-32 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-xs font-bold tracking-widest uppercase mb-6">
              National Initiative
            </span>
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1] tracking-tight mb-6 sm:mb-8">
              The Gateway to Professional Excellence in Ethiopia.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-lg mb-8 sm:mb-10 leading-relaxed">
              A unified national internship coordination platform bridging the gap between academic theory and industrial practice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/auth"
                className="w-full sm:w-auto text-center editorial-gradient text-on-primary px-6 sm:px-8 py-4 rounded-lg font-bold shadow-lg hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
              <Link
                to="/opportunities"
                className="w-full sm:w-auto text-center bg-surface-container-high text-on-surface px-6 sm:px-8 py-4 rounded-lg font-bold hover:bg-surface-container-highest transition-colors"
              >
                View Opportunities
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 sm:-top-20 -right-8 sm:-right-20 w-72 sm:w-96 h-72 sm:h-96 bg-primary-fixed opacity-20 blur-[100px] rounded-full" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:transform lg:rotate-2 lg:hover:rotate-0 transition-transform duration-700">
              <img
                alt="Ethiopian students collaborating"
                className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2Zn0WeLCE3-cHo-R8ExWXihEhoghztBydUC693_D5z4aUj2Y1yw9UrUYt5JxD9pewLPVSukdGfu0mCMpfLwwnVIuK30Yej4RadU9RnvV7e5kgOdKu5sbI8EGmd8vYtfkOSJBmAPDqexfnOSoIIzJInFAMbb4BPlzB6RPeOADjejJnRT3kj3dcwT7oXlhGNvvZqJ8iFmeK5nmQV-sdBU_xCErUx9iPvBME81GpzR4BG1jKsqK8VHYG3y5fMAWx3kEeDet_z68ZBpY"
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-tertiary-container text-on-tertiary-container rounded-full">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Skill-Matching Engine</p>
                    <p className="text-xs text-on-surface-variant">Powered by National Career Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-surface-container-low scroll-mt-24 sm:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-primary mb-6">
                Connecting Ambition with Opportunity
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                SkillMatch is a national system that connects students, universities, and companies to ensure students gain real-world internship experience aligned with their skills.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold text-on-surface">Verified Placements</h4>
                    <p className="text-sm text-on-surface-variant">Every internship is vetted by university advisors and industry supervisors.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold text-on-surface">Curriculum Alignment</h4>
                    <p className="text-sm text-on-surface-variant">Ensuring field placements directly support academic learning objectives.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 sm:p-6 bg-surface rounded-xl text-center">
                  <p className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">45+</p>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Universities</p>
                </div>
                <div className="p-5 sm:p-6 bg-surface rounded-xl text-center">
                  <p className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">12k+</p>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Students Joined</p>
                </div>
                <div className="p-5 sm:p-6 bg-surface rounded-xl text-center">
                  <p className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">850</p>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Partner Companies</p>
                </div>
                <div className="p-5 sm:p-6 bg-surface rounded-xl text-center">
                  <p className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">94%</p>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Match Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-surface scroll-mt-24 sm:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-primary mb-4">
              How SkillMatch Works
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              A clear internship journey for students, universities, and employers from onboarding to career readiness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {platformSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col p-8 bg-surface-container-low rounded-2xl hover:bg-surface-container-highest transition-colors shadow-sm"
              >
                <div className="w-12 h-12 rounded-full editorial-gradient text-white flex items-center justify-center font-bold mb-5">
                  {index + 1}
                </div>
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">
                  {step.icon}
                </span>
                <h4 className="font-bold text-lg mb-3 text-primary">{step.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="py-16 sm:py-20 lg:py-24 bg-surface-container-low scroll-mt-24 sm:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-primary mb-3">
                Opportunities
              </h2>
              <p className="text-on-surface-variant">
                Browse internships and early-career opportunities curated for Ethiopian students across priority sectors.
              </p>
            </div>
            <Link
              to="/opportunities"
              className="text-primary font-bold flex items-center gap-2 hover:underline underline-offset-4 transition-colors"
            >
              View All Opportunities
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredOpportunities.slice(0, 6).map((opportunity) => (
              <InternshipCard
                key={`${opportunity.company}-${opportunity.title}`}
                {...opportunity}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionShowcase
        id="universities"
        title="Partner Universities"
        description="Explore public universities and major private institutions connected to SkillMatch across Ethiopia."
        items={partnerUniversities}
        initialCount={8}
        renderCard={renderUniversityCard}
        previewMode="carousel"
      />

      <SectionShowcase
        id="industries"
        title="Industries"
        description="From software and banking to healthcare and manufacturing, SkillMatch supports career pathways across core economic sectors."
        items={industryCategories}
        initialCount={6}
        renderCard={renderIndustryCard}
      />

      <SectionShowcase
        id="companies"
        title="Companies"
        description="Discover companies actively hosting interns, apprentices, and career-launch opportunities on the platform."
        items={partnerCompanies}
        initialCount={8}
        renderCard={renderCompanyCard}
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="editorial-gradient rounded-3xl p-6 sm:p-8 md:p-12 text-white flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between shadow-xl">
            <div className="max-w-2xl">
              <p className="text-primary-fixed text-xs font-bold uppercase tracking-[0.25em] mb-4">
                Career Readiness Starts Here
              </p>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                Start your internship journey with verified universities and employers.
              </h2>
              <p className="text-primary-fixed-dim text-base sm:text-lg leading-relaxed">
                Build your profile, discover opportunities, and move from the classroom to real-world impact with confidence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                to="/auth"
                className="w-full sm:w-auto text-center bg-white text-primary px-6 sm:px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors"
              >
                Join SkillMatch
              </Link>
              <Link
                to="/opportunities"
                className="w-full sm:w-auto text-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors"
              >
                Explore Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
