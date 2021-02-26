import React, {Component} from "react";
import Botao from "./../../componentes/Botao"

export default class Suporte extends Component{

    render(){
        return <> 
            <div className="componente-centro">
                <div className="componente-encontre-nos">
                    <section className="section-container-geral">
                        <section className="section-mapa">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.0647877085285!2d-49.0111548813822!3d-28.482866417830007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952142e5237ea0f5%3A0x6a7816e2d387989a!2sCentro+Comercial+EJB!5e0!3m2!1spt-BR!2sbr!4v1459865501255" ></iframe>
                        </section>
                        <section className="section-textos">
                            <section>

                                <header>
                                    <hgroup>
                                        <h2>Contato</h2>
                                    </hgroup>
                                </header>

                                <p>Av. Marcolino Martins Cabral</p>

                                <p>Edifício EJB - 11 Andar - Sala 1115</p>

                                <p>Tubarão - SC - Brasil</p>

                                <p>comercial@geogridmaps.com.br</p>

                                <p>(48) 3622-0702</p>

                            </section>
                        </section>
                    </section>
                </div>
            </div>
            <Botao />
        </>
    }
}