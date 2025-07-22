import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import Layout from './components/layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Routes path='/' element={<Layout />}>
    
          </Routes>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
