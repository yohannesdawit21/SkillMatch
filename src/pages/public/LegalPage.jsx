import { Link } from 'react-router-dom'

const legalContent = {
  privacy: {
    eyebrow: 'Privacy Policy',
    title: 'How SkillMatch handles participant data',
    intro:
      'This demo frontend stores only the minimum account information needed to keep your portal session active in the browser.',
    sections: [
      {
        heading: 'What we store locally',
        body:
          'The current frontend keeps your selected role and display profile in browser storage so dashboard routes stay consistent after refresh.',
      },
      {
        heading: 'What is not collected here',
        body:
          'This frontend build does not submit personal data to a backend service, process payments, or sync external analytics from within the app.',
      },
      {
        heading: 'Need support',
        body:
          'For policy questions, use the support page and include the route or screen where you saw the issue.',
      },
    ],
  },
  terms: {
    eyebrow: 'Terms of Service',
    title: 'Frontend usage guidelines for SkillMatch',
    intro:
      'This project currently operates as a frontend demonstration environment for students, companies, universities, and administrators.',
    sections: [
      {
        heading: 'Demo environment',
        body:
          'Actions performed in this frontend may update local UI state, but they do not create real internship records or legal agreements.',
      },
      {
        heading: 'Account access',
        body:
          'Use the portal that matches your role. Protected dashboard routes automatically redirect when the signed-in role does not match the selected area.',
      },
      {
        heading: 'Support and reporting',
        body:
          'If you encounter broken UI or misleading content, report it through the support page so the frontend flow can be corrected quickly.',
      },
    ],
  },
}

export default function LegalPage({ type = 'privacy' }) {
  const content = legalContent[type] || legalContent.privacy

  return (
    <div className="min-h-screen bg-surface">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="text-sm font-semibold text-primary hover:underline">
          Back to home
        </Link>

        <div className="mt-8 bg-surface-container-lowest rounded-3xl shadow-sm p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">{content.eyebrow}</p>
          <h1 className="font-headline text-4xl font-black text-on-surface mb-4">{content.title}</h1>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10">{content.intro}</p>

          <div className="space-y-8">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-on-surface mb-2">{section.heading}</h2>
                <p className="text-on-surface-variant leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/support"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
            >
              Contact support
            </Link>
            <Link
              to="/auth"
              className="inline-flex items-center justify-center rounded-lg bg-surface-container-high px-5 py-3 text-sm font-bold text-on-surface hover:bg-surface-container-highest transition-colors"
            >
              Open access hub
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
