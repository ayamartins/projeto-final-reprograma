import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
    return(
        <ul className="menu">
            <li className="item">
                <Link className="link" to="/">Inicio</Link>
            </li>
            <li className="item">    
                <Link className="link" to="/dados">Dados</Link>
            </li>
            <li className="item">    
                <Link className="link" to="/comentarios">Conte sua História</Link>
            </li>
            <li className="item">    
                <Link className="link" to="/sobre">Sobre mim</Link>
            </li>  
        </ul>
    )
}

export default Menu