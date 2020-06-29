import React from 'react'
import style from '../css/HomeContent.module.css'
import logo from '../images/logo.svg'
import scrollTo from 'gatsby-plugin-smoothscroll'

const HomeContent = () =>{
    return(
        <div className={style.home}>
            
            <h2 onClick={() => scrollTo("#btnid")}>
                Free Trial Plus
            </h2>
            {/* <div className={style.squareContainer}>
                <div className={style.square}></div>
            </div> */}
            <div className={style.square}>
                <img src={logo} alt="img"></img>
            </div>
            <div className={style.line}></div>
            
            <h1>
                The Ultimate List of Free Trials across the Internet. 
            </h1>
            
            <p>
                Get free trial access to more than 100 products and services in more than 20 categories.
            </p>

            <div className={style.check}>
                Check out Featured Offers below.
            </div>
            
        </div>
    )
}

export default HomeContent