const express = require('express')
const bodyParser= require('body-parser')
const nodeMailer=require('nodemailer')
const app=express()
const PORT=process.env.PORT ||3030
const cors = require('cors');
require('dotenv').config();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend:false}))
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.post('/api/email',(req,res)=>{

    console.log(req.body)
   // console.log(process.env.EM_PASSWORD, process.env.EM_USERNAME)
    
        const htmlEmail=`
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        var transporter = nodeMailer.createTransport("SMTP", {
            service: "hotmail",
            auth: {
                user: "user@outlook.com",
                pass: "password"
            }
        });
        //var transporter = nodeMailer.createTransport(transport)


        let mailOptions={
            from:req.body.email,
            to:process.env.EM_USERNAME,
            subject:`Portfolio Contact from ${req.body.name}`,
            text:req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions,(err,info)=>{
            
            if(err){
                res.status(401).json({
                    success: false
                });
                return console.log('error: ', err);
            }
            else{
                res.status(200).json({
                    success: true
                });
            }      
        })    
    })


app.listen(PORT, '0.0.0.0')
