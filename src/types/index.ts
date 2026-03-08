export type Person = {
  id: number;
  cpf: string;
  name: string;
}

export type Vaccine = {
  id: number;
  name: string;
  code: string;
}

export type ImmunizationCard = {
  patientId: number;
  patientName: string;
  doses: Dose[];
};

type Dose = {
  cardId: number;
  vaccineId: number;
  vaccineName: string;
  doseNumber: number;
  date: string;
};

type PersonWithDoses = {
  patientId: number;
  patientName: string;
  doses: Dose[];
};

export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
};