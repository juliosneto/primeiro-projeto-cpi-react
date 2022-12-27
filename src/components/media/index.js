import Styles from "./media.module.css"
import video from "./video/videoplayback.mp4"

export default function Media() {
    return (
        <div className={Styles.mediaBox}>
            <h4 className={Styles.mediaTitle}>Trailer da DLC "Chains of Hate":</h4>
            <video src={video} controls autoPlay preload="auto"/>
        </div>
    )
}