export interface ListResponseData<T> {
    total: number;
    data: T;
    loadMore?: boolean;
    nextPageIndex?: number;
  }
  
export interface Response<T> {
    responseData?: T;
    error?: ErrorResponse;
  }
  
  export interface ErrorResponse {
    code?: number;
    message?: string;
  }
  
  export interface ListResponse<T> {
    responseData?: ListResponseData<T>;
    error?: ErrorResponse;
  }