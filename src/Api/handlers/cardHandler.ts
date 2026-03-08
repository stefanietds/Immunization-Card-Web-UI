import type { ApiResponse, ImmunizationCard, Person } from "../../types";
import { baseFetch } from "../baseFetch";

export const getAllCards = (): Promise<ApiResponse<Person[]>> => {
  return baseFetch<ApiResponse<Person[]>>("/immunizationcard");
};

export const createCard = (data: { patientId: number; vaccineId: number; dose: number;}): Promise<ApiResponse<boolean>> => {
  return baseFetch<ApiResponse<boolean>>("/immunizationcard", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const getImmunizationCardByPatient = (patientId: number,): Promise<ApiResponse<ImmunizationCard>> => {
  return baseFetch<ApiResponse<ImmunizationCard>>(`/immunizationcard/patient/${patientId}`,
    { method: "GET", },
  );
};

export const deleteCard = (doseId: number): Promise<ApiResponse<boolean>> => {
    return baseFetch<ApiResponse<boolean>>(`/immunizationcard/${doseId}`, {
    method: "DELETE",
  });
};
