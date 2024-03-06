import { ReactNode } from "react";

// import hVector from "/assets/h-vector.svg";
import "./contentBlock.scss";

const ContentBlock = ({title}:{title:string}):ReactNode => {
    return (
        <div className="content">
            <h2 className="content__title">{title}</h2>
        </div>
    );
};

export default ContentBlock;