import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

import {
  Wrapper,
  StyledModal,
  Content,
  Backdrop,
} from './modal.style';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
}) => {
  const modal = (
    <>
      <Backdrop onClick={hide} />
      <Wrapper>
        <StyledModal>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
