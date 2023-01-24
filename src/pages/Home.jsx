import ChangeCounter from '../components/ChangeCounter'

import { useCounterContext } from '../hooks/useCounterContext';

const Home = () => {
  const {counter} = useCounterContext()
  return (
    <div>
      <h1>Counter: <span>{counter}</span></h1>
      <ChangeCounter />
    </div>
  )
}

export default Home