export default function ActionNotice({ message }) {
  if (!message) {
    return null
  }

  return (
    <div className="rounded-xl border border-primary/10 bg-primary-fixed/50 px-4 py-3 text-sm font-medium text-primary">
      {message}
    </div>
  )
}
