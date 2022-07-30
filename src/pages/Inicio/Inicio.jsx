import Header from '../../Componentes/Header/Header'
import Footer from '../../Componentes/Footer/Footer'
import Texto from '../../Componentes/Textos/Textos'
import Ilustracao from "../../assets/ilustracaoviolenciag.jpg"
import './Inicio.css'

function Inicio() {
    return (
        <>

            <Header></Header>
            <h1>Violência de gênero contra jornalistas e comunicadoras</h1>


             <Texto>
            <section className="section_inicio">
                <div className="texto_inicio">
                    <p>
                    Em média a cada três dias profissionais da imprensa e veículos de comunicação são alvos de agressões direcionados, utilizando gênero, sexualidade ou orientação sexual como argumentos para a agressão. Em 2021, foram registrados 119 ataques de gênero envolvendo profissionais da imprensa. Os dados são do relatório “Violência de gênero contra jornalistas”, produzido pela Associação Brasileira de Jornalismo Investigativo - Abraji, com apoio do Global Media Defense Fund da Organização das Nações Unidas para a Educação, a Ciência e a Cultura - Unesco.
                    </p>
                    <p>
                    O estudo da Abraji, traz registros de ataques públicos contra “mulheres, cis e transgênero, meios de comunicação voltados para pautas feministas e agressões com características sexistas, homofóbicas, transfóbicas ou misóginas, classificadas como “ataques de gênero” e que podem vitimar homens e mulheres cis ou trans e pessoas não-binárias”. Entre os 119 casos, 38% foram classificados como ataques de gênero. Os alvos principais: a moral e reputação de jornalistas mulheres, ataques homofóbicos e transfóbicos.
                    </p>

                    <div clasName="foto_inicio">
                        <img src={Ilustracao} className="imagem1" alt="Ilustração contra a Violência de gênero no Jornalismo - reprodução internet" />
                    </div>

                    <p>
                    A pesquisa revela que, em 18% dos 119 casos, as vítimas foram atacadas por seu histórico profissional, por suas conexões pessoais ou profissionais ou por aquilo que representam para o jornalismo brasileiro. Entretanto a maioria dos ataques,60%, foi motivada pela temática da cobertura jornalística, de política, e 52% dos agressores identificáveis foram agentes do Estado.
                    </p>
                    <p>
                    Segundo a pesquisa, 69% dos episódios de violência com mais de um agressor foram iniciados por autoridades do governo e funcionários vinculados aos poderes do Estado. O estudo detalha ainda que, em 68% dos 119 casos registrados, as agressões se originaram no meio digital. A maioria desses casos,93%, foi de ataques verbais para difamar e desacreditar a vítima, além de ameaças e restrições na internet.
                    Os pesquisadores construíram uma nuvem de palavras com algumas das ofensas mais comuns: 
                    </p>

                    <div clasName="foto_inicio">
                        <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/03/NUVEM-DE-PALVRAS-PESQUISA.png?w=681"
                        className="imagem2"
                        alt="Nuvem com palavras ofensivas ditas para jornalistas - reprodução internet" />
                    </div>  

                    <p>
                    A Abraji monitora ataques a jornalistas no Brasil desde 2013 e alerta para o crescimento de ataques a classe ao longo dos anos. Entre 2020 e 2021, a associação registrou um aumento de 24,3% nos alertas de violações à liberdade de imprensa. A Associação considera ainda que um dos principais desafios para esse tipo de levantamento é a subnotificação de casos.
                    </p>

                    <p>
                    O Intuito deste site é criar uma rede de apoio e de combate à uma crescente cultura de violência e discriminação que violam os direitos humanos, entre eles a liberdade de expressão. O Brasil está vivenciando um aumento de discursos e práticas de ódio, não apenas contra jornalistas e comunicadores. Os motivos disso são complexos e envolvem vários fatores desde históricos a sociais. Ataques a jornalistas e comunicadores representam mais do que uma tentativa de silenciar e intimidar profissionais de veículos de imprensa, trata-se de uma evidente e gravíssima violação à Constituição e ao Estado democrático de Direito.
                    </p>
                </div>

            </section>
            </Texto>

            <footer>
                <Footer> Projeto Final desenvolvido por Ayane Martins | Aluna Reprograma - On17 | 2022  </Footer>
            </footer>
        </>

    )
}

export default Inicio