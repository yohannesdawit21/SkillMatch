import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function LogoutPage() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  useEffect(() => {
    logout()

    const timeoutId = window.setTimeout(() => {
      navigate('/auth', { replace: true })
    }, 800)

    return () => window.clearTimeout(timeoutId)
  }, [logout, navigate])

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6">
      <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center mx-auto mb-5">
          <span className="material-symbols-outlined text-3xl">logout</span>
        </div>
        <h1 className="font-headline text-2xl font-black text-on-surface mb-2">
          Signing you out
        </h1>
        <p className="text-sm text-on-surface-variant">
          Your session is being cleared and you will be redirected to the access hub.
        </p>
      </div>
    </div>
  )
}
