import { Form, Select, InputNumber, Button, type FormInstance } from "antd";
import { useState, useEffect } from "react";
import { getAllPatients } from "../../Api/handlers/patientHandler";
import { getAllVaccines } from "../../Api/handlers/vaccineHandler";

interface Person {
  id: number;
  name: string;
}

interface Vaccine {
  id: number;
  name: string;
}

type ImmunizationFormProps = {
  form: FormInstance;
  onFinish: (values: any) => void;
};

const ImmunizationForm = ({form, onFinish}: ImmunizationFormProps) => {
  const [people, setPeople] = useState<Person[]>([]);
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);

  const fetchData = async () => {
    try {
      const [peopleResponse, vaccinesResponse] = await Promise.all([
        getAllPatients(),
        getAllVaccines(),
      ]);

      setPeople(peopleResponse.data);
      setVaccines(vaccinesResponse.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Form
      form={form}
      layout="inline"
      onFinish={onFinish}
      style={{ marginBottom: 20 }}
    >
      <Form.Item
        name="patient"
        label="Pessoa"
        rules={[{ required: true, message: "Selecione uma pessoa" }]}
      >
        <Select style={{ width: 200 }} placeholder="Selecione">
          {people.map((p) => (
            <Select.Option key={p.id} value={p.id}>
              {p.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="vaccine"
        label="Vacina"
        rules={[{ required: true, message: "Selecione uma vacina" }]}
      >
        <Select style={{ width: 200 }} placeholder="Selecione">
          {vaccines.map((v) => (
            <Select.Option key={v.id} value={v.id}>
              {v.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="dose"
        label="Dose"
        rules={[{ required: true, message: "Informe o número da dose" }]}
      >
        <InputNumber min={1} max={5} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ImmunizationForm;
