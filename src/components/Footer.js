import styled from "styled-components";
const Footer = () => {
    return(
        <FooterContainer>
                <h1 style={{padding: '1em'}}>Desenvolvido por Paulo Cardoso, Aulas de Música</h1>
                <div style={{ paddingLeft: '3em', display: "flex", alignItems: 'center', color: '#3b5998'}}>
                    <a href="https://www.facebook.com/paulo.cardoso.351" target='_blank' rel="noreferrer"><ion-icon style={{marginRight: '.4em', fontSize: '2em', color: '#2371bb'}}name="logo-facebook"></ion-icon></a>
                    <a href="https://www.youtube.com/@vilowrecords" target='_blank' rel="noreferrer"><ion-icon style={{marginRight: '.4em', fontSize: '2em', color: '#e84439'}}name="logo-youtube"></ion-icon></a>
                    <a href="https://www.instagram.com/paulocardosobh" target='_blank' rel="noreferrer"><ion-icon style={{marginRight: '1em', fontSize: '2em', color: '#b34993'}}name="logo-instagram"></ion-icon></a>
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