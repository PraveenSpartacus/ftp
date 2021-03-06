import React from 'react'
import NavBar from '../components/NavBar2'
import Img from '../images/udemy.svg'
import Footer from '../components/Footer'
import style from '../css/netflix.module.css'

import {Link} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';


import skillshare from '../images/skillshare.svg'
import coursera from '../images/coursera.svg'
import pluralsight from '../images/pluralsight.svg'
import codecademy from '../images/codecademy.svg'
import guitartricks from '../images/guitartricks.svg'

let link = 'https://www.udemy.com/'


const productPage = () =>{
    return(
        <PageTransition
            defaultStyle={{
                transition: 'left 500ms ease, opacity 500ms',
                left: '20%',
                opacity: 0,
                position: 'absolute',
                width: '100%',
              }}
              transitionStyles={{
                entering: { left: '0%', opacity: 1},
                entered: { left: '0%', opacity: 1},
                exiting: { left: '100%', opacity:1},
              }}
              transitionTime={500}
            >
        <div className={`page ${style.page}`}>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
            <NavBar/>
            <div className={style.pageContent}>
                <img className={style.img} src={Img}></img>
                <h4>
                Offer - 14 Day Free Trial
                </h4>
                <h3>
                Study any topic, anytime and explore thousands of courses starting at ₹455 each.


                </h3>
                <a href={link} target="_blank"><button>Get the Offer</button></a>
                <h2>
                    Related Services
                </h2>
                <div className={style.line}></div>

                <div className={style.related}> 
                <Link to="/skillshare"><img src={skillshare} alt="img"></img></Link>
                    <Link to="/coursera"><img src={coursera} alt="img"></img></Link>
                    <Link to="/pluralsight"><img src={pluralsight} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/codecademy"><img src={codecademy} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/guitartricks"><img src={guitartricks} alt="img"></img></Link>
                </div>
            </div>

            <Footer/>
        </div>
        </PageTransition>
    )
}

export default productPage