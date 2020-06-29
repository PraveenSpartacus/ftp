import React, { Component } from 'react'
import '../css/global.css'
import NavBar from '../components/NavBar'
import HomeContent from '../components/HomeContent'
import Featured from '../components/Featured'
import Filter from '../components/Filter'
import Footer from '../components/Footer'

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
            <div className="page">
                <NavBar/>
                <HomeContent/>
                <Featured/>
                <Filter/>
                {/* <div className="sample"></div> */}
                <Footer/>
            </div>
        )
    }
}

export default index
