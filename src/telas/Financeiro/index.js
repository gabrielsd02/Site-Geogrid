import React, {Component} from "react";
import Botao from "./../../componentes/Botao"

export default class Financas extends Component{

    render(){
        return <> 
            <div className="componente-centro">
                <div className="componente-financeiro">
                    <section className="section-container-geral">
                        <section className="section-cnpj">
                            <header>
                            <hgroup>
                                <h2 className="titulo-principal">Financeiro</h2>
                                <h3>Tenha acesso a seus boletos com facilidade</h3>
                            </hgroup>
                            </header>
                            <div className="linha">
                                <div className="campo">
                                    <input className="input" type="text" name="cnpj" placeholder="Digite o seu cnpj" />
                                </div>
                            </div>
                            <div className="linha">
                                <div className="campo">
                                    <button type="button" name="buscar" className="button" data-label="Buscar">
                                        <span>
                                            Buscar
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="linha">
                                <div className="campo texto-aviso">
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <section className="section-faturas">

                        </section> */}
                    </section>
                </div>            
            </div>   
            <Botao />    
        </>
    }
}