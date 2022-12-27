import Styles from "./cards.module.css"

export default function Card(props) {
    const {nome, imagem} = props 
    return (
        <div className={Styles.cardContent}>
            <img className={Styles.cardImage} alt="Imagem do card" src={imagem}/>
            <h3 className={Styles.cardTitle}>{nome}</h3>
        </div>
    )
}