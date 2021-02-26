// Rotas aqui
import React from 'react';
import {  BrowserRouter,  Route, Switch} from "react-router-dom";
import Home from '../telas/Home';
import Sistema from '../telas/Sistema';
import Funcionalidades from '../telas/Funcionalidades';
import Integracao from '../telas/Integracao';
import Hospedagem from '../telas/Hospedagem';
import Financas from '../telas/Financeiro';
import Suporte from '../telas/Suporte';
import Teste from '../telas/Teste';
import "./.././assets/css/global.css";
import SideBar from "./../componentes/Sidebar";

export default function Rotas(){
    return <>
        <BrowserRouter >
            <SideBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sistema" component={Sistema} />
                <Route exact path="/funcionalidades" component={Funcionalidades} />
                <Route exact path="/integracao" component={Integracao} />
                <Route exact path="/hospedagem" component={Hospedagem} />
                <Route exact path="/financeiro" component={Financas} />
                <Route exact path="/contato" component={Suporte}  />
                <Route exact path="/teste" component={Teste} />
            </Switch>
           
        </BrowserRouter> 
    </>
}
  
    
