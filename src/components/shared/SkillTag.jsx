const VARIANT_STYLES = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary-container text-on-secondary-container",
}

export default function SkillTag({ label, onRemove, variant = "primary" }) {
  const style = VARIANT_STYLES[variant] || VARIANT_STYLES.primary

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${style}`}>
      {label}
      {onRemove && (
        <button onClick={onRemove} className="ml-0.5 hover:opacity-70 transition-opacity" aria-label={`Remove ${label}`}>
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
      )}
    </span>
  )
}
