import { useState } from "react";


function Form() {
    let [user, userName] = useState("Name")
    let [email, emEmail] = useState("")
    let [password, passPassword] = useState("")

    let [stete, setState] = useState("n")
    let [arr, arr1] = useState([])

    let obj = {
        user,
        email,
        password
    }
    function data() {

        arr1([...arr, obj])

    }
    console.log(arr);



    return (<div>

        {stete == "n" ? <div>
            <input type="text" placeholder='Email' onChange={(ns) => emEmail(ns.target.value)} /> <br /><br />
            <input type="text" placeholder='Password' onChange={(ns) => passPassword(ns.target.value)} /> <br /><br />
            <button onClick={() => setState("s")}>login</button>
        </div> : <div>

            <input type="text" placeholder='UserName' onChange={(ns) => userName(ns.target.value)} /> <br /><br />
            <input type="text" placeholder='Email' onChange={(ns) => emEmail(ns.target.value)} /> <br /><br />
            <input type="text" placeholder='Password' onChange={(ns) => passPassword(ns.target.value)} /> <br /><br />

            <button onClick={data}>Singup</button>
            <br /><br />

            <span onClick={() => setState("n")}>go to log in</span>

        </div>}


    </div>
    )
}

export default Form;
