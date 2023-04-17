import styled from "styled-components";
import { General } from "../../assets/styles/General";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const promise = axios.get("http://localhost:5000/sessions/user")
        promise.then((resposta) => { setData(resposta.data)})
        promise.catch(erro => { console.log(erro.response.data) })
    }, [data]);
    
   
    return (
        <General>
            <Header />
            
            {!data ? <h1 style={{ fontSize: "3em", marginTop: "2em", cursor: "pointer" }} onClick={()=> navigate('/')} >FAÇA LOGIN</h1> : <>
            <Section>
                <h1>Aulas de violão</h1>
                <h2>Método simples baseado em 3 pilares:</h2>
                <p>1. Planejamento: a forma como iremos executar os passos para chegar no objetivo de tocar o violão;</p>
                <p>2. Repetição: ponto principal para o desenvolvimento - um pouco todos os dias;</p>
                <p>3. Adaptação: colocar o estudo dentro das suas particularidades: seu tempo, seu entusiamo, seu desenvolvimento. É preciso que o estudo se adapte a você</p>
            </Section>
            <Section>
                <h1>O Violão</h1>
                <h2>Vamos conhecer algumas partes importantes do violão</h2>
                <img src="https://canone.com.br/images/stories/users/62/violao/partes_violao.png" alt="Violão"></img>
                <p style={{ fontStyle: 'italic', fontSize: '1em' }}>Fonte: canone.com.br</p>
                <ol>
                    <li>Mão: Segura as cordas e nela são afixadas as tarrachas, normalmente;</li>
                    <li>Tarraxas: Enrola ou afrouxa as cordas, elemento essencial para a afinação do violão;</li>
                    <li>Pestana: Une a mão ao braço do violão, direciona as cordas para as tarraxas;</li>
                    <li>Braço: Parte onde se localizam: cordas e trastes;</li>
                    <li>Trastes: Separa o braço em casas, auxilia na localização das notas no instrumento;</li>
                    <li>Casas: Distância entre um traste e outro, localização das notas no braço do instrumento;</li>
                    <li>Boca: Permite que o som saia do instrumento;</li>
                    <li>Rastilho: Apoio das cordas na ponte, definindo a altura correta que devem estar em relação ao braço do instrumento;</li>
                    <li>Cavalete: Prende as cordas ao corpo do violão;</li>
                    <li>Corpo: Permite que o som das cordas seja amplificado</li>
                </ol>
            </Section>
            <Section>
                <h1>As cordas</h1>
                <p>O violão é formado, normalmente, por 6 cordas que tem sua sequência organizada de baixo para cima:</p>
                <img src="https://static.wixstatic.com/media/a675fb_6cc65244d562456491469f77cbfaeb14~mv2.jpg/v1/fill/w_600,h_312,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/notas-das-cordas.jpg" alt="Cordas do violão" />
                <p style={{ fontStyle: 'italic', fontSize: '1em' }}>Fonte: aulaviolaodeboa.com</p>
                <p style={{ textAlign: 'left', fontSize: '1em', marginTop: '1em' }}>Temos ainda algumas outras partes do violão, mas inicialmente essas são as que julgo mais importantes para o primeiro contato.</p>
            </Section>
            <Section>
                <h1>As mãos</h1>
                <p>Forma de destro, se canhoto inverter as mãos</p>
                <img src="https://3.bp.blogspot.com/-NdDEOpV8tG4/V0YcSqGBLlI/AAAAAAAABGI/rswtocxOuksmd07V6haTCE946AQsdf_UACLcB/s640/posi%25C3%25A7%25C3%25A3o%2Bdas%2Bm%25C3%25A3os%2Bno%2Bviol%25C3%25A3o.jpg" alt="Mãos para tocar o violão" />

            </Section>
            <Section style={{ background: 'red' }}>
                <h1>
                    <Link to={'/songs'} style={{ textDecoration: "none", color: "#000" }}>Com todas essas ferramentas à disposição vamos iniciar a parte prática. Pra tocar nada melhor que estudar tocando. Bora meter a mão nas cordas?!</Link>
                </h1>
            </Section>
            </>}
        </General>
    )
}
const Section = styled.div`
padding: 1em 2em;
font-family: 'Alkatra', cursive;
border-bottom: 2px solid #fff;
>h1{
    font-size: 2em;     
}
>h2{
    margin-top: .5em;
    font-size: 1.8em;
}
>img{
    margin-top: 1em;
    width: 90%;
}
>p{
    font-size: 1.5em;
    line-height: 1.5;    
}
>ol{
    width: 90%;
    padding: 2em;
    margin: auto;
    text-align: left;    
    list-style-type: number;  
    line-height: 2.5;  
}@media(max-width: 56em){
    width: 80%;
    margin: auto;
}
`;
export default Course;