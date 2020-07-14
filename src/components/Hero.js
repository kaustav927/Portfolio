import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Hero.css';
//import Button from 'react-bootstrap/Button'

//active style={{marginTop: 20, color: '#05386b', borderColor: '#379683', backgroundColor: '#edf5e1'}}

function Hero(props){
    return(

        <Jumbotron className="jumbotron-fluid rounded-0 justify-content-center align-self-center jumbotron" >
            <Container fluid={true}>
                <Row className="justify-content-center padding">
                    <Col ms={8} sm={10}>
                       { props.title && <h1 className="display-1 font-weight-bolder font_color">{props.title}</h1>}
                       { props.subTitle && <h3 className="display-4 font-weight-light font_color marginBottom">{props.subTitle}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero; 

