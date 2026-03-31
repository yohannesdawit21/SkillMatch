import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function AuthHub() {
  const [view, setView] = useState('role-selection')
  const [notice, setNotice] = useState('')
  const [pendingRegistration, setPendingRegistration] = useState(null)
  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'How it Works', href: '/#how-it-works' },
    { label: 'Universities', href: '/#universities' },
    { label: 'Companies', href: '/#companies' },
  ]
  const navigate = useNavigate()
  const { login } = useAuth()

  const handlePortalEntry = (role, path, userData = {}) => {
    login(role, userData)
    setNotice('')
    navigate(path)
  }

  const handleSendOtp = () => {
    handlePortalEntry('student', '/student/dashboard')
  }

  const handleRegister = () => {
    handlePortalEntry('student', '/student/profile', { name: 'New Student' })
  }

  const handleResendOtp = () => {
    setNotice('A fresh verification code has been generated for your student login.')
  }

  const handleCompanyRegistration = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const companyName = formData.get('organizationName')?.toString().trim() || 'Your company'

    setPendingRegistration({
      type: 'company',
      name: companyName,
      contactName: formData.get('contactName')?.toString().trim() || 'Team contact',
      nextStep: 'Our admin team will review your company details, verification documents, and contact email before account activation.',
    })
    setNotice('')
    setView('registration-pending')
  }

  const handleInstitutionRegistration = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const institutionName = formData.get('organizationName')?.toString().trim() || 'Your institution'
    const institutionType = formData.get('institutionType')?.toString() || 'University'

    setPendingRegistration({
      type: institutionType.toLowerCase(),
      name: institutionName,
      contactName: formData.get('contactName')?.toString().trim() || 'Institution contact',
      nextStep: 'Our onboarding team will review your institution details and approve the academic portal after verification.',
    })
    setNotice('')
    setView('registration-pending')
  }

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-panel shadow-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-primary font-headline">
          SkillMatch
        </Link>
        <div className="hidden lg:flex gap-8 font-label text-sm font-semibold tracking-tight text-slate-600">
          {navLinks.map((item) => (
            <Link key={item.href} to={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          to="/support"
          className="bg-surface-container-high text-on-surface px-4 sm:px-5 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 hover:bg-surface-container-highest"
        >
          Support
        </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 px-4 pb-10 sm:pb-12">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-sm bg-surface-container-lowest border border-outline-variant/10">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col justify-center bg-surface-container-low">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-3 block">
                National Internship Platform
              </span>
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tighter leading-tight mb-5 sm:mb-6">
                Secure Access <br />to Your Future.
              </h1>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-md">
                Connecting Ethiopia's brightest students with the country's most innovative organizations.
              </p>
            </div>
            <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden mt-2 sm:mt-4 group">
              <img
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
                alt="Modern university library with clean architectural lines"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXbkUel2Q5xqvK88Lleft1-mTFgpQX4uHYmZLRxl7N6QBng4MCm0ZYTJdgxCYWWggscjtyRryopfWqNmVV7K_Fab3VALwvvqkpepdxplOcDlUTkKYLjpJjrE1UGllsG_iBqS2TxYxOvrfg2cn5BSph9raYggfXH0eAz6qGzx5xeDSrhFgVvEHwINW6ge2o49QW8YrF1B8yCh8n7-5PqaeQOKXwGW1ViOH-t4Q9Tz9Ag9DSOBqidwBwkVlqgn6k_VpCfBARYlBwCqk"
              />
              <div className="absolute inset-0 editorial-gradient opacity-20" />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col bg-surface-container-lowest">
            {notice && (
              <div className="mb-6 rounded-lg bg-primary-fixed/60 px-4 py-3 text-sm font-medium text-primary">
                {notice}
              </div>
            )}

            {/* View 1: Role Selection */}
            {view === 'role-selection' && (
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 sm:mb-8">Choose your portal</h2>

                <button
                  onClick={() => setView('student-login')}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 md:p-6 bg-surface-container-low hover:bg-secondary-container transition-all group rounded-xl ghost-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-primary">Login as Student</span>
                      <span className="text-xs text-on-surface-variant">Personalized dashboard &amp; CV builder</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                    chevron_right
                  </span>
                </button>

                <button
                  onClick={() => handlePortalEntry('company', '/company/dashboard')}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 md:p-6 bg-surface-container-low hover:bg-secondary-container transition-all group rounded-xl ghost-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">business</span>
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-primary">Login as Company</span>
                      <span className="text-xs text-on-surface-variant">Manage vacancies &amp; review talent</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                    chevron_right
                  </span>
                </button>

                <button
                  onClick={() => handlePortalEntry('university', '/university/dashboard')}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 md:p-6 bg-surface-container-low hover:bg-secondary-container transition-all group rounded-xl ghost-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">account_balance</span>
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-primary">Login as University</span>
                      <span className="text-xs text-on-surface-variant">Monitor placements &amp; academic links</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                    chevron_right
                  </span>
                </button>

                <button
                  onClick={() => handlePortalEntry('admin', '/admin/dashboard', { name: 'Super Admin' })}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 md:p-6 bg-surface-container-low hover:bg-secondary-container transition-all group rounded-xl ghost-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">admin_panel_settings</span>
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-primary">Login as Admin</span>
                      <span className="text-xs text-on-surface-variant">Review platform health and operations</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                    chevron_right
                  </span>
                </button>

                <div className="pt-8 text-center">
                  <p className="text-on-surface-variant text-sm">Don't have an account?</p>
                  <button
                    onClick={() => setView('registration-selection')}
                    className="mt-2 text-primary font-bold hover:underline decoration-2 underline-offset-4"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            )}

            {/* View 2: Student Login */}
            {view === 'student-login' && (
              <div className="space-y-8">
                <button
                  onClick={() => setView('role-selection')}
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors mb-4"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span> Back to roles
                </button>
                <div>
                  <h2 className="font-headline text-2xl font-bold text-on-surface">Student Login</h2>
                  <p className="text-on-surface-variant text-sm mt-1">Enter your email to receive a secure OTP.</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-4 focus:ring-4 focus:ring-primary-fixed focus:border-primary transition-all text-on-surface"
                      placeholder="student@university.edu.et"
                      type="email"
                    />
                  </div>
                  <button
                    onClick={handleSendOtp}
                    className="w-full editorial-gradient text-white font-bold py-4 rounded-lg shadow-sm hover:shadow-md active:scale-95 transition-all"
                  >
                    Send OTP
                  </button>
                </div>

                {/* OTP Input Section */}
                <div className="pt-6 border-t border-outline-variant/10">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 block text-center">
                    Enter 4-Digit Code
                  </label>
                  <div className="flex justify-center gap-2 sm:gap-4">
                    <input
                      className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold bg-surface-container-highest border-0 ghost-border rounded-lg focus:ring-4 focus:ring-primary-fixed transition-all"
                      maxLength="1"
                      type="text"
                    />
                    <input
                      className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold bg-surface-container-highest border-0 ghost-border rounded-lg focus:ring-4 focus:ring-primary-fixed transition-all"
                      maxLength="1"
                      type="text"
                    />
                    <input
                      className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold bg-surface-container-highest border-0 ghost-border rounded-lg focus:ring-4 focus:ring-primary-fixed transition-all"
                      maxLength="1"
                      type="text"
                    />
                    <input
                      className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold bg-surface-container-highest border-0 ghost-border rounded-lg focus:ring-4 focus:ring-primary-fixed transition-all"
                      maxLength="1"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-6 px-2">
                    <span className="text-xs text-on-surface-variant font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span> Expiring in 05:00
                    </span>
                    <button onClick={handleResendOtp} className="text-xs text-primary font-bold hover:underline">Resend OTP</button>
                  </div>
                </div>
              </div>
            )}

            {/* View 3: Student Registration */}
            {view === 'student-registration' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-on-surface">Join SkillMatch</h2>
                  <p className="text-on-surface-variant text-sm mt-1">Create your academic professional profile.</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                      placeholder="Abebe Bikila"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                      Fayda Number (16 Digits)
                    </label>
                    <input
                      className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                      placeholder="0000 0000 0000 0000"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                      Unique Email
                    </label>
                    <input
                      className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                      placeholder="abebe@university.edu.et"
                      type="email"
                    />
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <input
                      className="mt-1 rounded border-outline-variant text-primary focus:ring-primary-fixed"
                      type="checkbox"
                    />
                    <label className="text-xs text-on-surface-variant leading-relaxed">
                      By clicking register, I agree to the{' '}
                      <Link to="/terms" className="text-primary font-bold hover:underline">Terms of Service</Link> and{' '}
                      <Link to="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link> of SkillMatch National Platform.
                    </label>
                  </div>
                  <button
                    onClick={handleRegister}
                    className="w-full editorial-gradient text-white font-bold py-4 rounded-lg shadow-sm hover:shadow-md active:scale-95 transition-all mt-4"
                  >
                    Register Now
                  </button>
                </div>
                <button
                  onClick={() => setView('student-login')}
                  className="w-full text-center text-sm text-on-surface-variant mt-4"
                >
                  Already have an account?{' '}
                  <span className="text-primary font-bold underline underline-offset-4">Login</span>
                </button>
              </div>
            )}

            {view === 'registration-selection' && (
              <div className="space-y-6">
                <button
                  onClick={() => setView('role-selection')}
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors mb-4"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span> Back to roles
                </button>
                <div>
                  <h2 className="font-headline text-2xl font-bold text-on-surface">Create an account</h2>
                  <p className="text-on-surface-variant text-sm mt-1">Choose the type of account you want to register on SkillMatch.</p>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => setView('student-registration')}
                    className="w-full flex items-center justify-between p-5 bg-surface-container-low hover:bg-secondary-container transition-all group rounded-xl ghost-border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">school</span>
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-primary">Register as Student</span>
                        <span className="text-xs text-on-surface-variant">Build your profile and start matching with internships</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                      chevron_right
                    </span>
                  </button>

                  <button
                    onClick={() => setView('company-registration')}
                    className="w-full flex items-center justify-between p-5 bg-surface-container-low hover:bg-secondary-container transition-all group rounded-xl ghost-border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">business</span>
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-primary">Register as Company</span>
                        <span className="text-xs text-on-surface-variant">Create a verified employer account to post opportunities and review talent</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                      chevron_right
                    </span>
                  </button>

                  <button
                    onClick={() => setView('institution-registration')}
                    className="w-full flex items-center justify-between p-5 bg-surface-container-low hover:bg-secondary-container transition-all group rounded-xl ghost-border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">account_balance</span>
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-primary">Register as University or College</span>
                        <span className="text-xs text-on-surface-variant">Set up an academic portal for placements, advisors, and reporting</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            )}

            {view === 'company-registration' && (
              <div className="space-y-6">
                <button
                  onClick={() => setView('registration-selection')}
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors mb-4"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span> Back to registration options
                </button>
                <div>
                  <h2 className="font-headline text-2xl font-bold text-on-surface">Company Registration</h2>
                  <p className="text-on-surface-variant text-sm mt-1">Submit your organization details to request an employer portal.</p>
                </div>

                <form onSubmit={handleCompanyRegistration} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Company Name</label>
                    <input
                      name="organizationName"
                      required
                      className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                      placeholder="Ethio Tech Solutions PLC"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Primary Contact Name</label>
                    <input
                      name="contactName"
                      required
                      className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                      placeholder="Meseret Kebede"
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Work Email</label>
                      <input
                        name="email"
                        required
                        className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                        placeholder="hr@company.et"
                        type="email"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Phone</label>
                      <input
                        name="phone"
                        required
                        className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                        placeholder="+251 91 000 0000"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Sector</label>
                      <select
                        name="sector"
                        required
                        className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                      >
                        <option value="Technology">Technology</option>
                        <option value="Finance">Finance</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Education">Education</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Location</label>
                      <input
                        name="location"
                        required
                        className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                        placeholder="Addis Ababa"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Website</label>
                    <input
                      name="website"
                      className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                      placeholder="https://company.et"
                      type="url"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full editorial-gradient text-white font-bold py-4 rounded-lg shadow-sm hover:shadow-md active:scale-95 transition-all mt-2"
                  >
                    Submit Company Registration
                  </button>
                </form>
              </div>
            )}

            {view === 'institution-registration' && (
              <div className="space-y-6">
                <button
                  onClick={() => setView('registration-selection')}
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors mb-4"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span> Back to registration options
                </button>
                <div>
                  <h2 className="font-headline text-2xl font-bold text-on-surface">University / College Registration</h2>
                  <p className="text-on-surface-variant text-sm mt-1">Request an academic portal for internship coordination and reporting.</p>
                </div>

                <form onSubmit={handleInstitutionRegistration} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Institution Type</label>
                      <select
                        name="institutionType"
                        required
                        className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                      >
                        <option value="University">University</option>
                        <option value="College">College</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Institution Name</label>
                      <input
                        name="organizationName"
                        required
                        className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                        placeholder="Hawassa University"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Registrar / Admin Contact</label>
                    <input
                      name="contactName"
                      required
                      className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                      placeholder="Dr. Hana Alemu"
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Official Email</label>
                      <input
                        name="email"
                        required
                        className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                        placeholder="registrar@university.edu.et"
                        type="email"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Phone</label>
                      <input
                        name="phone"
                        required
                        className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                        placeholder="+251 11 000 0000"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Region / City</label>
                      <input
                        name="location"
                        required
                        className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                        placeholder="Sidama / Hawassa"
                        type="text"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Website</label>
                      <input
                        name="website"
                        className="w-full bg-surface-container-highest border-0 ghost-border rounded-lg p-3 focus:ring-4 focus:ring-primary-fixed transition-all"
                        placeholder="https://university.edu.et"
                        type="url"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full editorial-gradient text-white font-bold py-4 rounded-lg shadow-sm hover:shadow-md active:scale-95 transition-all mt-2"
                  >
                    Submit Institution Registration
                  </button>
                </form>
              </div>
            )}

            {view === 'registration-pending' && pendingRegistration && (
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">task_alt</span>
                </div>
                <div>
                  <h2 className="font-headline text-2xl font-bold text-on-surface">Registration Submitted</h2>
                  <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                    {pendingRegistration.name} has been added to the onboarding queue for review.
                  </p>
                </div>
                <div className="rounded-xl bg-surface-container-low p-5 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    {pendingRegistration.type === 'company' ? 'Company onboarding' : 'Academic onboarding'}
                  </p>
                  <p className="text-sm text-on-surface"><span className="font-bold">Organization:</span> {pendingRegistration.name}</p>
                  <p className="text-sm text-on-surface"><span className="font-bold">Primary contact:</span> {pendingRegistration.contactName}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{pendingRegistration.nextStep}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setView('role-selection')}
                    className="flex-1 editorial-gradient text-white font-bold py-3 rounded-lg shadow-sm hover:shadow-md active:scale-95 transition-all"
                  >
                    Return to Access Hub
                  </button>
                  <Link
                    to="/support"
                    className="flex-1 text-center bg-surface-container-high text-on-surface font-bold py-3 rounded-lg hover:bg-surface-container-highest transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 sm:py-12 px-4 sm:px-6 lg:px-12 border-t border-slate-200 bg-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="font-bold text-primary text-lg">SkillMatch</div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/privacy" className="text-xs uppercase tracking-widest text-slate-500 font-bold hover:text-primary cursor-pointer transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-xs uppercase tracking-widest text-slate-500 font-bold hover:text-primary cursor-pointer transition-colors">
            Terms of Service
          </Link>
          <Link
            to="/support"
            className="text-xs uppercase tracking-widest text-slate-500 font-bold hover:text-primary cursor-pointer transition-colors"
          >
            Contact Support
          </Link>
          <Link
            to="/support#faq"
            className="text-xs uppercase tracking-widest text-slate-500 font-bold hover:text-primary cursor-pointer transition-colors"
          >
            FAQ
          </Link>
        </div>
        <div className="text-xs uppercase tracking-widest text-slate-400">
          © 2024 SkillMatch National Internship Platform
        </div>
      </footer>
    </div>
  )
}
