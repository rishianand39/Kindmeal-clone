import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AllCategory } from "./AllCategory";
import { ButtonsHot } from "./ButtonsHot";

export const HotPicsButton = () => {
  const Heading = styled.div`
    background-color: #f0f0f0;
    height: 145px;
  `;
  const HeadingContent = styled.div`
    border: 1px solid transparent;
    width: 80%;
    margin: auto;
    margin-top: 30px;
  `;
  const ButtonsContainer = styled.div`
    border: 1px solid transparent;
    width: 80%;
    margin: auto;
    /* margin-top: 50px; */
    /* height: 180px; */
    margin-top: 50px;
    margin-bottom: 10px;
  `;
  const Button = styled.button`
    width: 140px;
    padding: 10px 10px;
    margin: 1% 0.5%;
    background-color: #f8f8f8;
    /* background-color: ${(props) => (props.color ? "red" : "white")}; */

    font-size: 15px;
    text-decoration: none;
    border-radius: 5px;
    border-style: hidden;
    border: 0.1px solid #888888;
    margin-left: 5px;
    color: #666667;
    &:focus {
      color: white;
      background-color: #2bb673;
    }
  `;

  return (
    <>
      <Heading>
        <HeadingContent>
          <div className="HeadingFirst">
            <div className="first-p">All Categories </div>
            <div>| Hot Picks</div>
          </div>
          <div className="HeadingSecond">
            Discover our food lover community's top picks. Easily locate tasty
            meat-free bargain deals, and get creative ideas for your gastronomic
            indulgence!
            <div>
              Click into a featured deal to instantly obtain free coupons, or
              read more on our members' delicious recommendations.
            </div>
          </div>
        </HeadingContent>
      </Heading>
      <ButtonsContainer>
        <Link to="/hotpicks">
          <Button >All Categories</Button>
        </Link>
        <Link to="/hotpicks/1">
          <Button>Pasta</Button>
        </Link>
        <Link to="/hotpicks/2">
          <Button>Burger</Button>
        </Link>
        <Link to="/hotpicks/3">
          <Button>Breakfast</Button>
        </Link>
        <Link to="/hotpicks/4">
          <Button>Salad</Button>
        </Link>
        <Link to="/hotpicks/5">
          <Button>Bakery</Button>
        </Link>
        <Link to="/hotpicks/6">
          <Button>Tea & Dessert</Button>
        </Link>
        <Link to="/hotpicks/7">
          <Button>Local Delights</Button>
        </Link>
        <Link to="/hotpicks/8">
          <Button>Jap & Korean</Button>
        </Link>
        <Link to="/hotpicks/9">
          <Button>Chinese</Button>
        </Link>
        <Link to="/hotpicks/10">
          <Button>Indian</Button>
        </Link>
        <Link to="/hotpicks/11">
          <Button>Soup</Button>
        </Link>
        <Link to="/hotpicks/2">
          <Button>Cute</Button>
        </Link>
        <Link to="/hotpicks/2">
          <Button>DIY</Button>
        </Link>
      </ButtonsContainer>

      {/* <Link></Link>
      <Container>
        <ButtonsHot />
      </Container> */}
    </>
  );
};
