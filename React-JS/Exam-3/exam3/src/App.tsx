import { useState } from "react"
import './App.css'




function App() {
  var [obj, setObj] = useState({
    name: "",
    price: "",
    Category: "",
    des: ""
  })
  var [nameerr, setNameErr] = useState(false)
  var [priceerr, setPriceErr] = useState(false)
  var [deserr, setDesErr] = useState(false)

  function handdelCange(n) {
    var { name, value } = n.target

    setObj({ ...obj, [name]: value })
    console.log(obj);

  }

  function handdelBlur(n) {
    var { name, value } = n.target
    if (name == "name" && value.length <= 3) {
      setNameErr(true)
      console.log(value);

    }

    if (name == "price" && value < 0) {
      setPriceErr(true)
    }

    if (name == "des" && value.length >= 200) {
      setDesErr(true)
    }
  }
  function handdelFocus(n) {
    var { name, value } = n.target

    if (name == "name") {
      console.log(value);
      setNameErr(false)
    }

    if (name == "price") {
      setPriceErr(false)
    }
    if (name == "des") {
      setDesErr(false)
    }

  }

  function handdelSubmit(p) {
    p.preventDefault()

    if (nameerr == false && priceerr == false && deserr == false) {
      setObj(obj)
      alert("Done")
    }
    else {
      alert("Fill The Data")
    }
  }

  return (
    <div className='main'>
      <form action="" onSubmit={handdelSubmit}>
        <h1>Product Form</h1>
        <input type="text" name='name' onChange={handdelCange} onBlur={handdelBlur} onFocus={handdelFocus} placeholder='Product Name' />
        {nameerr == true ? <p className='p1'>Plese fill the box more then 3 character</p> : ""}

        <input type="number" name='price' onChange={handdelCange} onBlur={handdelBlur} onFocus={handdelFocus} placeholder='Product Price' />
        {priceerr == true ? <p className='p1'>Plese Enter Price positive number</p> : ""}

        <select name="Category" onChange={handdelCange} id="">
          <option value="Category">Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Groceries">Groceries</option>
          <option value="Books">Books</option>
        </select>
        <input type="text" name='des' onChange={handdelCange} onBlur={handdelBlur} onFocus={handdelFocus} placeholder='Product Description' />
        {deserr == true ? <p className='p1'>Maximum of 200 characters.......</p> : ""}
        <input type="submit" />
      </form>

    </div>
  )
}

export default App;