import Styles from "./jogo.module.css"

export default function Jogo() {
    return ( 
        
        <div className={Styles.boxJogo}>
            <h2 className={Styles.titleJogo}>JOGO</h2> 
            <div className={Styles.textJogo}>
                <p className={Styles.pJogo}>
                    Em Dead by Daylight, você pode assumir o papel de um Assassino invencível, ou jogar como um dos 4 sobreviventes e tentar escapar com vida.
                </p>
                <p className={Styles.pJogo}>
                    O objetivo do <b>Assassino</b> é encontrar e capturar os sobreviventes para poder pendurá-los nos ganchos de sacrifício a fim de serem consumidos pela Entidade.
                </p>
                <p className={Styles.pJogo}>
                    O objetivo dos <b>sobreviventes</b> é escapar da partida com vida. Para isso, eles devem encontrar e consertar 5 geradores. Uma vez consertados, os geradores energizam 2 portões de saída. Cada portão conta com uma alavanca que deve ser pressionada por um curto período de tempo antes que ele se abra e os Sobreviventes possam escapar. Dead by Daylight é um jogo assimétrico. Cada lado na partida tem certas vantagens e desvantagens.
                </p>
            </div>
        </div>
        
    )
} 