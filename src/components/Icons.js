

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'react-bootstrap';


import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './icons.css'
 
//library.add(fab, faCheckSquare, faCoffee)


export default function IconsSocial() {
    return(
        
        <Row className="social-container">
             <a href="https://github.com/kaustav927" className="github social">
                 <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>

            <a href="https://www.linkedin.com/in/kaustav-sharma/" className="linkedin social">
                 <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>

            <a href = "mailto: ksharm69@uwo.ca" className="email social">
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
        </Row>
  
    )
}