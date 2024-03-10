import ContentBlock from "../contentBlock/contentBlock";

import "./main.scss";
import MythsAndReality from '../contentBlockItem/mythsAndReality/mythsAndReality';
import InFocus from "../contentBlockItem/inFocus/inFocus";

function Main() {
    return (
        <>
            <main className="main">
                <ContentBlock title="ХОБЛ: мифы и реальность" content={<MythsAndReality/>}/>
                <ContentBlock title="Терапия ХОБЛ: что в фокусе?" content={<InFocus/>}/>
            </main>


        </>
    );
}

export default Main;