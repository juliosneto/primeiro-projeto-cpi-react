import Styles from "./header.module.css"
import banner from "./banner.png"
import {Link} from 'react-router-dom';

export default function Header() {

    return (
        <>
            <img src={banner} alt="Banner" className={Styles.banner}/>
            <nav> 
                <Link to="/" className={Styles.navLink}>HOME</Link>
                <Link to="/jogo" className={Styles.navLink}>JOGO</Link>
                <Link to="/sobreviventes" className={Styles.navLink}>SOBREVIVENTES</Link>
                <Link to="/assassinos" className={Styles.navLink}>ASSASSINOS</Link>
            </nav>
        </>
    )
}