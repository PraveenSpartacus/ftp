import React from 'react'
import {Link} from 'gatsby'
import style from '../css/Featured.module.css'
import disney from '../images/disney.svg'
import netflix from '../images/netflix.svg'
import prime from '../images/prime.svg'
import hulu from '../images/hulu.svg'
import hbo from '../images/hbo.svg'

const Featured = () =>{
    return(
        <div className={style.featuredContainer}> 
            <Link to="/"><img src={disney} alt="img"></img></Link>
            <Link to="/"><img src={netflix} alt="img"></img></Link>
            <Link to="/"><img src={prime} alt="img"></img></Link>
            <Link className={style.notVisible} to="/"><img src={hulu} alt="img"></img></Link>
            <Link className={style.notVisible} to="/"><img src={hbo} alt="img"></img></Link>
        </div>
    )
}

export default Featured