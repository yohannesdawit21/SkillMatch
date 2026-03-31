import { useState } from 'react'

export default function SectionShowcase({
  id,
  title,
  description,
  items,
  initialCount = 6,
  renderCard,
  previewMode = 'grid',
}) {
  const [expanded, setExpanded] = useState(false)
  const previewItems = items.slice(0, initialCount)

  return (
    <section id={id} className="py-16 sm:py-20 lg:py-24 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-primary mb-3">
              {title}
            </h2>
            <p className="text-on-surface-variant">{description}</p>
          </div>
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="text-primary font-bold flex items-center gap-2 hover:underline underline-offset-4 transition-colors"
          >
            {expanded ? 'Show Featured' : 'View All'}
            <span className="material-symbols-outlined">
              {expanded ? 'grid_view' : 'arrow_forward'}
            </span>
          </button>
        </div>

        {expanded ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {items.map((item, index) => renderCard(item, index, true))}
          </div>
        ) : previewMode === 'carousel' ? (
          <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2">
            {previewItems.map((item, index) => (
              <div
                key={`${id}-${item.name ?? item.title}-${index}`}
                className="snap-start shrink-0 w-[85%] sm:w-[360px] lg:w-[340px]"
              >
                {renderCard(item, index, false)}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {previewItems.map((item, index) => (
              <div
                key={`${id}-${item.name ?? item.title}-${index}`}
                className="w-full"
              >
                {renderCard(item, index, false)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
