import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components'
import backgroundImage from '../images/destination/background-destination-desktop.jpg';
import moon from "../images/destination/image-moon.png"
import data from "../data.json"

 const Destination = () => {
     const DestinationData = data.destinations;
     console.log(DestinationData.map)
   
     return (
         <Main>
 
             <ContenWrapper>
             <DestinationView>
                  <img src={moon} alt="" />
             </DestinationView>
 
 
             <DestinationContent>
                 <PickupDestination>
                   <Link to="/Destination/Moon"> Moon </Link>
                   <Link to="/Destination/Mars"  > Mars </Link>
                   <Link to="/"> Europa </Link>
                   <Link to="/"> Titan </Link>
                 </PickupDestination>
                 <Outlet/>
                 <DestinationName>
                    <h1>MOON</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                      quasi magni iusto dolores aut assumenda aspernatur aliquid provident debitis 
                      architecto. Accusamus vel dolore tempora quae natus. Hic eos fugit magnam?
                      </p>
                   <Line></Line>
                 </DestinationName>
                 <AboutDestination>
                     <AvgDistance>
                        <h5>Avg.Distance</h5>
                        <h2>384,400KM</h2>
                     </AvgDistance>
                     <TravelTime>
                        <h5>ESt.Travel Time</h5>
                        <h2>3 DAYS</h2>
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
     
 `
 
 const DestinationView = styled.div`
     
 `
 const DestinationContent = styled.div`
     width: 40%;
    
 `
 
 const PickupDestination = styled.div`
   display: flex;
   justify-content: space-between;
   width: 55%;
     a{
         color: #D0D6f9;
         font-size: 22px;
         text-transform: uppercase;
         font-family: 'Barlow Condensed', sans-serif;
         letter-spacing: 2px;
     }
 `
 const  DestinationName = styled.div`
    padding-top: 15px;
     h1{
         font-size: 6em ;
         font-family: 'Bellefair', serif;
         font-weight: 400;
         padding: 20px 20px 20 0px;
     }
     p{
         line-height: 1.6;
         font-size: 18px;
         width: 80%;
     }
 `
 
 const Line = styled.div`
     height: 1px;
     width: 80%;
     margin: 30px 0px ;
     background-color: #D0D6f9;
 `
 
 const AboutDestination = styled.div`
         display: flex;
     justify-content: start;
     width: 80%;
     text-transform: uppercase;
 `
 
 const AvgDistance = styled.div`
     
 `
 const TravelTime = styled.div`
     margin-left: 55px;
 `
 
 
 export default Destination