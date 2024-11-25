// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import A from './counter';

function App() {
  let [count, setCount] = useState(1)


  function inn() {

    setCount(count + 1)
  }
  function de() {
    setCount(count - 1)
  }

  return (
    <div className="App">

      <h1>{count}</h1>
      <button onClick={de}>-</button>
      <button onClick={inn}>+</button>
      <A s={count}></A>


{/* jhhhhh? */}

    </div>
  );
}

export default App;
