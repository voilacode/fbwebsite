import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './index.css';
import './styles/globals.css';
import '@voilajsx/uikit/styles';
import './styles/fonts.css';

const rootElement = document.getElementById('root')!;

const AppWithProviders = (
  <React.StrictMode>
    <ThemeProvider theme="elegant" mode="light" forceConfig={true}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// Use hydration if page was pre-rendered (has data-server-rendered attribute)
if (rootElement.hasAttribute('data-server-rendered')) {
  hydrateRoot(rootElement, AppWithProviders);
} else {
  createRoot(rootElement).render(AppWithProviders);
}