import Styles from "./article.module.css"

export default function Article() {
    return(
        <>
            <h1 className={Styles.artTitle}>SPAWNKILL</h1>
            <div className={Styles.textBox}>
                <p className={Styles.artText}>
                    O Spawnkill é um site focado exclusivamente no jogo de
                    survivor horror Dead By Daylight (2016) e aqui trazemos os
                    conceitos e dicas do jogo e alguns personagens do game.
                </p>
            </div>
        </>
    )
}
