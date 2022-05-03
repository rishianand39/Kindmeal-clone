import styled from "styled-components"
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Latest_newVideo,Yummylicious,Dicover_restaurants,Amazing_superheroes } from "../data"

const Container=styled.div`

`

const Home = () => {
  return (
    <Container>
      <Navbar />

      <Card contents={Latest_newVideo}/>
      <Card contents={Yummylicious}/>
      <Card contents={Dicover_restaurants}/>
      <Card contents={Amazing_superheroes}/> 
      <Footer />
    </Container>
  )
}

export default Home