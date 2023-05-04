import React, { useState } from "react";

import Input from "../../components/input";
import Button from "../../components/Button";

import * as C from "./styles";

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Signup = () => {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signup } = useAuth();

    const handleSignup = () => {
        if(!email | !emailConf | !senha){
            setError("Preencha todos os campos");
            return;
        }else if(email !== emailConf){
            setError("Os epmails não são iguais");
            return
        }

        const res = signup(email, senha);

        if(res){
            setError(res);
            return;
        }
        alert("Usuario cadastrado com sucesso")
        navigate("/")
    }

    return (
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
            <Input
                type="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
                type="email"
                placeholder="Confirme seu E-mail"
                value={emailConf}
                onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
            <Input
                type="password"
                placeholder="Digite sua Senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <C.LabelError>{error}</C.LabelError>
            <Button Text="Inscrever-se" onClick={handleSignup} />
            <C.LabelSignin>
                Ja tem uma conta?
                <C.Strong>
                    <Link to="/">&nbsp;Entre</Link>
                </C.Strong>
            </C.LabelSignin>
            </C.Content>
        </C.Container>
    )
}
export default Signup