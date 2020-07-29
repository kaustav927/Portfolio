import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import { Container } from 'react-bootstrap'

function HomePage(props){

    return(
        <div id="home">
            <Hero title='Relentless Developer.' subTitle='Focused on creating the future.' text='Checkout my projects below.'/>
            <Container>
            <div id="projects"><Carousel/></div>
            </Container>
        </div>
    );
}
    

export default HomePage;