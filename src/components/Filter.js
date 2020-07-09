import React, { Component } from 'react'
//import NavBar from '../components/NavBar'
import Cards from './Cards'
import Buttons from './Buttons'
import {Link} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import style from '../css/Filter.module.css'
import AllCards from '../components/AllCards'
import scrollTo from 'gatsby-plugin-smoothscroll'
import arrow from '../images/arrow.svg'



export class Filter extends Component {
  constructor(props) {
    super(props)
    this.modalRef = React.createRef()
    this.menuRef = React.createRef()
    this.optionRef = React.createRef()

    this.state = {
       cards : this.cards,
       options: {
          education: false,
          networks: false,
          email: false,
          productivity: false,
          entertainment: false,
          design: false,
          books: false,
          apps: false,
          marketing: false,
          music: false,
       }
    }
  }

  modalClick(){
    const modal = this.modalRef.current
    modal.classList.toggle(style.displayblock)

    const menu = this.menuRef.current
    menu.classList.toggle(style.openModal)
    menu.classList.toggle(style.inset)
  }

  // inset(){
  //   const option = this.optionRef.current
  //   option.classList.toggle(style.inset)
  // }

  setEducation = () =>{
    this.setState({
      options: {
        education: true,
        networks: false,
        email: false,
        productivity: false,
        entertainment: false,
        design: false,
        books: false,
        apps: false,
        marketing: false,
        music: false,
     }
    })
    scrollTo("#EDUCATION")
  }
  setNetworks = () =>{
    this.setState({
      options: {
        education: false,
        networks: true,
        email: false,
        productivity: false,
        entertainment: false,
        design: false,
        books: false,
        apps: false,
        marketing: false,
        music: false,
     }
    })
    scrollTo("#BUSINESS")
  }
  setEmail = () =>{
    this.setState({
      options: {
        education: false,
        networks: false,
        email: true,
        productivity: false,
        entertainment: false,
        design: false,
        books: false,
        apps: false,
        marketing: false,
        music: false,
     }
    })
    scrollTo("#EMAIL")
  }

  setProductivity = () =>{
    this.setState({
      options: {
        education: false,
        networks: false,
        email: false,
        productivity: true,
        entertainment: false,
        design: false,
        books: false,
        apps: false,
        marketing: false,
        music: false,
     }
    })
    scrollTo("#PRODUCTIVITY")
  }

  setEntertainment = () =>{
    this.setState({
      options: {
        education: false,
        networks: false,
        email: false,
        productivity: false,
        entertainment: true,
        design: false,
        books: false,
        apps: false,
        marketing: false,
        music: false,
     }
    })
    scrollTo("#ENTERTAINMENT")
  }

  setDesign = () =>{
    this.setState({
      options: {
        education: false,
        networks: false,
        email: false,
        productivity: false,
        entertainment: false,
        design: true,
        books: false,
        apps: false,
        marketing: false,
        music: false,
     }
    })
    scrollTo("#DESIGN")
  }

  setBooks = () =>{
    this.setState({
      options: {
        education: false,
        networks: false,
        email: false,
        productivity: false,
        entertainment: false,
        design: false,
        books: true,
        apps: false,
        marketing: false,
        music: false,
     }
    })
    scrollTo("#BOOKS")
  }

  setApps = () =>{
    this.setState({
      options: {
        education: false,
        networks: false,
        email: false,
        productivity: false,
        entertainment: false,
        design: false,
        books: false,
        apps: true,
        marketing: false,
        music: false,
     }
    })
    scrollTo("#APPS")
  }

  setMarketing = () =>{
    this.setState({
      options: {
        education: false,
        networks: false,
        email: false,
        productivity: false,
        entertainment: false,
        design: false,
        books: false,
        apps: false,
        marketing: true,
        music: false,
     }
    })
    scrollTo("#MARKETING")
  }

  setMusic = () =>{
    this.setState({
      options: {
        education: false,
        networks: false,
        email: false,
        productivity: false,
        entertainment: false,
        design: false,
        books: false,
        apps: false,
        marketing: false,
        music: true,
     }
    })
    scrollTo("#MUSIC")
  }

  
  
  

  render() {
    
    
    // return (
    //   <div style={flex}>
    //     <Buttons filterCards={this.filterCards}/>
    //     <div style={pad}>
    //     <Cards  Cards={this.state.cards}/>
    //     </div>
        
    //     <AniLink swipe direction="right" to="/" duration={0.5} hex="#000000">
    //       Back with animation
    //     </AniLink>
    //   </div>
    // )

    return(
      <div className={style.filterContainer} id="filter">
        <Buttons filterCards={this.filterCards}/>
        <div className={style.cardsContainer}>
          <AllCards/>
        </div>
        <div className={style.allcardsContainer}>
          <div className={style.modalContainer}>
              <div className={style.modal} ref={this.modalRef}>
                <div className={style.modalList}>

                <h4 className={`${this.state.options.education ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setEducation}>Education</h4>
                <h4 className={`${this.state.options.entertainment ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setEntertainment}>Entertainment</h4>

                <h4 className={`${this.state.options.networks ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setNetworks}>Business</h4>
                {/* <h4 className={`${this.state.options.email ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setEmail}>Email</h4> */}
                {/* <h4 className={`${this.state.options.design ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setDesign}>Design</h4> */}
                <h4 className={`${this.state.options.books ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setBooks}>Books</h4>
                <h4 className={`${this.state.options.apps ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setApps}>Apps</h4>
                <h4 className={`${this.state.options.marketing ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setMarketing}>Marketing</h4>
                <h4 className={`${this.state.options.productivity ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setProductivity}>Productivity</h4>

                {/* <h4 className={`${this.state.options.music ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setMusic}>Music</h4> */}


                
                </div>
                <img src={arrow}></img>

                
              </div>
              <div ref={this.menuRef} className={`${style.sticky} ${style.normalShadow}`} style={{position:'fixed'}} onClick={() => this.modalClick()}>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
          {/* <AllCards Cards={this.state.cards}></AllCards> */}
        </div>

      </div>
    )
    
  }
}

export default Filter
