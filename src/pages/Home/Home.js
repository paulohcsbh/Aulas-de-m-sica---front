import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
const Home = () => {
    return(
        <Geral>            
            <Header/>
            <Main> 
                   
                         
            </Main>  
            <Footer/>
        </Geral>
    )
}

const Geral = styled.div`
width: 100%;
min-height: 100vh;
background-color: #e5e5e5;
padding-top: 1em;
text-align: center;
font-family: 'Alkatra', cursive;
position: relative;
`

const Main = styled.div`

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

export default Home;