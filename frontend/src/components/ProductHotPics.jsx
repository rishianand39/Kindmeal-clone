import React from "react";
import { useParams } from "react-router-dom";
import { AllCategory } from "./AllCategory";
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
  ProductButton,
  salad_comment,
  salad_items,
  soup_comment,
  teaAndDessert_comment,
  teaAndDessert_items,
} from "../hotPicsProduct";
import { SingleProduct } from "./SingleProduct";
import { HotPicsButton } from "./HotPicsButton";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const ProductHotPics = () => {
  const { id } = useParams();
  //   console.log("id:", id);

  //   const data = ProductButton.filter((e) => {
  //     return e.id == id;
  //   });
  //   console.log("data:", data);

  const Container = styled.div`
    background-color: transparent;
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 80%;
    margin: auto;
  `;

  return (
    <>
    <Navbar/>
    <HotPicsButton/>
      <Container>
        {id == 1 ? (
          <SingleProduct
            item={pasta_items}
            comment={pasta_comment}
            title={"Pasta Fiesta"}
          />
        ) : id == 2 ? (
          <SingleProduct
            item={burger_items}
            comment={burger_comment}
            title={"Burger Bash"}
          />
        ) : id == 3 ? (
          <SingleProduct
            item={breakfast_items}
            comment={breakfast_comment}
            title={"Breakfast & Brunch"}
          />
        ) : id == 4 ? (
          <SingleProduct
            item={salad_items}
            comment={salad_comment}
            title={"Healthy Salad"}
          />
        ) : id == 5 ? (
          <SingleProduct
            item={bakery_items}
            comment={bakery_comment}
            title={"Pizza, Bread & Bakery"}
          />
        ) : id == 6 ? (
          <SingleProduct
            item={teaAndDessert_items}
            comment={teaAndDessert_comment}
            title={"High Tea & Dessert"}
          />
        ) : id == 7 ? (
          <SingleProduct
            item={localDelights_items}
            comment={localDelights_comment}
            title={"Local Delights"}
          />
        ) : id == 8 ? (
          <SingleProduct
            item={japAndKorean_items}
            comment={japAndKorean_comment}
            title={"Japanese & Korean"}
          />
        ) : id == 9 ? (
          <SingleProduct
            item={chinese_items}
            comment={chinese_comment}
            title={"Chinese Vegetarian"}
          />
        ) : id == 10 ? (
          <SingleProduct
            item={indian_items}
            comment={indian_comment}
            title={"Spicy Indian Cuisine"}
          />
        ) : id == 11 ? (
          <SingleProduct
            item={indian_items}
            comment={indian_comment}
            title={"Spicy Indian Cuisine"}
          />
        ) : null}
      </Container>
      <Footer/>
    </>
  );
};
