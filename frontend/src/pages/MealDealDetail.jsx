import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Container = styled.div`
  // border : 1px solid red;
`;
const Coverimgdiv = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 0;
`;
const Coverimg = styled.img`
  width: 100%;
  height: 100%;
`;
const Heading = styled.p`
  font-weight: bold;
  text-shadow: 2px 2px 3px #ffffff;
  font-size: 26px;
  margin: 5px 0 0 450px;
`;
const DivTab = styled.div`
  display: flex;
  width: 38%;
  font-size: 18px;
  margin: 20px auto;
  justify-content: space-around;
  color: #444444;
  font-weight: 10px;
  // border : 1px solid red;
`;
const Maindiv = styled.div`
  margin: 10px auto;
  width: 80%;
  border: 1px solid #dddddd;
  // border: 1px solid red;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 0px 6px #e0e0e0;
`;
const Maindivhead = styled.div`
  margin: 0px;
  width: 100%;
  height: 50px;
  border: 1px solid #dddddd;
  background-color: #f0f0f0;
  font-size: 28px;
  line-height: 40px;
  vertical-align: middle;
  text-align: center;
`;
const Mealdetaildiv = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
`;

const Mealimgdiv = styled.div`
  width: 50%;
  height: 350px;
  cursor: pointer;
  border: 1px solid #dddddd;
`;
const Mealimgdivimg = styled.img`
  width: 100%;
  height: 100%;
`;

const CouponDiv = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid #dddddd;
  display: flex;
`;

const PriceDiv = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid #dddddd;
`;

const Price1 = styled.p`
  font-size: 15px;
  color: #666666;
  // border: 1px solid #dddddd;
  margin: 20px 0 10px 0;
  text-align: center;
`;
const Price2 = styled.p`
  font-size: 40px;
  color: grey;
  // border: 1px solid;
  margin: 20px 0 10px 0;
  text-align: center;
`;
const CouponP = styled.p`
  font-size: 14px;
  // border: 1px solid red;
  margin: 20px 0 10px 0;
  text-align: center;
  font-weight: bold;
  color: #333333;
  width: 100%;
`;
const Couponbtn = styled.button`
  line-height: 35px;
  width: 50%;
  background-color: #2d96ff;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  padding: 8px 15px 8px 15px;
  text-align: center;
  border: none;
  border-radius: 10px;
  margin-left: 25%;
`;
const Detailsdiv = styled.div`
  width: 92%;
  /* border : 1px solid red ;  */
  padding: 3%;
  display: flex;
`;
const Detailsdiv1 = styled.div`
  width: 50%;
  // border : 1px solid red ;
`;
const Detailsdiv2 = styled.div`
  width: 50%;
  // border : 1px solid red ;
  margin-left: 5%;
  padding: 1%;
`;
const P1 = styled.p`
  font-size: 24px;
  // border: 1px solid grey;
  margin: 10px 0 10px 0;
  text-align: left;
`;
const P2 = styled.p`
  font-size: 14px;
  // border: 1px solid grey;
  margin: 0px 0 10px 0;
  text-align: left;
`;
const P3 = styled.p`
  font-size: 16px;
  // border: 1px solid grey;
  margin: 0px 0 10px 0;
  text-align: left;
`;
const DietDiv = styled.div`
  // border: 1px solid grey;
  margin: 0px 0 10px 0;
  display: flex;
`;
const DietDivcontains = styled.div`
  // border: 1px solid lightgrey;
  width: 8%;
  height: 40px;
  border-radius: 5px;
  margin: 0 10px 0 10px;
`;
const DietDivimg = styled.img`
  width: 100%;
  height: 100%;
`;
const Terms = styled.div`
  // border: 1px solid red;
  width: 100%;
  display: flex;
`;

const Termsdiv = styled.div`
  // border: 1px solid black;
  width: 30%;
`;
const Termsdiv2 = styled.div`
  // border: 1px solid black;
  width: 65%;
  margin-left: 4%;
`;
const L = styled.li`
  font-size: 14px;
  text-align: left;
  margin-left: 0px;
`;

const MealDealDetail = () => {
  const { id } = useParams();

  const [single, setSingle] = useState({});

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    await fetch(`https://kindmeal-1i0m.onrender.com/mealdeal/find/${id}`)
      .then((d) => d.json())
      .then((data) => {
        setSingle(data);
      });
  };

  return (
    <Container>
      <Navbar />
      <Coverimgdiv>
        <Coverimg
          src="https://www.kindmeal.my/photos/shop/5/570-c.jpg"
          alt=""
        />
      </Coverimgdiv>
      <Heading>{single.restaurant}</Heading>
      <DivTab>
        <p>Overview</p>
        <p style={{ borderBottom: "3px solid #05c85f" }}>Meal Deals</p>
        <p>Food Menu</p>
        <p>Location</p>
      </DivTab>
      <Maindiv>
        <Maindivhead>{single.title}</Maindivhead>
        <Mealdetaildiv>
          <Mealimgdiv>
            <Mealimgdivimg src={single.img} alt="" />
          </Mealimgdiv>
          <Mealimgdiv>
            <CouponDiv>
              <PriceDiv>
                <Price1>Normal Price</Price1>
                <Price2>RM16.00</Price2>
                <Price1>Above</Price1>
              </PriceDiv>
              <PriceDiv>
                <Price1>KindMeal Discount</Price1>
                <Price2 style={{ color: "#19ab3f" }}>
                  {single.discount}% off
                </Price2>
              </PriceDiv>
            </CouponDiv>
            <CouponDiv style={{ display: "block" }}>
              <CouponP>
                No pre-payment or booking needed. Get coupon and dine instantly!
              </CouponP>
              <Couponbtn>Get FREE Coupon</Couponbtn>
              <CouponP style={{ fontSize: "12px" }}>
                Grab this KindMeal Coupon now to enjoy {single.discount}% off!
                How it works
              </CouponP>
            </CouponDiv>
          </Mealimgdiv>
        </Mealdetaildiv>
        <Detailsdiv>
          <Detailsdiv1>
            <P1>Delicious Details</P1>
            <P2>{single.dis}</P2>
            <P2>Enjoy discount off a large variety of menu items:</P2>
            <br />
            {/* <P1>Secret Ingredients</P1> */}
            {/* <div>{single.ingredient.map((e) => (<P2>{e}</P2>))}</div> */}
            {/* <Stardiv>{e.rating.map((e) => <Star src={e} alt="" />)} */}
            <br />
            <P1>Diet Restriction</P1>
            <DietDiv>
              <DietDivcontains>
                <DietDivimg
                  src="https://www.kindmeal.my/images/icon_egg.png"
                  alt=""
                />
              </DietDivcontains>
              <P2 style={{ marginTop: "10px" }}>Contains Eggs</P2>
              <DietDivcontains>
                <DietDivimg
                  src="https://www.kindmeal.my/images/icon_milk.png"
                  alt=""
                />
              </DietDivcontains>
              <P2 style={{ marginTop: "10px" }}>Contains Dairy</P2>
              <DietDivcontains>
                <DietDivimg
                  src="https://www.kindmeal.my/images/icon_alcohol_disabled.png"
                  alt=""
                />
              </DietDivcontains>
              <P2 style={{ marginTop: "10px" }}>No Alcohol</P2>
            </DietDiv>
            <DietDiv style={{ margin: "40px 0 0 0" }}>
              <P1 style={{ margin: "10px" }}>Rating</P1>
              <DietDivcontains style={{ margin: "0" }}>
                <DietDivimg
                  src="https://www.kindmeal.my/images/icon_star.png"
                  alt=""
                />
              </DietDivcontains>
              <DietDivcontains style={{ margin: "0" }}>
                <DietDivimg
                  src="https://www.kindmeal.my/images/icon_star.png"
                  alt=""
                />
              </DietDivcontains>
              <DietDivcontains style={{ margin: "0" }}>
                <DietDivimg
                  src="https://www.kindmeal.my/images/icon_star.png"
                  alt=""
                />
              </DietDivcontains>
              <DietDivcontains style={{ margin: "0" }}>
                <DietDivimg
                  src="https://www.kindmeal.my/images/icon_star.png"
                  alt=""
                />
              </DietDivcontains>
              <DietDivcontains style={{ margin: "0" }}>
                <DietDivimg
                  src="https://www.kindmeal.my/images/icon_star.png"
                  alt=""
                />
              </DietDivcontains>
              <P2 style={{ margin: "10px" }}>({single.review} votes)</P2>
            </DietDiv>
          </Detailsdiv1>
          <Detailsdiv2>
            <P1>Location</P1>
            <P2>{single.location}</P2>
            <P2>Opens: Fri- Wed: 8am - 6pm, Thu: Closed.</P2>
            <P2>Tel: 012-7052931</P2>
            <br />
            <P1>Terms & Conditions</P1>
            <Terms>
              <Termsdiv>
                <P3>Coupon Validity</P3>
                <P3>Exclusivity</P3>
                <P3>Reservation</P3>
                <P3>Repeat Customers</P3>
                <P3>Dining Terms</P3>
              </Termsdiv>
              <Termsdiv2>
                <P2>Must use coupon by May 12th, 2022</P2>
                <P2>Valid with other KindMeal.my coupons only</P2>
                <P2>Not required</P2>
                <P2>You can get this coupon once per week</P2>
                <ul>
                  <L>Valid for dine-in customers only</L>
                  <L>Additional Service Charge applicable</L>
                  <L>Price includes SST</L>
                  <L>Discount not applicable for Daily Set Meal</L>
                  <L>Enjoy 10% off organic products sold at the shop</L>
                </ul>
              </Termsdiv2>
            </Terms>
          </Detailsdiv2>
        </Detailsdiv>
      </Maindiv>
      <Footer />
    </Container>
  );
};

export default MealDealDetail;
