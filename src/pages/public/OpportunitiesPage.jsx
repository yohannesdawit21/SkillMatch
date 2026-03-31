import { Link } from 'react-router-dom'
import PublicNav from '../../components/layout/PublicNav'
import Footer from '../../components/layout/Footer'
import InternshipCard from '../../components/shared/InternshipCard'
import { featuredOpportunities, industryCategories } from '../../data/landingData'

export default function OpportunitiesPage() {
  return (
    <div className="bg-surface min-h-screen">
      <PublicNav />

      <main className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-xs font-bold uppercase tracking-[0.25em] mb-6">
                Live Opportunity Feed
              </span>
              <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tight mb-6">
                Explore internships, graduate roles, and career-launch programs.
              </h1>
              <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-8">
                SkillMatch curates opportunities from verified companies and institutions so students can discover roles aligned with their field, skills, and ambitions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/auth"
                  className="editorial-gradient text-on-primary px-7 py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity"
                >
                  Create Your Profile
                </Link>
                <Link
                  to="/#companies"
                  className="bg-surface-container-high text-on-surface px-7 py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-colors"
                >
                  View Partner Companies
                </Link>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/20">
              <div className="flex items-center gap-2 mb-5">
                <span className="material-symbols-outlined text-primary">filter_list</span>
                <h2 className="font-bold text-on-surface">Popular Sectors</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industryCategories.slice(0, 6).map((industry) => (
                  <div
                    key={industry.name}
                    className="bg-surface-container-low rounded-xl p-4 hover:bg-surface-container-high transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary text-lg">
                        {industry.icon}
                      </span>
                      <span className="font-semibold text-sm text-on-surface">
                        {industry.name}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">{industry.openings}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-2">
                Available Opportunities
              </h2>
              <p className="text-on-surface-variant">
                Featured roles from technology, finance, healthcare, telecom, and industrial partners.
              </p>
            </div>
            <Link
              to="/#universities"
              className="text-primary font-bold flex items-center gap-2 hover:underline underline-offset-4"
            >
              Explore Partner Universities
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredOpportunities.map((opportunity) => (
              <InternshipCard
                key={`${opportunity.company}-${opportunity.title}`}
                {...opportunity}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
