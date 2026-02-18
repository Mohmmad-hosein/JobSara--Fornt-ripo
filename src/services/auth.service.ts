import { axiosInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";
import { LoginRequest, LoginResponse } from "../types/auth.types";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, data);

  return response.data;
};
