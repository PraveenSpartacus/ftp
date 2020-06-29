import React from 'react'
import Cards from './Cards'
import style from '../css/MobileLayout.module.css' 

const MobileLayout = (props) =>{
    return(
        <div className={style.layout}>
            <p id={props.title}>{props.title}</p>
            <div className={style.line}></div>
            <div className={style.mobileCards}>
                <Cards Cards={props.cards}></Cards>
            </div>
        </div>
    )
}

export default MobileLayout