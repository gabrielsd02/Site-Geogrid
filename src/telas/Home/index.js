import React, {Component} from "react";
import Botao from "./../../componentes/Botao"


export default class Home extends Component {
    
   render() {
        return <>
            <div className="componente-centro"> 
                <div className="div-inteira-um" data-marcador="1">
                    <div className="container-tela">
                        <div className="texto-saudacao">
                            <img src="../assets/imagens/logoGeogrid.png" alt="Logo Geogrid"></img>
                            <h2>Bem-Vindo(a) ao Topo</h2>
                            <h3>
                                A solução definitiva
                                <br></br>
                                para documentação de redes
                                <br></br>
                                de fibra óptica.    
                            </h3>
                        </div>
                        <img className="img-tela-ggm" alt="Computador"></img>
                    </div>
                </div>
                <div className="div-inteira-dois data-ordem2">
                    <div className="container-tela-dois">
                        <a href="/sistema">
                            <h2 className="aconcagua">Aconcágua a nova versão do GeoGrid!
                            <br></br>
                            <span className="sub-link">
                                Conheça <span className="destaque">o sistema pioneiro </span>
                                na documentação de redes.
                            </span>
                            </h2>
                        </a>
                    </div>
                 </div>
                <div className="div-inteira-tres data-ordem3">
                    <div className="container-tela-tres">
                        <a href="/funcionalidades">
                            <h2 className="provedor">Projetado para o seu provedor!
                            <br></br>
                            <span className="sub-link">
                                Conheça as <span className="destaque">funcionalidades </span>
                                do GeoGrid.
                            </span>
                            </h2>
                        </a>
                    </div>
                </div>
                 <div className="div-inteira-quatro data-ordem4">
                    <div className="container-tela-quatro">
                        <a href="/integracao">
                            <h2 className="conexao">Conexão total com a liberdade!
                            <br></br>
                            <span className="sub-link">
                                Confira as possibilidades de <span className="destaque">integração </span>
                                do GeoGrid.
                            </span>
                            </h2>
                        </a>
                    </div>
                </div>
                <div className="div-inteira-cinco data-ordem5">
                    <div className="container-tela-cinco">
                        <a href="/hospedagem">
                            <h2 className="facilidade">Facilidade, agilidade e segurança!
                            <br></br>
                            <span className="sub-link">
                                Agora, <span className="destaque">o GeoGrid hospeda </span>
                                todos os seus clientes na <span className="destaque">Amazon</span>
                            </span>
                            </h2>
                        </a>
                    </div>
                </div>    
                <div className="div-inteira-seis data-ordem6">
                    <div className="container-tela-seis">
                        <a href="/financeiro">
                            <h2 className="acesso">Tenha acesso as notas fiscais e boletos da sua empresa!
                            </h2>
                        </a>
                    </div>
                </div>
                <div className="div-inteira-sete data-ordem7">
                    <div className="container-tela-sete">
                        <a href="/contato">
                            <h2 className="suporte">Contato direto sem complicações!
                            <br></br>
                            <span className="sub-link">Fale Conosco.</span>
                            </h2>
                        </a>
                    </div>
                </div>
                <div className="div-inteira-oito data-ordem8">
                    <div className="container-tela-oito">
                        <a href="/teste">
                            <h2 className="experiencia">Nada como a experiência de tentar!
                            <br></br>
                            <span className="sub-link">
                                <span className="destaque">Teste agora </span>
                                gratuitamente o Aconcágua, a nova versão do Geogrid.
                            </span>
                            </h2>
                        </a>
                    </div>
                 </div>
            </div> 
            <Botao />
        </>
    }        
} 