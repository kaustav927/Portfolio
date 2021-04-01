import React from 'react'
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from '../components/Card';
import '../App.css';

import changeX from '../assets/img/ChangeX-PW.png'
import game from '../assets/img/Game-PW.png'
import sentiment from '../assets/img/Sent_analysis_PW.png'
import LPM from '../assets/img/LPM.png'
import QnASpace from '../assets/img/qnaSpace.png'
class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'QnA Space',
                    subTitle: 'Online Education ',
                    description:"",
                    imgSrc: QnASpace,
                    link: 'https://devpost.com/software/qna-space',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Loan Prediction Model',
                    subTitle: 'FinTech POC',
                    description:"Pandas, Scikit-learn, Flask, Vue",
                    imgSrc: LPM,
                    link: 'https://www.youtube.com/watch?v=5LCULmsK5zY',
                    selected: false
                },
                
                {
                    id: 2,
                    title: 'ChangeX',
                    subTitle: 'Charity Concept',
                    description:"",
                    imgSrc: changeX,
                    link: 'https://changex.ca',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Sentiment Anlalyzer',
                    subTitle: 'NLP with Python',
                    description:"",
                    imgSrc: sentiment,
                    link: 'https://github.com/kaustav927/Twitter-Sentiment-Analyzer',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Archi',
                    subTitle: 'Computer v.s. Human game',
                    description:"",
                    imgSrc: game,
                    link: 'https://github.com/kaustav927/TicTacToe',
                    selected: false
                },
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