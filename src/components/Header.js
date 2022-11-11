import style from './css/Header.css'
import DiscordLogo from './css/discord.svg'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Rules from '../pages/Rules'

function Header() {
    return (
            <Router>
        <header>
        <Link to='/'><img src={DiscordLogo}/></Link>
            <nav>

                <ul>

                    
                    <Link to="/about">Sobre o servidor</Link>
                    <a href="https://discord.gg/278nTuHQ" target="_blank">Comunidade</a>
                    <a href="https://discord.gg/278nTuHQ" target="_blank">Membros</a>
                    <Link to="/rules">Regras</Link>

            
                </ul>



            </nav>
        </header>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}> </Route>
                    <Route path='/rules' element={<Rules />}> </Route>
                </Routes>
            </Router>
            
    )
}

export default Header 