import banner from "./banner.png"
import Styles from "./header.module.css"

export default function Header(){
    return (
        <img src={banner} alt="Banner" className={Styles.banner}/>
    )
}