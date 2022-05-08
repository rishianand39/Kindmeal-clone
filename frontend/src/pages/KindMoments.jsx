import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import KindCard from "../components/KindCard";

const Container = styled.div``;

const Bannercontainer = styled.div`
  width: 100%;
  height: 400px;

  font-family: "Times New Roman", Times, serif;
`;
const Top = styled.div`
  width: 100%;
  height: 300px;
  background-color: whitesmoke;

  display: flex;
`;

const Bott = styled.div`
  width: 72%;
  margin: auto;
  margin-top: 30px;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
`;
const Topleft = styled.div`
  flex: 7;
  /* border:1px solid red; */
`;
const Toplefttop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;

  margin-bottom: 30px;
`;

const HeadingPtag = styled.p`
  font-size: 23px;
`;

const Topright = styled.div`
  flex: 4;
`;
const About = styled.div`
  margin-bottom: 20px;
`;
const Bott_left = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

const Bott_right = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 7px;
  text-align: center;
  width: 120px;
  padding: 10px;
  background-color: red;
  &:hover {
    cursor: pointer;
    background-color: #dc0808;
  }
  font-weight: 800;
  color: white;
`;
const Button2 = styled.button`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 7px;
  text-align: center;
  width: 120px;
  padding: 10px;
  background-color: whitesmoke;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    background-color: #e2e2e2;
  }
`;
const Button3 = styled.button`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 7px;
  text-align: center;
  width: 120px;
  padding: 10px;
  background-color: green;
  color: white;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid gray;
`;
const Select = styled.select`
  padding: 10px;
  border: 1px solid gray;
`;

const Box = styled.div`
  background-color: white;
  width: 300px;
  height: 150px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 80px;
  margin-top: 80px;
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const H3 = styled.h2``;
const Box1 = styled.div`
  width: 80%;
  margin: auto;
  margin-left: 200px;
  margin-top: 50px;
`;

const KindMoments = () => {
  const [kind, setKind] = useState([]);

  useEffect(() => {
    axios
      .get("https://kind-meal-project.herokuapp.com/kindmoment")
      .then((data) => setKind(data.data));
  }, []);

 // console.log(kind);

  return (
    <Container>
      <Navbar />
      <Bannercontainer>
        <Top>
          <Topleft>
            <Box1>
              <Toplefttop>
                <HeadingPtag>Kind Moments</HeadingPtag>
                <HeadingPtag>| Saving Lives with Yummy Photos</HeadingPtag>
              </Toplefttop>
              <About>
                Discover new, delicious meat-free cuisines enjoyed by other
                compassionate food lovers. Share your interesting KindMoments,
                and build your own fans and followers to encourage kind, healthy
                meals.
              </About>
              <About>
                Download our mobile app to easily showcase your masterpieces and
                interact with food lovers.
              </About>
              <About>Get started sharing your tasty moments now.</About>
            </Box1>
          </Topleft>

          <Topright>
            <Box>
              <H3>Share Your KindMoments</H3>
              <About>
                Interesting food or restaurant? Share with 1000s of food lovers!
              </About>
              <Button>Share</Button>
            </Box>
          </Topright>
        </Top>
        <Bott>
          <Bott_left>
            <Button3>Moments</Button3>
            <Button2>Deal Details</Button2>
            <Button2>Followings</Button2>
          </Bott_left>
          <Bott_right>
            <Input type="text" placeholder="Search user or place" />
            <Select name="" id="">
              <option value="">Choose City</option>
              <option value="">Delhi</option>
              <option value="">UttarPradesh</option>
              <option value="">Bihar</option>
              <option value="">Karnataka</option>
              <option value="">Maharastra</option>
              <option value="">Bengal</option>
              <option value="">Jharkhand</option>
              <option value="">Assam</option>
              <option value="">Odisha</option>
              <option value="">Rajasthan</option>
            </Select>
            <Button>Search</Button>
          </Bott_right>
        </Bott>
      </Bannercontainer>

      <KindCard kindData={kind} />
      <Footer />
    </Container>
  );
};

export default KindMoments;