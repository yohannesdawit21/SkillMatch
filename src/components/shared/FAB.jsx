import { useState } from "react"

export default function FAB({ icon, label, onClick, color = "bg-primary" }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 flex items-center">
      {showTooltip && label && (
        <span className="absolute right-full mr-3 bg-inverse-surface text-inverse-on-surface text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          {label}
        </span>
      )}
      <button
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`${color} text-on-primary w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200`}
        aria-label={label}
      >
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </button>
    </div>
  )
}
