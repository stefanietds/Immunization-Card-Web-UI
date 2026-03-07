import type { Vaccine, Person } from "./src/types";
import type { ColumnsType } from "antd/es/table";

export const VaccineColumns: ColumnsType<Vaccine> = [
  {
    title: "Nome da Vacina",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Código",
    dataIndex: "code",
    key: "code",
  },
];

export const PersonColumns: ColumnsType<Person> = [
  {
    title: "CPF",
    dataIndex: "cpf",
    key: "cpf",
  },
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
  },
];