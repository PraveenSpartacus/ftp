import React from 'react'
import NavBar from '../components/NavBar2'
import Img from '../images/kobo.svg'
import Footer from '../components/Footer'
import style from '../css/netflix.module.css'

import {Link} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';


import amazonkindle from '../images/amazonkindle.svg'
import blinkist from '../images/blinkist.svg'
import playster from '../images/playster.svg'
import scribd from '../images/scribd.svg'
import audible from '../images/audible.svg'

let link = `https://www.kobo.com/`


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
                Offer - 30 Day Free Trial
                </h4>
                <h3>
                Open up to over 6 million eBooks and audiobooks on award-winning eReaders.
                </h3>
                <a href={link} target="_blank"><button>Get the Offer</button></a>
                <h2>
                    Related Services
                </h2>
                <div className={style.line}></div>

                <div className={style.related}> 
                    <Link to="/amazonkindle"><img src={amazonkindle} alt="img"></img></Link>
                    <Link to="/blinkist"><img src={blinkist} alt="img"></img></Link>
                    <Link to="/scribd"><img src={scribd} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/playster"><img src={playster} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/audible"><img src={audible} alt="img"></img></Link>
                </div>
            </div>

            <Footer/>
        </div>
        </PageTransition>
    )
}

export default productPage