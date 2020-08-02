import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


import '../App.css';
import './Footer.css';

function Footer() {
    
    return(
        
        <div className="container footerText">
        <footer className="mt-5">
            <Container fluid = {true}>
                <Row className="justify-content-between p-3 flex-item footerText">
                    <div className='d-block mx-md-0 mx-auto' md={4} sm={12} >
                    Coded with <span role="img" aria-labelledby ="jsx-a11y/accessible-emoji">❤️</span> by Kaustav Sharma
                    </div>

                    <div className="d-block mx-md-0 mx-auto " md={4} sm={12}>
                     <a href='https://github.com/kaustav927/Portfolio' target="_blank" rel="noopener noreferrer">View Source Code</a>
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