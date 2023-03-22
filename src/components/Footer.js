import styled from "styled-components";
const Footer = () => {
    return(
        <FooterContainer>
                <h1 style={{padding: '1em'}}>Desenvolvido por Paulo Cardoso, Aulas de Música</h1>
                <div style={{cursor: 'pointer', paddingLeft: '3em', display: "flex", alignItems: 'center', color: '#3b5998'}}>
                    <a href="https://www.facebook.com" ><ion-icon style={{marginRight: '.4em', fontSize: '2em'}}name="logo-facebook"></ion-icon></a>
                    <a href="https://www.youtube.com"></a><ion-icon style={{margin: ' 0 .4em .2em 0', fontSize: '2em', color: 'red'}}name="logo-youtube"></ion-icon>
                    <a href="https://www.instagram.com"><ion-icon style={{marginRight: '1em', fontSize: '2em', color: '#fff'}}name="logo-instagram"></ion-icon></a>
                </div>
        </FooterContainer>
    )
}
const FooterContainer = styled.div`
width: 100%;
height: 3em;
position: absolute;
bottom: 0px;
left: 0px;
background-color: black;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
@media(max-width: 56em){
    font-size: .6em;
}
`
export default Footer;