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
                  <p>Let’s face it; if you want to go to space, you might as well  genuinely go to outer space and not hover kind of on the  edge of it. Well sit back, and relax because we’ll give you  a truly out of this world experience!</p>
               </Space>
               <Explore>
                    <a href="{#}"> Explore </a> 
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
   padding-top: 40vh;

   @media (max-width: 768px) {
        flex-direction: column;
        padding-top: 20vh;
        justify-content: space-around;
    }
    
`
const Space = styled.div`
    width: 50%;
    color: #d0d6f9;
  h2{
      text-transform: uppercase;
      font-weight: 300;
     letter-spacing: 2px;
     line-height: 1.6;
  }
    h1{
        font-size: 150px;
        line-height: 1.5;
        font-family: 'Bellefair', serif;
        font-weight: 400;
        color: white;
    }
    p{
        line-height: 1.4;
        font-size: 20px;
    }

    @media (max-width: 768px) {
       width: 100%;
       text-align: center;
       h1{
           font-size: 100px;
       }
       p{
           width: 60%;
           margin: 10px auto;
       }
    }

    @media (max-width: 380px){
        p{
            width: 90%;
        }
    }
`
const Explore = styled.div`
    width: 50%;
    font-size: 40px;
    background-color: white;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    
    @media (max-width: 768px) {
        margin-top: 80px;
    }

`
export default Home
