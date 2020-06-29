import React from 'react'
import NavBar from '../components/NavBar2'
import netflixImg from '../images/netflix.svg'
import Footer from '../components/Footer'
import style from '../css/netflix.module.css'

import {Link} from 'gatsby'

import disney from '../images/disney.svg'
import prime from '../images/prime.svg'
import hulu from '../images/hulu.svg'
import hbo from '../images/hbo.svg'

const netflix = () =>{
    return(
        <div className={`page ${style.page}`}>
            <NavBar/>
            <div className={style.pageContent}>
                <img className={style.img} src={netflixImg}></img>
                <h4>
                Offer - 30 Day Free Trial
                </h4>
                <h3>
                Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.
                </h3>
                <button>Get the Offer</button>
                <h2>
                    Related Services
                </h2>
                <div className={style.line}></div>

                <div className={style.related}> 
                    <Link to="/"><img src={disney} alt="img"></img></Link>
                    <Link to="/"><img src={netflixImg} alt="img"></img></Link>
                    <Link to="/"><img src={prime} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/"><img src={hulu} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/"><img src={hbo} alt="img"></img></Link>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default netflix