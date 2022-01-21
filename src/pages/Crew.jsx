import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//images
import crewbg from '../images/crew/background-crew-desktop.jpg'
import Douglas from '../images/crew/image-douglas-hurley.png'
const Crew = () => {
    return (
        <div>
            <ContentWrapper>
            <AboutPeople>
               <Heading>
                 <h2><span>02</span> Meet your crew</h2>
                 </Heading> 
                 <div>


                 <PeopleDestination>
                     Commandar
                 </PeopleDestination>
                 <PeopleName>
                     Douglas hurley
                 </PeopleName>
                 <PeopleDiscription>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic laboriosam qui quae voluptate inventore quam, incidunt, rem, numquam quia beatae fuga architecto. Quae cupiditate totam alias, provident odio rerum?
                 </PeopleDiscription>
                 </div>
                 <PeoplesLink>
                    <div> <Link to='/'></Link> </div>
                    <div> <Link to='/'></Link> </div>
                    <div> <Link to='/'></Link> </div>
                    <div> <Link to='/'></Link> </div>
                 </PeoplesLink>
                 </AboutPeople>   
                 <PeopleView>
                     <img src={Douglas} alt="" />
                 </PeopleView>

                 </ContentWrapper>     
        </div>
    )
}


const ContentWrapper = styled.div`
    display: flex;
    background-image: url(${crewbg});
`

const AboutPeople = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 100vh;
    margin-left: 5rem;
    color: white;
`

const Heading = styled.div`
    text-transform: uppercase;
`

const PeopleDestination = styled.div`
    text-transform: uppercase;
    font-size: 2rem;
`
const PeopleName = styled.div`
    text-transform: uppercase;
    font-size: 3rem ;
`
const PeopleDiscription = styled.div`
    width: 45%;
    color: #d0d6f9;
`
const PeopleView = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
    img{
        height: 80vh;
    }
`


const PeoplesLink = styled.div`
   display: flex;
   width: 200px;
   justify-content: space-around;
    div{
        height: 10px;
        width:  10px;
        border-radius: 50%;
        background-color: #ffffff;
        padding: 0.5rem;
        cursor: pointer;
        opacity: 0.2;
    }
    
`

export default Crew
