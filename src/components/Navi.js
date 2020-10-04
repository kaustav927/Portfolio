


import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import { Link} from "react-scroll";
import React from 'react'
import { Container } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';


import './navbar.css'




class Navi extends React.Component {
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
render(){
  return (
 
    <Container>

     <Navbar  onToggle={this.setNavExpanded} expanded={this.state.navExpanded} fixed ="top" expand="lg" variant="dark" className="scrolled">
     <Navbar.Brand className="navText" id="navText"> Kaustav Sharma </Navbar.Brand>
     <Navbar.Toggle className="border-0 navbar-hamburger" aria-controls="responsive-navbar-nav"/>
         <Navbar.Collapse id="responsive-navbar-nav navText">
           <Nav className="ml-auto navbar">
             <NavItem className="nav-link navText nav-item navbar" id="navText" eventKey={1} href="#home"><Link onClick={this.closeNav} activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></NavItem>
             <NavItem className="nav-link navText nav-item navbar" id="navText" eventKey={2} href="#projects"><Link onClick={this.closeNav} activeClass="active" to="projects" spy={true} smooth={true} duration={500}>Projects</Link></NavItem>
             <NavItem className="nav-link navText nav-item navbar" id="navText" eventKey={3} href="#about"><Link onClick={this.closeNav} activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></NavItem>
             <NavItem className="nav-link navText nav-item navbar" id="navText" eventKey={4} href="#contact"><Link onClick={this.closeNav} activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></NavItem>
            
             <Button className="Abutton" variant="outline-primary"><a rel="noopener noreferrer" className="Abutton" href='https://drive.google.com/file/d/17NR9-V8zqedP2j8Iu9-OfkDN7xjirNEV/view?usp=sharing' target="_blank">Resume</a></Button>
           </Nav>
         </Navbar.Collapse>
     </Navbar>
     </Container>

     );
}

}
    
 export default Navi; 