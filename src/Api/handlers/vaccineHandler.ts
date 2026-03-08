import type { ApiResponse, Vaccine } from "../../types";
import { baseFetch } from "../baseFetch";

export const getAllVaccines = (): Promise<ApiResponse<Vaccine[]>> => {
  return baseFetch<ApiResponse<Vaccine[]>>("/vaccine");
};

export const createVaccine = (data: {code: string; name: string;}): Promise<ApiResponse<boolean>> => {
  return baseFetch<ApiResponse<boolean>>("/vaccine", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

