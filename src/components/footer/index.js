import Styles from "./footer.module.css"
import Social from "../social"
import Media from "../media"

export default function Footer() {
    return (
        <>
            <div className={Styles.footerBox}>
                <Social/>
                <Media/>
            </div>
            <footer>
                <p>
                    Desenvolvido por Júlio Neto - 2022
                </p>
            </footer>
        </>
    )
}