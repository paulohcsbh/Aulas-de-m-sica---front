import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { General } from '../../assets/styles/General';
import Header from '../../components/Header';
import axios from 'axios';

const Contact = () => {
  const [message, setMessage] = useState('');
  const getData = localStorage.getItem("data");
  const dataObject = JSON.parse(getData);
  const navigate = useNavigate();
  const [desabilitar, setDesabilitar] = useState(false);

  function sendMessage(e){
    setDesabilitar(true) 
    e.preventDefault()
    const requisicao = axios.post("http://localhost:5000/contact", { text: message }, { headers: { "Authorization": `Bearer ${dataObject.token}` }, })
    requisicao.then((a) => { alert("Mensagem enviada com sucesso!"); setDesabilitar(false); setMessage("")})
    requisicao.catch(() => { alert("Email ou senha inválidos"); setDesabilitar(false) })
}  

  return (
    <General>
      <Header />
      {!dataObject ? <h1 style={{ fontSize: "3em", marginTop: "2em", cursor: "pointer" }} onClick={()=> navigate('/')} >FAÇA LOGIN</h1> :
        <ContainerInput>
          <h1>Dúvidas, sugestões, pedidos de música: envie uma mensagem</h1>
          <form onSubmit={sendMessage}>
            <InputMessage type='text' placeholder='Escreva sua mensagem' value={message} onChange={(e) => setMessage(e.target.value)} required disabled={desabilitar}></InputMessage>
            <MessageButton type='submit'>Enviar</MessageButton>
          </form>
        </ContainerInput>
      }
    </General>
  )
}

const ContainerInput = styled.div`
width: 90%;
text-align: center;
border: 2px solid #fff;
margin: 1em auto;
background-color: #ccc;
border-radius: .8em;
padding: 2em 0;
>h1{
  font-size: 2em;
}
`
const InputMessage = styled.input`
width: 80%;
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
const MessageButton = styled.button`
width: 22%;
height: 3em;
font-size: 1em;
color: #fff;
display: block;
background-color: #52b6ff;
margin: 2em auto;
border-radius: .8em;
border: none;
cursor: pointer;
@media(max-width: 56.25em){
    width: 40%;
}
`
export default Contact;
