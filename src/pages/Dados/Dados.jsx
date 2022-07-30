import Header from '../../Componentes/Header/Header'
import Footer from '../../Componentes/Footer/Footer'
import Textos from '../../Componentes/Textos/Textos'
import GraficoUm from '../../assets/graficoataques.png'
import GraficoDois from '../../assets/graficomes.png'
import GraficoTres from '../../assets/graficoestado.png'
import GraficoQuatro from '../../assets/graficotipo.png'
import './Dados.css'

function Dados() {
    return (
        <>
            <Header> </Header>
            <Textos>
                <section className="section-dados">
                    <div className="card">

                        <p>
                            Em 2021, foram registrados 119 ataques contra mulheres jornalistas ou ataques de gênero.
                        </p>

                    </div>


                    <div className="dados">
                        <h1> Entre os 119 alertas registrados, em 45 estiveram presentes elementos que os caracterizam explicitamente como ataques de gênero</h1>
                        <div clasName="foto-dado-um">
                            <img src={GraficoUm} className="imagem-um" alt="Gráfico de violência - reprodução internet" />
                        </div>

                        <h1> O mês com mais registros de ataques foi setembro e o mês com menos registros foi janeiro</h1>
                        <div clasName="foto-dado-dois">
                            <img src={GraficoDois} className="imagem-dois" alt="Gráfico de violência - reprodução internet" />
                        </div>

                        <h1> O Sudeste foi a região que concentrou mais ataques, seguida por Nordeste e Centro-Oeste.
                        </h1>
                        <div clasName="foto-dado-tres">
                            <img src={GraficoTres} className="imagem-dois" alt="Gráfico de violência - reprodução internet" />
                        </div>


                        <h1> Os perpetradores da violência contra jornalistas variam de indivíduos a grupos articulados em rede, até agentes de desinformação ligados ao Estado
                        </h1>
                        <div clasName="foto-dado-quatro">
                            <img src={GraficoQuatro} className="imagem-dois" alt="Gráfico de violência - reprodução internet" />
                        </div>

                        <p>Dados e informações retiradas do Relatório Violência de gênero contra jornalistas feito pela Associação Brasileira de Jornalismo Investigativo</p>
                    </div>
                </section>
            </Textos>

            <footer>
                <Footer> Projeto Final desenvolvido por Ayane Martins | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>

        </>

    )
}

export default Dados