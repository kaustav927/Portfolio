import React from 'react'
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from '../components/Card';
import '../App.css';

import changeX from '../assets/img/ChangeX-PW.png'
import game from '../assets/img/Game-PW.png'
import sentiment from '../assets/img/Sent_analysis_PW.png'
import LPM from '../assets/img/LPM.png'
class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Loan Prediction Model',
                    subTitle: 'FinTech POC',
                    imgSrc: LPM,
                    link: 'https://www.youtube.com/watch?v=5LCULmsK5zY',
                    selected: false
                },
                
                {
                    id: 1,
                    title: 'ChangeX',
                    subTitle: 'Charity Concept',
                    imgSrc: changeX,
                    link: 'https://changex.ca',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Sentiment Anlalyzer',
                    subTitle: 'NLP with python',
                    imgSrc: sentiment,
                    link: 'https://github.com/kaustav927/Twitter-Sentiment-Analyzer',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Archi',
                    subTitle: 'Computer v.s. Human game',
                    imgSrc: game,
                    link: 'https://github.com/kaustav927/TicTacToe',
                    selected: false
                },
                
                
                /*
                {
                    id: 4,
                    title: 'Sentiment Anlalyzer for Twitter',
                    subTitle: 'A social network for developers',
                    imgSrc: sentiment,
                    link: 'https://github.com/kaustav927/Twitter-Sentiment-Analyzer',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Sentiment Anlalyzer for Twitter',
                    subTitle: 'A social network for developers',
                    imgSrc: sentiment,
                    link: 'https://github.com/kaustav927/Twitter-Sentiment-Analyzer',
                    selected: false
                },
                */
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            
         
               <Row fluid="true" className="justify-content-around">
                   {this.makeItems(this.state.items)}
               </Row>
            

         
        );
    }

}

export default Carousel;