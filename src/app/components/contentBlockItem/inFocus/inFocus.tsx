import { FC } from "react";
import Image from "next/image";
import './inFocus.scss';

const InFocus: FC = ():JSX.Element => {
    return (
        <aside className="in-focus">
            <div className="note">
                <h3>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</h3>
            </div>

            <div className="strategy">
                <p>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</p>

                <div className="strategy__flex">
                    <div className="strategy__flex_item">
                        <Image src='/assets/icons/inhalation_1.png' alt="inhalation_icon" width={178} height={145}/>

                        <h5>Ингаляционный антихолинергик</h5>

                        <p>Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов<sup>1</sup></p>
                    </div>

                    <div className="strategy__flex_item">
                        <Image src='/assets/icons/inhalation_2.png' alt="inhalation_icon" width={178} height={145}/>

                        <h5>Ингаляционный β2-агонист</h5>

                        <p>Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции</p>
                    </div>

                    <div className="strategy__flex_item">
                        <Image src='/assets/icons/inhalation_3.png' alt="inhalation_icon" width={178} height={145}/>

                        <h5>Ингаляционный глюкокортикостероид (ИГКС)</h5>

                        <p>Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей</p>
                    </div>
                </div>

                <div className="strategy__flex no-margin">
                    <div className="strategy__flex_arrow"></div>
                    <div className="strategy__flex_arrow"></div>
                </div>

                <div className="strategy__flex">
                    <div className="strategy__flex_item result">
                        <p>Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;<br/>Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга<sup>1</sup>.</p>
                    </div>

                    <div className="strategy__flex_item result">
                        <p>Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА;<br/>Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)<sup>1</sup>.</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default InFocus;