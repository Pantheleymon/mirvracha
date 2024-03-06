'use client'

import React, { FunctionComponent } from 'react';

import { Modal } from './components/modal/modal';
import useModal from './components/modal/useModal';

const App: FunctionComponent = () => {
  const { isShown, toggle } = useModal();

  const content = <React.Fragment>Hey, I'm a model.</React.Fragment>;

  return (
    <React.Fragment>
        
      <Modal isShown={isShown} hide={toggle} modalContent={content} headerText="Modal"/>
    </React.Fragment>
  );
};

export default App;