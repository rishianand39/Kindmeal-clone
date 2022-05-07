import styled from "styled-components"
import slide1 from "../image/slide1.png"
import slide2 from "../image/slide2.png"
import slide3 from "../image/slide3.png"
import slide4 from "../image/slide4.png"
import slide5 from "../image/slide5.png"
import slide6 from "../image/slide6.png"
import {useState} from "react"
import { useEffect } from "react"

const Container=styled.div`
    /* background-color: teal; */
    margin-bottom: 50px;
`
const Wrapper=styled.div`
    width: 70%;
    height: 40vh;
    margin: auto;

`
const SliderDiv=styled.div`
display: flex;
width: 100%;
height: 100%;

    
`
const Slide=styled.img`
    height: 100%;
    width:100%;
    
`
const Meal=styled.div`

`



const Slider = () => {
    const [index,setIndex]=useState(null)
    const slide=[slide1,slide2,slide3,slide4,slide5,slide6]
    let id
    const handleSlide=()=>{
         id= setInterval(()=>{           

            setIndex(pre=>{
                if(pre>=5){
                    pre=-1
                }
              return  pre+1
            });
        },2000);

    }

    useEffect(()=>{
        handleSlide()
        return function cleanup(){
            clearInterval(id)
        } 
        // eslint-disable-next-line
    },[]);

    console.log(index)
  return (
    <Container>
        <Wrapper>
            <SliderDiv >
                <Slide src={slide[index]}/>
            </SliderDiv>
            <Meal>

            </Meal>
        </Wrapper>
    </Container>
  )
}

export default Slider