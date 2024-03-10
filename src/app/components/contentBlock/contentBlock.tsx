import {  ReactElement } from "react";

// import hVector from "/assets/h-vector.svg";
import "./contentBlock.scss";

const ContentBlock = ({title, content}:{title:string, content:ReactElement}): JSX.Element => {
    return (
        <div className="content">
            <h2 className="content__title">{title}</h2>
            {content}
        </div>
    );
};

export default ContentBlock;