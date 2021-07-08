import React from "react";
import Heading from "../../components/Heading/Heading";
import { ModalBody, ModalHeader, ModalTitle, ModalContainer, ModalCloseButton, ModalBackButton } from "./styles";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  headerBackground = "transparent",
  minWidth = "330px",
  padding = "24px",
  ...props
}) => (
  <ModalContainer minWidth={minWidth} {...props}>
    <ModalHeader background={headerBackground} style={{borderBottom:"none",padding:"24px 24px 0"}}>
      <ModalTitle>
        {onBack && <ModalBackButton onBack={onBack} />}
        <Heading>{title}</Heading>
      </ModalTitle>
    </ModalHeader>
    <ModalBody p={padding}>{children}</ModalBody>
  </ModalContainer>
);

export default Modal;
