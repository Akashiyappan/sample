import { useState } from "react"

export default function stateExample(){

    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count+1);
    }

    return <>
    <h1>The count is {count}</h1>
    <button onClick={increment}>click me</button>
    </>
}