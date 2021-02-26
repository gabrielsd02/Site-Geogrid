import React, {Component} from "react";
import Botao from "./../../componentes/Botao"


export default class Integracao extends Component{

    render(){
        return <> 
        <div className="componente-centro">
            <div className="componente-integracao">
                <section className="section-container-geral"> 
                    <div className="texto">
                        <header>
                            <hgroup>
                                <h2 className="titulo-principal">Integração</h2>
                            </hgroup>    
                        </header>   
                        <p>
                            O Geogrid é uma autoridade quando o assunto é documentação de rede, desde 2010 focamos no desenvolvimento para que você tenha a melhor 
                            experiência em documentação de redes. Mas, também entendemos que informação precisa ser compartilhada e pensando nisso desenvolvemos uma 
                            biblioteca de API's para integração do Geogrid com qualquer sistema do mercado.
                        </p>
                        <br />
                        <p>
                            Hoje possuímos integração com Radius, Synsuite, ISPintegrator e diversos sistemas próprios de nossos clientes.
                        </p>
                        < br/>
                        <p>
                        Entendemos que a integração entre vários sistemas, torna o provedor independente, procure empresas que possuem foco em um produto específico, e de 
                        preferência para a integração entre eles.
                        </p>
                    </div>
                    <div className="logos">
                        <a href="http://www.radius.net.br/geogridmaps/">
                            <img alt="RadiusNet" className="imagem-radius" />
                        </a>
                        <a href="http://www.syntesis.com.br" >
                            <img alt="Syntesis" className="imagem-syntesis" />
                        </a>
                        <a href="https://www.elitesoft.com.br">
                            <img alt="EliteSoft" className="imagem-elite-soft" />
                        </a>
                    </div>
                </section>    
            </div>    
        </div> 
        <Botao />    

        </>
    }
}