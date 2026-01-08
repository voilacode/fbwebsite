import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header as UIHeader, HeaderLogo, HeaderNav } from '@voilajsx/uikit/header';
import type { NavigationItem } from '@voilajsx/uikit';
import {
  Home,
  Mail,
  Package,
  Brain,
  GraduationCap,
  Users,
  CalendarIcon,
  Code,
  Briefcase,
  Mic,
  Settings,
  Building2,
  Target,
  UserPlus,
  LogIn,
  LogOut,
  LayoutDashboard
} from 'lucide-react';
import { asset } from '../utils/asset';
import { useAuth } from '../context/AuthContext';

// Base navigation configuration (always visible)
const baseNavigationItems: NavigationItem[] = [
  { key: 'home', label: 'Home', href: '/', icon: Home },
  {
    key: 'products',
    label: 'Products',
    icon: Package,
    items: [
      { key: 'assessment', label: 'Assessment Tool', href: '/products/assessment', icon: Brain },
      { key: 'lms', label: 'LMS Platform', href: '/products/lms', icon: GraduationCap },
      { key: 'tms', label: 'TMS Platform', href: '/products/tms', icon: Settings },
    ]
  },
  {
    key: 'services',
    label: 'Services',
    icon: Building2,
    items: [
      { key: 'crt', label: 'CRT Training', href: '/services/crt', icon: Target },
      { key: 'drives', label: 'Campus Drives', href: '/services/drives', icon: Users },
      { key: 'projects', label: 'Academic Projects', href: '/services/projects', icon: Code },
    ]
  },
  {
    key: 'events',
    label: 'Events',
    icon: CalendarIcon,
    items: [
      { key: 'hackathons', label: 'Hackathons', href: '/events/hackathons', icon: Code },
      { key: 'hr-campus-connect', label: 'HR Campus Connect', href: '/events/hr-campus-connect', icon: Briefcase },
      { key: 'founder-talks', label: 'Founder Talks', href: '/events/founder-talks', icon: Mic },
    ]
  },
  { key: 'contact', label: 'Contact', href: '/contact', icon: Mail },
];

// Auth items for logged-out users
const guestAuthItems: NavigationItem[] = [
  { key: 'login', label: 'Login', href: '/login', icon: LogIn },
  { key: 'register', label: 'Register', href: '/register', icon: UserPlus },
];

// Auth items for logged-in users
const userAuthItems: NavigationItem[] = [
  { key: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { key: 'logout', label: 'Logout', href: '/logout', icon: LogOut },
];

// Logo component
const Logo: React.FC = () => (
  <a href="/" className="flex items-center gap-3">
    <img
      src={asset('logo_fresherbot_light.png')}
      alt="Fresherbot"
      className="h-8 w-auto"
    />
  </a>
);

// Theme actions component
const ThemeActions: React.FC = () => {
  return null;
};

// Configurable Header Component using UIKit sections
export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Build navigation items based on auth state
  const navigationItems = useMemo(() => {
    const authItems = isAuthenticated ? userAuthItems : guestAuthItems;
    return [...baseNavigationItems, ...authItems];
  }, [isAuthenticated]);

  // Auth routes that should go directly to Laravel (full page navigation)
  const laravelRoutes = ['/login', '/register', '/logout', '/dashboard'];

  const handleNavigation = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank');
    } else if (laravelRoutes.includes(href)) {
      // Full page navigation to Laravel routes
      window.location.href = href;
    } else {
      navigate(href);
    }
  };

  return (
    <UIHeader tone="brand" size="xl" position="sticky">
      <HeaderLogo>
        <Logo />
      </HeaderLogo>

      <HeaderNav
        navigation={navigationItems}
        currentPath={location.pathname}
        onNavigate={handleNavigation}
      />

      <div className="flex items-center">
        <ThemeActions />
      </div>
    </UIHeader>
  );
};
