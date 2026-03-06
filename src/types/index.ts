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

export type ImmunizationRecord = {
  id: number;
  personId: number;
  vaccineId: number;
  date: Date;
  dose?: number;
  notes?: string;
}

export type ImmunizationCard = {
  id: number;
  personId: number;
  person: Person;
  records: ImmunizationRecord[];
}