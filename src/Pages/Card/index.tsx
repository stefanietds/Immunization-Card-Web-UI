import { useState } from "react";
import { Button, Space, Modal } from "antd";
import Sidebar from "../../Components/Sidebar";
import ModalCardDetails from "../../Components/Modal";
import "./index.css";
import type { Person } from "../../types";
import DataTable from "../../Components/DataTable";
import { PersonColumns } from "../../../constant";

const Card = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [dataSource, setDataSource] = useState<Person[]>([]);


  const handleViewDetails = () => {
    if (selectedRowKeys.length === 0) return;
    console.log("view details", selectedRowKeys);
  };

  const handleDelete = () => {
    if (selectedRowKeys.length === 0) return;

    Modal.confirm({
      title: "Confirmar deleção",
      content: "Tem certeza que deseja deletar este cartão?",
      okText: "Deletar",
      cancelText: "Cancelar",
      okButtonProps: { danger: true },
      onOk() {
        console.log("delete", selectedRowKeys);
      },
      onCancel() {
        console.log("cancel delete");
      },
    });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedPerson(null);
  };

  return (
    <div className="container-card">
      <Sidebar />
      <div className="container-card-content">
        <h1>Cartões de Vacinação</h1>

        <div className="container-card-content__card-actions">
          <Space>
            <Button
              type="primary"
              onClick={handleViewDetails}
              disabled={selectedRowKeys.length === 0}
            >
              Ver Detalhes
            </Button>
            <Button
              danger
              onClick={handleDelete}
              disabled={selectedRowKeys.length === 0}
            >
              Deletar
            </Button>
          </Space>
        </div>

        <DataTable
          dataSource={dataSource}
          columns={PersonColumns}
          className="container-vaccine-content__card-table"
        />

        <ModalCardDetails
          visible={isModalVisible}
          person={selectedPerson}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default Card;
