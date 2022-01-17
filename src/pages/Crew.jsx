import React from 'react'
import styled from 'styled-components'
import Douglas from '../images/crew/image-douglas-hurley.png'
const Crew = () => {
    return (
        <div>
            <ContentWrapper>
            <AboutPeople>
               <Heading>
                 <h2><span>02</span> Meet your crew</h2>
                 </Heading> 
                 <PeopleDestination>
                     Commandar
                 </PeopleDestination>
                 <PeopleName>
                     Douglas hurley
                 </PeopleName>
                 <PeopleDiscription>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic laboriosam qui quae voluptate inventore quam, incidunt, rem, numquam quia beatae fuga architecto. Quae cupiditate totam alias, provident odio rerum?
                 </PeopleDiscription>
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
`

const AboutPeople = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Heading = styled.div`
    
`

const PeopleDestination = styled.div`
    
`
const PeopleName = styled.div`
    
`
const PeopleDiscription = styled.div`
    
`
const PeopleView = styled.div``


export default Crew
