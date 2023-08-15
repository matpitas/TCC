import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'


import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'


import Navbar from './components/Navbar/Navbar'
import Entrar from './pages/Entrar/Entrar'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div className={styles.App}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/entrar" element={<Entrar />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
