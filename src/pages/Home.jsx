import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'

const Home = () => {
  const {counter} = useContext(CounterContext);
  return (
    <div>
      <h1>Counter: <span>{counter}</span></h1>
      <ChangeCounter />
    </div>
  )
}

export default Home