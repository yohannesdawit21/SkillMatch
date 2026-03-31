import MatchMeter from "./MatchMeter"

export default function InternshipCard({ title, company, tags = [], matchPercent, location, postedAgo, imgSrc }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:translate-y-[-4px] transition-all duration-300 relative group">
      <div className="absolute top-4 right-4 bg-tertiary-container/10 border border-tertiary/20 rounded-full p-1">
        <MatchMeter percentage={matchPercent} size={44} strokeWidth={3} />
      </div>

      <div className="flex items-start gap-3 mb-3">
        <img src={imgSrc} alt={company} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
        <div className="min-w-0">
          <h3 className="font-headline font-bold text-on-surface pr-16 leading-snug">{title}</h3>
          <p className="text-primary text-sm font-medium">{company}</p>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="bg-surface-container-highest text-on-surface-variant px-2.5 py-0.5 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-3 pt-3 border-t border-outline-variant/30 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-xs text-on-surface-variant">
          {location && (
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">location_on</span>
              {location}
            </span>
          )}
          {postedAgo && (
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">schedule</span>
              {postedAgo}
            </span>
          )}
        </div>
        <button className="w-full sm:w-auto bg-primary text-on-primary px-4 py-1.5 rounded-full text-xs font-bold hover:bg-primary/90 transition-colors">
          Apply
        </button>
      </div>
    </div>
  )
}
