import { useState, useRef } from "react";
import Props from "./props";

function Data() {
    var a = useRef("")
    var b = useRef("")
    var c = useRef("")
    let [arr, setarr] = useState([])


    function sub(t) {
        t.preventDefault()
        const state = {
            img: b.current.value,
            price: a.current.value,
            title: c.current.value
        }
        setarr([...arr, state])
        console.log(arr);

    }

    return (
        <>
            <form action="" onSubmit={sub}>
                <input type="text" name="price" ref={a} />
                <input type="text" name="img" ref={b} />
                <input type="text" name="title" ref={c} />
                <input type="submit" name="" id="" />
            </form>

            <Props ns={arr} />
        </>

    )
}

export default Data;