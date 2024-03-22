import { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './layouts/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Footer />
    </>
  )
}

export default App
