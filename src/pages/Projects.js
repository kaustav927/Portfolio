import React from 'react'
import Carousel from '../components/Carousel'
import { Container } from 'react-bootstrap'
import './projects.css'
import Content from '../components/Content'

function Projects(props){

    return(
        <div id="projects" className="aboutStyle">
            <Container>
            <Content>

            <div> <h1>Projects</h1></div>
           
           
            </Content>
            <Carousel/>
            </Container>
        </div>
           
    );
}
    

export default Projects;