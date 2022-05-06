
import { useEffect, useState } from "react";
import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch , useSelector } from "react-redux";
import { mealsdeal } from "../Redux/MealDeal/action"
import { filtermealsdeal} from "../Redux/MealDeal/action"

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
// -----------top banner done-------------

const BBannerdiv = styled.div`
  width: 100%;
  height : 240px;
  margin : 0;
  // border : 1px solid lightgrey;
  padding-top : 40px;
  background-color: #e0e0e0;
`

const BBannerimgdiv = styled.div`
  width: 80%;
  height : 100%;
  margin: auto;
  // border : 1px solid lightgrey;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const BBannerimg = styled.img`
  width: 100%;
  height : 100%;
`




const MealDeal = () => {
  
  const [serchtext, setSerchtext] = useState("");
  const [mealdata, setMealData] = useState([]);

  const dispatch = useDispatch();
  const Meals_Data = useSelector((store) => store.mealsdealdata)
  // console.log(Meals_Data)


  useEffect(() => {
    getdata();
  },[])

  
  const getdata = () => {
    fetch("https://kind-meal-project.herokuapp.com/mealdeal").then(d => d.json()).then(data => {
      console.log(data);
      dispatch(mealsdeal(data))
      setMealData(data)
    })
}


  const filtervalue = (e) => {
    const Category = e.target.value;
    if (Category === "All Categories") {
      dispatch(mealsdeal(mealdata))
    } else {
      dispatch(mealsdeal(mealdata))
      dispatch(filtermealsdeal(Category))
    }
    console.log(Category);
  }

  const serach_meal = (e) => {
    console.log(e.key)
    if (e.key === "Enter") {
      dispatch(mealsdeal(mealdata))
      dispatch(filtermealsdeal(serchtext))
    }
  }
  


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
            <FilterDiv1 type="text" placeholder="Search Shop or Deal Name"
              onKeyPress={(e) => serach_meal(e)}
              onChange={(e) => setSerchtext(e.target.value)} />
            <FilterDiv2  name="" id="" onChange={filtervalue} >
              <option value="All Categories">All Categories</option>
              <option value="Indian">Indian</option>
              <option value="Chinease">Chinese</option>
              <option value="Burger">Burger</option>
              <option value="Salad">Salad</option>
              <option value="Bakery">Bakery</option>
              <option value="Tea or Dessert">Tea or Dessert</option>
              <option value="Local Delights">Local Delights</option>
              <option value="Jap or Korean">Jap or Korean</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Pasta">Pasta</option>
              <option value="Soup">Soup</option>
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
          {Meals_Data.map((e,i) =><MealsDiv key={i}>
            <Imgdiv>
              <Img src={e.img} alt="" />
              {/* <Imgtitle>Yishensu Oriental Cuisine</Imgtitle> */}
            </Imgdiv>
            <P1>{ e.restaurant}</P1>
            <P2>{ e.dis}</P2>
            <StarCouponDiv>
              <Button>Get FREE Coupon</Button>
              <Stardiv>{e.rating.map((e) => <Star src={e} alt="" />)}
                <StarP>({e.review})</StarP>
              </Stardiv>
            </StarCouponDiv>
            <Shopdealdiv>
              <Left>{e.contains.map((e) =>  <Leftimgdiv>
                  <Leftimg src={e} alt="" />
                </Leftimgdiv>)}
              </Left>
              <Centre>
                <CentreP1>KindMeal Discount</CentreP1>
                <CentreP2>{ e.discount }% off</CentreP2>
              </Centre>
              <Right>
                <CentreP1>Expires In</CentreP1>
                <RightP2>{e.expire} Days</RightP2>
              </Right>
            </Shopdealdiv>
          </MealsDiv>)}
        </Card>
      </MealdealContainer>
      <BBannerdiv>
        <BBannerimgdiv>
          <BBannerimg  src="https://www.kindmeal.my/images/how_kindmeal_works.png" alt="" />
        </BBannerimgdiv>
      </BBannerdiv>
    <Footer />
  </Container>
  )
}

export default MealDeal