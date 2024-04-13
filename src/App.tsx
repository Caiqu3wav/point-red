import { useState } from 'react'
import './App.css'
import FrameGame from "./components/FrameGame"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full flex flex-col items-center my-0 mx-auto justify-center'>
      <h1 className='text-3xl'>Point Game!</h1>
      <div><h1>Clique no quadro e veja o que acontece!</h1>
          <FrameGame/>
      </div>
    </div>
  )
}

export default App
