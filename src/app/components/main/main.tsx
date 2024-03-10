
import useModal from '../modal/useModal';
import { Modal } from '../modal/modal';

import ContentBlock from "../contentBlock/contentBlock";

import "./main.scss";
import MythsAndReality from '../contentBlockItem/mythsAndReality/mythsAndReality';

function Main() {

  const { isShown, toggle } = useModal();

  const modalContent = <>Hey, I'm a modal.</>;

    return (
        <>
            <main className="main">
                <ContentBlock title="ХОБЛ: мифы и реальность" content={<MythsAndReality/>}/>
                <ContentBlock title="Терапия ХОБЛ: что в фокусе?" content={<></>}>

                </ContentBlock>
            </main>

            <Modal isShown={isShown} hide={toggle} modalContent={modalContent} headerText="Modal"/>
        </>
    );
}

export default Main;