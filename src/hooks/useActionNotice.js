import { useCallback, useEffect, useState } from 'react'

export default function useActionNotice(duration = 2500) {
  const [notice, setNotice] = useState('')

  useEffect(() => {
    if (!notice) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => setNotice(''), duration)
    return () => window.clearTimeout(timeoutId)
  }, [duration, notice])

  const showNotice = useCallback((message) => {
    setNotice(message)
  }, [])

  return { notice, showNotice }
}
