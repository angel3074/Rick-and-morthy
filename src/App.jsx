import { useState } from 'react'
import './App.css'
import RickAndMorthy from './Components/RickAndMorthy'
import Pollito from './Components/Pollito'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>

        <RickAndMorthy/>
        {/* <Pollito/> */}
      </div>
    </div>
  )
}

export default App
