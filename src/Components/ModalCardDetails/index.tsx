import { Modal, Descriptions } from "antd";
import DataTable from "../DataTable";
import "./index.css";
import type { Person } from "../../types";
import { formatDateTimeBR } from "../../Utils/formatDateBR";
import { DeleteOutlined } from "@ant-design/icons";

type ModalCardDetailsProps = {
  visible: boolean;
  person: Person | null;
  onClose: () => void;
  handleDeleteDose: (doseId: number) => void;
};

const ModalCardDetails = ({
  visible,
  person,
  onClose,
  handleDeleteDose,
}: ModalCardDetailsProps) => {
  return (
    <Modal
      title="Detalhes do Cartão"
      open={visible}
      onCancel={onClose}
      footer={null}
      className="container-modal"
    >
      {person && (
        <>
          <Descriptions bordered>
            <Descriptions.Item label="Nome" span={3}>
              {person.patientName}
            </Descriptions.Item>
          </Descriptions>

          <br />

          <h3 style={{ textAlign: "center", color: "#059669" }}>Vacinas</h3>
          <DataTable
            dataSource={person.doses || []}
            columns={[
              { title: "Vacina", dataIndex: "vaccineName", key: "vaccineName" },
              { title: "Dose", dataIndex: "doseNumber", key: "doseNumber" },
              {
                title: "Data",
                dataIndex: "date",
                key: "date",
                render: (text: string) => formatDateTimeBR(text),
              },
              {
                title: "Ações",
                key: "actions",
                render: (_, record) => (
                  <DeleteOutlined
                    style={{ color: "#ff4d4f", cursor: "pointer" }}
                    onClick={() => handleDeleteDose(record.cardId)}
                  />
                ),
              },
            ]}
            pagination={false}
            rowKey={(record) => record.cardId}
          />
        </>
      )}
    </Modal>
  );
};

export default ModalCardDetails;
