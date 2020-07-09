import React from 'react'
import NavBar from '../components/NavBar2'
import Img from '../images/carbonite.svg'
import Footer from '../components/Footer'
import style from '../css/netflix.module.css'

import {Link} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';


import asana from '../images/asana.svg'
import egnyte from '../images/egnyte.svg'
import sugarsync from '../images/sugarsync.svg'
import backblaze from '../images/backblaze.svg'
import monday from '../images/monday.svg'

let link = `https://www.carbonite.com/`


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
                Offer - 15 Day Free Trial
                </h4>
                <h3>
                Backup. <br></br> Recovery. <br></br>Peace of Mind.


                </h3>
                <a href={link} target="_blank"><button>Get the Offer</button></a>
                <h2>
                    Related Services
                </h2>
                <div className={style.line}></div>

                <div className={style.related}> 
                    <Link to="/asana"><img src={asana} alt="img"></img></Link>
                    <Link to="/egnyte"><img src={egnyte} alt="img"></img></Link>
                    <Link to="/sugarsync"><img src={sugarsync} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/backblaze"><img src={backblaze} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/monday"><img src={monday} alt="img"></img></Link>
                    
                </div>
            </div>

            <Footer/>
        </div>
        </PageTransition>
    )
}

export default productPage