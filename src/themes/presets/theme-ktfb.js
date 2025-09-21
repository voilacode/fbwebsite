const ktfbTheme = {
  id: 'ktfb',
  name: 'KT-FB',
  description: 'Fresherbot color theme by KT using bright azure blue, orange, and golden yellow',

  // Light mode colors
  light: {
    background: '#FFFFFF',
    foreground: '#000000',
    card: '#FFFFFF',
    cardForeground: '#000000',
    popover: '#FFFFFF',
    popoverForeground: '#000000',

    // Brand colors
    primary: 'hsl(207.8, 100%, 48.6%)',   // Bright Azure Blue
    primaryForeground: '#FFFFFF',
    secondary: '#FF6B1A',                  // Orange for gradients
    secondaryForeground: '#FFFFFF',

    // Supporting colors
    muted: '#F3F4F6',
    mutedForeground: '#6B7280',
    accent: '#FFD60A',                     // Golden yellow for gradients
    accentForeground: '#000000',

    // State colors
    destructive: '#DC2626',
    destructiveForeground: '#FFFFFF',

    // Border colors
    border: '#E5E7EB',
    input: '#E5E7EB',
    ring: 'hsl(207.8, 100%, 48.6%)',

    // Chart colors
    chart1: 'hsl(207.8, 100%, 48.6%)',  // Blue
    chart2: '#22C55E',                  // Green
    chart3: '#FF6B1A',                  // Orange
    chart4: '#DC2626',                  // Red
    chart5: '#FFD60A',                  // Golden yellow

    // Sidebar
    sidebar: '#F9FAFB',
    sidebarForeground: '#111827',
    sidebarPrimary: 'hsl(207.8, 100%, 48.6%)',
    sidebarPrimaryForeground: '#FFFFFF',
    sidebarAccent: '#E5E7EB',
    sidebarAccentForeground: '#111827',
    sidebarBorder: '#E5E7EB',
    sidebarRing: 'hsl(207.8, 100%, 48.6%)',
  },

  // Dark mode colors
  dark: {
    background: '#111827',
    foreground: '#F9FAFB',
    card: '#1F2937',
    cardForeground: '#F9FAFB',
    popover: '#1F2937',
    popoverForeground: '#F9FAFB',

    primary: 'hsl(207.8, 100%, 58%)',   // Slightly lighter for contrast in dark mode
    primaryForeground: '#FFFFFF',
    secondary: '#FF7A33',                 // Orange for gradients
    secondaryForeground: '#FFFFFF',

    muted: '#1F2937',
    mutedForeground: '#9CA3AF',
    accent: '#FFD60A',                    // Golden yellow for gradients
    accentForeground: '#000000',

    destructive: '#F87171',
    destructiveForeground: '#1F2937',

    border: '#374151',
    input: '#374151',
    ring: 'hsl(207.8, 100%, 58%)',

    chart1: 'hsl(207.8, 100%, 58%)',   // Blue
    chart2: '#34D399',                 // Green
    chart3: '#FF7A33',                 // Orange
    chart4: '#F87171',                 // Red
    chart5: '#FFD60A',                 // Yellow

    sidebar: '#111827',
    sidebarForeground: '#D1D5DB',
    sidebarPrimary: 'hsl(207.8, 100%, 58%)',
    sidebarPrimaryForeground: '#FFFFFF',
    sidebarAccent: '#1F2937',
    sidebarAccentForeground: '#D1D5DB',
    sidebarBorder: '#374151',
    sidebarRing: 'hsl(207.8, 100%, 58%)',
  },

  design: {
    fontPrimary: 'Inter, system-ui, sans-serif',
    fontDisplay: 'Inter, system-ui, sans-serif',
    fontMono: 'JetBrains Mono, Monaco, monospace',
  },

  customStyles: `
    .theme-ktfb .voila-heading {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1.1;
      font-size: clamp(2.5rem, 6vw, 4rem);
      color: var(--color-foreground);
    }

    .theme-ktfb .voila-subheading {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 600;
      letter-spacing: -0.02em;
      line-height: 1.3;
      font-size: clamp(1.25rem, 3vw, 2rem);
      color: var(--color-muted-foreground);
    }
  `
};

export default ktfbTheme;
