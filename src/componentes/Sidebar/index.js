import React from "react";
import {AiFillHome, AiFillPhone, AiFillLike} from "react-icons/ai";
import {RiFunctionLine} from "react-icons/ri";
import {FaHandsHelping, FaDatabase, FaMoneyCheck} from "react-icons/fa";
import  {BsFillGearFill} from "react-icons/bs";

import {Link} from "react-router-dom";

export default function Sidebar(){

    return <>
        <div className="componente-topo">
        <div className="conteudo">
            <div className="bloco-desktop">
                <div className="container-desktop">
                    <div className="elemento-logo">
                        <Link to="/">
                            <div className="logo">
                                <img alt="" />
                            </div>
                        </Link>    
                    </div>
                    <div className="elemento" data-name="ggm">   
                        <Link to="/" data-name="1" className="indice-slide indice-slide-ativo"><div></div>
                            <label className="label">
                                Início
                            </label>
                        </Link>    
                    </div>
                    <div className="elemento" data-name="sistema">
                        <Link to="/sistema" data-name="2" className="indice-slide"><div></div>
                            <label className="label">
                                O Sistema
                            </label>
                        </Link>    
                    </div>
                    <div className="elemento" data-name="funcionalidades">
                        <Link to="/funcionalidades" data-name="3" className="indice-slide"><div></div>
                            <label className="label">
                                Funcionalidades
                            </label>
                        </Link>    
                    </div>
                    <div className="elemento" data-name="integracao">
                        <Link to="/integracao" data-name="4" className="indice-slide"><div></div>
                            <label className="label">
                                Integração
                            </label>
                        </Link>    
                    </div>
                    <div className="elemento" data-name="requisitos">
                        <Link to="/hospedagem" data-name="5" className="indice-slide"><div></div>
                            <label className="label">
                                Hospedagem
                            </label>
                        </Link>    
                    </div>
                    <div className="elemento" data-name="area_cliente">
                        <Link to="/financeiro" data-name="6" className="indice-slide"><div></div>
                            <label className="label">
                                Financeiro
                            </label>
                        </Link>    
                    </div>
                    <div className="elemento" data-name="contato">
                        <Link to="contato" data-name="7" className="indice-slide"><div></div>
                            <label className="label">
                                Contato
                            </label>
                        </Link>    
                    </div>
                    <div className="elemento" data-name="teste_agora">
                        <Link to="/teste" data-name="8" className="indice-slide"><div></div>
                            <label className="label">
                                Teste agora
                            </label>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="elementos-indice-slide">
                <div className="elemento">
                    <div data-name="1" className="indice-slide"><div></div></div>
                </div>
                <div className="elemento">
                    <div data-name="2" className="indice-slide"><div></div></div>
                </div>
                <div className="elemento">
                    <div data-name="3" className="indice-slide"><div></div></div>
                </div>
                <div className="elemento">
                    <div data-name="4" className="indice-slide"><div></div></div>
                </div>
                <div className="elemento">
                    <div data-name="5" className="indice-slide"><div></div></div>
                </div>
                <div className="elemento">
                    <div data-name="6" className="indice-slide"><div></div></div>
                </div>
                <div className="elemento">
                    <div data-name="7" className="indice-slide"><div></div></div>
                </div>
                <div className="elemento">
                    <div data-name="8" className="indice-slide"><div></div></div>
                </div>
            </div>
        </div>
    </div>


    </>

}


