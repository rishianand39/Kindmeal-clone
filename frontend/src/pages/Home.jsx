import styled from "styled-components"
import BottomBanner from "../components/BottomBanner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Latest_newVideo,Yummylicious,Dicover_restaurants,Amazing_superheroes, Latest_newVideo_heading,Yummylicious_heading,Dicover_restaurants_heading,Amazing_superheroes_heading } from "../data"
import Slider from "../components/Slider"
const Container=styled.div`

`

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Slider />
      <Card contents={Latest_newVideo} heading={Latest_newVideo_heading}/>
      <Card contents={Yummylicious} heading={Yummylicious_heading}/>
      <Card contents={Dicover_restaurants} heading={Dicover_restaurants_heading}/>
      <Card contents={Amazing_superheroes} heading={Amazing_superheroes_heading}/> 
      <BottomBanner />
      <Footer />
    </Container>
  )
};

export default Home