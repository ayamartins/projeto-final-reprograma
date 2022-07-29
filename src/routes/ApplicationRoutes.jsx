import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio/Inicio'
import Dados from '../pages/Dados/Dados'
import Comentarios from '../pages/Comentarios/Comentarios'
import Sobre from '../pages/Sobre/Sobre'
import Menu from '../Componentes/Menu/Menu'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path="/" element={<Inicio />} /> 
                    <Route path="dados" element={<Dados />} />
                    <Route path="comentarios" element={<Comentarios />} />
                    <Route path="sobre" element={<Sobre />} />
                </Routes>
        </BrowserRouter>

    )
}

export default ApplicationRoutes
