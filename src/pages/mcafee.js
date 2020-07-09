import React from 'react'
import NavBar from '../components/NavBar2'
import Img from '../images/mcafee.svg'
import Footer from '../components/Footer'
import style from '../css/netflix.module.css'

import {Link} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';


import pandasecurity from '../images/pandasecurity.svg'
import bullguard from '../images/bullguard.svg'
import kaspersky from '../images/kaspersky.svg'
import norton from '../images/norton.svg'
import webroot from '../images/webroot.svg'

let link = `https://www.mcafee.com/`


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
                The first cloud-based platform that protects data and stops threats.


                </h3>
                <a href={link} target="_blank"><button>Get the Offer</button></a>
                <h2>
                    Related Services
                </h2>
                <div className={style.line}></div>

                <div className={style.related}> 
                    <Link to="/pandasecurity"><img src={pandasecurity} alt="img"></img></Link>
                    <Link to="/bullguard"><img src={bullguard} alt="img"></img></Link>
                    <Link to="/kaspersky"><img src={kaspersky} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/norton"><img src={norton} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/webroot"><img src={webroot} alt="img"></img></Link>
                    
                </div>
            </div>

            <Footer/>
        </div>
        </PageTransition>
    )
}

export default productPage