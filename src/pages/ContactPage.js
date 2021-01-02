import React from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Content from '../components/Content'
import axios from 'axios';


import './Contact.css'
import Icons from '../components/Icons';



class ContactPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange = (event) =>{
        const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
    
            this.setState({
                [name]: value
            })
    }
    async handleSubmit(event){
        event.preventDefault();
        console.log(event.target);
        this.setState({
            disabled: true
        });


        axios.post('http://localhost:3001/api/email', this.state)
        .then(res => {

            if(res.data.success) {
                this.setState({
                    disabled: false,
                    emailSent: true
                });
            }
            
            else {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            }
        })
        .catch(err => {
            console.log(err);
            this.setState({
                disabled: false,
                emailSent: false
            });
        })

    }

    render() {
        return(
                <div id="contact" className="contactStyle">
                
               
                <Icons/>
                
             
                </div>
        );
    }


}

export default ContactPage; 