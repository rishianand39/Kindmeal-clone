
import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`

`;
const MealdealContainer = styled.div`
  width: 80%;
  // border: 1px solid red;
  margin : auto;
`;

const Card = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
  grid-template-rows: repeat(5, 500px);
  border : 1px solid grey;
`;

const MealsDiv = styled.div`
 border : 1px solid grey;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 border-radius: 10px;
`
const Img = styled.img`
height : 300px;
width : 100%;
border-radius: 10px;
`
const P1 = styled.p`
margin : 20px;
color: #777777;
font-size: 18px;
`
const P2 = styled.p`
margin : 0 18px;
font-size: 14px;
`
const Button = styled.button`
display: block;
height: 8%;
width: 40%;
line-height: 25px;
font-size: 18px;
color: #ffffff;
font-weight: bold;
text-decoration: none;
background-color: #d41f1f;
cursor: pointer;

margin : 20px;
border : none;
border-radius : 8px;
`

const MealDeal = () => {
  return (
    <Container>
      <Navbar />
      <MealdealContainer>
        <Card>
          <MealsDiv>
            <Img src="https://www.kindmeal.my/photos/deal/5/518-3788-l.jpg" alt="" />
            <P1>Yishensu —  Petaling Jaya, Selangor</P1>
            <P2>Yishensu offers a wide range of delicious oriental dishes, from traditional favorites to creative fusion delights. Enjoy discount..</P2>
            <Button>Get FREE Coupon</Button>
          </MealsDiv>
          <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv>
        </Card>
      </MealdealContainer>
    <Footer />
  </Container>
  )
}

export default MealDeal