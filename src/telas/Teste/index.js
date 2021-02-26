import React, { Component, useState } from "react";

export default function Teste () {

    const [ clickOutros, alteraClickOutros ] = useState(false);

    return <> 

        <div className="componente-centro">
            <div className="componente-teste-agora">
                <section className="section-container-geral">
                    <header>
                        <h2 className="titulo-principal">Teste agora!</h2>
                        <h3>
                            Faça agora mesmo o seu cadastro, sem compromisso!
                        </h3>
                        <p>
                            Preencha o campo CNPJ, confira todos os dados, principalmente o seu email e clique em testar.
                        </p>
                        <p>
                            Você receberá uma cópia do cadastro em seu e-mail.
                        </p>
                        <p>
                            Em alguns minutos, nosso time vai lhe enviar um e-mail com as informações de acesso ao sistema gratuitamente pelo período de 21 dias. 
                        </p>
                        <p>
                            Sugerimos que para o teste você faça o cadastro da sua rede real, dessa forma as dúvidas aparecem e você pode atestar a qualidade de nosso suporte pelo Chat. E o melhor é que ao adquirir o sistema tudo o que estiver cadastrado em nosso servidor de testes será migrado para o servidor definitivo, seu ou locado.
                        </p>
                        <p>
                            Você não perde nada.
                        </p>
                    </header>
                    <div className="linha">
                        <div className="campo-teste campo-cnpj">
                            <div className="input pseudo-input">
                                <input className="input" name="cnpj" placeholder="CNPJ" />
                                <img className="certo" src="geogridlayout/imagens/correto.png" alt="" /> 
                                <img className="errado" src="geogridlayout/imagens/errado.png" alt="" />
                            </div>
                        </div>
                        <div className="campo-teste invisivel">
                            <input className="input" name="cep" placeholder="CEP" disabled=""/>
                            <img className="" src="" alt="" />
                        </div>
                    </div>
                    <div className="linha" style={{display: "none"}} >
                        <div className="campo-teste">
                            <input className="input" name="razao_social" placeholder="Razão social" disabled="" />
                        </div>
                        <div className="campo-teste">
                            <input className="input" name="nome_fantasia" placeholder="Nome fantasia" />
                        </div>
                    </div>
                    <div className="linha" style={{display: "none"}}>
                        <div className="campo-teste campo-endereco">
                            <input className="input" name="endereco" placeholder="Endereço" disabled="" />
                            <input className="input" name="numero" placeholder="Número" disabled="" />
                        </div>
                        <div className="campo-teste">
                            <input className="input" name="bairro" placeholder="Bairro" />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="campo-teste">
                            <input className="input" name="email" placeholder="E-mail" />
                        </div>
                        <div className="campo-teste invisivel">
                            <input className="input" name="cidade" placeholder="Cidade" />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="campo-teste">
                            <input className="input" name="responsavel" placeholder="Responsável" />
                        </div>
                        <div className="campo-teste">
                            <input className="input" name="telefone" placeholder="Telefone" />
                        </div>
                    </div>
                    <div className="linha">
                        <div className="campo-teste">
                            <textarea className="textarea" name="mensagem" placeholder="Mensagem"></textarea>
                        </div>
                        <div className="campo-teste campo-como-nos-encontrou">
                            <h3 style={{ display: clickOutros ? 'none' : 'block' }}>Como conheceu o GeoGrid?</h3>
                            <div style={{ display: clickOutros ? 'none' : 'flex' }} className="bloco-radio">
                                <div className="bloco-esquerdo">
                                    <label className="radio-elemento label"><input type="radio" value="Google" name="campo_radio" className="radio" />Google</label>
                                    <label className="radio-elemento label"><input type="radio" value="Indicação" name="campo_radio" className="radio"/>Indicação</label>
                                    <label className="radio-elemento label"><input type="radio" value="Feiras e eventos" name="campo_radio" className="radio"/>Feiras e eventos</label>
                                    <label className="radio-elemento label"><input type="radio" value="Revistas do setor" name="campo_radio" className="radio"/>Revistas do setor</label>
                                    <label className="radio-elemento label"><input type="radio" value="Cursos" name="campo_radio" className="radio"/>Cursos</label>
                                    <label className="radio-elemento label"><input type="radio" value="E-book" name="campo_radio" className="radio"/>E-book</label>
                                </div>
                                <div className="bloco-direito">
                                    <label className="radio-elemento label"><input type="radio" value="Facebook" name="campo_radio" className="radio"/>Facebook</label>
                                    <label className="radio-elemento label"><input type="radio" value="Youtube" name="campo_radio" className="radio"/>Youtube</label>
                                    <label className="radio-elemento label"><input type="radio" value="Whatsapp" name="campo_radio" className="radio"/>Whatsapp</label>
                                    <label className="radio-elemento label"><input type="radio" value="Instagram" name="campo_radio" className="radio"/>Instagram</label>
                                    <label className="radio-elemento label"><input type="radio" value="Grupos" name="campo_radio" className="radio"/>Grupos</label>
                                    <label id="outros" className="radio-elemento label"><input type="radio" value="Outros" name="campo_radio" onClick={() => { alteraClickOutros(true) }} className="radio"/>Outros</label>
                                </div>
                            </div>
                            <textarea className="textarea" name="como_nos_encontrou" placeholder="Como nos encontrou?" style={{display: !clickOutros ? "none" : "block"}}></textarea>
                            <img alt="voltar" className="seta-voltar" name="voltar" style={{display: !clickOutros ? "none" : "block"}} onClick={() => { alteraClickOutros(false) }}/>
                        </div>
                    </div>
                    <div className="linha linha-testar">
                        <div className="campo-teste">
                            <button type="submit" name="salvar" className="button" data-label="Testar agora!" disabled="disabled">
                                <span>
                                    Testar agora!
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="linha linha-aviso">
                        <div className="campo-teste">
                            <p></p>
                        </div>
                    </div>
                </section>
            </div> 
        </div>   

    </>

}   