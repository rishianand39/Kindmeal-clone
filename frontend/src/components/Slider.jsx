// import styled from "styled-components"
// import slide1 from "../image/slide1.png"
// import slide2 from "../image/slide2.png"
// import slide3 from "../image/slide3.png"
// import slide4 from "../image/slide4.png"
// import {useState} from "react"
// import { useEffect } from "react"

// const Container=styled.div`
//     /* background-color: teal; */
// `
// const Wrapper=styled.div`
//     width: 70%;
//     height: 40vh;
//     margin: auto;

// `
// const SliderDiv=styled.div`
// border: 1px solid red;
// display: flex;
// width: 100%;
// height: 100%;



    
// `
// const Slide=styled.img`
//     height: 100%;
//     width:100%;
//     border: 1px solid brown;


// `
// const Meal=styled.div`

// `



// const Slider = () => {
  
//     const [index,setIndex]=useState(0)
//     let id
//     const handleSlide=()=>{
//          id= setInterval(()=>{           

//             setIndex(pre=>{
//                 if(pre>=4){
//                     pre=0
//                 }
//               return  pre+1
//             });
//         },2000);

//     }

//     useEffect(()=>{
//         handleSlide()
//         return function cleanup(){
//             clearInterval(id)
//         } 
//         // eslint-disable-next-line
//     },[]);

//     console.log(index)
//   return (
//     <Container>
//         <Wrapper>
//             <SliderDiv >

//             </SliderDiv>
//             <Meal>

//             </Meal>
//         </Wrapper>
//     </Container>
//   )
// }

// export default Slider