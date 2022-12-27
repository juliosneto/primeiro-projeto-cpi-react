import Styles from "./killer.module.css"
import Card from "../cards"
import hunter from "./imgs/K01_charSelect_portrait.png"
import myers from "./imgs/K05_charSelect_portrait.png"
import freddy from "./imgs/K10_charSelect_portrait.png"
import ghost from "./imgs/K16_charSelect_portrait.png"

export default function Killer() {
    return(
        <div className={Styles.killer}>
            <h2 className={Styles.killerTitle}>ASSASSINOS</h2>
            <p className={Styles.killerText}>
                Os Assassinos são monstros solitários, impossíveis de serem contidos. Os Assassinos veem o mundo de uma perspectiva 
                em primeira pessoa. Cada um deles tem sentidos aumentados, armas mortais e um poder único que os ajuda a rastrear, perseguir, 
                machucar, capturar e enganchar sobreviventes.
            </p>
            <div className={Styles.killerBox}>
                <Card nome="Caçador" imagem={hunter}/>
                <Card nome="Michael Myers" imagem={myers}/>
                <Card nome="Freddy Kruegger" imagem={freddy}/>
                <Card nome="Ghost Face" imagem={ghost}/>
            </div>
        </div>
    )
}
