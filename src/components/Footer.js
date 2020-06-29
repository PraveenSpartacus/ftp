import React from 'react'
import style from '../css/Footer.module.css'

const Footer = () =>{
    return(
        <div className={style.footer}>
            <p>Free Trial Plus ©  2020</p>
            <div className={style.circle}></div>

            <p>All Rights Reserved</p>
            <div className={style.circle}></div>

            <p>Curated and Developed by <a href=''>Praveen Spartacus</a></p>
            <div className={style.circle}></div>

            <a href=''>Buy me a Coffee</a>
            

        </div>
    )
}

export default Footer