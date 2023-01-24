import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'


const ChangeCounter = () => {
  const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => setCounter(counter +1)}>Add</button>
      <button onClick={() => setCounter(counter -1)}>Min</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}

export default ChangeCounter