import React from 'react'
import Carousel from '../components/Carousel'
import { Container } from 'react-bootstrap'
import './projects.css'
import Content from '../components/Content'
import {Row} from 'react-bootstrap'

function Projects(props){
//<div id="projects" className="aboutStyle"></div>
    return(
        <div id="projects" className="aboutStyle">
        
        <Container>
            
            <Row>
             <h1>Projects</h1>
            </Row>
            <Carousel/>
        </Container>
           
        
        </div>
       
            

           
    );
}
    

export default Projects;