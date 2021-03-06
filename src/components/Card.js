import React from 'react';

import CardInfo from '../components/CardInfo';


function Card(props) {

    return(
        <div className="d-inline-block ks-card" onClick={(e) => props.click(props.item)}>
            <img className="ks-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} description={props.item.description} link={props.item.link} /> }
        </div>
    );

}

export default Card;