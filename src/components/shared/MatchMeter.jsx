export default function MatchMeter({ percentage = 0, size = 48, strokeWidth = 4, color = "text-tertiary" }) {
  const radius = (size / 2) - strokeWidth
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="absolute w-full h-full transform -rotate-90">
        <circle className="text-surface-container-highest" cx={size/2} cy={size/2} r={radius} fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} />
        <circle className={color} cx={size/2} cy={size/2} r={radius} fill="transparent" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
      </svg>
      <span className={`text-[10px] font-bold ${color}`}>{percentage}%</span>
    </div>
  )
}
