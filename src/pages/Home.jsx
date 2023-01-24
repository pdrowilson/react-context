import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Home = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h1>Counter: <span>{counter}</span></h1>
    </div>
  )
}

export default Home