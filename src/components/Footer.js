import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css';
import {useSpring, animated} from 'react-spring';
//import { Link } from 'react-router-dom';

function Footer() {
    const style = useSpring({opacity: 1, from: {opacity:0}})
    return(
        
        <div className="container">
        <footer className="mt-5" style={style}>
            <Container fluid = {true}>
                <Row className="justify-content-between p-3">
                    <Col className='p-0' md={4} sm={12}>
                    Coded with ❤️ by Kaustav Sharma
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                    <a href='https://github.com/kaustav927/Portfolio'target="_blank" rel="noopener noreferrer">View Portfolio Source Code</a>
                    </Col>
                </Row>
            </Container>
        </footer>
        </div>
       
    );
    
}

export default Footer;