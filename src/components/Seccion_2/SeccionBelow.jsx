import iconoError from "../../assets/icon-error.svg"
import iconoFlecha from "../../assets/icon-arrow.svg"
import "./SeccionBelow.css"
import { useState } from "react";

function SeccionBelow() {

    const [email, setEmail] = useState("");
    const [mensError, setMensError] = useState ("");
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const handleClick = () => {
        
      if (email === "" || !regex.test(email)) {
            setMensError("Please provide a valid email");
        } 
    };
  
    return (
        <div className="contentBelow">
            <h1>we're</h1>
            <h2>
                coming <br />soon
            </h2>
            <p>Hello fellow shoppers! We're currently building oiur new fashion store. Add your email below to stay up-to date with announcements and our launch deals.</p>
            <div className="formContent">
                <input
                    type="text"
                    value={email} 
                    onChange={(e) => {
                        
                       setEmail(e.target.value);
                        if (mensError !== "") {
                            setMensError("");
                        } 
                    }}
                    placeholder="Email Adress"
                />
                <span className="mensError">{mensError}</span>
                {mensError !== "" && <img src={iconoError} className="iconoError" />}
            <div onClick={handleClick} className="imgContent">
                <img src={iconoFlecha} />
            </div>
          </div>
        </div>
    )
}


export default SeccionBelow