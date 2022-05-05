
import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`

`;
const MealdealContainer = styled.div`
  width: 80%;
  margin : auto;
`

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap : 2%;
  column-gap : 5%;
  margin-bottom : 250px;
  // grid-template-rows: repeat(5, 543px);
  // border : 1px solid grey;
`

const MealsDiv = styled.div`
 border : 1px solid lightgrey;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 border-radius: 10px;
`
const Imgdiv = styled.div`
height : 300px;
width : 100%;
border-radius-top: 10px;
`
const Img = styled.img`
height : 100%;
width : 100%;
border-radius: 10px;
`
// const Imgtitle = styled.div`
// width : 100%
// height : 15%;
// border : 1px solid red;
// margin: 0;
// `

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
height: 45px;
width: 40%;
line-height: 25px;
font-size: 18px;
color: #ffffff;
font-weight: bold;
text-decoration: none;
background-color:#f53838;
// background-color: #d41f1f;
cursor: pointer;
margin : 20px;
border : none;
border-radius : 8px;
`
const StarCouponDiv = styled.div`
display : flex;
justify-content : space-between;
// border : 1px solid red;
`
const Star = styled.img`
width : 25px;
height : 25px;
margin : 0;
`
const Stardiv = styled.div`
width : 150px;
height : 25px;
margin : 30px 20px;
text-align: left;
// border : 1px solid red;
display : flex;
`
const StarP = styled.p`
font-size: 14px;
color: #bbbbbb;
margin : auto;
`
const Shopdealdiv = styled.div`
width : 100%;
height : 60px;
margin-top : 0px;
display : flex;
// border : 1px solid red;
`
const Left = styled.div`
width : 25%;
height : 100%;
margin: 0px;
border : 1px solid lightgrey;
display : flex;
`
const Centre = styled.div`
width : 50%;
height : 100%;
margin: 0px;
border : 1px solid lightgrey;
`
const Right = styled.div`
width : 25%;
height : 100%;
margin: 0px;
border : 1px solid lightgrey;
`
const Leftimgdiv = styled.div`
width : 30%;
margin: 10px 2px 10px 2px;
`
const Leftimg = styled.img`
width : 100%;
height : 100%;
`
const CentreP1 = styled.p`
text-align: center;
font-size : 15px;
margin : 5px 0;
`
const CentreP2 = styled.p`
text-align: center;
color: #fb2222;
font-size: 24px;
`
const RightP2 = styled.p`
text-align: center;
color: #888888;;
font-size: 24px;
`
// ------card Done--------------------

const Mealdealheader = styled.div`
  width: 100%;
  height : 220px;
  margin : 0 0 50px 0;
  background-color: rgb(240, 240, 240);
`

const MealdealDetail = styled.div`
  width: 80%;
  height : 100%;
  margin : auto;
  // border : 1px solid grey;
`
const Detailheaddiv = styled.div`
  display : flex;
  margin-top : 0px;
`
const Detailhead1 = styled.p`
  // border : 1px solid grey;
  font-size: 28px;
  font-weight: normal;
  margin: 10px 0 10px 0;
`
const Detailhead2 = styled.p`
  // border : 1px solid grey;
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 10px;
  color: grey;
  margin: 10px 0 10px 25px;
`
const H1 = styled.p`
  font-size: 14px;
  // margin : 20px 0 0 0;
`
const H2 = styled.p`
  font-size: 14px;
  margin : 25px 0 0 0;
`
const FilterDiv = styled.div`
  margin : 20px 0 0 0;
  display : flex;
  // border : 1px solid red;
`
const FilterDiv1 = styled.input`
  margin : 5px 0 0 0;
  padding : 10px;
  font-size: 16px;
  border : 1px solid lightgrey;
  border-radius : 5px;
`
const FilterDiv2 = styled.select`
  margin : 5px 0 0 0;
  padding : 10px;
  font-size: 16px;
  border : 1px solid lightgrey;
  border-radius : 5px;
  width : 170px;
  margin-left : 30px;
`
const FilterButton = styled.button`
  margin : 5px 0 0 0;
  padding : 10px;
  font-size: 16px;
  border : 1px solid lightgrey;
  border-radius : 5px;
  width : 180px;
  margin-left : 30px;
  background-color:#f53838;
  cursor: pointer;
  font-family: 'Roboto', Arial;
  color : White;
  font-weight: bold;
`
// ---------header done-----------------

const Bannerdiv = styled.div`
  width: 100%;
  height : 220px;
  margin : 0 0 50px 0;
`

const Bannerimgdiv = styled.div`
  width: 80%;
  height : 100%;
  margin : auto;
  border : 1px solid lightgrey;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const Bannerimg = styled.img`
  width: 100%;
  height : 100%;
`

const Meals_data = [
  {
    img: "https://www.kindmeal.my/photos/deal/7/709-4950-l.jpg",
    title: "Hainan Village —  Cheras, Selangor",
    dis: "Inspired by the love for animals and the planet, Hainan Village Kopitiam is an advocate of meat-free, egg & plant-based diet. And ..",
    rating: {
      star1: "https://www.kindmeal.my/images/icon_star.png",
      star2: "https://www.kindmeal.my/images/icon_star.png",
      star3: "https://www.kindmeal.my/images/icon_star.png",
      star4: "https://www.kindmeal.my/images/icon_star.png",
      star5 : "https://www.kindmeal.my/images/icon_star_grey.png",
    },
    review : "12",
    contains: {
      egg: "https://www.kindmeal.my/images/icon_egg.png",
      dairy: "https://www.kindmeal.my/images/icon_milk.png",
      alcohol : "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    },
    dicount: "20% Off",
    expire : "10 Days",
  },
  {
    img: "https://www.kindmeal.my/photos/deal/6/669-4206-l.jpg",
    title: "Mangga Vegetarian Cafe —  Seri Kembangan, Selangor",
    dis: "Mangga Vegetarian Cafe comforts you with a pure, natural dining ambiance, serving you a healthy, delectable selection of Asian and..",
    rating: {
      star1: "https://www.kindmeal.my/images/icon_star.png",
      star2: "https://www.kindmeal.my/images/icon_star.png",
      star3: "https://www.kindmeal.my/images/icon_star.png",
      star4: "https://www.kindmeal.my/images/icon_star.png",
      star5 : "https://www.kindmeal.my/images/icon_star.png",
    },
    review : "4",
    contains: {
      egg: "https://www.kindmeal.my/images/icon_egg_disabled.png",
      dairy: "https://www.kindmeal.my/images/icon_milk.png",
      alcohol : "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    },
    dicount: "20% Off",
    expire : "13 Days",
  },
  {
    img: "https://www.kindmeal.my/photos/deal/5/506-2350-l.jpg",
    title: "Ring Zhi Vegetarian Restaurant 灵芝素食饭店",
    dis: "This place brings back memories to those days where we would have such delicious authentic meals for festive eats. Select from AN.",
    rating: {
      star1: "https://www.kindmeal.my/images/icon_star.png",
      star2: "https://www.kindmeal.my/images/icon_star.png",
      star3: "https://www.kindmeal.my/images/icon_star.png",
      star4: "https://www.kindmeal.my/images/icon_star.png",
      star5 : "https://www.kindmeal.my/images/icon_star.png",
    },
    review : "12",
    contains: {
      egg: "https://www.kindmeal.my/images/icon_egg.png",
      dairy: "https://www.kindmeal.my/images/icon_milk.png",
      alcohol : "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    },
    dicount: "20% Off",
    expire : "1 Days",
  },
  {
    img: "https://www.kindmeal.my/photos/deal/5/529-2478-l.jpg",
    title: "Croutons Cafe —  Seri Kembangan, Selangor",
    dis: "Croutons brings you a sumptuous variety of international cuisines. Indulge in any of the meat-free items from our menu below: • ..",
    rating: {
      star1: "https://www.kindmeal.my/images/icon_star.png",
      star2: "https://www.kindmeal.my/images/icon_star.png",
      star3: "https://www.kindmeal.my/images/icon_star.png",
      star4: "https://www.kindmeal.my/images/icon_star.png",
      star5 : "https://www.kindmeal.my/images/icon_star_half.png",
    },
    review : "12",
    contains: {
      egg: "https://www.kindmeal.my/images/icon_egg.png",
      dairy: "https://www.kindmeal.my/images/icon_milk.png",
      alcohol : "https://www.kindmeal.my/images/icon_alcohol.png",
    },
    dicount: "20% Off",
    expire : "13 Days",
  },
  {
    img: "https://www.kindmeal.my/photos/deal/3/383-1189-l.jpg",
    title: "Dining Bowl —  Kuala Lumpur, Wilayah Persekutuan",
    dis: "Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality ingredients, in an envir..",
    rating: {
      star1: "https://www.kindmeal.my/images/icon_star.png",
      star2: "https://www.kindmeal.my/images/icon_star.png",
      star3: "https://www.kindmeal.my/images/icon_star.png",
      star4: "https://www.kindmeal.my/images/icon_star.png",
      star5 : "https://www.kindmeal.my/images/icon_star_grey.png",
    },
    review : "12",
    contains: {
      egg: "https://www.kindmeal.my/images/icon_egg.png",
      dairy: "https://www.kindmeal.my/images/icon_milk.png",
      alcohol : "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    },
    dicount: "20% Off",
    expire : "10 Days",
  },
  {
    img: "https://www.kindmeal.my/photos/deal/6/687-4507-l.jpg",
    title: "Alam N-Ion —  Kuala Lumpur, Wilayah Persekutuan",
    dis: "Serving you delicious home-cooked vegetarian meals, crafted with the healthiest ingredients and plenty of love. Feast on our wide..",
    rating: {
      star1: "https://www.kindmeal.my/images/icon_star_grey.png",
      star2: "https://www.kindmeal.my/images/icon_star_grey.png",
      star3: "https://www.kindmeal.my/images/icon_star_grey.png",
      star4: "https://www.kindmeal.my/images/icon_star_grey.png",
      star5 : "https://www.kindmeal.my/images/icon_star_grey.png",
    },
    review : "0",
    contains: {
      egg: "https://www.kindmeal.my/images/icon_egg.png",
      dairy: "https://www.kindmeal.my/images/icon_milk.png",
      alcohol : "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    },
    dicount: "10% Off",
    expire : "7 Days",
  },
  {
    img: "https://www.kindmeal.my/photos/deal/1/177-1118-l.jpg",
    title: "A Pie Thing —  Petaling Jaya & 1 Branch",
    dis: "When Pies conquer the world, you sit back, relax and have pies. Enjoy any delicious meat-free Savoury or Sweet Pies available in..",
    rating: {
      star1: "https://www.kindmeal.my/images/icon_star.png",
      star2: "https://www.kindmeal.my/images/icon_star.png",
      star3: "https://www.kindmeal.my/images/icon_star.png",
      star4: "https://www.kindmeal.my/images/icon_star.png",
      star5 : "https://www.kindmeal.my/images/icon_star.png",
    },
    review : "8",
    contains: {
      egg: "https://www.kindmeal.my/images/icon_egg.png",
      dairy: "https://www.kindmeal.my/images/icon_milk.png",
      alcohol : "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    },
    dicount: "20% Off",
    expire : "13 Days",
  },
  {
    img: "https://www.kindmeal.my/photos/deal/7/704-4734-l.jpg",
    title: "Negative 12 Degrees —  Bangsar, Kuala Lumpur",
    dis: "Indulge in our rich, flavorful selection of vegan ice-creams, crafted with healthy, natural ingredients. Enjoy any ice-creams fro..",
    rating: {
      star1: "https://www.kindmeal.my/images/icon_star_grey.png",
      star2: "https://www.kindmeal.my/images/icon_star_grey.png",
      star3: "https://www.kindmeal.my/images/icon_star_grey.png",
      star4: "https://www.kindmeal.my/images/icon_star_grey.png",
      star5 : "https://www.kindmeal.my/images/icon_star_grey.png",
    },
    review : "0",
    contains: {
      egg: "https://www.kindmeal.my/images/icon_egg_disabled.png",
      dairy: "https://www.kindmeal.my/images/icon_milk_disabled.png",
      alcohol : "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    },
    dicount: "15% Off",
    expire : "1 Days",
  },
  {
    img: "https://www.kindmeal.my/photos/deal/5/590-3137-l.jpg",
    title: "Rawsome —  Sungai Buloh, Selangor",
    dis: "Enjoy healthy, guilt-free, raw food meals artfully crafted for a nutritious and delicious experience. Indulge in a satisfying mea..",
    rating: {
      star1: "https://www.kindmeal.my/images/icon_star.png",
      star2: "https://www.kindmeal.my/images/icon_star.png",
      star3: "https://www.kindmeal.my/images/icon_star.png",
      star4: "https://www.kindmeal.my/images/icon_star.png",
      star5 : "https://www.kindmeal.my/images/icon_star_half.png",
    },
    review : "6",
    contains: {
      egg: "https://www.kindmeal.my/images/icon_egg.png",
      dairy: "https://www.kindmeal.my/images/icon_milk_disabled.png",
      alcohol : "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    },
    dicount: "20% Off",
    expire : "9 Hours",
  },
  {
    img: "https://www.kindmeal.my/photos/deal/7/700-4802-l.jpg",
    title: "Midas Cuisine —  Banting, Selangor",
    dis: "Let our Midas touch transform your meal into a gastronomic adventure. Indulge in healthy and delicious Chinese cuisine within our..",
    rating: {
      star1: "https://www.kindmeal.my/images/icon_star.png",
      star2: "https://www.kindmeal.my/images/icon_star.png",
      star3: "https://www.kindmeal.my/images/icon_star.png",
      star4: "https://www.kindmeal.my/images/icon_star.png",
      star5 : "https://www.kindmeal.my/images/icon_star_half.png",
    },
    review : "6",
    contains: {
      egg: "https://www.kindmeal.my/images/icon_egg.png",
      dairy: "https://www.kindmeal.my/images/icon_milk.png",
      alcohol : "https://www.kindmeal.my/images/icon_alcohol_disabled.png",
    },
    dicount: "15% Off",
    expire : "13 Day",
  },
  
];


const MealDeal = () => {
  return (
    <Container>
      <Navbar />
      <Mealdealheader>
        <MealdealDetail>
          <Detailheaddiv>
            <Detailhead1>Meat-Free Deals </Detailhead1>
            <Detailhead2>|   Restaurants In Malaysia</Detailhead2>
          </Detailheaddiv>
          <H1>Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free Coupon" to obtain instant discounts and dine at the restaurants. No upfront payment, booking or printing is needed. If you share it on social media, you'll even DOUBLE your discount!</H1>
          <H2>Download our mobile app now to easily get coupons and start dining in a few seconds. Effortlessly save lives, health, environment and money now!</H2>
          <FilterDiv>
            <FilterDiv1 type="text" placeholder="Search Shop or Deal Name" />
            <FilterDiv2  name="hiiii" id="" >
              <option value="All Categories">All Categories</option>
              <option value="Pasta">Pasta</option>
              <option value="Burger">Burger</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Salad">Salad</option>
              <option value="Bakery">Bakery</option>
              <option value="Tea or Dessert">Tea or Dessert</option>
              <option value="Local Delights">Local Delights</option>
              <option value="Jap or Korean">Jap or Korean</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="Souo">Souo</option>
            </FilterDiv2>
            <FilterDiv2  name="hiiii" id="" >
              <option value="All Location">All Locations</option>
            </FilterDiv2>
            <FilterButton>Search Deals</FilterButton>
            <FilterButton style={{ backgroundColor : "#009d48"}}>Browse Restaurants</FilterButton>
          </FilterDiv>
        </MealdealDetail>
      </Mealdealheader>
      <Bannerdiv>
        <Bannerimgdiv>
          <Bannerimg src="https://www.kindmeal.my/images/banner_directory.jpg" alt="" />
        </Bannerimgdiv>
      </Bannerdiv>
      <MealdealContainer>
        <Card>
          {Meals_data.map((e) =><MealsDiv>
            <Imgdiv>
              <Img src={e.img} alt="" />
              {/* <Imgtitle>Yishensu Oriental Cuisine</Imgtitle> */}
            </Imgdiv>
            <P1>{ e.title}</P1>
            <P2>{ e.dis}</P2>
            <StarCouponDiv>
              <Button>Get FREE Coupon</Button>
              <Stardiv>
                <Star src={e.rating.star1} alt="" />
                <Star src={e.rating.star2} alt="" />
                <Star src={e.rating.star3} alt="" />
                <Star src={e.rating.star4} alt="" />
                <Star src={e.rating.star5} alt="" />
                <StarP>({e.review})</StarP>
              </Stardiv>
            </StarCouponDiv>
            <Shopdealdiv>
              <Left>
                <Leftimgdiv>
                  <Leftimg src={e.contains.egg} alt="" />
                </Leftimgdiv>
                <Leftimgdiv>
                  <Leftimg src={e.contains.dairy} alt="" />
                </Leftimgdiv>
                <Leftimgdiv>
                  <Leftimg src={e.contains.alcohol} alt="" />
                </Leftimgdiv>
              </Left>
              <Centre>
                <CentreP1>KindMeal Discount</CentreP1>
                <CentreP2>{ e.dicount }</CentreP2>
              </Centre>
              <Right>
                <CentreP1>Expiring Soon</CentreP1>
                <RightP2>{e.expire }</RightP2>
              </Right>
            </Shopdealdiv>
          </MealsDiv>)}
          {/* <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv>
          <MealsDiv></MealsDiv> */}
        </Card>
      </MealdealContainer>
    <Footer />
  </Container>
  )
}

export default MealDeal