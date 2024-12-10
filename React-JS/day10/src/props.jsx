

function Props(sn){
   
    
    return (
        <div>
            {
                sn.ns.map((m)=>{
                    return (
                        <div>
                            {
                                m.img,
                                m.price,
                                
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Props;