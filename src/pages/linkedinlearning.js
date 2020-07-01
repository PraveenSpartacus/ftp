import React from 'react'
import NavBar from '../components/NavBar2'
import Img from '../images/linkedinlearning.svg'
import Footer from '../components/Footer'
import style from '../css/netflix.module.css'

import {Link} from 'gatsby'

import disney from '../images/disney.svg'
import prime from '../images/prime.svg'
import hulu from '../images/hulu.svg'
import hbo from '../images/hbo.svg'

const productPage = () =>{
    return(
        <div className={`page ${style.page}`}>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
            <NavBar/>
            <div className={style.pageContent}>
                <img className={style.img} src={Img}></img>
                <h4>
                Offer - 30 Day Free Trial
                </h4>
                <h3>
                Keep learning in the moments that matter.
                Learn in-demand skills with over 14,000+ online courses taught by real-world professionals.                
                </h3>
                <a href="/"><button>Get the Offer</button></a>

                <h2>
                    Related Services
                </h2>
                <div className={style.line}></div>

                <div className={style.related}> 
                    <Link to="/"><img src={disney} alt="img"></img></Link>
                    <Link to="/"><img src={hbo} alt="img"></img></Link>
                    <Link to="/"><img src={prime} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/"><img src={hulu} alt="img"></img></Link>
                    <Link className={style.notVisible} to="/"><img src={hbo} alt="img"></img></Link>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default productPage