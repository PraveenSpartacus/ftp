import React from 'react'
import NavBar from '../components/NavBar2'
import Img from '../images/pluralsight.svg'
import Footer from '../components/Footer'
import style from '../css/netflix.module.css'

import {Link} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';


import udemy from '../images/udemy.svg'
import coursera from '../images/coursera.svg'
import teamtreehouse from '../images/teamtreehouse.svg'
import codecademy from '../images/codecademy.svg'
import guitartricks from '../images/guitartricks.svg'

let link = 'https://www.pluralsight.com/'


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
                Offer - 10 Day Free Trial
                </h4>
                <h3>
                Take control of your career. With our technology skills platform, you can see where your skills stand, master the latest technologies and show off your expertise.
                </h3>
                <a href={link} target="_blank"><button>Get the Offer</button></a>
                <h2>
                    Related Services
                </h2>
                <div className={style.line}></div>

                <div className={style.related}> 
                <Link to="/udemy"><img src={udemy} alt="img"></img></Link>
                    <Link to="/coursera"><img src={coursera} alt="img"></img></Link>
                    <Link to="/teamtreehouse"><img src={teamtreehouse} alt="img"></img></Link>
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