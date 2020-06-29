import React from 'react'
import style from '../css/Card.module.css'
import {Link} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"


function Card(props) {
    return (
        
        
           <AniLink swipe direction="left" duration={0.8} entryOffset={200} className={style.cardContainer} to={'/'+props.card.title}>
                <img src={require(`../images/${props.card.title}.svg`)} alt="img"></img>
                <p className={style.days}>
                    {props.card.days} days
                </p>
            </AniLink>
           
        
        
    )
}

export default Card
