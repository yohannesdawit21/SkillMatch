# SkillMatch Frontend

This is the frontend for the SkillMatch internship platform demo. It is a React + Vite single-page application that includes:

- Public marketing pages
- A shared authentication hub
- Student, company, university, and admin dashboards
- Mock local session handling with route protection
- Static university/company demo content and images

## Tech Stack

- `React`
- `Vite`
- `react-router-dom`
- `Tailwind CSS` utility classes in JSX

## How To Run

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Other useful commands:

```bash
npm run build
npm run preview
```

## Application Structure

Main frontend source lives in `src/`.

Important folders:

- `src/pages/public` - landing page, auth hub, legal pages, support pages
- `src/pages/student` - student dashboard and student workflow pages
- `src/pages/company` - employer dashboard and internship management pages
- `src/pages/university` - university portal pages
- `src/pages/admin` - super admin and system management pages
- `src/components/layout` - shared dashboard shell, nav bars, sidebar, footer
- `src/components/shared` - reusable cards, notices, FAB, showcase sections
- `src/context` - app-wide context such as authentication
- `src/data` - static landing/demo data
- `public/images` - static university and related image assets

## Entry Point And Routing

Main route setup is in `src/App.jsx`.

The app is organized into:

- Public routes:
  - `/`
  - `/auth`
  - `/opportunities`
  - `/support`
  - `/privacy`
  - `/terms`
- Protected student routes under `/student/*`
- Protected company routes under `/company/*`
- Protected university routes under `/university/*`
- Protected admin routes under `/admin/*`

All protected areas use the shared `DashboardLayout`.

## Authentication Model

Authentication is currently frontend-only and mock-based.

File:

- `src/context/AuthContext.jsx`

What it does:

- Stores `user` and `role`
- Persists the active session in `localStorage`
- Exposes `login()` and `logout()`
- Restores session after page refresh

This means:

- No real backend login is required
- Choosing a role in the auth hub can open the matching dashboard
- Protected routes redirect if the current role does not match the dashboard area

## Shared Layout System

Core layout files:

- `src/components/layout/DashboardLayout.jsx`
- `src/components/layout/Sidebar.jsx`
- `src/components/layout/TopNav.jsx`
- `src/components/layout/PublicNav.jsx`
- `src/components/layout/Footer.jsx`

Behavior:

- Public pages use `PublicNav` and `Footer`
- Role dashboards use `Sidebar` + `TopNav`
- The dashboard shell is responsive and uses a drawer/sidebar pattern on smaller screens

## Registration Flow

The main account entry and registration flow is in:

- `src/pages/public/AuthHub.jsx`

Supported flows include:

- Student login
- Student registration
- Company registration request
- University / college registration request

These are currently frontend demo flows and show local success / pending states rather than calling a backend API.

## Data And Demo Content

Demo data is currently stored directly in source files.

Examples:

- `src/data/landingData.js` - landing page opportunities, companies, universities
- individual page files - dashboard stats, tables, and activity lists

Because this is a demo frontend:

- many buttons update local UI state
- some actions show notices instead of performing server operations
- exports and filters are often simulated in-browser

## University Images

University cards on the landing page read their image paths from:

- `src/data/landingData.js`

Images should be placed in:

- `public/images`

When using Vite public assets, reference them like:

```js
/images/example.png
```

Do not prefix them with `public/` in code.

## Responsive Design Notes

The frontend has been updated to support phones and tablets better.

Key responsive improvements include:

- mobile dashboard drawer navigation
- adaptive top navigation
- stacked KPI cards on smaller screens
- mobile-friendly card views for table-heavy pages
- reduced hero and section spacing on small screens

## Important Pages To Know

Public:

- `src/pages/public/LandingPage.jsx`
- `src/pages/public/AuthHub.jsx`
- `src/pages/public/OpportunitiesPage.jsx`
- `src/pages/public/SupportPage.jsx`

Student:

- `src/pages/student/StudentDashboard.jsx`
- `src/pages/student/SearchInternships.jsx`
- `src/pages/student/CVBuilder.jsx`
- `src/pages/student/MyRequests.jsx`
- `src/pages/student/WeeklyReports.jsx`
- `src/pages/student/FinalEvaluation.jsx`

Company:

- `src/pages/company/CompanyDashboard.jsx`
- `src/pages/company/CompanyPostInternshipsPage.jsx`
- `src/pages/company/CompanyApplicationsPage.jsx`
- `src/pages/company/CompanySupervisorsPage.jsx`

University:

- `src/pages/university/UniversityDashboard.jsx`
- `src/pages/university/AssignAdvisorsPage.jsx`
- `src/pages/university/InternshipMonitoringPage.jsx`
- `src/pages/university/UniversityStatisticsPage.jsx`

Admin:

- `src/pages/admin/SuperAdminDashboard.jsx`
- `src/pages/admin/AdminManageUniversitiesPage.jsx`
- `src/pages/admin/AdminManageCompaniesPage.jsx`
- `src/pages/admin/AdminUserManagementPage.jsx`
- `src/pages/admin/AdminSupportPage.jsx`

## Current Project Nature

This frontend should be understood as a polished demo UI, not yet a fully backend-connected production application.

That means:

- authentication is mocked
- registration is simulated
- many datasets are static
- some actions are local-only

It is a good base for:

- UI refinement
- backend API integration
- real authentication
- production data wiring

## Suggested Next Steps

If this frontend will be extended, the next logical steps are:

1. Connect auth and registration to a real backend
2. Move static dashboard/table data into API calls
3. Add form validation and error states for all major flows
4. Add route-level and component-level tests
5. Split large bundles if build size becomes a concern
