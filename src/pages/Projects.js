import React from 'react'
import Carousel from '../components/Carousel'
import { Col, Container } from 'react-bootstrap'
import './projects.css'
import Content from '../components/Content'
import {Row} from 'react-bootstrap'

function Projects(props){
//<div id="projects" className="aboutStyle"></div>
    return(
        <div id="projects" className="aboutStyle">
        
        <Container>
            <Col>
            <Row>
             <h1>Projects</h1>
            </Row>
            <Row>
             <Carousel/>
            </Row>
            </Col>
            
            
        </Container>
           
        
        </div>
       
            

           
    );
}
    

export default Projects;