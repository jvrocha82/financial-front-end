import React from "react";
import { useNavigate } from "react-router-dom";

import * as C from "./styles";
//COMPONENTS
import Header from "../../components/Header"
import Button from "../../components/Button";

import useAuth from "../../hooks/useAuth";
const Home = () =>{
    const {signout} = useAuth();
    const navigate = useNavigate();

    return (
        <C.Container>
            <Header Text="Header" Path="/Home"/>
            <C.Title>Home</C.Title>
       
            <Button Text="Sair" onClick={() =>[signout(), navigate("/")]}/>      
            
              </C.Container>
    )
}
export default Home