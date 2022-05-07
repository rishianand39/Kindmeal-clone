
import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import KindCard from "../components/KindCard"
import Kindbanner from "../components/Kindbanner";

const Container=styled.div`

`

const KindMoments = () => {

  const [kind, setKind] = useState([]);

useEffect(() => {
  axios
    .get("https://kind-meal-project.herokuapp.com/kindmoment")
    .then((data) => setKind(data.data));
}, []);

console.log(kind)


  return (
    <Container>
    <Navbar />
    <Kindbanner/>
         <KindCard kindData={kind}/>
    <Footer />
  </Container>
  )
}

export default KindMoments