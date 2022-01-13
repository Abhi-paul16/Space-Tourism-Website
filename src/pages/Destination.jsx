import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
//framer motion
import { motion } from 'framer-motion';

//images
import backgroundImage from '../images/destination/background-destination-desktop.jpg';
import moon from "../images/destination/image-moon.png"
import mars from "../images/destination/image-mars.png"
import Europa from "../images/destination/image-europa.png"
import Titan from "../images/destination/image-titan.png"
import data from "../data.json"

 const Destination = () => {
     const DestinationData = data.destinations;
    
    const [name , setName] = useState(DestinationData[0].name)
    const [discription , setDiscription] = useState(DestinationData[0].description)
    const [distance , setDistance ] = useState(DestinationData[0].distance)
    const [travel , setTravel] = useState(DestinationData[0].travel)
    const [image , setImage] = useState(moon)
    const [color , setColor] = useState("color-of")
     return (
         <Main>
              
             <ContenWrapper>
             <DestinationView>
             <Heading>
                 <h2><span>01</span> Pick up your Destination</h2>
                 </Heading> 
                  <img src={image} alt="" />
                  
             </DestinationView>
 
 
             <DestinationContent>
                 <PickupDestination>
                   <Link
                   onClick={()=> {setName(DestinationData[0].name);
                    setDiscription(DestinationData[0].description); 
                    setDistance(DestinationData[0].distance); 
                    setTravel(DestinationData[0].travel); setImage(moon) }  } 
                    style={{color:"white"}} to="/Destination"> Moon 
                    <AnimLine initial = {{width: "0"}}  transition={{duration:1}} animate={{width:"100%"}}/>
                    </Link>
                   <Link className={color}
                   onClick={()=> 
                   {setName(DestinationData[1].name);
                    setDiscription(DestinationData[1].description);
                    setDistance(DestinationData[1].distance);
                    setTravel(DestinationData[1].travel); setImage(mars)
                    setColor("color-on")
                 } }
                      to="/Destination/Mars">
                     Mars
                 </Link>
                   <Link
                   onClick={()=> {setName(DestinationData[2].name); 
                   setDiscription(DestinationData[2].description); 
                   setDistance(DestinationData[2].distance); 
                   setTravel(DestinationData[2].travel); setImage(Europa) } } to="/Destination/Europa"> Europa 
                   </Link>

                   <Link
                   onClick={()=> {setName(DestinationData[3].name);
                    setDiscription(DestinationData[3].description);
                    setDistance(DestinationData[3].distance); 
                    setTravel(DestinationData[3].travel); setImage(Titan) } } to="/Destination/Titan"> Titan
                    </Link>
                 </PickupDestination>
                
                 <DestinationName>
                    <h1>{name}</h1>
                    <p> {discription} </p>
                   <Line></Line>
                 </DestinationName>
                 <AboutDestination>
                     <AvgDistance>
                        <h5>Avg.Distance</h5>
                        <h2>{distance}</h2>
                     </AvgDistance>
                     <TravelTime>
                        <h5>ESt.Travel Time</h5>
                        <h2>{travel}</h2>
                     </TravelTime>
                 </AboutDestination>
             </DestinationContent>
             </ContenWrapper>
         
         </Main>
     )
 }
 

 
 const Main = styled.div`
     background-image: url(${backgroundImage});
     height: 100vh;
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     color: #ffffff;
 `
 const ContenWrapper = styled.div`
     height: 100vh;
     display: flex;
     align-items: center;
     justify-content: space-around;
     @media (max-width: 1000px){
         flex-direction: column;
         justify-content: center;
         align-items: center;
     }
     
 `
  
  const Heading  = styled.div`
       color: #ffffff;
      text-transform: uppercase;
      font-size: 20px;
      font-family: 'Barlow Condensed', sans-serif;
      h2{
        font-weight: 400;
        letter-spacing: 2px;
        text-align:start;
        @media (max-width: 1000px){
        text-align: center;
     }
      }
      span{
          color: #555555;
      }
  `
 
 const DestinationView = styled.div`
     img{
         padding-top: 4rem;
         @media (max-width: 1000px){
         width: 50%;
         display: block;
         margin: auto;
         padding-bottom: 1rem   ;
     }
        }
     
 `
 const DestinationContent = styled.div`
     width: 40%;
     @media (max-width: 1000px){
         text-align: center;
         width: 100%;
         text-align: center;
     }
 `
 
 const PickupDestination = styled.div`
   display: flex;
   justify-content: space-between;
   width: 60%;
     a{
         color: #D0D6f9;
         font-size: 22px;
         text-transform: uppercase;
         font-family: 'Barlow Condensed', sans-serif;
         letter-spacing: 2px;
     }
     .color-on{
      color: white;
     }
     a:hover{
         color: white;
     }
     @media (max-width: 1000px){
     align-items: center;
     justify-content: space-between;
     margin: auto;
      }
      @media (max-width: 400px){
          width: 95%;
      }
 `
 const  DestinationName = styled.div`
    padding-top: 15px;
     h1{
         font-size: 6em ;
         font-family: 'Bellefair', serif;
         font-weight: 400;
         padding: 20px 20px 20 0px;
         text-transform: uppercase;
     }
     p{
         line-height: 1.6;
         font-size: 18px;
         width: 80%;
         @media (max-width: 1000px){
         width: 100%;
     }
     }
     
 `
 
 const Line = styled.div`
     height: 1px;
     width: 80%;
     margin: 30px 0px ;
     background-color: #D0D6f9;
     @media (max-width: 1000px){
         width: 100%;
     }

 `
 
 const AboutDestination = styled.div`
     display: flex;
     justify-content: start;
     width: 80%;
     text-transform: uppercase;
     h2:hover{
         color: #D0D6F9;
     }
     @media (max-width: 1000px){
         width: 100%;
         justify-content: center;
     }
 `
 const AnimLine = styled(motion.div)`
      width: 0%;
       height: 3px;
       background-color: #ffffff;
 `
 
 const AvgDistance = styled.div`
     
 `
 const TravelTime = styled.div`
     margin-left: 55px;
 `
 
 
 export default Destination