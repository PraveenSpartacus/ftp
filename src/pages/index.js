import React, { Component } from 'react'
import '../css/global.css'
import NavBar from '../components/NavBar'
import HomeContent from '../components/HomeContent'
import Featured from '../components/Featured'
import Filter from '../components/Filter'
import Footer from '../components/Footer'

import PageTransition from 'gatsby-plugin-page-transitions';


export class index extends Component {
    // constructor({props,location}) {
    //     super(props)
    
    //     this.state = {
             
    //     }
    // }
    
    // scroll(){
    //     console.log(Boolean(this.location.state.scroll))
    //     //console.log("works")
    // }
    // componentDidMount(){
    //     this.scroll()
    // }
    render() {
        return (
            <PageTransition
            defaultStyle={{
                transition: 'right 500ms ease, opacity 500ms',
                right: '20%',
                opacity: 0,
                position: 'absolute',
                width: '100%',
              }}
              transitionStyles={{
                entering: { right: '0%', opacity: 1},
                entered: { right: '0%', opacity: 1},
                exiting: { right: '100%', opacity:1},
              }}
              transitionTime={500}
            >
            <div className="page">
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
                <NavBar/>
                <HomeContent/>
                <Featured/>
                <Filter/>
                {/* <div className="sample"></div> */}
                <Footer/>
            </div>
            </PageTransition>
        )
    }
}

export default index
