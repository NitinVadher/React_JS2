import { useState } from "react";
import Props from "./props";

function Data() {
    let [state, setState] = useState({
        img: "",
        price: 0,
        title: ""
    })

    let[arr,setarr]= useState([])

    function minu(n) {
      let {name,value} =n.target

      setState({ ...state, [name]:value})
      console.log(state);
      
    
    }


    function sub(t){
        t.preventDefault()
          setarr([...arr,state])
          console.log(arr);
          
    }

    return (
        <>
            <form action=""  onSubmit={sub}>
                <input type="text" name="img" onChange={minu} />
                <input type="text" name="price" onChange={minu} />
                <input type="text" name="title" onChange={minu} />
                <input type="submit" name="" id="" />
            </form>

            <Props ns={arr} />
        </>

    )
}

export default Data;