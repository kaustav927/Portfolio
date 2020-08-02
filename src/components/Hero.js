import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './Hero.css';
import {useSpring, animated} from 'react-spring';

//active style={{marginTop: 20, color: '#05386b', borderColor: '#379683', backgroundColor: '#edf5e1'}}

function Hero(props){

    const style = useSpring({opacity: 1, from: {opacity:0}})
    //jumbotron-fluid rounded-0 justify-content-center align-self-center jumbotron
    return(
    
      <Jumbotron className="jumbotron-fluid rounded-0 jumbotron" >
            <Container fluid={true}>
               
                <animated.div style={style}>
                <Container className="justify-content-center padding">
                    <Col ms={8} sm={12}>
                       { props.title && <h1 className="font-weight-bolder font_color TitleFont">{props.title}</h1>}
                       { props.subTitle && <h3 className="font-weight-light font_color marginBottom SubtitleFont">{props.subTitle}</h3>}
                       { props.subTitle && <h3 className="font-weight-light font_color marginBottom text">{props.text}</h3>}
                    </Col>
                </Container>
                
                </animated.div>
                
            </Container>
        </Jumbotron>
  
    );
}

export default Hero; 

 //{ props.text && <h3 className="lead font-weight-light">{props.text}</h3> }