import styled from "styled-components";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const promise = axios.get("http://localhost:5000/sessions/user")
        promise.then((resposta) => { setData(resposta.data); localStorage.setItem("data", JSON.stringify(data))})
        promise.catch(erro => { console.log(erro.response.data) })
    }, [data]);
    
    return(
        <Geral>  
            <Header/> 
            {!data ? <h1 style={{ fontSize: "3em", marginTop: "2em", cursor: "pointer" }} onClick={()=> navigate('/')} >FAÇA LOGIN</h1> :         
            <Main>  
                <h1>Você que sempre sonhou em tocar o violão <br/>
                Chegou o seu momento!<br/>
                De uma maneira simples e objetiva você vai tocar suas músicas preferidas.</h1>                        
                <h2>Em que esse curso vai ajudar você</h2>
                <Section>                    
                    <div>Sempre sonhei em tocar o violão</div>
                    <div>Eu não tenho disponibilidade de sair de casa para as aulas</div>
                    <div>Quero distrair minha mente da rotina estressante</div>
                    <div>Quero tocar nas reuniões de família, resenha com amigos...</div>
                    <div>Não tenho muito tempo disponível para praticar</div>
                    <div>Quero homenagear um ente querido</div>                   
                </Section>
            </Main>
            }

        </Geral>
    )
}

const Geral = styled.div`
width: 100%;
min-height: 100vh;
background-color: #e5e5e5;
text-align: center;
font-family: 'Alkatra', cursive;
position: relative;
`
const Main = styled.div`
width: 95%;
min-height: .5vh;
border-left: 2px solid #fff;
margin: auto;
padding-top: 1em;
font-size: 3em;
font-family: 'Roboto', sans-serif;
>h1{
    width: 100%;
    font-weight: 500;
    line-height: 1.3;
}>h2{
    background-color: #2e2e2e;
    color: #fff;
    margin: .8em 0 .2em 0;
    padding: .8em 0;
    border-radius: 1em;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: 700;
}@media(max-width: 56em){
    font-size: 2em;
}
`
const Section = styled.div`
width: 80%
min-height: 1vh;
flex-wrap: wrap;
display: flex;
border-top: 2px solid #fff;
background-color: #fff;
font-family: 'Alkatra', cursive;
border-radius: .4em;
padding-bottom: 1em;
>div{
    width: 40%;
    min-height: .1em;
    margin: 1em auto;  
    font-size: .5em; 
}
`


export default Home;