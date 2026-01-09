import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { api } from '../services/api';

/**
 * Auth Context for managing authentication state
 *
 * Uses a cookie-based approach where Laravel sets a 'logged_in' cookie
 * on successful login. This cookie is just a UI hint - actual security
 * is handled by Laravel's session/Sanctum middleware.
 *
 * On mount, validates the session with the server to sync auth state.
 */

interface User {
  name?: string;
  email?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  checkAuth: () => void;
  logout: () => void;
}

interface AuthCheckResponse {
  authenticated: boolean;
  user: { name: string } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Parse cookies from document.cookie string
 */
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

/**
 * Delete a cookie by name
 */
function deleteCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

/**
 * Check if user is logged in based on cookie
 */
function checkLoggedInCookie(): boolean {
  return getCookie('logged_in') === 'true';
}

/**
 * Get user name from cookie if available
 */
function getUserFromCookie(): User | null {
  const userName = getCookie('user_name');
  if (userName) {
    return { name: userName };
  }
  return checkLoggedInCookie() ? {} : null;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => checkLoggedInCookie());
  const [user, setUser] = useState<User | null>(() => getUserFromCookie());
  const [isLoading, setIsLoading] = useState<boolean>(() => checkLoggedInCookie()); // Only loading if cookie exists
  const hasValidated = useRef(false);

  /**
   * Clear auth cookies and state when session is invalid
   */
  const clearAuthState = useCallback(() => {
    deleteCookie('logged_in');
    deleteCookie('user_name');
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  /**
   * Validate session with server
   */
  const validateSession = useCallback(async () => {
    // Only validate if cookies suggest user is logged in
    if (!checkLoggedInCookie()) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await api.get<AuthCheckResponse>('/auth-check');

      if (response.success && response.data) {
        if (response.data.authenticated) {
          // Session is valid - update state with server data
          setIsAuthenticated(true);
          setUser(response.data.user ? { name: response.data.user.name } : {});
        } else {
          // Session expired - clear stale cookies
          clearAuthState();
        }
      }
    } catch {
      // On error, trust the cookies (offline-friendly)
      console.warn('Auth check failed, using cookie state');
    } finally {
      setIsLoading(false);
    }
  }, [clearAuthState]);

  /**
   * Check authentication status from cookie
   */
  const checkAuth = useCallback(() => {
    const loggedIn = checkLoggedInCookie();
    setIsAuthenticated(loggedIn);
    setUser(loggedIn ? getUserFromCookie() : null);
  }, []);

  /**
   * Handle logout - redirect to Laravel logout route
   */
  const logout = useCallback(() => {
    // Redirect to Laravel logout which will clear session and cookie
    window.location.href = '/logout';
  }, []);

  // Validate session on mount
  useEffect(() => {
    if (!hasValidated.current) {
      hasValidated.current = true;
      validateSession();
    }
  }, [validateSession]);

  // Re-check when tab becomes visible (in case of logout in another tab or session expiry)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        validateSession();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [validateSession]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isLoading, checkAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook to access auth context
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
