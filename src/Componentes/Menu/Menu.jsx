import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
    return (
        <>

            <div className="container-menu">
                <div className="div-logo">
                    <img className="logo" src='../src/assets/Logosite.png'/>
                </div>

                <div className="div-menu">
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
                </div>
            </div>

        </>

    )
}

export default Menu