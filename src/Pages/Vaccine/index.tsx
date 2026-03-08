import Sidebar from "../../Components/Sidebar";
import DataTable from "../../Components/DataTable";
import "./index.css";
import type { Vaccine } from "../../types";
import { VaccineColumns } from "../../../constant";
import RegistrationForm from "../../Components/RegistrationForm";
import { useEffect, useState } from "react";
import { Form, message } from "antd";
import { createVaccine, getAllVaccines } from "../../Api/handlers/vaccineHandler";

const Vaccine = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [dataSource, setDataSource] = useState<Vaccine[]>([]);

  const onFinish = async (values: { code: string; name: string }) => {
    try {
      const response = await createVaccine(values);
      if (response.success === true) {
        messageApi.open({
          type: "success",
          content: "Vacina criada com sucesso!",
        });

        fetchData();
        form.resetFields();
      }
    } catch (error) {
      console.error("Erro ao criar vacina:", error);
      messageApi.open({
        type: "error",
        content: "Erro ao criar vacina",
      });
    }
  };

  const fetchData = async () => {
    try {
      const data = await getAllVaccines();
      setDataSource(data.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-vaccine">
      {contextHolder}
      <Sidebar />
      <div className="container-vaccine-content">
        <h1>Cadastro de Vacinas</h1>
        <h3>Gerencie os dados das vacinas</h3>
        <RegistrationForm
          form={form}
          fields={["code", "name"]}
          onFinish={onFinish}
        />
        <div className="container-vaccine-content__table-section">
          <DataTable dataSource={dataSource} columns={VaccineColumns} />
        </div>
      </div>
    </div>
  );
};

export default Vaccine;
