import React from "react";
import {Link} from "react-router-dom";

export default function Botao(){

    return <> 
    
        <Link to="teste" className="button-body-fixed-bottom">
            <div className="cube flip-to-drop">
                <div className="default-state">
                    <span>Testar Agora!</span>
                </div>
                    <div className="active-state">
                        <a>
                            Grátis por
                            <span> 21 dias</span>    
                        </a>                          
                </div>    
            </div>    
        </Link>
    
    </>

}