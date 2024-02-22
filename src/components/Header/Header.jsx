import logo from "../../assets/logo.svg"
import "./Header.css"


function Header () {
    return(
        <div className="headerContent">
            <img src={logo} alt="" />
        </div>
    );
}

export default Header