import React from 'react'
import NavBar from '../components/NavBar2'
import netflixImg from '../images/netflix.svg'
import Footer from '../components/Footer'
import style from '../css/netflix.module.css'

import {Link} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';


import crunchyroll from '../images/crunchyroll.svg'
import prime from '../images/prime.svg'
import hulu from '../images/hulu.svg'
import hbo from '../images/hbo.svg'
import fubo from '../images/fubotv.svg'


let link = 'https://www.netflix.com/'


const netflix = () =>{
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
                <img className={style.img} src={netflixImg}></img>
                <h4>
                Offer - 30 Day Free Trial
                </h4>
                <h3>
                Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.
                </h3>
                <a href={link} target="_blank"><button>Get the Offer</button></a>
                <h2>
                    Related Services
                </h2>
                <div className={style.line}></div>

                <div className={style.related}> 
                    <Link to="/crunchyroll"><img src={crunchyroll} alt="img"></img></Link>
                    <Link to="/hbo"><img src={hbo} alt="img"></img></Link>
                    <Link to="/prime"><img src={prime} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/hulu"><img src={hulu} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/fubotv"><img src={fubo} alt="img"></img></Link>
                </div>
            </div>

            <Footer/>
        </div>
        </PageTransition>
    )
}

export default netflix