import { LoginRequest, LoginResponse } from '@model/index';
import { ApiManager, Response } from '@network';
import axios, { AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';
import { API_ENDPOINT } from './Endpoint';

interface ApiService {
  get<R, D = unknown>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  post<R, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  put<R, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  delete<R, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
}

class HTTPClient implements ApiService {
  private instance: ApiService;

  constructor(instance: ApiService) {
    this.instance = instance;
  }

  getInstance() {
    return this.instance;
  }

  get<R, D = unknown>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.instance.get(url, config);
  }
  post<R, D = unknown>(
    url: string,
    params?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.instance.post(url, params, config);
  }

  put<R, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.instance.put(url, data, config);
  }
  delete<R, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.instance.delete(url, config);
  }
}

class API {
  client: HTTPClient;
  publicClient: HTTPClient;
  customClient: HTTPClient;
  uploadClient: HTTPClient;

  constructor() {
    const apiBaseUrl = Config.API_BASE_URL ?? '';

    const instance = ApiManager.getInstance(apiBaseUrl);
    this.client = new HTTPClient(instance);

    this.uploadClient = new HTTPClient(ApiManager.getInstance(apiBaseUrl));

    const publicInstance = ApiManager.getInstance(apiBaseUrl, false);
    this.publicClient = new HTTPClient(publicInstance);

    const customInstance = axios.create({
      timeout: 30000,
      headers: { 'Content-Type': 'application/json' },
    });

    this.customClient = new HTTPClient(customInstance);
  }


  login = (params: LoginRequest): Promise<Response<LoginResponse>> => {
    return this.publicClient.post<Response<LoginResponse>>(
      API_ENDPOINT.LOGIN,
      params,
    );
  };
  
}

export default new API();

