import type { ApiResponse, Person } from "../../types";
import { baseFetch } from "../baseFetch";

export const getAllPatients = (): Promise<ApiResponse<Person[]>> => {
  return baseFetch<ApiResponse<Person[]>>("/patient");
};

export const createPatient = (data: {cpf: string; name: string;}): Promise<ApiResponse<boolean>> => {
  return baseFetch<ApiResponse<boolean>>("/patients", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const deletePatient = (id: number): Promise<ApiResponse<boolean>> => {
  return baseFetch<ApiResponse<boolean>>(`/patient/${id}`, {
    method: "DELETE",
  });
};
