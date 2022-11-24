import style from './css/Header.css'
import DiscordLogo from './css/discord.svg'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Rules from '../pages/Rules'

function Header() {
    return (
       
        <header>
   
            <nav>

                <ul>

                    
                    <a href="https://discord.gg/278nTuHQ" target="_blank">Comunidade</a>
                    <a href="https://discord.gg/278nTuHQ" target="_blank">Membros</a>
                    <a href="https://discord.gg/278nTuHQ" target="_blank">Membros</a>
                    <a href="https://discord.gg/278nTuHQ" target="_blank">Membros</a>

            
                </ul>



            </nav>
        </header>
    
            
    )
}

export default Header 