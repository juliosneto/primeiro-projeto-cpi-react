import Styles from "./icones.module.css"

export default function Icones(props) {
    const {link, icon, titulo} = props
    return (
        <a href={link} target="blank" className={Styles.iconLinks}>
            <img src={icon} className={Styles.iconImage} alt={"Ícone da rede social " + {titulo}}/>
            <span className={Styles.iconLabel}>{titulo}</span>
        </a>
    )
}
