import { useAuthenticationStore } from '@store/Store';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';

export function addExtraInfo(config: InternalAxiosRequestConfig) {
  const token = useAuthenticationStore.getState()?.accessToken;

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token?.accessToken ?? ''}`,
    },
  } as InternalAxiosRequestConfig;
}

export function onRejected(error: AxiosError) {
  return Promise.reject(error);
}
