import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import Components from './pages/Components';
import Themes from './pages/Themes';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import AssessmentToolPage from './pages/AssessmentToolPage';
import LMSPlatformPage from './pages/LMSPlatformPage';
import TMSPlatformPage from './pages/TMSPlatformPage';
import CRTTrainingPage from './pages/CRTTrainingPage';
import CampusDrivesPage from './pages/CampusDrivesPage';
import AcademicProjectsPage from './pages/AcademicProjectsPage';
import HRCampusConnectPage from './pages/HRCampusConnectPage';
import HackathonsPage from './pages/HackathonsPage';
import FounderTalksPage from './pages/FounderTalksPage';

// Simple route configuration - users can easily add/remove routes here
export const routes = [
  { path: '/', component: Home },
  { path: '/components', component: Components },
  { path: '/themes', component: Themes },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/products/assessment', component: AssessmentToolPage},
  { path: '/products/lms', component: LMSPlatformPage },
  { path: '/products/tms', component: TMSPlatformPage },
  { path: '/services/crt', component: CRTTrainingPage },
  { path: '/services/drives', component: CampusDrivesPage },
  { path: '/services/projects', component: AcademicProjectsPage },
  { path: '/events/hackathons', component: HackathonsPage },
  { path: '/events/hr-campus-connect', component: HRCampusConnectPage },
  { path: '/events/founder-talks', component: FounderTalksPage },
  { path: '/error', component: ErrorPage },
];

// Simple router - just routes, nothing else
export const AppRouter: React.FC = () => (
  <Routes>
    {routes.map(({ path, component: Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);