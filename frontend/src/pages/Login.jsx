

import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components"
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container=styled.div`

`
const LoginDiv=styled.div`
    width: 30vw;
    margin:40px auto;
    box-shadow: rgba(10, 0, 0, 0.56) 0px 22px 70px 4px;
    padding: 50px;

`
const Logo=styled.img`
@media only screen and (max-width:1150px){
    width: 70%;
}
    
`
const Hr=styled.hr`
    
`
const Bottom=styled.div`
  margin-top  :10px ;
`
const Form=styled.form`
   display :flex ;
   flex-direction: column;
`
const Input=styled.input`
    padding: 10px;
    margin: 10px 0;
`
const Button=styled.button`
    padding: 10px;
    cursor: pointer;
    border: ${props=>props.border};
`

const Login = () => {
    let navigate = useNavigate();
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    })


    const handleChange=(e)=>{
        const {name,value}=e.target;

        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
           let res=await fetch("https://kindmeal-1i0m.onrender.com/auth/login",{
            method:'POST',
            body:JSON.stringify(formData),
            headers:{
                "Content-Type":"application/json",
            }
            })
            let data=await res.json();
            // console.log(data)
          if(data!=="wrong credential"){
            navigate("/"); 
            
          }  else{
            alert(data)
          }
            
        } catch (error) {
            console.log(error)
        }
    
    }

  return (
    <Container>
    <Navbar />
    <LoginDiv>
        <Logo src={"https://www.kindmeal.my/images/logo-kindmeal.png"}>

        </Logo>
        <Form onSubmit={handleSubmit}>
            <Input type={"email"} name="email" onChange={handleChange} placeholder="email"></Input>
            <Input type={"password"} name="password" onChange={handleChange} placeholder="password"></Input>
            <Input type={"submit"}/>
        </Form>
        <Bottom>
            <Link to={"/auth/register"} border="none"> Sign up</Link>
           
        </Bottom>
    </LoginDiv>

  </Container>
  )
}

export default Login