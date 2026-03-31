import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-surface-container-lowest rounded-3xl shadow-sm p-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">404</p>
        <h1 className="font-headline text-4xl font-black text-on-surface mb-3">Page not found</h1>
        <p className="text-on-surface-variant leading-relaxed mb-8">
          The route you opened does not exist in this frontend. Use one of the main entry points below to continue.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
          >
            Go home
          </Link>
          <Link
            to="/auth"
            className="inline-flex items-center justify-center rounded-lg bg-surface-container-high px-5 py-3 text-sm font-bold text-on-surface hover:bg-surface-container-highest transition-colors"
          >
            Open access hub
          </Link>
        </div>
      </div>
    </div>
  )
}
