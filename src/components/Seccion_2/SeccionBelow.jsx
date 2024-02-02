import iconoError from "../../assets/icon-error.svg"
import iconoFlecha from "../../assets/icon-arrow.svg"


function SeccionBelow() {

    const [email, setEmail] = ("");
    const [mensError, setMensError] = ("");
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const handleClick = () => {
        if (email === "" || !regex.text(email)) {
            setMensError("por favor ingresar email valido");
        }
    };

    return (
        <div>
            <h1>we're</h1>
            <h2>
                coming <br />soon
            </h2>
            <p>Hello fellow shoppers! We're currently building oiur new fashion store. Add your email below to stay up-to date with announcements and our launchdeals.</p>
            <div>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (mensError !== "") {
                            setMensError("");
                        }
                    }}
                    placeholder="ingresa email"
                />
                <span className="">{mensError}</span>
                {mensError !== "" && <img src={iconoError} className="" />}
            </div>
            <div onClick={handleClick}>
                <img src={iconoFlecha} className="" alt="" />
            </div>

        </div>
    )
}


export default SeccionBelow