import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const DEBUG = __DEV__;

export function requestLog(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  if (DEBUG) {
    console.log(`>>> ${config.method}: ${config.baseURL}/${config.url}`);
    if (config.data) {
      console.log('>>>data', config.data);
    }
    if (config.params) {
      console.log('>>>params', config.params);
    }
    if (config.headers) {
      console.log('>>>headers', config.headers);
    }
  }
  return config;
}

export function requestError(error: AxiosError) {
  if (DEBUG) {
    console.log(error);
  }
  return Promise.reject(error);
}

export function responseLog(response: AxiosResponse): AxiosResponse {
  if (DEBUG) {
    const config = response.config;
    console.log(`<<< ${response.status} ${config.method}: ${config.url}`);
    console.log(response);
  }

  return response;
}

export function responseError(error: AxiosError) {
  if (DEBUG) {
    const config = error.config;
    const response = error.response;
    if (response && config) {
      console.log(`<<< ${response.status} ${config.method}: ${config.url}`);
      console.log(response);
    } else if (config) {
      console.log(`<<< ${config.method}: ${config.url}`);
      console.log('network log error', error);
    } else {
      console.log('network log error', error);
    }
  }
  return Promise.reject(error.response);
}
