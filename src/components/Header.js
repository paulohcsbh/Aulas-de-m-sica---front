import styled from "styled-components";
import logo from '../../assets/images/logo.png';
const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Logo src={logo} ></Logo>
                <NavBar>
                    <Item>Inicio</Item>
                    <Item>Sobre</Item>
                    <Item>Músicas</Item>
                    <Item>Contato</Item>
                </NavBar>
            </HeaderContainer>
            <Section>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Section>
        </>
    )
}

const HeaderContainer = styled.div`
width: 95%;
border: 2px solid #fff;
display: flex;
margin: auto;
border-radius: .8em;
`
const Logo = styled.img`
width: 30%;
`
const NavBar = styled.div`
width: 90%;
margin: auto;
display: flex;
padding: 0 1em;
`
const Item = styled.div`
width: 80%;
height: 2em;
border: 2px solid #fff;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border-radius: .8em;
&: hover{
    background-color: #ccc;
    transition: background-color .5s linear; 
}@media(max-width: 56em){
    width: 50%;
   margin: 0 .1em;
   padding-right:.2em;
}
`
const Section = styled.div`
width: 95%;
margin: auto;
display: flex;
div:nth-child(1){
    width: 1%;
    height: 100vh;
    border-left: 2px solid #fff;
    text-align: left;
    margin-left: .4em;    
} 
div:nth-child(2){
    width: 1%;
    height: 90vh;
    border-left: 2px solid #fff;
    text-align: left;
    margin-left: .4em;      
}
div:nth-child(3){
    width: 1%;
    height: 88vh;
    border-left: 2px solid #fff;
    text-align: left;
    margin-left: .4em;      
}
div:nth-child(4){
    width: 1%;
    height: 85vh;
    border-left: 2px solid #fff;
    text-align: left;
    margin-left: .4em;      
}
`
export default Header;