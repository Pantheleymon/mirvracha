import ContentBlock from "../contentBlock/contentBlock";

import "./main.scss";
import MythsAndReality from '../contentBlockItem/mythsAndReality/mythsAndReality';

function Main() {
    return (
        <>
            <main className="main">
                <ContentBlock title="ХОБЛ: мифы и реальность" content={<MythsAndReality/>}/>
                <ContentBlock title="Терапия ХОБЛ: что в фокусе?" content={<></>}/>
            </main>


        </>
    );
}

export default Main;