import { Button, Modal, Text } from "@mantine/core";

interface MessageModalProps {
  open: boolean;
  mainMessage: string;
  detailMessage: string; 
  onCloseModal: (x: boolean) => void;
}

const MessageModal = ({open, mainMessage, detailMessage, onCloseModal}: MessageModalProps) => {

  return (
    <Modal
      opened={open}
      onClose={() => onCloseModal(true)}
    >
      <div>
        <Text style={{fontSize: "16px"}}>
          {mainMessage}
        </Text>
        <Text style={{fontSize: "14px", marginTop: "8px"}}>
          {detailMessage}
        </Text>
      </div>
      <div style={{display: "flex", marginTop: "12px"}}>
        <Button
          compact
          onClick={() => onCloseModal(true)}
          style={{marginLeft: "auto", marginRight: "24px"}}
        >
          확인
        </Button>
      </div>
    </Modal>
  )
}

export default MessageModal;
