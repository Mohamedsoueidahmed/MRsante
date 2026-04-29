import { useState } from 'react'
import MainPage from './components';
import RouteConfig from '../config/routes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouteConfig />
    </>
  )
}

export default App
