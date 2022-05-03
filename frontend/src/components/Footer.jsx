import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #439760;
  padding: 15px 0;
`;
const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  
`;
const Top = styled.div`
display: flex;
justify-content: space-between;
`;

const Col = styled.div`
display: flex;
flex-direction: column;
font-size: 12px;
flex: 1;

`;
const Heading=styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 15px;
  color: white;
`

const Bottom = styled.div`
text-align: center;
margin-top: 30px;
`;

const Item=styled.p`
  font-size:12px;
  color: white;
`

const Footer = () => {
  const general_data = [
    {
      title: "Home",
      to: "/home",
    },
    {
      title: "Sign Up",
      to: "/signup",
    },
    {
      title: "Businesses/Restaurateurs",
      to: "/businesses/restaurateurs",
    },
    {
      title: "Advertising",
      to: "/advertising",
    },
    {
      title: "About kindmeal.my",
      to: "/aboutkindmeal.my",
    },
    {
      title: "Help & FAQ",
      to: "/Help",
    },
    {
      title: "Terms & Condition",
      to: "/termscondition",
    },
    {
      title: "Inspiring Partener",
      to: "/partners",
    },
    {
      title: "Lifestyle Ambassadors",
      to: "/lifeambassadors",
    },
    {
      title: "Jobs & Careers",
      to: "/jobs",
    },
    {
      title: "Contact Us",
      to: "/Contact",
    },
  ];

  const feature_data = [
    {
      title: "Meat-Free Deals",
      to: "/",
    },
    {
      title: "Tasty Menus",
      to: "/",
    },
    {
      title: "Kind Moments",
      to: "/",
    },
    {
      title: "Meat-Free Recipes",
      to: "/",
    },
    {
      title: "Member Recommendations",
      to: "/",
    },
    {
      title: "Featured Restaurants",
      to: "/",
    },
    {
      title: "Vegetarian & Vegan Directory",
      to: "/",
    },
    {
      title: "Food Map",
      to: "/",
    },
    {
      title: "Become A Superhero",
      to: "/",
    },
    {
      title: "Vegan News & Vegetarian Articles",
      to: "/",
    },
    {
      title: "Latest Comments",
      to: "/",
    },
  ];

  const social_Media_data = [
    {
      title: "KindMeal Widget",
      to: "/",
    },
    {
      title: "Facebook",
      to: "/",
    },
    {
      title: "Twitter",
      to: "/",
    },
    {
      title: "Instagram",
      to: "/",
    },
  ];


  const exiciting_promos_data = [
    {
      title: "Gadhimai: Ending Mass Slaughter",
      to: "/",
    },
    {
      title: "Free Meals",
      to: "/",
    },
    {
      title: "Food Bloggers",
      to: "/",
    },
    {
      title: "Uber CHIRP",
      to: "/",
    },
    {
      title: "Jane Goodall Contest",
      to: "/",
    },
    {
      title: "Win Digi iPhone 6",
      to: "/",
    },
    {
      title: "Feed The Poor",
      to: "/",
    },
    {
      title: "Win Superhero Gifts",
      to: "/",
    },
    {
      title: "Win an iPad Mini 3",
      to: "/",
    },
  ];

  const petfinder_data = [
    {
      title: "Adopt A Pet",
      to: "/",
    },
    {
      title: "Smartphone Apps",
      to: "/",
    },
    {
      title: "WAGazine",
      to: "/",
    },
    {
      title: "Discussion Forum",
      to: "/",
    },
    {
      title: "Medical Fund",
      to: "/",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Top>
          <Col>
            <Heading>General</Heading>
            {general_data.map((item) => (
              <Link to={item.to}
                 style={{textDecoration:"none",
                 color:"white",
                 margin: "3px",
                }}
              >{item.title}</Link>
            ))}
          </Col>
          <Col>
           <Heading>Feature</Heading>
            {feature_data.map((item) => (
                <Link to={item.to}
                style={{textDecoration:"none",
                color:"white",
                margin: "3px",
               }}
             >{item.title}</Link>
            ))}
          </Col>
          <Col>
              <Heading>Social Media</Heading>
              {social_Media_data.map((item=>
                  <Link to={item.to}
                  style={{textDecoration:"none",
                  color:"white",
                  margin: "3px",
                 }}
               >{item.title}</Link>
                ))}
          </Col>
          <Col>
             <Heading>Exiting Promos</Heading>
              {exiciting_promos_data.map((item=>
                  <Link to={item.to}
                  style={{textDecoration:"none",
                  color:"white",
                  margin: "3px",
                 }}
               >{item.title}</Link>
                ))}
          </Col>
          <Col>
              <Heading>Petfinder.my</Heading>
              {petfinder_data.map((item=>
                  <Link to={item.to}
                  style={{textDecoration:"none",
                  color:"white",
                  margin: "3px",
                 }}
               >{item.title}</Link>
                ))}
          </Col>
        </Top>
        <Bottom>
            <Item>Copyright © KindMeal.my, 2014 - 2022. All rights reserved.</Item>
            <Item>This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</Item>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Footer;
