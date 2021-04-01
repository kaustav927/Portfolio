import React from 'react'
import Content from '../components/Content'


import { Container, Card, Row,Col} from 'react-bootstrap'
import './About.css'

function AboutPage(props){

    return(
    <div id="about" className="aboutStyle">
       <Container>

       <Col>
       <Row>
            <h1>About Me</h1>
            </Row>
       </Col>
            

                <h2 className="subHeadings">Experience</h2>
                <Row className="justify-content-around ">
                <Card className="experienceCard"  style={{ width: '18rem' }}>
                <Card.Body className="job_cardStyle">
                    <Card.Title>Finastra</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Associate Software Engineer Co-op</Card.Subtitle>
                    <Card.Text>
                    Collaborate with software archetects, gaining valuable experiences pertaining to microsystem archetecture. 
                    </Card.Text>
                    <Card.Link href="https://www.filogix.com">Visit Company Site</Card.Link>
                </Card.Body>
                </Card>

                
                <Card className="experienceCard"  style={{ width: '18rem' }}>
                <Card.Body className="job_cardStyle">
                    <Card.Title>callUnify</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">QA Software Developer</Card.Subtitle>
                    <Card.Text>
                    Developed unit tests, conducted competitor research, and documented user-reported bugs.
                    </Card.Text>
                    <Card.Link href="https://callunify.com/">Visit Company Site</Card.Link>
                </Card.Body>
                </Card>

               

                <Card className="experienceCard"  style={{ width: '18rem' }}>
                <Card.Body className="gazette_cardStyle">
                    <Card.Title>The Western Gazette</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Design Editor</Card.Subtitle>
                    <Card.Text>
                    Collaborate with storytellers to create well-recived graphical elements that complement stories. 
                    </Card.Text>
                    <Card.Link href="https://westerngazette.ca/">Visit Company Site</Card.Link>
                </Card.Body>
                </Card>
                </Row>


            
            
              <Container>
              <Row>
              <h2 className="subHeadings">Skills</h2>
              </Row>
              
                <Row>
                <h3 className="subHeadings">Languages</h3>
                </Row>
                <Row>
                    <div className="skills"> Python </div>
                    <div className="skills"> Javascript </div>
                    <div className="skills"> Java </div>
                    <div className="skills"> C++ </div>
                    <div className="skills"> SQL </div>
                    <div className="skills"> R </div>
                </Row>


                <Row>
                <h3 className="subHeadings">Technologies</h3>
                </Row>
                <Row>
                    <div className="skills"> React </div>
                    <div className="skills"> Redux </div>
                    <div className="skills"> Bootstrap </div>
                    <div className="skills"> Vue </div>
                    <div className="skills"> Node </div>
                    <div className="skills"> Express </div>
                    <div className="skills"> MongoDB </div>
                    <div className="skills"> AWS </div>
                    <div className="skills"> Keras </div>
                    <div className="skills"> Scikit-learn </div>
                    <div className="skills"> Pandas </div>
                    <div className="skills"> Linux </div>
                    <div className="skills"> Git </div>
                </Row>
              </Container>
                

              
                

               
            
          
            </Container>
            
            
        </div>
    );
}
    

export default AboutPage;