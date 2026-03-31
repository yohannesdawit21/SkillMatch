import { Link } from 'react-router-dom'
import PublicNav from '../../components/layout/PublicNav'
import Footer from '../../components/layout/Footer'

const supportOptions = [
  {
    icon: 'mail',
    title: 'Email Support',
    description: 'Reach the SkillMatch support team for login issues, onboarding help, or partnership questions.',
    action: 'support@skillmatch.et',
  },
  {
    icon: 'call',
    title: 'Phone Assistance',
    description: 'Speak to a platform coordinator during working hours for urgent access and verification issues.',
    action: '+251 11 555 0101',
  },
  {
    icon: 'forum',
    title: 'University & Company Help Desk',
    description: 'Dedicated support for registrars, advisors, and employer partners managing placements.',
    action: 'Partner help desk',
  },
]

const faqs = [
  {
    question: 'How do I log in as a student?',
    answer:
      'Go to the access hub, choose the student portal, enter your academic email, and use the OTP flow to continue to your dashboard.',
  },
  {
    question: 'How do universities join SkillMatch?',
    answer:
      'University registrars can request onboarding through support, after which institutional verification and advisor setup are completed.',
  },
  {
    question: 'How do companies publish internship opportunities?',
    answer:
      'Company admins can register, complete verification, and then manage internship postings, supervisors, and candidate reviews from the company dashboard.',
  },
]

export default function SupportPage() {
  return (
    <div className="bg-surface min-h-screen">
      <PublicNav />

      <main className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-xs font-bold uppercase tracking-[0.25em] mb-6">
                Support Center
              </span>
              <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tight mb-6">
                Get help with access, onboarding, and internship workflows.
              </h1>
              <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-8">
                Whether you are a student, university coordinator, or employer partner, the SkillMatch team is here to help you move quickly.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/auth"
                  className="editorial-gradient text-on-primary px-7 py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity"
                >
                  Go to Access Hub
                </Link>
                <Link
                  to="/opportunities"
                  className="bg-surface-container-high text-on-surface px-7 py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-colors"
                >
                  Explore Opportunities
                </Link>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/20">
              <h2 className="font-headline text-2xl font-bold text-primary mb-6">
                Fast Help
              </h2>
              <div className="space-y-5">
                {supportOptions.map((item) => (
                  <div
                    key={item.title}
                    className="bg-surface-container-low rounded-2xl p-5 hover:bg-surface-container-high transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-on-surface mb-1">{item.title}</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-2">
                          {item.description}
                        </p>
                        <p className="text-sm font-bold text-primary">{item.action}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-headline text-3xl font-bold text-primary mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-on-surface-variant">
              Quick answers to the most common questions from students and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg text-primary mb-3">{faq.question}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
