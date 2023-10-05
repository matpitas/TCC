import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import Agendar from './pages/Agendar/Agendar'
import useAuthContext from './Hooks/useAuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const {login} = useAuthContext()

  // document.addEventListener('contextmenu', event => event.preventDefault());
  return (
    <div className={styles.App}>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={!login ? <Home /> : <Navigate to='/painel'/>}/>
              <Route path="/sobre" element={!login ? <Sobre /> : <Navigate to='/painel'/>}/>
              <Route path="/entrar" element={!login ? <Entrar /> : <Navigate to='/painel'/>}/>
              <Route path="/notificacoes" element={login ? <Notificacoes /> : <Navigate to='/'/>}/>
              <Route path="/amigos" element={login ? <Amigos /> : <Navigate to='/'/>}/>
              <Route path="/painel" element={login ? <Painel /> : <Navigate to='/'/>}/>
              <Route path="/cadastrar" element={!login ? <Cadastrar /> : <Navigate to='/'/>}/>
              <Route path="/agendamento" element={login ? <Agendar /> : <Navigate to='/'/>}/>
            </Routes>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              theme="dark"
            />
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
