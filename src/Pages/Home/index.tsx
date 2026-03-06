import { useState } from "react";
import { Form, Input, Button } from "antd";
import Sidebar from "../../Components/Sidebar";
import DataTable from "../../Components/DataTable";
import "./index.css";
import type { Person } from "../../types";

const Home = () => {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<Person[]>([]);

  const columns = [
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

  const onFinish = (values: { cpf: string; name: string }) => {
    console.log("Received values:", values);
  };

  return (
    <div className="container-home">
      <Sidebar />
      <div className="container-home-content">
        <h1>Cadastro de Pessoas</h1>
        <div className="container-home-content__content-wrapper">
          <div className="container-home-content__form-section">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                label="CPF"
                name="cpf"
                rules={[{ required: true, message: "Por favor, insira o CPF" }]}
              >
                <Input placeholder="000.000.000-00" />
              </Form.Item>

              <Form.Item
                label="Nome da Pessoa"
                name="name"
                rules={[{ required: true, message: "Por favor, insira o nome" }]}
              >
                <Input placeholder="Nome completo" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Cadastrar
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="container-home-content__table-section">
            <DataTable
              dataSource={dataSource}
              columns={columns}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;