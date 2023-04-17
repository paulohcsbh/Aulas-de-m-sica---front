import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/images/logo.png';
const Header = () => {
    
    return (
        <Top>
            <HeaderContainer>
                <Logo src={logo} ></Logo>
                <NavBar >
                    <Item to={'/home'}>Início</Item>
                    <Item to={'/course'}>Curso</Item>
                    <Item to={'/songs'}>Músicas</Item>
                    <Item to={'/contact'}>Contato</Item>
                    
                </NavBar>
            </HeaderContainer>
        </Top>
    )
}
const Top = styled.div`
width: 100%;
background-color: #e5e5e5;
padding-top: 1em;
text-align: center;
font-family: 'Alkatra', cursive;
`

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
position: relative;
`

const Item = styled(NavLink)`
width: 20%;
color: #000;
text-decoration: none;
height: 2em;
border: 2px solid #fff;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border-radius: .8em;
&.active{
    background-color: #ccc;
}
&: hover{
    background-color: #ccc;
    transition: background-color .5s linear; 
}
@media(max-width: 56em){
   font-size: .7em;   
   padding: .2em .5em;
}

`


export default Header;