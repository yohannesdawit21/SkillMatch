import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ActionNotice from '../../components/shared/ActionNotice'
import FAB from '../../components/shared/FAB'
import useActionNotice from '../../hooks/useActionNotice'

const internships = [
  {
    title: 'Deep Learning Research Intern',
    company: 'NeuralFlow Dynamics',
    match: 98,
    tag: 'AI & ML',
    location: 'Remote / NYC',
    pay: '$45/hr',
    time: '2 days ago',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn4qu1SvmnB77G6P_CjGTXrsAy7Vj5vw4YhxNcGxRbzI__ElRObsmnrAuChZluvxslHsAcoazGkHzYDJg8TE9ZYVQlft-a6gsBzeoCQAA_HynT3pRiIxJqEunQhE5OtENjI_4wmqbS8rd5S3uDkWPS_qoclXh5qMFthGvaUwadq9ncOgtNUG3u9wbweUpLggi9vd1-JD8McV2ugXkK10NSJ8AlIyoqZSFGlwbBPgs7PgVwlmcGKvuHxGikotPbWCdyXNgv1-nRWBQ',
  },
  {
    title: 'Audit & Assurance Trainee',
    company: 'Sterling Global Finance',
    match: 82,
    tag: 'Accounting',
    location: 'London, UK',
    pay: 'Stipend',
    time: '5 days ago',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcNqQqhq-t426-akNgApcGckQAjYZq48sRo5GAKMf-2qD_Rem1UjIHVKl08-bGpjkJF28NFCuxUM6Lni2rB2YxeTyt-tXmLqHFxv95XSVYtgIJYZFUuFGbOWVCpMj0zMKrL3KDimmoQtc3iclIO7xvdDmxrzSRyM-S9DWByBmfg2XkcRBYCTTe0OhdC_ijVr67twVOhka7Ebi_7Pql8hWV9M7TL4XdLzy5qtntTdGnufV6pBcI15uR47w7iua4Jp3LB2BChFH3MLk',
  },
  {
    title: 'Health Informatics Associate',
    company: 'Beacon Medical Group',
    match: 91,
    tag: 'Medical',
    location: 'Hybrid',
    pay: '$32/hr',
    time: '1 day ago',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3oLCx3GUX_l-m5ie8il1fLyIaj0Djs0ocoNO8RKsyPr8NCjBow0eGHd7X2f5nwhKetu4Dup__RVf_sDPdgP4NxdQE0Oo7w7erECSI9DOgQDv96t21Et03y0dBZJC7kr6xUBn2znu7krnIrZoWcXwXDMxiocPTqm7Dt1lQ2ckiMC8b5OZ1p2uhNr-0-RYEsMdRA3Cv7HPkN8OkYOJVU6txFwWCQpLFdPSRrEaaSp6z5L2PefWYsn2r_2mVuGVdrFUbGp0AcnQ-v5A',
  },
  {
    title: 'Junior Security Analyst',
    company: 'Fortress Defense Systems',
    match: 74,
    tag: 'Cybersecurity',
    location: 'On-Site',
    pay: '$38/hr',
    time: '3 hours ago',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI-hQOOgvHTVGCn9-9dkh1mRGst7q5xp9PxKyhOiS8YODBUeMomUPE3a4luLdXxcPFBeYStBVsRWfhAFI8b5mYlDzvtlq32oP_GaAUwbyDMVziPeSC5vmPlMq7vUqtevdYZOZdg5tPbERQ-itaALP7KnOJf9KEqQbdavqWOJHsOPtCYYqngti95CBspYKemzeluv4A4-AzjTYjGUwkljOA9U-mvXCek5Fbqhbgps_wVqL9xfx-lXrxn0o7QRJl-2iaqy2EgwMsO4A',
  },
]

function matchColor(pct) {
  if (pct >= 90) return 'text-tertiary'
  if (pct >= 80) return 'text-primary'
  return 'text-on-surface-variant'
}

function matchRingColor(pct) {
  if (pct >= 90) return 'border-tertiary'
  if (pct >= 80) return 'border-primary'
  return 'border-outline-variant'
}

export default function SearchInternships() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState(location.state?.searchTerm ?? '')
  const [locationTerm, setLocationTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState(['Technology'])
  const [showAll, setShowAll] = useState(false)
  const [appliedTitles, setAppliedTitles] = useState([])
  const { notice, showNotice } = useActionNotice()
  const categoryMap = {
    Technology: ['AI & ML'],
    'Medical Fields': ['Medical'],
    'Accounting & Finance': ['Accounting'],
    Cybersecurity: ['Cybersecurity'],
  }
  const filteredInternships = useMemo(() => {
    const titleQuery = searchTerm.trim().toLowerCase()
    const locationQuery = locationTerm.trim().toLowerCase()

    const visible = internships.filter((internship) => {
      const matchesTitle =
        !titleQuery ||
        internship.title.toLowerCase().includes(titleQuery) ||
        internship.company.toLowerCase().includes(titleQuery) ||
        internship.tag.toLowerCase().includes(titleQuery)

      const matchesLocation =
        !locationQuery ||
        internship.location.toLowerCase().includes(locationQuery)

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some((category) => categoryMap[category]?.includes(internship.tag))

      return matchesTitle && matchesLocation && matchesCategory
    })

    return showAll ? visible : visible.slice(0, 3)
  }, [locationTerm, searchTerm, selectedCategories, showAll])

  const toggleCategory = (category) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    )
  }

  const handleApply = (title) => {
    setAppliedTitles((current) => (current.includes(title) ? current : [...current, title]))
    showNotice(`${title} added to your request tracker.`)
  }

  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-[1440px] mx-auto">
      <ActionNotice message={notice} />

      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-on-surface tracking-tight mb-3">Search Internships</h2>
        <p className="text-on-surface-variant text-base sm:text-lg max-w-2xl leading-relaxed">
          Discover curated internship positions matched to your profile, skills, and career trajectory.
        </p>
      </div>

      {/* Search Module */}
      <div className="mb-16">
        <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-3 flex flex-col lg:flex-row lg:items-center gap-3">
          <div className="w-full flex-1 flex items-center gap-3 px-4">
            <span className="material-symbols-outlined text-on-surface-variant">search</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by role..."
              className="w-full bg-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none py-3"
            />
          </div>
          <div className="hidden lg:block w-px h-10 bg-outline-variant" />
          <div className="w-full flex-1 flex items-center gap-3 px-4">
            <span className="material-symbols-outlined text-on-surface-variant">location_on</span>
            <input
              type="text"
              value={locationTerm}
              onChange={(event) => setLocationTerm(event.target.value)}
              placeholder="Location..."
              className="w-full bg-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none py-3"
            />
          </div>
          <button
            onClick={() => showNotice(`Showing ${filteredInternships.length} internship matches.`)}
            className="w-full lg:w-auto bg-primary text-on-primary font-bold px-8 py-3 rounded-xl hover:shadow-md transition-shadow whitespace-nowrap"
          >
            Find Opportunities
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-8">

        {/* Filter Sidebar */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-primary">filter_list</span>
              <h3 className="font-bold text-on-surface">Industry Categories</h3>
            </div>
            <div className="space-y-3">
              {['Technology', 'Medical Fields', 'Accounting & Finance', 'Cybersecurity'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary accent-primary"
                  />
                  <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Match Meter */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-on-surface mb-1">Match Meter Optimization</h3>
            <p className="text-xs text-on-surface-variant mb-4">Your profile completeness affects match accuracy</p>
            <div className="w-full bg-surface-container-highest rounded-full h-2.5 mb-2">
              <div className="bg-gradient-to-r from-primary to-tertiary h-2.5 rounded-full" style={{ width: '65%' }} />
            </div>
            <p className="text-right text-sm font-bold text-primary">65%</p>
          </div>
        </div>

        {/* Results */}
        <div className="col-span-12 lg:col-span-9">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <h3 className="text-on-surface font-bold text-lg">Showing {filteredInternships.length} Available Positions</h3>
            <select className="w-full sm:w-auto bg-surface-container-low border border-outline-variant rounded-xl px-4 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Sort by: Best Match</option>
              <option>Sort by: Most Recent</option>
              <option>Sort by: Highest Pay</option>
            </select>
          </div>

          {/* Internship Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredInternships.map((item, i) => (
              <div key={i} className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative group">
                {/* Match Circle */}
                <div className={`absolute top-5 right-5 w-12 h-12 rounded-full border-[3px] ${matchRingColor(item.match)} flex items-center justify-center`}>
                  <span className={`text-xs font-extrabold ${matchColor(item.match)}`}>{item.match}%</span>
                </div>

                {/* Company Logo */}
                <img src={item.img} alt={item.company} className="w-12 h-12 rounded-xl object-cover mb-4" />

                {/* Title & Company */}
                <h4 className="font-bold text-on-surface text-lg mb-1 pr-14">{item.title}</h4>
                <p className="text-sm text-on-surface-variant mb-3">{item.company}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary-fixed text-primary text-xs font-medium px-3 py-1 rounded-full">{item.tag}</span>
                  <span className="bg-surface-container-high text-on-surface-variant text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {item.location}
                  </span>
                  <span className="bg-surface-container-high text-on-surface-variant text-xs font-medium px-3 py-1 rounded-full">{item.pay}</span>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-outline-variant/30">
                  <span className="text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    {item.time}
                  </span>
                  <button
                    onClick={() => handleApply(item.title)}
                    className="text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    {appliedTitles.includes(item.title) ? 'Applied' : 'Apply →'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-xl border border-outline-variant text-on-surface font-medium hover:bg-surface-container-low transition-colors"
            >
              Explore More Opportunities
            </button>
          </div>
        </div>
      </div>

      <FAB icon="chat_bubble" label="Contact Support" color="bg-tertiary" onClick={() => navigate('/support')} />
    </div>
  )
}
