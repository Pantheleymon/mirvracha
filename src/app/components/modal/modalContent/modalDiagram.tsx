import { FC } from "react";
import Image from "next/image";

const ModalDiagram:FC = ():JSX.Element => {

    const styles = {
        marginBottom: '40px',
        fontSize: '1.5rem'
    }

    const marginTop = {
        marginTop: '9px',
    }

    return (
        <>
            <div style={styles}>
                <p>В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание женщин (66%), а в возрасте 60-64 лет количество женщин и мужчин.</p>

                <p style={marginTop}>Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более высокий процент площади стенок, но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.</p>
            </div>

            <Image src='/assets/diagram.svg' alt='diagram' width={1210} height={390}/>
        </>
    );
};

export default ModalDiagram;