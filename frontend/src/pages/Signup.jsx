import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container=styled.div`
`
const Signupdiv=styled.div`
width : 80%;
margin : auto;
margin-bottom : 100px;
display : flex;
`
const Signupdivimg=styled.div`
width : 23%;
`
const Signupdivdetail=styled.div`
width : 72%;
margin-left : 5%;
`
const Divimg=styled.div`
width : 100%;
height : 230px;
border : 1px solid grey;
border-radius : 20px;
margin-bottom : 35px;
`
const Imgdiv=styled.div`
width : 70%;
height : 125px;
// border : 1px solid red;
margin : 20px auto;
`
const Img=styled.img`
width : 100%;
height : 100%;
`
const ImgP=styled.p`
Font-size : 14px;
color: #666666;
text-align : center;
margin : 10px 0 0 0 ;
`
const Para=styled.p`
font-size: 22px;
color: #444444;
text-align : center;
`
const L=styled.li`
color: #666666;
font-size : 14px;
`
const Heading=styled.p`
font-size: 26px;
`
const Signupdetaildiv=styled.div`
width : 95%;
// border : 1px solid red;
margin : 50px 10px 20px 10px;
display : flex;
`
const Detailnamediv=styled.div`
width : 23%;
// border : 1px solid black;
padding-left : 10px;
`
const Detaildiv =styled.div`
width : 72%;
// border-left : 1px solid grey;
margin-left : 5%;
`
const P=styled.p`
font-size : 15px;
`
const Input=styled.input`
font-family: 'Roboto', Arial;
font-size: 16px;
font-weight: normal;
line-height: 20px;
color: #666666;
padding: 3px 10px 3px 10px;
height: 30px;
border-radius : 8px;
border : 1px solid lightgrey;
&:focus {
    outline: none;
}
`
const InputP=styled.p`
font-size: 13px;
color : grey;
`
const Button = styled.button`
display: block;
height: 45px;
width: 25%;
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



const Signup = () => {
  return (
    <Container>
        <Navbar />
          <Signupdiv>
              <Signupdivimg>
                  <Divimg>
                      <Imgdiv>
                          <Img src="https://www.kindmeal.my/images/join_normal.png" alt="" />
                           <ImgP>Food Lover Sign Up</ImgP>
                      </Imgdiv>
                  </Divimg>
                  <Divimg>
                      <Imgdiv>
                          <Img src="https://www.kindmeal.my/images/join_shop.png" alt="" />
                           <ImgP>Restaurent Sign Up</ImgP>
                      </Imgdiv>
                  </Divimg>
                  <Divimg>
                      <Para>Why KindMeal?</Para>
                      <ul>
                          <br />
                          <L>Exclusive meat-free deals</L>
                          <L>Share yummy food moments</L>
                          <L>Meet friendly food lovers</L>
                          <L>Discover cool restaurants</L>
                          <L>Email updates on tasty deals</L>
                          <L>Instant coupons dining</L>
                          <L>No upfront payment, booking or printing</L>
                      </ul>
                      <br />
                      <L style={{marginLeft : "20px"}}>More about KindMeal »</L>
                  </Divimg>
              </Signupdivimg>
              <Signupdivdetail>
                  <div style={{ display: "flex" }}>
                      <Heading>Food Lover? Sign Up Now or </Heading>
                      <Heading style={{ color: "#2184ff", marginLeft: "10px" }}> Login With Facebook</Heading>
                      <br />
                  </div>
                  <br />
                  <p style={{ fontSize: "14px"}}>Discover tasty meat-free meals and dine instantly — no coupon payment, booking or printing is required.</p>
                  <br />
                  <p style={{ fontSize: "14px"}}>KindMeal is a fun, exciting and cool new way for you to show your compassion towards animals. We collaborate with kind restaurants and cafes across the nation to bring you delicious meat-free foods that will not only help save precious animal lives, but improve your health and save your money at the same time!</p>
                  <Signupdetaildiv>
                      <Detailnamediv>
                          <br />
                          <P>Your Name</P>
                          <br />
                          <br />
                          <br />
                          <P>Email</P>
                          <br />
                          <br />
                          <P>Re-Enter Email:</P>  
                          <br />
                          <br />
                          <P>Password</P>   
                          <br />
                          <br />
                          <br />
                          <P>Username</P> 
                          <br />
                          <br />
                          <br />
                          <P>Birth Date</P>
                          <br />
                          <br />
                          <P>Country</P>
                          <br />
                          <br />
                          <br />
                          <P>State</P>
                          <br />
                          <br />
                          <P>Gender</P>
                          <br />
                          <br />
                          <P>Profile Photo:</P>
                      </Detailnamediv>
                      
                      {/* <br /> */}
                      <Detaildiv>
                          <div style={{ display: "flex" }}>
                          <InputP>First name</InputP>
                          <InputP style={{marginLeft : "170px"}}>Last name</InputP>
                           </div>
                          <div style={{ display: "flex" }}>
                              <Input type="text" title="First name" />
                              <Input style={{marginLeft:"10px"}} type="text" title="First name"/>
                          </div>

                          <br />
                          <div style={{ display: "flex" }}>
                          <InputP>Your email must be correct to receive activation email</InputP>
                           </div>
                          <div style={{ display: "flex" }}>
                              <Input style={{width:"80%"}} type="text"/>
                          </div>

                          <br />
                          <div style={{ display: "flex" }}>
                              <Input style={{width:"80%"}} type="text"/>
                          </div>

                          <br />
                          <div style={{ display: "flex" }}>
                              <Input style={{width:"80%"}} type="password"/>
                          </div>

                          <br />
                          <div style={{ display: "flex" }}>
                          <InputP>Choose a cool username for your Personal Profile page, comments & reviews</InputP>
                           </div>
                          <div style={{ display: "flex" }}>
                              <Input style={{width:"80%"}} type="text"/>
                          </div>

                          <br />
                          <div style={{ display: "flex" }}>
                          <InputP>Only your age will be publicly visible</InputP>
                           </div>
                          <div style={{ display: "flex" }}>
                              <Input style={{width:"80%"}} type="text" placeholder="Month/Day/Year"/>
                          </div>

                          <br />
                          <div style={{ display: "flex" }}>
                              <Input style={{width:"80%"}} type="text" placeholder="Select Country"/>
                          </div>

                          <br />
                          <div style={{ display: "flex" }}>
                              <Input style={{width:"80%"}} type="text" placeholder="Select State"/>
                          </div>

                          <br />
                          <div>
                              <select style={{
                                  padding: "10px",
                                  border : "1px solid lightgrey",
                                  fontSize: "16px"}}>
                                  <option value="male">Select Gender</option>
                                  <option value="male">Male</option>
                                  <option value="femle">Female</option>
                              </select>
                          </div>

                          <br />
                          <div>
                              <Input style={{width:"80%"}} type="file" placeholder="Select Photo"/>
                          </div>
                      </Detaildiv>
                  </Signupdetaildiv>
                  <div style={{ display: "flex", margin: "0 0 0 30px" }}>
                          <input type="checkbox" />
                      <p style={{ marginLeft: "10px"}}> I agree to KindMeal.my's Terms & Conditions</p>
                  </div>
                  <Button>Join Now</Button>
              </Signupdivdetail>
          </Signupdiv>
          <BBannerdiv>
            <BBannerimgdiv>
               <BBannerimg  src="https://www.kindmeal.my/images/how_kindmeal_works.png" alt="" />
            </BBannerimgdiv>
          </BBannerdiv>
        <Footer />
  </Container>
  )
}

export default Signup