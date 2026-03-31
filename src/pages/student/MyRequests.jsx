import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ActionNotice from '../../components/shared/ActionNotice'
import FAB from '../../components/shared/FAB'
import useActionNotice from '../../hooks/useActionNotice'

export default function MyRequests() {
  const navigate = useNavigate()
  const requests = [
    {
      company: "Nebula Systems",
      role: "Full-Stack Engineer Intern",
      status: "approved",
      statusLabel: "Approved",
      statusBg: "bg-tertiary-fixed text-tertiary",
      statusIcon: "verified",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCftIWddqKFlvNLW9_6t-8IQwMvLsV-6yzL6a0r7FnMdhp9uNJzJrs-3C25WVjim5lTap7xFUzdka_ihSH5nb3kFMAgWSFbtItZWjBH4X87_rbJZkvvPF1a7De6LVUiAhypfAQKPRTvhC3grZEOlT6FvJGm7dQW-VvTeedZBRK0n2YlTE4Fltjn0gLwY7RrVFg-mygiW0r5WY2BkilGh0MzAeUPNtI5s63hPdi1qzZNsxAm5WgFstgk1CXwlkwG9NCRi43xpBlaAdI",
      extra: null,
    },
    {
      company: "FinPulse",
      role: "Data Analyst Apprentice",
      status: "waiting",
      statusLabel: "Waiting for advisor approval",
      statusBg: "bg-secondary-fixed text-on-secondary-container",
      statusIcon: null,
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVNJ_TslRZcrhtEMMzZf0433Zem0-ulm5aiYnq9fuIWChQ8MP034xoWreq2aJ3xK1HPM7rhMl0cUI_rtoWruJDwyJhdK-LhSRFI1det3sqvUDzQTIgnnAsrKhWg5zGfZSKIAtAcTs2o_rVdI0NYLFZMtKwyi2nStDLYWIuNccQSXxKi2ZS6gkP39ugqy9_qNc2w1libf0kW1gcfeH7kZAL8pzM2q3Tcrp-c_eZmEyf4tT2Z1vFR17fTmh2I6INdBU-HDna8vfAqHw",
      extra: null,
    },
    {
      company: "Arcane Creative",
      role: "UI/UX Design Intern",
      status: "approved_company",
      statusLabel: "Approved by company",
      statusBg: "bg-primary-fixed text-primary",
      statusIcon: "verified",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCuBZcFYGZLjVtGYKZot1Jf6BCwrueHWupbViu-hLuT1qrC3rBZ0B_JPpz-52L90fnBC4qkvD646vxxLbn8h6Cqg4b4wHiNnrfOar3_9rolLmNKYiUPRez8aMUeduTLzHAOMK5twgYfRpMIGS0M3wnNZY9tGWvtG3Tih4l6sWLVvZzbOVIrIFVrKyy86k_ChoHVrJPuSfUq3o7Pq1ueDZeqbTsVYvu_rpjIUme-3pL3X8l5QpmdWhsAXTB0mD1UPNoBf1DVKjMJqo",
      extra: null,
    },
    {
      company: "Titan Robotics",
      role: "Robotics Hardware Intern",
      status: "rejected",
      statusLabel: "Rejected",
      statusBg: "bg-error-container text-on-error-container",
      statusIcon: null,
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCW2ZEPJ1YTpzxy_39HLSBI_WYzDHWWixixYtixM0cQSYBK_dwt9MopGK8jA8yurTcDHMtr5yh9iTnfDXIZtF1Ygn63P0cx4TzEpO1nCDhejySX6wIFhEulNcqIedjacGCGwWN-eC4FjOmxnoPknq90mISvQ2BMtzn7lDoEYTWtY3nvvhhZAGQpWUA5eiQXhQ9HQ9UWEYtvM8T7N-yPX39OF7LyLxTKqnmi7yxqq9x-51dsBxsycL1uPZ43BFNkUlCfgLMoMSilzg",
      extra: "rejected",
    },
    {
      company: "Glimmer Media",
      role: "Content Strategy Assistant",
      status: "pending",
      statusLabel: "Pending",
      statusBg: "bg-surface-container-highest text-on-surface-variant",
      statusIcon: null,
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC66r2PkFAI3l184v6PrXnD0JRyyLxvRgTbosPZ_R8VyLUo0yICh_F4oD396Ve7Y_WljhkcJAziBlKkmEBOA0o-Mxb3lYvjB4Iqh3nDPx4cW-eXcqGTuVBc7WJJP4jeGwGqMqePPC4fp9kuyEBiXlsmxj95li__2QgtALdzOn9V3wNyX2bGXm1ECTReRq-deTYYVqHH3PpC9pUM7bnkLeq4d-k0eRHOtQnoXxAjzM-GCoSp3_5DobxsufVtuWimv0jhPGvnxqMlNG0",
      extra: "progress",
    },
  ]

  const suggestions = [
    {
      title: "CyberSec Analyst",
      match: "98%",
      button: "Quick Apply",
      dark: true,
    },
    {
      title: "Cloud Architect Intern",
      match: "92%",
      button: "View Match",
      dark: false,
    },
    {
      title: "AI Product Associate",
      match: "89%",
      button: "View Match",
      dark: false,
    },
  ]

  const [statusFilter, setStatusFilter] = useState('All Status')
  const [sortMode, setSortMode] = useState('Recent First')
  const { notice, showNotice } = useActionNotice()
  const filteredRequests = useMemo(() => {
    const visible = requests.filter((request) => {
      if (statusFilter === 'All Status') {
        return true
      }

      return request.statusLabel.toLowerCase().includes(statusFilter.toLowerCase())
    })

    if (sortMode === 'Recent First') {
      return visible
    }

    return [...visible].sort((left, right) => left.company.localeCompare(right.company))
  }, [requests, sortMode, statusFilter])

  return (
    <div className="ml-0 min-h-screen p-8 lg:p-12">
      <ActionNotice message={notice} />

      {/* Header */}
      <div className="flex items-start justify-between mb-12">
        <div>
          <h2 className="text-4xl font-extrabold font-headline text-on-surface">
            My Application Requests
          </h2>
          <p className="text-on-surface-variant mt-2 text-lg">
            Track your internship applications and approvals.
          </p>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={() => showNotice('You are already viewing your latest application updates.')}
            className="relative p-2 rounded-full hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant text-2xl">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-error rounded-full" />
          </button>
          <div className="flex items-center gap-3 bg-surface-container-low px-4 py-2 rounded-full">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEM2mPHWGvVKwly7n37DK9WkjLu-U2BRWxjwnJRXkckLlyfnZQS8I7cEiW4aH-ciH_Tj4FobQzoG5UwAg5ji22xF-sHm4NE9owGQDucI9K3QgBeteMpr_DQdOsRkXiXcIsTtE0QvULIEOLvrrmppGTcSTzbxx5UIWlXEvjpursqFPTUDrz3OnksTjTAdzho9Ldx-qLBew8t0Nud0fZWXAoYqmfBM3KPaf0tna4qpeKT2_17rNNCSRlJ97ePpSonjT_2LRZO1rw1wE"
              alt="Alex Rivera"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-semibold text-on-surface">Alex Rivera</span>
          </div>
        </div>
      </div>

      {/* Stats Bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {/* Large progress card */}
        <div className="col-span-2 bg-primary-container p-8 rounded-xl relative overflow-hidden">
          <p className="text-on-primary-container text-sm font-semibold mb-1">Total Progress</p>
          <p className="text-4xl font-black text-on-primary-container mb-2">85% Ready</p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-on-primary-container">trending_up</span>
            <span className="text-sm text-on-primary-container/80">3 active applications</span>
          </div>
          <span className="material-symbols-outlined absolute -bottom-3 -right-3 text-[100px] text-on-primary-container/5 pointer-events-none select-none">
            trending_up
          </span>
        </div>

        {/* Approved stat */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
            <span className="px-2.5 py-0.5 bg-tertiary-fixed text-tertiary text-xs font-bold rounded-full">
              Final Step
            </span>
          </div>
          <p className="text-5xl font-black text-on-surface">01</p>
          <p className="text-sm text-on-surface-variant mt-1">Approved</p>
        </div>

        {/* Pending stat */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="material-symbols-outlined text-on-surface-variant text-3xl">pending</span>
            <span className="px-2.5 py-0.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full">
              Waiting
            </span>
          </div>
          <p className="text-5xl font-black text-on-surface">04</p>
          <p className="text-sm text-on-surface-variant mt-1">Pending Review</p>
        </div>
      </div>

      {/* Active Requests */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-2xl font-bold text-on-surface">Active Requests</h3>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setStatusFilter(statusFilter === 'All Status' ? 'Approved' : 'All Status')}
              className="px-4 py-2 bg-surface-container-high text-on-surface text-sm font-semibold rounded-lg hover:bg-surface-container-highest transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">filter_list</span>
              {statusFilter}
            </button>
            <button
              onClick={() => setSortMode(sortMode === 'Recent First' ? 'Company A-Z' : 'Recent First')}
              className="px-4 py-2 bg-surface-container-high text-on-surface text-sm font-semibold rounded-lg hover:bg-surface-container-highest transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">sort</span>
              {sortMode}
            </button>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 gap-6">
          {filteredRequests.map((req) => (
            <div
              key={req.company}
              className={`bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ${
                req.extra === "rejected" ? "opacity-80" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <img
                  src={req.logo}
                  alt={req.company}
                  className={`w-14 h-14 rounded-xl object-cover flex-shrink-0 ${
                    req.extra === "rejected" ? "grayscale" : ""
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-on-surface truncate pr-4">{req.company}</h4>
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 ${req.statusBg}`}>
                      {req.statusIcon && (
                        <span className="material-symbols-outlined text-sm">{req.statusIcon}</span>
                      )}
                      {req.statusLabel}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant">{req.role}</p>
                </div>
              </div>

              {req.extra === "progress" && (
                <div className="mt-4 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-primary rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Section */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
          <h3 className="font-headline text-2xl font-bold text-on-surface">
            Opportunities for You
          </h3>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 -mx-2 px-2">
          {suggestions.map((sug) => (
            <div
              key={sug.title}
              className={`flex-shrink-0 w-72 p-6 rounded-xl ${
                sug.dark
                  ? "bg-tertiary-container text-on-tertiary-container"
                  : "bg-surface-container-lowest text-on-surface"
              }`}
            >
              <p className={`text-xs font-bold mb-3 ${sug.dark ? "text-on-tertiary-container/70" : "text-on-surface-variant"}`}>
                AI Suggestion
              </p>
              <h4 className="font-headline font-bold text-lg mb-2">{sug.title}</h4>
              <p className={`text-3xl font-black mb-4 ${sug.dark ? "" : "text-tertiary"}`}>
                {sug.match} Match
              </p>
              <button
                onClick={() => navigate('/student/suggested')}
                className={`w-full py-2.5 rounded-lg text-sm font-bold transition-opacity hover:opacity-90 ${
                  sug.dark
                    ? "bg-tertiary text-on-tertiary"
                    : "bg-primary text-on-primary"
                }`}
              >
                {sug.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAB */}
      <FAB icon="add" label="New Application" onClick={() => navigate('/student/search')} />
    </div>
  )
}
