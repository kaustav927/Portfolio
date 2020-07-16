import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props){

    return(
        <div>
            <Hero title={props.title}></Hero>

            <Content>
                <h1>Hello</h1>
                <p>lorem 20</p>
            </Content>
        </div>
    );
}
    

export default AboutPage;