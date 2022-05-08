import React from "react";
import styled from "styled-components";
import {
  bakery_comment,
  bakery_items,
  breakfast_comment,
  breakfast_items,
  burger_comment,
  burger_items,
  chinese_comment,
  chinese_items,
  cute_comment,
  diy_comment,
  indian_comment,
  indian_items,
  japAndKorean_comment,
  japAndKorean_items,
  localDelights_comment,
  localDelights_items,
  pasta_comment,
  pasta_items,
  salad_comment,
  salad_items,
  soup_comment,
  teaAndDessert_comment,
  teaAndDessert_items,
} from "../hotPicsProduct";
import { AllCategory } from "./AllCategory";
import styledComponents from "styled-components";
import { HotPicsButton } from "./HotPicsButton";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const ButtonsHot = () => {
  const Container = styled.div`
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 80%;
    margin: auto;
    /* margin-top: 9%; */
  `;

  return (
    <>
    <Navbar/>
      <HotPicsButton />
      <Container>
        <AllCategory
          item={pasta_items}
          comment={pasta_comment}
          title={"Pasta Fiesta"}
        />
        <AllCategory
          item={burger_items}
          comment={burger_comment}
          title={"Burger Bash"}
        />
        <AllCategory
          item={breakfast_items}
          comment={breakfast_comment}
          title={"Breakfast & Brunch"}
        />
        <AllCategory
          item={salad_items}
          comment={salad_comment}
          title={"Healthy Salad"}
        />
        <AllCategory
          item={bakery_items}
          comment={bakery_comment}
          title={"Pizza, Bread & Bakery"}
        />
        <AllCategory
          item={teaAndDessert_items}
          comment={teaAndDessert_comment}
          title={"High Tea & Dessert"}
        />
        <AllCategory
          item={localDelights_items}
          comment={localDelights_comment}
          title={"Local Delights"}
        />
        <AllCategory
          item={chinese_items}
          comment={chinese_comment}
          title={"Chinese Vegetarian"}
        />
        <AllCategory
          item={indian_items}
          comment={indian_comment}
          title={"Spicy Indian Cuisine"}
        />
        <AllCategory
          item={indian_items}
          comment={indian_comment}
          title={"Spicy Indian Cuisine"}
        />
      </Container>
      <Footer/>
    </>
  );
};
