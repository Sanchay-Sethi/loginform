import Login from "../components/Login"
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #FF416C;
    background: -webkit-linear-gradient(to top, #FF4B2B, #FF416C);  
    background: linear-gradient(to top, #FF4B2B, #FF416C); 

`;

const LoginPage = () => {
    return (
        <Container>
         <Login/>
        </Container>
    )
}

export default LoginPage
