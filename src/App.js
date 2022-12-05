import './App.css';


import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import style from "./components/css/Navbar.css"


import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Comunidade from "./pages/Comunidade"
import Regras from "./pages/Regras"

function App() {
  return (
          <BrowserRouter>
          <header>

                  <ul>
                      <Link to="/sobre">Sobre</Link>
                      <Link to="/comunidade">Comunidade</Link>
                      <Link to="/regras">Regras</Link>
                  </ul>
          </header>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/sobre" element={<Sobre/>}></Route>
          <Route exact path="/comunidade" element={<Comunidade/>}></Route>
          <Route exact path="/regras" element={<Regras/>}></Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
