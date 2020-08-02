import React from 'react'
import Carousel from '../components/Carousel'
import { Container } from 'react-bootstrap'
import './projects.css'

function Projects(props){

    return(
        <div id="projects" className="aboutStyle">
           
            <Container>
            <Carousel/>
            </Container>
        </div>
    );
}
    

export default Projects;