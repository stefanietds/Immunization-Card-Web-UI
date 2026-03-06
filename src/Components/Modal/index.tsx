import { Modal, Descriptions } from "antd";
import type { Person } from "../../types";

type ModalCardDetailsProps = {
  visible: boolean;
  person: Person | null;
  onClose: () => void;
}

const ModalCardDetails = ({ visible, person, onClose }: ModalCardDetailsProps) => {
  return (
    <Modal
      title="Detalhes do Cartão"
      visible={visible}
      onOk={onClose}
      onCancel={onClose}
      okText="Fechar"
      cancelButtonProps={{ style: { display: "none" } }}
    >
      {person && (
        <Descriptions bordered>
          <Descriptions.Item label="CPF" span={3}>
            {person.cpf}
          </Descriptions.Item>
          <Descriptions.Item label="Nome" span={3}>
            {person.name}
          </Descriptions.Item>
        </Descriptions>
      )}
    </Modal>
  );
};

export default ModalCardDetails;