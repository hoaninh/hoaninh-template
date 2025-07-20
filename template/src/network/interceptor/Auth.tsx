import { useAuthenticationStore } from '@store';
import { AxiosError, AxiosResponse } from 'axios';
import { filter } from 'lodash';

const URL_TO_IGNORE_401 = [
  'auth/change-password',
  'auth/login',
  'auth/logout',
  'auth/forgot-password',
  'auth/reset-password',
  'organization/term-configs',
  'auth/current-permission',
  'notifications/badge-number',
];

export function responseSuccess(response: AxiosResponse) {
  return response;
}

export const responseError = (error: AxiosError) => {
  const response = error.response;

  const config = error.config;

  const url = config?.url;

  if (response && response.status === 401) {
    const shouldIgnore =
      filter(URL_TO_IGNORE_401, (ignoreUrl: string) => url?.includes(ignoreUrl))
        .length > 0;

    if (!shouldIgnore) {
      useAuthenticationStore.getState().clear();
    }
  }

  return Promise.reject(error);
};
