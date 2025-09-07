import { useState } from "react"

export default function msgChange () {
    const [msg, change] = useState("");
    const changemsg = (event) =>{
        const msgnew = event.target.value;
        change(msgnew);
    }
    return<>
    <input placeholder="enter the name" onChange={changemsg}/>
    <p>{msg}</p>
    </>
}