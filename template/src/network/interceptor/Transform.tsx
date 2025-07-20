import { AxiosError, AxiosResponse } from 'axios';

export function transformResponse<T>(response: AxiosResponse<T>) {
  return Promise.resolve(response.data);
}

export function transformError(error: AxiosError) {
  return Promise.reject(error);
}
