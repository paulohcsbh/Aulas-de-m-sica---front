import { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <Geral>
            <Container>
                <Logo src={logo} alt='Violão'></Logo>
                <h1>Aprendizado do violão de uma maneira simples e objetiva, totalmente adaptada a você</h1>
                <ContainerInput>
                    <form>
                        <InputEmail type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required disabled = {false}></InputEmail>
                        <InputPassword type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value) } required disabled={false}></InputPassword>
                        <SignInButton>Entrar</SignInButton>
                    </form>
                    <SignUp>Não tem uma conta? Criar conta!</SignUp>
                </ContainerInput>
            </Container>
        </Geral>
    )
}
const Geral = styled.div`
width: 100%;
min-height: 100vh;
background-color: #e5e5e5;
padding: 2em 0;
text-align: center;
font-family: 'Alkatra', cursive;
`
const Container = styled.div`
margin: auto;
>h1{
    margin-bottom: 2em;
    font-size: 1.5em;
}
`
const Logo = styled.img`
width: 50%;
`
const ContainerInput = styled.div`
width: 90%;
text-align: center;
margin: auto;
padding: 1em 0;
border: 2px solid #fff;
border-radius: .8em;
background-color: #ccc;
`
const InputEmail = styled.input`
width: 50%;
height: 3em;
margin-top: 1.6em;
font-size: 1em;
font-weight: 600;
border: none;
border-radius: .4em;
padding-left: .7em;
font-family: 'Lexend Deca', sans-serif;
opacity: .4;
@media(max-width: 56.25em){
    width: 90%;
}
`
const InputPassword = styled(InputEmail)`
`
const SignInButton = styled.button`
width: 22%;
height: 3em;
font-size: 1em;
color: #fff;
display: block;
background-color: #52b6ff;
margin: 4em auto;
border-radius: .8em;
border: none;
cursor: pointer;
@media(max-width: 56.25em){
    width: 40%;
}
`
const SignUp = styled.p`
width: 242px;
height: 17px;
margin: auto;
font-weight: 400;
color: #fff;
cursor: pointer;
text-decoration: underline;
font-size: 1em;
`
export default SignIn;