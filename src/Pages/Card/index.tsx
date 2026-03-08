import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import ModalCardDetails from "../../Components/ModalCardDetails";
import "./index.css";
import type { PersonWithDoses, Person } from "../../types";
import DataTable from "../../Components/DataTable";
import { CardColumns } from "../../../constant";
import ImmunizationForm from "../../Components/ImmunizationForm";
import { Form, message } from "antd";
import {
  createCard,
  deleteCard,
  getAllCards,
  getImmunizationCardByPatient,
} from "../../Api/handlers/cardHandler";

const Card = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<PersonWithDoses | null>(
    null,
  );
  const [dataSource, setDataSource] = useState<Person[]>([]);

  const fetchData = async () => {
    try {
      const data = await getAllCards();
      console.log("Dados recebidos:", data.data);
      setDataSource(data.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDetails = async (patientId: number) => {
    try {
      const response = await getImmunizationCardByPatient(patientId);
      setSelectedPerson(response.data);
      setIsModalVisible(true);
    } catch (error) {
      console.error("Erro ao buscar cartão de vacinação:", error);
      messageApi.open({
        type: "error",
        content: "Erro ao buscar cartão de vacinação",
      });
    }
  };

  const onFinish = async (values: {
    patient: number;
    vaccine: number;
    dose: number;
  }) => {
    try {
      const payload = {
        patientId: values.patient,
        vaccineId: values.vaccine,
        dose: values.dose,
      };
      const response = await createCard(payload);
      if (response.success === true || response.data === true) {
        messageApi.open({
          type: "success",
          content: "Vacinação adicionada com sucesso!",
        });
        fetchData();
        form.resetFields();
      }
    } catch (error) {
      console.error("Erro ao criar vacinação:", error);
      messageApi.open({
        type: "error",
        content: "Erro ao criar vacinação",
      });
    }
  };

  const handleDeleteDose = async (cardId: number) => {
    try {
      const response = await deleteCard(cardId);
      if (response.success === true) {
        messageApi.open({
          type: "success",
          content: "Dose deletada com sucesso!",
        });

        if (selectedPerson) {
          setSelectedPerson({
            ...selectedPerson,
            doses: selectedPerson.doses.filter((d) => d.cardId !== cardId),
          });
        }
      }
    } catch (error) {
      console.error("Erro ao deletar dose:", error);
      messageApi.open({
        type: "error",
        content: "Erro ao deletar dose",
      });
    }
  };

  return (
    <div className="container-card">
      {contextHolder}
      <Sidebar />
      <div className="container-card-content">
        <h1>Cartões de Vacinação</h1>
        <ImmunizationForm form={form} onFinish={onFinish} />
        <DataTable
          dataSource={dataSource}
          columns={CardColumns(handleDetails)}
          rowKey={(record) => record.patientId}
          className="container-vaccine-content__card-table"
        />
      </div>
      {isModalVisible && selectedPerson ? (
        <ModalCardDetails
          visible={isModalVisible}
          person={selectedPerson}
          onClose={() => setIsModalVisible(false)}
          handleDeleteDose={handleDeleteDose}
        />
      ) : null}
    </div>
  );
};

export default Card;
