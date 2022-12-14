import Header from '../../Componentes/Header/Header'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import Footer from '../../Componentes/Footer/Footer'
import Textos from "../../Componentes/Textos/Textos"
import FotoSobre from '../../assets/ayane.jpg'
import './Sobre.css'


function Sobre() {
    return(
        <>
        <Header></Header>
        <div className="minibio">
            <div className="minibio_img">
            <img src={FotoSobre}  className="imagem-ayane" alt="Foto da desenvolvedora do site - Ayane Martins" />
            </div>
            <Textos>
            <p>
            Meu nome é Ayane Martins, tenho 28 anos, sou mineirinha, nascida e criada em Juiz de Fora. Jornalista, formada pela Universidade Federal de Juiz de Fora - UFJF, especialista em Marketing pela Universidade de São Paulo - USP e futura desenvolvedora Front-end pela Reprograma. Sempre gostei muito da área de comunicação, mas vivendo o processo de transição de carreira encontrei na tecnologia uma nova paixão e um mundo de possibilidades.
            </p>
    </Textos>
        </div>

            <section className='card-contato'>
                <div className='contato'>
                    <p>Instagram</p>
                    <a href= "https://www.instagram.com/ayamartins/" className="enter-repo" target="_blank">
                        <BsInstagram size={45} color="#111"/>
                    </a>
                </div>
                <div className='contato'>
                    <p>Linkedin</p>
                    <a href="https://www.linkedin.com/in/ayane-martins-487937198/" className="enter-repo" target="_blank">
                        <BsLinkedin size={45} color="#111"/>
                    </a>

                </div>
                <div className='contato'>
                    <p>GitGub</p>
                    <a href="https://github.com/ayamartins" className="enter-repo" target="_blank">
                        <BsGithub size={45} color="#111"/>
                    </a>

                </div >

            </section>

            <footer>
                <Footer> Página desenvolvida por Ayane Martins | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>
        </>
    )
}

export default Sobre