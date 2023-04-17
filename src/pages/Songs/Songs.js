import styled from "styled-components";
import { General } from "../../assets/styles/General";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Songs = () => {
    const getData = localStorage.getItem("data");
    const dataObject = JSON.parse(getData);
    const navigate = useNavigate();
    const [data, setData] = useState('')

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/tracks", { headers: { "Authorization": `Bearer ${dataObject.token}` }, })
        promise.then((resposta) => { setData(resposta.data) })
        promise.catch(erro => { console.log(erro.response.data) })
    }, [dataObject.token]);

    if (!data) {
        return (
            "Carregando..."
        )
    }
    return (
        <General>
            <Header />
            {!dataObject ? <h1 style={{ fontSize: "3em", marginTop: "2em", cursor: "pointer" }} onClick={() => navigate('/')} >FAÇA LOGIN</h1> :
                <>
                    {data.map((track) => (
                        <Section>
                            <h1>{data[0].name}</h1>
                            <p>Batida</p>
                            <iframe width="560" height="315" src={track.link1} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
                            <p>Acordes</p>
                            <iframe width="560" height="315" src={track.link2} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
                            <p>Batida + Acordes</p>
                            <iframe width="560" height="315" src={track.link3} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
                            <p>Ritmo</p>
                            <iframe width="560" height="315" src={track.link4} title="YouTube video player" allowFullScreen></iframe>
                        </Section>
                    ))}
                </>
            }
        </General>
    )
}
const Section = styled.div`
margin: 2em auto 0 auto;
padding-bottom: 2em;
>h1{
    font-size: 2em;  
}
>p{
    font-size: 1.5em;
    margin: 1em 0;
}
@media(max-width: 56em){
    >iframe{
        width: 90%;
        min-height: 15em;
    }
}
`


export default Songs;