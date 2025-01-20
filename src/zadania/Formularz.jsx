import { useState } from "react"

export const Formularz = () => {
    const [imie, setImie] = useState("");
    const [email, setEmail] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        if((imie.length > 0) && (email.length > 0) && (email.includes("@.com") || email.includes("@.pl"))) {
            alert("formularz wyslany")
        }
        else {
            alert("popraw formularz")
        }
    }
    return <form>
        <input type="text" placeholder="imie" value={imie} onChange={e => setImie(e.target.value)}/>
        <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <button onClick={e => submitHandler(e)}>Wyślij</button>
    </form>

}