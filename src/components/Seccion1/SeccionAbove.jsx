import "./SeccionAbove.css"
import mobile from "../../assets/hero-mobile.jpg"
import desktop from "../../assets/hero-desktop.jpg"

function  SeccionAbove () {

    return(
        <div className="seccionContent">
            <img className="imgDeskt" src={desktop} />
            <img className="imgMobil" src={mobile} />
        </div>
    )
}


export default  SeccionAbove