import React from 'react'
import NavBar from '../components/NavBar2'
import Img from '../images/constantcontact.svg'
import Footer from '../components/Footer'
import style from '../css/netflix.module.css'

import {Link} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';


import activecampaign from '../images/activecampaign.svg'
import getresponse from '../images/getresponse.svg'
import aweber from '../images/aweber.svg'
import pinpointe from '../images/pinpointe.svg'
import mailigen from '../images/mailigen.svg'

let link = `https://www.constantcontact.com/`


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
                Offer - 60 Day Free Trial
                </h4>
                <h3>
                Powerful email marketing made easy.                
                </h3>
                <a href={link} target="_blank"><button>Get the Offer</button></a>
                <h2>
                    Related Services
                </h2>
                <div className={style.line}></div>

                <div className={style.related}> 
                    <Link to="/activecampaign"><img src={activecampaign} alt="img"></img></Link>
                    <Link to="/getresponse"><img src={getresponse} alt="img"></img></Link>
                    <Link to="/aweber"><img src={aweber} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/pinpointe"><img src={pinpointe} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/mailigen"><img src={mailigen} alt="img"></img></Link>
                    
                </div>
            </div>

            <Footer/>
        </div>
        </PageTransition>
    )
}

export default productPage