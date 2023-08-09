import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'


import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Contato from './pages/Contato/Contato'


import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <div className={styles.App}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/contato" element={<Contato />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
