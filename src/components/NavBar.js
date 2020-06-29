import React from 'react'
import logo from '../images/logo.svg'
import style from '../css/NavBar.module.css'
import {Link, navigate} from 'gatsby'
//import AniLink from "gatsby-plugin-transition-link/AniLink"
import scrollTo from 'gatsby-plugin-smoothscroll'

const NavBar = () =>{
    return(
        <div className={style.navContainer}>
            <div className={style.nav}>
                <Link to="/" > <img src={logo} alt="img"></img> </Link>
                <div className={style.navList}>
                    <div onClick={() => {
                        //navigate("/",{state:{scroll: true}})
                        scrollTo("#filter")
                    }}>All Tools</div>
                    <a id={style.blog} href="https://www.google.com" target="_blank">Blog</a>
                    <a href="https://www.youtube.com" target="_blank">
                        <button>Subscribe</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar