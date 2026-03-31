export default function StatCard({ icon, value, label, trend, trendColor = "text-tertiary", className = "" }) {
  return (
    <div className={`bg-surface-container-lowest p-5 md:p-6 rounded-xl shadow-sm ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="bg-primary-fixed p-2.5 rounded-xl">
          <span className="material-symbols-outlined text-on-primary-fixed-variant">{icon}</span>
        </div>
        {trend && (
          <span className={`text-xs font-bold ${trendColor} flex items-center gap-0.5`}>
            <span className="material-symbols-outlined text-sm">trending_up</span>
            {trend}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-on-surface">{value}</p>
      <p className="text-sm text-on-surface-variant mt-0.5">{label}</p>
    </div>
  )
}
