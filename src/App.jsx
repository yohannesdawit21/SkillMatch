import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import LandingPage from './pages/public/LandingPage'
import AuthHub from './pages/public/AuthHub'
import OpportunitiesPage from './pages/public/OpportunitiesPage'
import SupportPage from './pages/public/SupportPage'
import LegalPage from './pages/public/LegalPage'
import NotFoundPage from './pages/public/NotFoundPage'
import StudentDashboard from './pages/student/StudentDashboard'
import CVBuilder from './pages/student/CVBuilder'
import SearchInternships from './pages/student/SearchInternships'
import SuggestedInternships from './pages/student/SuggestedInternships'
import MyRequests from './pages/student/MyRequests'
import WeeklyReports from './pages/student/WeeklyReports'
import FinalEvaluation from './pages/student/FinalEvaluation'
import StudentProfilePage from './pages/student/StudentProfilePage'
import StudentSettingsPage from './pages/student/StudentSettingsPage'
import CompanyDashboard from './pages/company/CompanyDashboard'
import CompanyPostInternshipsPage from './pages/company/CompanyPostInternshipsPage'
import CompanySupervisorsPage from './pages/company/CompanySupervisorsPage'
import CompanyApplicationsPage from './pages/company/CompanyApplicationsPage'
import CompanyNotificationsPage from './pages/company/CompanyNotificationsPage'
import CompanyNewPostingPage from './pages/company/CompanyNewPostingPage'
import CompanySettingsPage from './pages/company/CompanySettingsPage'
import LogoutPage from './pages/public/LogoutPage'
import UniversityDashboard from './pages/university/UniversityDashboard'
import AssignAdvisorsPage from './pages/university/AssignAdvisorsPage'
import InternshipMonitoringPage from './pages/university/InternshipMonitoringPage'
import UniversityStatisticsPage from './pages/university/UniversityStatisticsPage'
import UniversityNotificationsPage from './pages/university/UniversityNotificationsPage'
import UniversitySettingsPage from './pages/university/UniversitySettingsPage'
import UniversityHelpCenterPage from './pages/university/UniversityHelpCenterPage'
import SuperAdminDashboard from './pages/admin/SuperAdminDashboard'
import AdminManageUniversitiesPage from './pages/admin/AdminManageUniversitiesPage'
import AdminManageCompaniesPage from './pages/admin/AdminManageCompaniesPage'
import AdminUserManagementPage from './pages/admin/AdminUserManagementPage'
import AdminSystemAnalyticsPage from './pages/admin/AdminSystemAnalyticsPage'
import AdminSettingsPage from './pages/admin/AdminSettingsPage'
import AdminSupportPage from './pages/admin/AdminSupportPage'
import DashboardLayout from './components/layout/DashboardLayout'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthHub />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/logout" element={<LogoutPage />} />

          <Route element={<DashboardLayout role="student" />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/profile" element={<StudentProfilePage />} />
            <Route path="/student/settings" element={<StudentSettingsPage />} />
            <Route path="/student/cv-builder" element={<CVBuilder />} />
            <Route path="/student/search" element={<SearchInternships />} />
            <Route path="/student/suggested" element={<SuggestedInternships />} />
            <Route path="/student/requests" element={<MyRequests />} />
            <Route path="/student/reports" element={<WeeklyReports />} />
            <Route path="/student/evaluation" element={<FinalEvaluation />} />
          </Route>

          <Route element={<DashboardLayout role="company" />}>
            <Route path="/company/dashboard" element={<CompanyDashboard />} />
            <Route path="/company/post" element={<CompanyPostInternshipsPage />} />
            <Route path="/company/supervisors" element={<CompanySupervisorsPage />} />
            <Route path="/company/applications" element={<CompanyApplicationsPage />} />
            <Route path="/company/notifications" element={<CompanyNotificationsPage />} />
            <Route path="/company/post/new" element={<CompanyNewPostingPage />} />
            <Route path="/company/settings" element={<CompanySettingsPage />} />
          </Route>

          <Route element={<DashboardLayout role="university" />}>
            <Route path="/university/dashboard" element={<UniversityDashboard />} />
            <Route path="/university/advisors" element={<AssignAdvisorsPage />} />
            <Route path="/university/monitoring" element={<InternshipMonitoringPage />} />
            <Route path="/university/statistics" element={<UniversityStatisticsPage />} />
            <Route path="/university/notifications" element={<UniversityNotificationsPage />} />
            <Route path="/university/settings" element={<UniversitySettingsPage />} />
            <Route path="/university/help" element={<UniversityHelpCenterPage />} />
          </Route>

          <Route element={<DashboardLayout role="admin" />}>
            <Route path="/admin/dashboard" element={<SuperAdminDashboard />} />
            <Route path="/admin/universities" element={<AdminManageUniversitiesPage />} />
            <Route path="/admin/companies" element={<AdminManageCompaniesPage />} />
            <Route path="/admin/users" element={<AdminUserManagementPage />} />
            <Route path="/admin/analytics" element={<AdminSystemAnalyticsPage />} />
            <Route path="/admin/settings" element={<AdminSettingsPage />} />
            <Route path="/admin/support" element={<AdminSupportPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
