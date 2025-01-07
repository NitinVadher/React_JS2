import React from 'react'
import { useState } from 'react'


function Login() {


    const [obj,setobj]=useState({
            name:"",
            email:"",
            pass:""
    
        })

    function sub1(e) {

        e.preventDefault()


        
   
      

        fetch(`http://localhost:3000/user?email=${obj.email}`)

            .then((r) => {
                return r.json();
            })
            .then((res) => {
               
                if(res.length>0){
                    // alert("Success..")

                    // if(res[0].pass)
                    // console.log();
                    if(res[0].pass == obj.pass){
                        alert("Login Success....🤩")
                    }
                    else{
                        alert("Plese Enter Valid Password....🙄")
                    }
                    
                }
                else{
                    alert("Plese Registor Your Email....📍")
                }

            })
            .catch((er) => {
                console.log(er)

            })

    }


    function change(e){
        let {name,value} = e.target

        setobj({...obj,[name]:value})

    }


    return (
        <div>
            <h1> LOGIN </h1>
            <form action="" onSubmit={sub1}>
                <input type="text" name='email' onChange={change} /> <br /> <br />
                <input type="text" name='pass' onChange={change} /> <br /> <br />
                <input type="submit" />

            </form>
        </div>
    )
}

export default Login;