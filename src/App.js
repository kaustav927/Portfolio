


import React from 'react';
import './App.css';





import Footer from './components/Footer.js';
import Navi from './components/Navi.js'
import Projects from './pages/Projects.js'
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';



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

  render(){
    return (
      <div>
        
      <Navi/>
      <HomePage/>
      <Projects/>
      <AboutPage/>
      <ContactPage/>
      <Footer/>

      </div>
     );
   }
}

//

export default App;
