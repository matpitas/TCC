import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'


import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'


import Navbar from './components/Navbar/Navbar'
import Entrar from './pages/Entrar/Entrar'
import Footer from './components/Footer/Footer'
import Notificacoes from './pages/Notificacoes/Notificacoes'
import Amigos from './pages/Amigos/Amigos'
import Painel from './pages/Painel/Painel'
import Cadastrar from './pages/Cadastrar/Cadastrar'

function App() {

  // document.addEventListener('contextmenu', event => event.preventDefault());
  return (
    <div className={styles.App}>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/sobre" element={<Sobre />}/>
              <Route path="/entrar" element={<Entrar />}/>
              <Route path="/notificacoes" element={<Notificacoes />}/>
              <Route path="/amigos" element={<Amigos />}/>
              <Route path="/painel" element={<Painel />}/>
              <Route path="/cadastrar" element={<Cadastrar />}/>
            </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
