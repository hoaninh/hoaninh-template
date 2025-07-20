import axios from 'axios';
import * as AccessTokenInterceptor from './interceptor/Accesstoken';
import * as AuthInterceptor from './interceptor/Auth';
import * as LogInterceptor from './interceptor/Log';
import * as TransformInterceptor from './interceptor/Transform';

/**
 * Creates and configures an Axios instance with interceptors
 * @param baseURL - Base URL for all API requests
 * @param withToken - Whether to include authentication token (default: true)
 * @returns Configured Axios instance
 */
const getInstance = (baseURL: string, withToken = true) => {
  // Create Axios instance with basic configuration
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 30000, // 30 seconds timeout
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Add request logging interceptor (logs outgoing requests)
  instance.interceptors.request.use(
    LogInterceptor.requestLog,
    LogInterceptor.requestError,
  );

  // Add authentication response interceptor (handles 401 errors)
  instance.interceptors.response.use(
    AuthInterceptor.responseSuccess,
    AuthInterceptor.responseError,
  );

  // Add response logging interceptor (logs incoming responses)
  instance.interceptors.response.use(
    LogInterceptor.responseLog,
    LogInterceptor.responseError,
  );

  // Add token interceptor if authentication is required
  if (withToken) {
    instance.interceptors.request.use(
      AccessTokenInterceptor.addExtraInfo, // Adds Bearer token to headers
      AccessTokenInterceptor.onRejected,
    );
  }

  // Add data transformation interceptor (transforms response data)
  instance.interceptors.response.use(
    TransformInterceptor.transformResponse,
    TransformInterceptor.transformError,
  );

  return instance;
};

/**
 * API Manager object that provides configured Axios instances
 */
const ApiManager = {
  /**
   * Gets a configured Axios instance
   * @param baseUrl - Base URL for API requests
   * @param withToken - Whether to include authentication token
   * @returns Configured Axios instance
   */
  getInstance: (baseUrl: string, withToken = true) => {
    const axiosIntance = getInstance(baseUrl, withToken);
    return axiosIntance;
  },
};

export { ApiManager };

