import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

/**
 * Auth Context for managing authentication state
 *
 * Uses a cookie-based approach where Laravel sets a 'logged_in' cookie
 * on successful login. This cookie is just a UI hint - actual security
 * is handled by Laravel's session/Sanctum middleware.
 */

interface User {
  name?: string;
  email?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  checkAuth: () => void;
  logout: () => void;
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

  // Check auth on mount and when tab becomes visible
  useEffect(() => {
    checkAuth();

    // Re-check when tab becomes visible (in case of logout in another tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkAuth();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [checkAuth]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, checkAuth, logout }}>
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
