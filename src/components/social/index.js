import Styles from "./social.module.css"
import Icones from "../icones"
import github from "./icons/github-mark-white.png"
import linkedin from "./icons/LinkedIn_icon_circle.png"
import steam from "./icons/steam.png"
import insta from "./icons/instagram.png"

export default function Social() {
    return (
        <div className={Styles.socialBox}>
            <h4 className={Styles.sociaTitle}>Minhas redes sociais:</h4>
            <div className={Styles.socialLinks}>
                <Icones link="https://github.com/juliosneto" icon={github} titulo="GitHub"/>
                <Icones link="https://www.linkedin.com/in/julio-neto-4342731a0/" icon={linkedin} titulo="Linkedin"/>
                <Icones link="https://steamcommunity.com/id/juliote" icon={steam} titulo="Steam"/>
                <Icones link="https://www.instagram.com/juliosnneto2/" icon={insta} titulo="Instagram"/>
            </div>
        </div>   
    )
}