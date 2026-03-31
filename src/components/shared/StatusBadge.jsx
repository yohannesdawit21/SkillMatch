const STATUS_MAP = {
  approved: { bg: "bg-tertiary-fixed text-tertiary", icon: "verified" },
  pending: { bg: "bg-surface-container-highest text-on-surface-variant", icon: "hourglass_empty" },
  rejected: { bg: "bg-error-container text-on-error-container", icon: "cancel" },
  waiting: { bg: "bg-secondary-fixed text-on-secondary-container", icon: "history_edu" },
  active: { bg: "bg-tertiary-fixed/40 text-on-tertiary-fixed-variant", icon: null },
}

export default function StatusBadge({ status, label }) {
  const config = STATUS_MAP[status] || STATUS_MAP.pending
  const displayLabel = label || status.charAt(0).toUpperCase() + status.slice(1)

  return (
    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${config.bg}`}>
      {config.icon && (
        <span className="material-symbols-outlined text-sm">{config.icon}</span>
      )}
      {displayLabel}
    </span>
  )
}
