import { FC } from "react";
import Image from 'next/image'
import './mythsAndReality.scss';

const MythsAndReality:FC = () => {
    return (
        <>
            <aside className="block__myths_and_reality">
                    <div className="block__item_icon">
                        <Image src='/assets/icons/user.svg' alt='user_icon' width={39.32} height={37.86}/>
                    </div>

                    <div className="block__item_title">
                        <h4>ХОБЛ болеют <b>преимущественно мужчины?</b></h4>
                    </div>
                    
                    <div className="block__item_text">
                        <p>В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ,<br/>диагностированной до 55 лет, было выявлено преобладание...</p>
                    </div>
            </aside>

            <aside className="block__myths_and_reality">
                    <div className="block__item_icon">
                        <Image src='/assets/icons/graph.svg' alt='graph_icon' width={44.51} height={44.52}/>
                    </div>

                    <div className="block__item_title">
                        <h4><b>Опасно</b> не наличие заболевания, а обострения?</h4>
                    </div>
                    
                    <div className="block__item_text">
                        <p>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...</p>
                    </div>
            </aside>
        </>
    );
}

export default MythsAndReality;