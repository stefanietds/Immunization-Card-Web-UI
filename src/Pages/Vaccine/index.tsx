import { useState } from "react";
import { Form, Input, Button } from "antd";
import Sidebar from "../../Components/Sidebar";
import DataTable from "../../Components/DataTable";
import "./index.css";
import type { Vaccine } from "../../types";

const Vaccine = () => {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<Vaccine[]>([]);

  const columns = [
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

  const onFinish = (values: { name: string; code: string }) => {
    console.log("Received values:", values);
  };

  return (
    <div className="container-vaccine">
      <Sidebar />
      <div className="container-vaccine-content">
        <h1>Cadastro de Vacinas</h1>
        <div className="container-vaccine-content__content-wrapper">
          <div className="form-section">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                label="Nome da Vacina"
                name="name"
                rules={[{ required: true, message: "Por favor, insira o nome da vacina" }]}
              >
                <Input placeholder="Nome da vacina" />
              </Form.Item>

              <Form.Item
                label="Código"
                name="code"
                rules={[{ required: true, message: "Por favor, insira o código" }]}
              >
                <Input placeholder="Código da vacina" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Cadastrar
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="table-section">
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

export default Vaccine;