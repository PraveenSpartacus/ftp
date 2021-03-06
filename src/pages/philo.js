import React from 'react'
import NavBar from '../components/NavBar2'
import Img from '../images/philo.svg'
import Footer from '../components/Footer'
import style from '../css/netflix.module.css'

import {Link} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';


import netflix from '../images/netflix.svg'
import prime from '../images/prime.svg'
import hulu from '../images/hulu.svg'
import hbo from '../images/hbo.svg'
import fubo from '../images/fubotv.svg'


let link = 'https://www.philo.com/'


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
                Offer - 7 Day Free Trial
                </h4>
                <h3>
                Live & on-demand TV, 50+ channels and Unlimited DVR.


                </h3>
                <a href={link} target="_blank"><button>Get the Offer</button></a>
                <h2>
                    Related Services
                </h2>
                <div className={style.line}></div>

                <div className={style.related}> 
                    <Link to="/netflix"><img src={netflix} alt="img"></img></Link>
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

export default productPage