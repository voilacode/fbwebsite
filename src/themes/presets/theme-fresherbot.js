const fresherbotTheme = {
  id: 'fresherbot',
  name: 'Fresherbot',
  description: 'Custom fresherbot theme with brand colors and modern design',

  // Light mode colors
  light: {
    background: '#FFFFFF',
    foreground: '#000000',
    card: '#FFFFFF',
    cardForeground: '#000000',
    popover: '#FFFFFF',
    popoverForeground: '#000000',

    // Brand colors
    primary: '#007BFF',              // Logo blue
    primaryForeground: '#FFFFFF',
    secondary: '#E5E7EB',            // Neutral gray
    secondaryForeground: '#000000',

    // Supporting colors
    muted: '#F3F4F6',
    mutedForeground: '#6B7280',
    accent: '#E5E7EB',
    accentForeground: '#000000',

    // State colors
    destructive: '#DC2626',          // Red for errors
    destructiveForeground: '#FFFFFF',

    // Border colors
    border: '#E5E7EB',
    input: '#E5E7EB',
    ring: '#007BFF',

    // Chart colors
    chart1: '#007BFF',               // Blue
    chart2: '#22C55E',               // Green
    chart3: '#F59E0B',               // Orange
    chart4: '#EF4444',               // Red
    chart5: '#6366F1',               // Indigo

    // Sidebar
    sidebar: '#F9FAFB',
    sidebarForeground: '#111827',
    sidebarPrimary: '#007BFF',
    sidebarPrimaryForeground: '#FFFFFF',
    sidebarAccent: '#E5E7EB',
    sidebarAccentForeground: '#111827',
    sidebarBorder: '#E5E7EB',
    sidebarRing: '#007BFF',
  },

  // Dark mode colors
  dark: {
    background: '#111827',
    foreground: '#F9FAFB',
    card: '#1F2937',
    cardForeground: '#F9FAFB',
    popover: '#1F2937',
    popoverForeground: '#F9FAFB',

    primary: '#3B82F6',
    primaryForeground: '#FFFFFF',
    secondary: '#1F2937',
    secondaryForeground: '#F9FAFB',

    muted: '#1F2937',
    mutedForeground: '#9CA3AF',
    accent: '#1F2937',
    accentForeground: '#F9FAFB',

    destructive: '#F87171',
    destructiveForeground: '#1F2937',

    border: '#374151',
    input: '#374151',
    ring: '#3B82F6',

    chart1: '#3B82F6',
    chart2: '#34D399',
    chart3: '#FBBF24',
    chart4: '#F87171',
    chart5: '#A78BFA',

    sidebar: '#111827',
    sidebarForeground: '#D1D5DB',
    sidebarPrimary: '#3B82F6',
    sidebarPrimaryForeground: '#FFFFFF',
    sidebarAccent: '#1F2937',
    sidebarAccentForeground: '#D1D5DB',
    sidebarBorder: '#374151',
    sidebarRing: '#3B82F6',
  },

  design: {
    fontPrimary: 'Inter, system-ui, sans-serif',
    fontDisplay: 'Inter, system-ui, sans-serif',
    fontMono: 'JetBrains Mono, Monaco, monospace',
  },

  customStyles: `
    .theme-fresherbot .voila-heading {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1.1;
      font-size: clamp(2.5rem, 6vw, 4rem);
      color: var(--color-foreground);
    }

    .theme-fresherbot .voila-subheading {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 600;
      letter-spacing: -0.02em;
      line-height: 1.3;
      font-size: clamp(1.25rem, 3vw, 2rem);
      color: var(--color-muted-foreground);
    }
  `
};

export default fresherbotTheme;
