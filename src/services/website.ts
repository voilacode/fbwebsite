/**
 * Website Service
 *
 * Provides methods for interacting with the website-specific API endpoints.
 */

import { api, type ApiResponse } from './api';

/**
 * Client info from the backend
 */
export interface ClientInfo {
  name: string;
  slug: string;
  theme: string;
  layout: string;
}

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Contact form response
 */
export interface ContactResponse {
  success: boolean;
  message: string;
}

/**
 * Page content from the backend
 */
export interface PageContent {
  slug: string;
  title: string;
  content: string | null;
}

/**
 * Website service methods
 */
export const websiteService = {
  /**
   * Get client information
   */
  async getClientInfo(): Promise<ApiResponse<ClientInfo>> {
    return api.get<ClientInfo>('/client-info');
  },

  /**
   * Submit contact form
   */
  async submitContact(
    data: ContactFormData
  ): Promise<ApiResponse<ContactResponse>> {
    return api.post<ContactResponse>('/contact', data);
  },

  /**
   * Get page content
   */
  async getPageContent(slug: string): Promise<ApiResponse<PageContent>> {
    return api.get<PageContent>(`/pages/${slug}`);
  },
};

export default websiteService;
