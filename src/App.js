
import React from 'react';
import './App.css';
//import {BrowserRouter as Router, Route,Link} from "react-router-dom"; 

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'


import { Link} from "react-scroll";

//import jsPDF from 'jspdf'

import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';

import { Container } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';




class App extends React.Component {

constructor(props){

  super(props);
  this.scrollToTop = this.scrollToTop.bind(this);
  this.state = {

      title: "Kaustav Sharma",
      //scrolled :false,
      headerLinks:[ 
        {title:'Home', path:'/'},
        {title:'About', path:'/about'},
        {title:'Contact', path:'/contact'}
      ],
      home: {
        title:'Relentless Developer.',
        subTitle:'Focused on creating the future.',
        text:'Checkout my projects below.'
      },
      about: {
        title:'About me',
      },
      contact: {
        title:'Let\'s Talk',
      },
  };
}





scrollToTop(){}

  state = {
    expanded: {}
  }
  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
    }
  
    closeNav = () => {
    this.setState({ navExpanded: false });
    }






componentDidMount(){
  window.addEventListener('scroll', ()=>{
    const isTop = window.scrollY<137;
    console.log(window.scrollY)
    if(isTop !== true){
      this.setState({scrolled:true})
    }else{
      this.setState({scrolled:false})
    }
  });
}
componentWillUnmount(){
  window.removeEventListener('scroll');
}




// <Navbar fixed ="top" className={this.state.scrolled ? 'nav scrolled' : 'nav'} >
///className="border-0"

//button class
//className="button button:hover navText"
  render(){
    return (
      <div>
         <Container>
    
          <Navbar  onToggle={this.setNavExpanded} expanded={this.state.navExpanded} fixed ="top" expand="lg" variant="dark" className={(this.state.scrolled ? 'nav scrolled' : 'nav')} >
          <Navbar.Brand className="navText" id="navText"> Kaustav Sharma </Navbar.Brand>
          <Navbar.Toggle className="border-0 navbar-hamburger" aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav navText">
                <Nav className="ml-auto navbar">
                  <NavItem className="nav-link navText nav-item navbar" id="navText" eventKey={1} href="#home"><Link onClick={this.closeNav} activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></NavItem>
                  <NavItem className="nav-link navText nav-item navbar" id="navText" eventKey={2} href="#about"><Link onClick={this.closeNav} activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></NavItem>
                  <NavItem className="nav-link navText nav-item navbar" id="navText" eventKey={3} href="#contact"><Link onClick={this.closeNav} activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></NavItem>
                  <NavItem className="nav-link navText nav-item navbar" id="navText" eventKey={4} href="#projects"><Link onClick={this.closeNav} activeClass="active" to="projects" spy={true} smooth={true} duration={500}>Projects</Link></NavItem>
                  <Button className="Abutton" variant="outline-primary"><a rel="noopener noreferrer" className="Abutton" href='https://drive.google.com/file/d/10GbF8d7Ch2FCYeV_KdYwsi0HMxxw2I7B/view?usp=sharing' target="_blank">Resume</a></Button>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          </Container>
      
      <HomePage/>
      <AboutPage/>
      <ContactPage/>
      <Footer/>

      </div>
     );
   }
}

//

export default App;
//<Link to="/resume"><Button className="button button:hover navText" variant="outline-primary">Resume</Button></Link>
//<Route path='/resume' exact={true} component={() => {window.location.href = 'https://drive.google.com/file/d/10GbF8d7Ch2FCYeV_KdYwsi0HMxxw2I7B/view?usp=sharing'; return null;}}/>

/*<Route class="nav-link" path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
        <Route class="nav-link" path="/about" render={()=> <AboutPage title={this.state.about.title}/>} />
        <Route class="nav-link" path="/contact" render={()=> <ContactPage title={this.state.contact.title}/>} />
        */




        /*<Link
                activeClass="active"
                id="navText"
                className="nav-link navText nav-item"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                >Home</Link>


  
                <Link
                
                activeClass="active"
                id="navText"
                className="nav-link navText"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                >About</Link>
              

                <Link

                activeClass="active"
                id="navText"
                className="nav-link navText"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                >Contact</Link>
                */