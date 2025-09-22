import React from 'react';
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
  LogIn
} from 'lucide-react';
import { asset } from '../utils/asset';

// Navigation configuration
const navigationItems: NavigationItem[] = [
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
  { key: 'login', label: 'Login', href: '/login', icon: LogIn },
  { key: 'register', label: 'Register', href: '/register', icon: UserPlus },
];

// Logo component
const Logo: React.FC = () => (
  <div className="flex items-center gap-3">
    <img
      src={asset('logo_fresherbot_light.png')}
      alt="Fresherbot"
      className="h-8 w-auto"
    />
   
  </div>
);

// Theme actions component
const ThemeActions: React.FC = () => {
  return null;
};

// Configurable Header Component using UIKit sections
export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleNavigation = (href: string) => {
    navigate(href);
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