import Styles from "./nav.module.css"

export default function Nav() {

    return (
        <nav>
            <button className={Styles.menuButton}>HOME</button>
            <button className={Styles.menuButton}>JOGO</button>
            <button className={Styles.menuButton}>SOBREVIVENTES</button>
            <button className={Styles.menuButton}>ASSASSINOS</button>
        </nav>
    )
}