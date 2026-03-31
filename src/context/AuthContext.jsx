import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)
const STORAGE_KEY = 'skillmatch-auth'

function readStoredSession() {
  if (typeof window === 'undefined') {
    return { user: null, role: null }
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return { user: null, role: null }
  }

  try {
    const parsed = JSON.parse(raw)

    return {
      user: parsed.user ?? null,
      role: parsed.role ?? null,
    }
  } catch {
    window.localStorage.removeItem(STORAGE_KEY)
    return { user: null, role: null }
  }
}

export function AuthProvider({ children }) {
  const [{ user, role }, setSession] = useState(readStoredSession)

  const login = useCallback((nextRole, userData = {}) => {
    const nextUser = { name: 'Alex Rivers', ...userData }

    setSession({ role: nextRole, user: nextUser })
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ role: nextRole, user: nextUser }))
  }, [])

  const logout = useCallback(() => {
    setSession({ role: null, user: null })
    window.localStorage.removeItem(STORAGE_KEY)
  }, [])

  const value = useMemo(() => ({ user, role, login, logout }), [login, logout, role, user])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
