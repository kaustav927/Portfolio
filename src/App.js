import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Link} from "react-router-dom"; 
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';

import $ from 'jquery'

import background from './assets/img/triangles.png'




class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
      title: "Kaustav Sharma",
      //scrolled :false,
      headerLinks:[ 
        {title:'Home', path:'/'},
        {title:'About', path:'/about'},
        {title:'Contact', path:'/contact'}
      ],
      home: {
        title:'Relentless Developer',
        subTitle:'Focused on creating ',
        text:'Checkout my projects below'
      },
      about: {
        title:'About me',
      },
      contact: {
        title:'Let\'s Talk',
      }
  };
}

componentDidMount(){
  window.addEventListener('scroll', ()=>{
    const isTop = window.scrollY<440;
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

  render(){
    return (

    
        

          
          <Router>

          <Navbar collapseOnSelect fixed ="top" expand="lg" variant="dark" className={(this.state.scrolled ? 'nav scrolled' : 'nav')} >
              <Navbar.Brand className="navText" id="navText">Kaustav Sharma</Navbar.Brand>

              <Navbar.Toggle className="border-0 navbar-hamburger" aria-controls="responsive-navbar-nav"/>
                   
              <Navbar.Collapse id="responsive-navbar-nav hamburger">
                <Nav className="ml-auto">
                  <Link className="nav-link navText" id="navText" to="/">Home</Link>
                  <Link className="nav-link navText" id="navText" to="/about">About</Link>
                  <Link className="nav-link navText" id="navText" to="/contact">Contact</Link>
                  <Button className="button button:hover" variant="outline-primary">Resume</Button>{''}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          
           
          

         
     
            
        <Route class="nav-link" path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
        <Route class="nav-link" path="/about" render={()=> <AboutPage title={this.state.about.title}/>} />
        <Route class="nav-link" path="/contact" render={()=> <ContactPage title={this.state.contact.title}/>} />
        <Footer />
        </Router>
        
     );
   }
}



export default App;
