import { FC } from "react";
import Image from "next/image";
import './modalLifeStatistics.scss';

const ModalLifeStatistics:FC = ():JSX.Element => {
    return (
        <>
            <div className="modal_life-statistics">
                <div className="modal__text">
                    <p><b>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.</b></p>

                    <p>В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.</p>
                </div>

                <h5 className="modal__header">
                    Пятилетняя выживаемость пациентов
                </h5>

                <div className="modal__statistics">
                    <div className="modal__statistics_item">
                        <Image src='/assets/icons/heart.svg' alt='heart_icon' width={83} height={134} className="image"/>
                        <p className="percentage">45,5%</p>
                        <p className="paragraph">пациентов с <b>сердечной недостаточностью</b><sup>1</sup></p>
                        <span className="description">Популяционное когортное исследование (N=385)</span>
                    </div>

                    <div className="modal__statistics_item">
                        <Image src='/assets/icons/heart_attack.svg' alt='heart_attack_icon' width={103} height={134} className="image"/>
                        <p className="percentage">55,3%</p>
                        <p className="paragraph">пациентов с <b>инфарктом миокарда</b><sup>1</sup></p>
                        <span className="description">Апостериорный анализ когортного исследования (N=2887)</span>
                    </div>

                    <div className="modal__statistics_item">
                        <Image src='/assets/icons/bladder.svg' alt='bladder_icon' width={117} height={134} className="image"/>
                        <p className="percentage">50,5%</p>
                        <p className="paragraph">пациентов с <b>раком мочевого пузыря</b></p>
                        <span className="description">Исследование Национальной статистической службы (N=42642)</span>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default ModalLifeStatistics;