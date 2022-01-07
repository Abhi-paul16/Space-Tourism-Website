import React from 'react'
import styled from 'styled-components';
import bg from '../images/home/background-home-desktop.jpg';

const Home = () => {
    return (
        <Container>
           <Section>
               <Space>
                 
                  <h2>So you want to Travel </h2>
                  <h1>SPACE</h1>
                  <p>Let’s face it; if you want to go to space, you might as well  genuinely go to outer space and not hover kind of on the <br /> edge of it. Well sit back, and relax because we’ll give you <br /> a truly out of this world experience!</p>
               </Space>
               <Explore>
                    <a href=""> Explore </a> 
               </Explore>
           </Section>
        </Container>
    )
}

const Container = styled.div`
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    overflow-x: hidden;
   
`
const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
   
    
`
const Space = styled.div`
    width: 50%;
  h2{
      text-transform: uppercase;
  }
    h1{
        font-size: 60px;
    }
`
const Explore = styled.div`
    width: 50%;
    font-size: 40px;
    background-color: white;
    color: black;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`
export default Home
