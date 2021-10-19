import styled from "styled-components";
import Lottie from "react-lottie";
import avatar from "../assets/avatar"
import google from "../assets/icons/google.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";

const Container = styled.div`
    width: 95%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 20px;
    overflow-x: hidden;
`;
const Right = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f12711;
    background: -webkit-linear-gradient(to right, #f5af19, #f12711);
    background: linear-gradient(to right, #f5af19, #f12711);
    box-shadow: rgba(250, 100, 6, 0.2) 0px 8px 24px;
`;
const Heading = styled.h1`
    color: #fff;
    font-weight: 900;
    font-size: 3rem;
    text-align: center;
`;

const Span = styled.span`
    margin-top: 20px;
    color: #fff;
    font-weight: 500;
`;

const Left = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color : #fff;
`;

const LeftAdjust = styled.div`
    width: 80%;
`;
const Title = styled.h1`
    font-weight: 500;
`;

const Info = styled.p`
    margin-top: 30px;
    font-size: 1.2rem;
`;
const Credentials = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`;

const CredentTitle = styled.h4`
    align-self: flex-start;
`

const Input = styled.input`
    width: 80%;
    height: 40px;
    background-color:transparent;
    border: 1px solid #333333;
    margin-top: 20px;
    border-radius: 5px;
    padding: 10px;
    outline: none;
`;

const PassDiv = styled.div`
    margin-top: 20px;
    width: 80%;
    display: flex;
    justify-content:space-between;
`;

const ForgotTitle = styled.h4`
    color: #196eff;
    font-weight: 400;
    cursor: pointer;
`;

const Button = styled.button`
    margin-top: ${props => props.bg==="transparent" ? "0px" : " 20px"};
    width: 80%;
    height: 45px;
    background-color:${props => props.bg==="transparent" ? "transparent" : " #fe470f"};
    color: ${props => props.bg==="transparent" ? "#33333" : " white"};
    padding: 15px;
    border-radius: 5px;
    border: ${props => props.borderSet==="light" ? "1px solid black" : 0};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HrDivider = styled.div`
    width: 80%;
    margin: 40px 0px;
    position: relative;
`;

const Hr = styled.hr`
    width: 100%;
    border: 0.1px solid #33333338;
    &::before{
        content: "OR";
        position: absolute;
        color: rgba(0, 0, 0, 0.557);
        background-color : white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;

const RegisterTitle = styled.span`
    margin-top: 30px;
    font-size: 14px;
    color: #333333b9;
`;

const Login = () => {
    const [loginData, setLoginData] = useState({
        email : "",
        password : "",
    })
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setLoginData({...loginData, [name] : value})
    }
    const handleClick = (e) => {
        e.preventDefault();
        if(loginData.email === "" || loginData.password === ""){
            return toast.warn("Some fields are empty", {
                position:"top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        console.log(loginData);
        return toast.success("Login Successfull", {
            position:"top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: avatar,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    return (
        <Container>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <Right>
                <Lottie options={defaultOptions} height= {400} width = {400}/>
                <Heading>Turn your ambition<br/> into a success story</Heading>
                <Span>Choose from over 100,000 online video</Span>
            </Right>
            <Left>
                <LeftAdjust>
                    <Title>Hello! Welcome back.</Title>
                    <Info>Log in with your data that you entered<br/> during Your registration.</Info>
                    <Credentials>
                        <CredentTitle>Email address</CredentTitle>
                        <Input type="email" placeholder="Example@email.com" name = "email" value = {loginData.email} onChange = {handleChange}/>
                        <PassDiv>
                            <CredentTitle>Password</CredentTitle>
                            <ForgotTitle>Forgot Password</ForgotTitle>
                        </PassDiv>
                        <Input type="password" placeholder="Enter Password" name = "password" value = {loginData.password} onChange = {handleChange}/>
                        <Button onClick = {handleClick}>Start now!</Button>
                        <HrDivider>
                            <Hr/>
                        </HrDivider>
                        <Button borderSet = "light" bg = "transparent"><Icon src = {google}/>Sign with Google</Button>
                        <RegisterTitle>Don't have an account? <span style = {{color :"#fe470f", cursor : "pointer"}} >Sign Up</span></RegisterTitle>
                    </Credentials>
                </LeftAdjust>     
            </Left>
        </Container>
    )
}

export default Login
