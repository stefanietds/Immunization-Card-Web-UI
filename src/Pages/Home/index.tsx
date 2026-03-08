import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import DataTable from "../../Components/DataTable";
import "./index.css";
import type { Person } from "../../types";
import { PersonColumns } from "../../../constant";
import RegistrationForm from "../../Components/RegistrationForm";
import {
  createPatient,
  deletePatient,
  getAllPatients,
} from "../../Api/handlers/patientHandler";
import { Form, message } from "antd";

const Home = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [dataSource, setDataSource] = useState<Person[]>([]);

  const onFinish = async (values: { cpf: string; name: string }) => {
    try {
      const response = await createPatient(values);
      if (response.success === true) {
        messageApi.open({
          type: "success",
          content: "Paciente criado com sucesso!",
        });

        fetchData();
        form.resetFields();
      }
    } catch (error) {
      console.error("Erro ao criar paciente:", error);
      messageApi.open({
        type: "error",
        content: "Erro ao criar paciente",
      });
    }
  };

  const fetchData = async () => {
    try {
      const data = await getAllPatients();
      setDataSource(data.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const handleDelete = async (person: Person) => {
    try {
      const response = await deletePatient(person.id);
      if (response.success === true) {
        messageApi.open({
          type: "success",
          content: "Paciente excluído com sucesso!",
        });
        fetchData();
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Erro ao excluir paciente +" + error,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-home">
      {contextHolder}
      <Sidebar />
      <div className="container-home-content">
        <h1>Cadastro de Pessoas</h1>
        <h3>Gerencie os dados dos pacientes e suas vacinas</h3>
        <RegistrationForm
          form={form}
          fields={["cpf", "name"]}
          onFinish={onFinish}
        />
        <div className="container-home-content__table-section">
          <DataTable
            dataSource={dataSource}
            columns={PersonColumns(handleDelete)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
