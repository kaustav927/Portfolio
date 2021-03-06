import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo(props){

    const style = useSpring({opacity: 1, from: {opacity:0}})

    return(
        <animated.div className="ks-card-info" style={style}>
            <p className="ks-card-title">{props.title}</p>
            <p className="ks-card-sub-title">{props.subTitle}</p>
            <p className="ks-card-description">{props.descripton}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )
}

export default CardInfo;