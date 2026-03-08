import { Form, Input, Button, type FormInstance } from "antd";
import "./index.css";

type FieldType = "cpf" | "name" | "code";

type RegistrationFormProps = {
  form: FormInstance;
  onFinish: (values: any) => void;
  fields: FieldType[];
};

const RegistrationForm = ({ form, onFinish, fields }: RegistrationFormProps) => {
  //const [form] = Form.useForm();

  const fieldConfig: Record<
    FieldType,
    {
      label: string;
      name: string;
      placeholder: string;
      className: string;
      message: string;
    }
  > = {
    cpf: {
      label: "CPF",
      name: "cpf",
      placeholder: "000.000.000-00",
      className: "input-cpf",
      message: "Por favor, insira o CPF",
    },
    name: {
      label: "Nome",
      name: "name",
      placeholder: "Nome completo",
      className: "input-name",
      message: "Por favor, insira o nome",
    },
    code: {
      label: "Código",
      name: "code",
      placeholder: "Código",
      className: "input-code",
      message: "Por favor, insira o código",
    },
  };

  return (
    <div className="container-form">
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div className="inline-form">
          {fields.map((field) => {
            const config = fieldConfig[field];

            return (
              <Form.Item
                key={config.name}
                className={config.className}
                label={config.label}
                name={config.name}
                rules={[{ required: true, message: config.message }]}
              >
                <Input placeholder={config.placeholder} />
              </Form.Item>
            );
          })}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="button">
              Cadastrar
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationForm;