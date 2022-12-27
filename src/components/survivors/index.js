import Styles from "./surv.module.css"
import Card from "../cards"
import laurie from "./imgs/S06_charSelect_portrait.png"
import quentin from "./imgs/S11_charSelect_portrait.png"
import kate from "./imgs/S13_charSelect_portrait.png"
import steve from "./imgs/S19_charSelect_portrait.png"

export default function Surv(){
    return (
        <div className={Styles.surv}>
            <h2 className={Styles.survTitle}>SOBREVIVENTES</h2>
            <p className={Styles.survText}>
                Os Sobreviventes são uma equipe de 4. Eles podem escolher cooperar ou cuidar de si mesmos. Embora sejam fracos
                e vulneráveis, os Sobreviventes podem usar seu pequeno tamanho para pular rapidamente as janelas, saltar barricadas ou encontrar 
                esconderijos. Os sobreviventes tem uma ampla perspectiva em terceira pessoa que lhes dá uma vantagem na percepção do ambiente.
            </p>
            <div className={Styles.survBox}>
                <Card nome="Laurie Stroode" imagem={laurie}/>
                <Card nome="Quentin Smith" imagem={quentin}/>
                <Card nome="Kate Denson" imagem={kate}/>
                <Card nome="Steve Harrington" imagem={steve}/>
            </div>
        </div>
    )
}