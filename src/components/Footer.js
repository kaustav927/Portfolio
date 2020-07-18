import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


import '../App.css';


//import { Link } from 'react-router-dom';
// className="d-inline-block align-top"
function Footer() {
    
    return(
        
        <div className="container">
        <footer className="mt-5">
            <Container fluid = {true}>
                <Row className="justify-content-between p-3">
                    <div className='p-0' md={4} sm={12}>
                    Coded with <span role="img" aria-labelledby ="jsx-a11y/accessible-emoji">❤️</span> by Kaustav Sharma
                    </div>

                    <div className="p-0 d-flex justify-content-end footerText" md={4} sm={12}>
                     <a href='https://github.com/kaustav927/Portfolio' target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        </footer>
        </div>
       
    );
    
}

export default Footer;