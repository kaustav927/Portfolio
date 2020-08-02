import React from 'react'
import Content from '../components/Content'

import { Container, Card, Row} from 'react-bootstrap'
import './About.css'

function AboutPage(props){

    return(
        <div id="about" className="aboutStyle">
        <Container>
            <Content>
                <h1>About Me</h1>
                <p>
                Hello! My name is Kaustav (kohs-tohv) and I am a third year CS student at Western University (UWO). I love making things. While hard technical problems are intrinsically fun for me to tackle, I  am most intrigued by creating tastefully designed products for customers with an entrepreneurial justification. I am on a quest to find opportunities that will improve myself as a developer, and allow me to collaborate with awesome people who complement my skills. 
                </p>

                <h3 className="subHeadings">Experience</h3>
                <Row className="justify-content-around ">
                   
               
                <Card className="experienceCard"  style={{ width: '18rem' }}>
                <Card.Body className="callUnify_cardStyle">
                    <Card.Title>callUnify</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">QA Software Developer</Card.Subtitle>
                    <Card.Text>
                    Develop unit tests, conduct competitor research, and document user-reported bugs.
                    </Card.Text>
                    <Card.Link href="https://callunify.com/">Visit Site</Card.Link>
                </Card.Body>
                </Card>

                <Card className="experienceCard"  style={{ width: '18rem' }}>
                <Card.Body className="gazette_cardStyle">
                    <Card.Title>The Western Gazette</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Design Editor</Card.Subtitle>
                    <Card.Text>
                    Collaborate with storytellers to create well-recived graphical elements that complement stories. 
                    </Card.Text>
                    <Card.Link href="https://westerngazette.ca/">Visit Site</Card.Link>
                </Card.Body>
                </Card>

                </Row>

                <h3 className="subHeadings">Skills</h3>
                <ul>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>Javascript</li>
                    <li>C</li>
                </ul>


            </Content>
            </Container>
        </div>
    );
}
    

export default AboutPage;