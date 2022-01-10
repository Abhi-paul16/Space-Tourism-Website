import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import backgroundImage from '../images/destination/background-destination-desktop.jpg';
import moon from "../images/destination/image-moon.png"


const Destination = () => {
    return (
        <Main>
            <DestinationView>
                 <img src={moon} alt="" />
            </DestinationView>


            <DestinationContent>
                <PickupDestination>
                  <Link to="/" ></Link>
                </PickupDestination>
                <DestinationName>

                </DestinationName>
                <AboutDestination>
                    
                </AboutDestination>
            </DestinationContent>
        </Main>
    )
}

export default Destination


const Main = styled.div`
    background-image: url(${backgroundImage});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`


const DestinationView = styled.div`
    
`
const DestinationContent = styled.div`
    
`

const PickupDestination = styled.div`
    
`
const  DestinationName = styled.div`
    
`

const AboutDestination = styled.div`
    
`