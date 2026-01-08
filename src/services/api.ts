/**
 * API Service for Laravel Backend Communication
 *
 * This module provides a centralized API client for communicating with
 * the voilaco Laravel backend. It handles:
 * - Base URL configuration
 * - CSRF token management
 * - Request/response interceptors
 * - Error handling
 */

// API base URL - uses Vite proxy in development, direct URL in production
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api/website';

/**
 * API Client configuration
 */
interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}

/**
 * API Response wrapper
 */
interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

/**
 * Get CSRF token from cookie (set by Laravel Sanctum)
 */
function getCsrfToken(): string | null {
  const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  if (match) {
    return decodeURIComponent(match[1]);
  }
  return null;
}

/**
 * API Client class for making HTTP requests
 */
class ApiClient {
  private config: ApiConfig;

  constructor() {
    this.config = {
      baseURL: API_BASE_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
  }

  /**
   * Make an API request
   */
  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.config.baseURL}${endpoint}`;

    // Add CSRF token for non-GET requests
    const csrfToken = getCsrfToken();
    const headers: Record<string, string> = {
      ...this.config.headers,
      ...(options.headers as Record<string, string>),
    };

    if (csrfToken && options.method !== 'GET') {
      headers['X-XSRF-TOKEN'] = csrfToken;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        credentials: 'include', // Include cookies for CSRF
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || `Error: ${response.statusText}`,
          errors: data.errors,
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('API Request failed:', error);
      return {
        success: false,
        message:
          error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  /**
   * GET request
   */
  get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  /**
   * POST request
   */
  post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * PUT request
   */
  put<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE request
   */
  delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// Export singleton instance
export const api = new ApiClient();

// Export types
export type { ApiResponse };
