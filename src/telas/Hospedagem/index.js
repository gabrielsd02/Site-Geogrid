import React, {Component} from "react";
import Botao from "./../../componentes/Botao"


export default class Hospedagem extends Component{

    render(){
        return <> 
            <div className="componente-centro">  
                <div className="componente-requisitos">
                    <section className="section-container-geral" id="secaoContainer">
                        <header>
                            <hgroup>
                                <h2 className="titulo-principal">Hospedagem</h2>
                            </hgroup>
                        </header>

                        <img alt="" className="amazon-img" />

                        <h2>Todo o serviço do GeoGridMaps é hospedado na Amazon AWS.</h2>

                        <p>Processamento de dados dedicado, replicação de instancias e backup automatizado,
                        tudo para que você tenha a melhor experiencia possível no uso do GeoGrid.</p>

                        <br/>
                        <p>E o que é melhor, já está incluso na sua mensalidade!</p>
                        
                        <br/>
                        <p>
                            O serviço da Amazon é utilizado por milhares de empresas, dentre elas:
                        Netflix, Trello, Coursera, EasyTaxi, Gol Linhas Aéreas, <br />   
                        Nubank, e etc...</p>                 
                    </section>
                </div>
            </div>
            <Botao />
        </>
    }
}