# SkillMatch React Web App -- Build Plan

## Application Overview

**SkillMatch** is a national internship coordination platform for Ethiopia, connecting students with companies and universities through a skill-matching engine. Built with React 19 + Vite 8 + React Router 7 + Tailwind CSS.

## User Roles and Routes

| Role | Route Prefix | Pages |
|------|-------------|-------|
| Public | `/`, `/auth` | Landing Page, Auth Hub (Login/Register with OTP) |
| Student | `/student/*` | Dashboard, CV Builder, Search Internships, Suggested Internships, My Requests, Weekly Reports, Final Evaluation |
| Company Admin | `/company/*` | Company Dashboard |
| University Admin | `/university/*` | University Dashboard |
| Super Admin | `/admin/*` | Super Admin Dashboard |

## Design System

- **Colors**: Material 3 palette -- Primary `#00346F`, Tertiary teal `#003D33`, 40+ design tokens
- **Typography**: Manrope (headlines) + Inter (body/labels)
- **Icons**: Google Material Symbols Outlined
- **Rules**: No 1px borders; tonal layering over drop shadows; glassmorphism for floating elements; editorial gradient (`primary` to `primary-container`)

## Project Structure

```
src/
  main.jsx                              # React entry point
  App.jsx                               # Router with all routes
  index.css                             # Global styles (editorial-gradient, glass-header, etc.)
  context/
    AuthContext.jsx                      # Mock auth with role-based login
  components/
    layout/
      PublicNav.jsx                      # Glassmorphism nav for public pages
      Sidebar.jsx                        # Role-aware sidebar (student/company/university/admin)
      TopNav.jsx                         # Glass-effect top bar for dashboards
      Footer.jsx                         # Public page footer
      DashboardLayout.jsx                # Sidebar + TopNav + Outlet wrapper
    shared/
      MatchMeter.jsx                     # SVG circular progress ring
      StatusBadge.jsx                    # Status indicator chip (approved/pending/rejected/etc.)
      InternshipCard.jsx                 # Internship listing card
      StatCard.jsx                       # Dashboard stat card
      SkillTag.jsx                       # Skill/technology chip with optional remove
      FAB.jsx                            # Floating Action Button
  pages/
    public/
      LandingPage.jsx                    # Hero, about, workflow, universities, companies
      AuthHub.jsx                        # Role selection, OTP login, registration
    student/
      StudentDashboard.jsx               # Stats, recent apps, skill matches
      CVBuilder.jsx                      # Multi-step form with tag input
      SearchInternships.jsx              # Search/filter with results grid
      SuggestedInternships.jsx           # AI-matched internship recommendations
      MyRequests.jsx                     # Application tracking with status cards
      WeeklyReports.jsx                  # Report history + detail view
      FinalEvaluation.jsx                # Certification and grading
    company/
      CompanyDashboard.jsx               # Intern management, postings, matches
    university/
      UniversityDashboard.jsx            # Departmental overview, advisors
    admin/
      SuperAdminDashboard.jsx            # National analytics and oversight
```

## Route Map

```
/                        -> LandingPage (public)
/auth                    -> AuthHub (public)
/student/dashboard       -> StudentDashboard (DashboardLayout role=student)
/student/cv-builder      -> CVBuilder
/student/search          -> SearchInternships
/student/suggested       -> SuggestedInternships
/student/requests        -> MyRequests
/student/reports         -> WeeklyReports
/student/evaluation      -> FinalEvaluation
/company/dashboard       -> CompanyDashboard (DashboardLayout role=company)
/university/dashboard    -> UniversityDashboard (DashboardLayout role=university)
/admin/dashboard         -> SuperAdminDashboard (DashboardLayout role=admin)
```

## Technical Notes

- **No backend**: All data is hardcoded/mocked as in the original HTML mockups
- **Images**: Google-hosted image URLs from the mockups
- **Tailwind**: Loaded via CDN with full Material 3 color tokens configured in `index.html`
- **Dependencies**: react 19.2.4, react-dom 19.2.4, react-router-dom 7.13.2, vite 8.0.3, @vitejs/plugin-react 6.0.1

## How to Run

```bash
npm run dev     # Start development server
npm run build   # Production build
npm run preview # Preview production build
```
