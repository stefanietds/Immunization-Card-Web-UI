import { DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import type { Vaccine, Person } from "./src/types";
import type { ColumnsType } from "antd/es/table";
import { Button, Popconfirm } from "antd";

export const VaccineColumns: ColumnsType<Vaccine> = [
  {
    title: "Código",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Nome da Vacina",
    dataIndex: "name",
    key: "name",
  },
];

export const PersonColumns = (
  onDelete: (person: Person) => void,
): ColumnsType<Person> => [
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
  {
    title: "Ações",
    key: "actions",
    render: (_, record) => (
      <Popconfirm
        title="Excluir pessoa"
        description="Tem certeza que deseja excluir esta pessoa?"
        onConfirm={() => onDelete(record)}
        okText="Sim"
        cancelText="Não"
      >
        <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
      </Popconfirm>
    ),
  },
];

export const CardColumns = (
  onDetails: (patientId: number) => void
): ColumnsType<Person> => [
  {
    title: "Nome",
    dataIndex: "patientName",
    key: "patientName",
  },
  {
    title: "Ver Cartão de Vacinação",
    key: "actions",
    render: (_, record) => (
      <Button
        type="text"
        icon={<MoreOutlined />}
        onClick={() => onDetails(record.patientId)}
      />
    ),
  },
];