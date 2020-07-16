import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import { Container } from 'react-bootstrap'

function HomePage(props){

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Container>
            <Carousel/>
            </Container>
            
        </div>

       

        
            

           
     
     
    );
}
    

export default HomePage;