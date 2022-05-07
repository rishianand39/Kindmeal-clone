import styled from "styled-components";
//import { Button } from "@mui/material";
import { Link } from "react-router-dom";
//#d32f2f

import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const Kindcont = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin: Auto;

`;

const Kindcard = styled.div`
  width: 325px;
  margin: auto;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 40px;
  margin-top: 30px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Cardtop = styled.div`
  display: flex;
  height: 40px;
  padding: 5px;
  justify-content: space-between;
  /* border:1px solid blue; */
`;

const Cardbot = styled.div`
  /* display: flex; */
  /* justify-content: space-around; */
  /* border:1px solid teal; */
`;

const ProfImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 25px;
`;
const Namedate = styled.div`
  width: 90px;
  /* border:1px solid pink; */
`;
const Name = styled.p`
  font-size: 16px;
  text-decoration: none;
  color: gray;
`;
const Date = styled.p`
  font-size: 13px;
  text-decoration: none;
  color: #bbbaba;
`;
const Comments = styled.p`
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  color: gray;
`;
const Topleft = styled.div`
  display: flex;
  justify-content: space-around;
  width: 150px;
`;

const Button = styled.button`
  border: none;
  height: 35px;
  width: 70px;
  background-color: red;
  margin-top: 3px;
  margin-right: 5px;
  color: whitesmoke;
  font-weight: 700;
  font-size: 16px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 250px;
`;
const Reaction = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  gap: 20px;
  width: 95%;
  height: 40px;
 
`;

const KindCard = ({ kindData }) => {
  return (
    <Kindcont>
      {kindData.map((e) => (
        <Kindcard>
      
            <Cardtop>
              <Topleft>
                <ProfImage src={e.avatar} />
                <Namedate>
                  <Name>{e.username}</Name>
                  <Date>May {Math.floor(Math.random()*30)}th 2022</Date>
                </Namedate>
              </Topleft>

              <Button variant="contained" color="error">
                View
              </Button>
            </Cardtop>
            <Cardbot>
              <Image src={e.img} />
              <Reaction>
                <FavoriteTwoToneIcon color="disabled" />
                <PhotoCameraIcon color="disabled" />
                <ChatBubbleIcon color="disabled" />
              </Reaction>
              <Comments>{e.title}</Comments>
            </Cardbot>
       
        </Kindcard>
      ))}
    </Kindcont>

    //  </div>
  );
};



export default KindCard;
