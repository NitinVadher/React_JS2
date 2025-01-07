import { useState } from 'react'


import Main_route from './Routes/MainRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Main_route/>
    </>
  )
}

export default App