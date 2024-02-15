import mobile from "../../assets/hero-mobile.jpg"
import desktop from "../../assets/hero-desktop.jpg"

function  SeccionAbove () {

    return(
        <div className="seccionContent">
            <img src={desktop} alt="" />
            {/* <img src={mobile} alt=""/> */} 
        </div>
    )
}


export default  SeccionAbove