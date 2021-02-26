import React, {Component} from "react";
import Botao from "./../../componentes/Botao"

export default class Sistema extends Component{

    render(){
        return <>
            <div className="componente-centro">
                <div className="componente-porque-ggm">
                    <section className="section-container-geral">
                        <header>
                            <hgroup>
                                <h2 className="titulo-principal">O Sistema</h2>
                            </hgroup>
                        </header>
                        <div className="img">
                            <img alt="Sistema" />
                        </div>
                        <p>
                            Na escalada e no montanhismo, desportistas e aventureiros vivem em busca de superar desafios e alcançar os lugares mais altos, 
                            aqueles onde poucos tiveram a coragem e a determinação de chegar. Nessas atividades, aquele que «abre a via» é o mais respeitado dentre todos, 
                            pois é ele que escolhe o melhor caminho e fixa os pontos de segurança, para que a chegada ao topo seja eficiente e tranquila.
                        </p>
                        <p>
                            Na área de Documentação de Redes Ópticas para provedores, o mercado brasileiro vive uma verdadeira escalada na busca de soluções eficientes para o setor.
                            O Sistema GeoGrid é pioneiro nessa área e desde 2010 é líder de mercado, oferecendo ferramentas práticas e tecnológicas no referenciamento de redes de 
                            fibra óptica.
                        </p>
                        <p>
                            O GeoGrid é um software que utiliza tecnologia de ponta, garantindo segurança e praticidade no cadastro, controle e armazenamento de dados de redes.
                        </p>
                        <p>
                            Integrando todos os cadastros relativos ao uso da infraestrutura em qualquer cidade do mundo com a visualização de mapas georeferenciados e 
                            imagens de satélite, o GeoGrid é licenciado pelo Google, garantindo a melhor tecnologia de georeferenciamento e mapas do mercado.
                        </p>
                        <p>
                            O sistema pode ser acessado a partir de qualquer terminal conectado a internet, não estando limitado a um único computador, disponível 24 horas por 
                            dia, acessível a todos os colaboradores da empresa.
                        </p>
                        <p>
                            O GeoGrid leva você ao topo, com um sistema prático, eficiente e responsivo, que é a solução definitiva para provedores e afins.
                        </p>
                        <div className="conteudo-em-azul">
                            <hgroup>
                                <h2 className="margem-topo">Com o GeoGrid tudo fica fácil e seguro:</h2>
                            </hgroup>
                            <p>
                                Cadastrar postes, desenhar cabos, instalar caixas de emmenda e terminais de atendimento
                            </p>
                            <p>
                                Derivar cabos, instalar equipamentos e documentar conexões e fusões, de forma simples e prática;
                            </p>
                            <p>
                                Imprimir diagramas de fusão, facilitando o trabalho do seu técnico em campo;
                            </p>
                            <p>
                                Visualizar a disponibilidade de fibras e portas de equipamentos próximos ao endereço do seu futuro cliente.
                            </p>

                        </div>
                        <hgroup>
                            <h2 className="video-apresentacao">
                                Vídeo de apresentação:
                            </h2>
                        </hgroup>
                        <p>
                            Assista nosso vídeo de apresentação do sistema e veja como é fácil chegar ao topo.
                        </p>
                        <iframe src="https://www.youtube.com/embed/zdUVEN4-f1E" allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture" >
                        </iframe>            
                    </section>
                </div>
            </div>
            <Botao />
        </>    
    }
}