import API from "@api/API";
import { LoginRequest, LoginResponse } from "@model";
import { ErrorResponse, Response } from "@network";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";


export const useLogin = (
    options?: UseMutationOptions<
      Response<LoginResponse>,
      ErrorResponse,
      LoginRequest
    >,
  ) => {
    return useMutation({
      mutationFn: (params: LoginRequest) => API.login(params),
      ...(options || {}),
    });
  };