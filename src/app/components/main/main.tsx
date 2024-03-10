
import useModal from '../modal/useModal';
import { Modal } from '../modal/modal';

import ContentBlock from "../contentBlock/contentBlock";

import "./main.scss";

function Main() {

  const { isShown, toggle } = useModal();

  const modalContent = <>Hey, I'm a modal.</>;

    return (
        <>
            <div className="main">
                <ContentBlock title="ХОБЛ: мифы и реальность" content={
                    <>Привет</>
                }>
                </ContentBlock>
                <ContentBlock title="Терапия ХОБЛ: что в фокусе?" content={<></>}>

                </ContentBlock>
            </div>

            <Modal isShown={isShown} hide={toggle} modalContent={modalContent} headerText="Modal"/>
        </>
    );
}

export default Main;