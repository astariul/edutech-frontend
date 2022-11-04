import { Button, Modal } from "@mantine/core";
import { ReactNode } from "react";

interface MessageModalProps {
  open: boolean;
  message: ReactNode | string;
  onCloseModal: (x: boolean) => void;
  size?: number | string;
  widthButton?: boolean;
}

const MessageModal = (
  {open, message, onCloseModal, size="auto", widthButton=false}
  : MessageModalProps
) => {

  return (
    <Modal
      centered
      size={size}
      opened={open}
      closeOnClickOutside={false}
      onClose={() => onCloseModal(true)}
    >
      <div>
        {message}
      </div>
      {
        widthButton
        ? <div style={{display: "flex", marginTop: "12px"}}>
            <Button
              compact
              onClick={() => onCloseModal(true)}
              style={{marginLeft: "auto", marginRight: "24px"}}
            >
              확인
            </Button>
          </div>
        : <></>
      }
    </Modal>
  )
}

export default MessageModal;
