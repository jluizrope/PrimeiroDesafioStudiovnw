
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./pofcomponents/Modal";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
        }
    }

    handleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        });
    }

    render() {
        return (

            <section>
                <div>

                    <body className="body" id="quartodesafio">
                        <header className="header">
                            <div className="headermenu">
                                <div className="headermenu-netflix">
                                    <img src="./assets/netflix.png" alt="Neflixlogin" className="headermenu-netflix-img" />
                                </div>
                                <nav className="headermenu-opções">
                                    <ul className="headermenu-opções-lista">
                                        <li className="headermenu-opções-lista-isfam">Início</li>
                                        <li className="headermenu-opções-lista-isfam" >Séries</li>
                                        <li className="headermenu-opções-lista-isfam">Filmes</li>
                                        <li className="headermenu-opções-lista-isfam">Adicionados recentemente</li>
                                        <li className="headermenu-opções-lista-isfam">Minha lista</li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="headermenu-bisp">
                                <div className="headermenu-bisp-busca">
                                    <img src="./assets/search.png" alt="Procurar" className="headermenu-bisp-busca-img" />
                                    <input type="text" placeholder="Títulos, gente e gêneros" className="headermenu-bisp-buscaInput" />
                                </div>
                                <div className="headermenu-bisp-i">
                                    <p className="headermenu-bisp-i-img">INFANTIL</p>
                                </div>
                                <div className="headermenu-bisp-s">
                                    <img src="./assets/sininho.png" alt="Notificação" className="headermenu-bisp-s-img" />
                                </div>
                                <div className="headermenu-bisp-p">
                                    <img src="./assets/account.png" alt="Conta" className="headermenu-bisp-p-img" />
                                </div>
                            </div>
                        </header>
                        <main className="main">
                            {/* <section className="main-section"> */}
                            <div className="main-section-amilismi">
                                <img src="" className="" />
                                <p className="mainsection-p"></p>
                                <button className="mainsection-b-assistir">&#9658;Assistir</button>
                                <button className="mainsection-b-minhalista">+ Minha lista</button>
                                <button className="mainsection-b-mais informações">
                                    <span className="mainsection-b-maisinformações-img">i</span>Mais informações
					        </button>
                            </div>
                            <div className="main-section-slides">
                                <h3 className="main-section-slides-films-ml">Minha lista</h3>
                                <div className="main-section-slides-films-ml-milis">
                                    <img src="./assets/aredesocial.jpg" className="main-section-slides-filmimg" />
                                    <img src="./assets/billgatesocodigo.jpg" className="main-section-slides-filmimg" />
                                    <img src="./assets/genioindomavel.webp" className="main-section-slides-filmimg" />
                                    <img src="./assets/limitless.webp" className="main-section-slides-filmimg" />
                                    <img src="./assets/tau.webp" className="main-section-slides-filmimg" />
                                    <p className="main-section-slides-films-ml-milis-seta" onclick="nextslides()">&rsaquo;</p>
                                </div>
                                <div className="main-section-slides-films-ml-milisback">
                                    <p className="main-section-slides-films-ml-milis-seta" >&lsaquo;</p>
                                    <img src="./assets/betterthanus.webp" className="main-section-slides-filmimg" />
                                    <img src="./assets/anon.webp" className="main-section-slides-filmimg" />
                                    <img src="./assets/deslize.jpg" className="main-section-slides-filmimg" />
                                    <img src="./assets/salvation.jpg" className="main-section-slides-filmimg" />
                                    <img src="./assets/theiland.webp" className="main-section-slides-filmimg" />
                                </div>
                                <h3 className="main-section-slides-films-fil">Filmes</h3>
                                <div className="main-section-slides-films-filmes">
                                    <img src="./assets/nextgen.webp" className="main-section-slides-films-filmes-2A" />
                                    <img src="./assets/copiasdevoltaavida.webp" className="main-section-slides-films-filmes-2A" />
                                    <img src="./treinoparaavidacoachcarter.webp" className="main-section-slides-films-filmes-2A" />
                                </div>
                            </div>
                        </main>

                        <div>
                            <button onClick={this.handleModal}>Clique aqui</button>
                            {this.state.modalOpen && <Modal />}
                        </div>
                    </body>
                </div>
            </section>

        )
    }
}

export default App;