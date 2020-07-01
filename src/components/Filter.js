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
          hbo: false
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
        hbo: false
     }
    })
    scrollTo("#EDUCATION")
  }
  setNetworks = () =>{
    this.setState({
      options: {
        education: false,
        networks: true,
        hbo: false
     }
    })
    scrollTo("#NETWORKS")
  }
  setHbo = () =>{
    this.setState({
      options: {
        education: false,
        networks: false,
        hbo: true
     }
    })
    scrollTo("#HBO")
  }

  cardsXX = [
    {
      id: 1,
      title: 'netflix',
   }
  ]

  cards = [
    {
       id: 1,
       title: 'education',
       img: 'skillshare',
       days: 60
    },
    {
      id: 2,
      title: 'education',
      img: 'pluralsight',
      days: 10
    },
    {
      id: 3,
      title: 'education',
      img: 'teamtreehouse',
      days: 7
    },
    {
      id: 4,
      title: 'education',
      img: 'linkedinlearning',
      days: 30
    },
    {
      id: 5,
      title: 'education',
      img: 'creativelive',
      days: 'cl'
    },
    {
      id: 6,
      title: 'education',
      img: 'codecademy',
      days: 30
    },
    {
      id: 7,
      title: 'networks',
      img: 'shareasale',
      days: 'sh'
    },
    {
      id: 8,
      title: 'networks',
      img: 'impactradius',
      days: 'im'
   },
   {
     id: 9,
     title: 'networks',
     img: 'viglink',
     days: 'vig'
   },
   {
     id: 10,
     title: 'networks',
     img: 'cjaffiliate',
     days: 'cj'
   },
   {
     id: 11,
     title: 'hbo',
     img: 'netflix',
     days: 30
   },
   {
     id: 12,
     title: 'hbo',
     img: 'netflix',
     days: 30
   },
   {
     id: 13,
     title: 'hulu',
     img: 'netflix',
     days: 30
   },
   {
     id: 14,
     title: 'hulu',
     img: 'netflix',
     days: 30
   },
   {
    id: 15,
    title: 'netflix',
    img: 'netflix',
    days: 30
  },
  {
    id: 16,
    title: 'hulu',
    img: 'netflix',
    days: 30
  },
  {
    id: 17,
    title: 'hbo',
    img: 'netflix',
    days: 30
  },
  {
    id: 18,
    title: 'hbo',
    img: 'netflix',
    days: 30
  },

  {
    id: 19,
    title: 'netflix',
    img: 'netflix',
    days: 30
  },
  {
    id: 20,
    title: 'hulu',
    img: 'netflix',
    days: 30
  },
  {
    id: 21,
    title: 'hbo',
    img: 'netflix',
    days: 30
  },
  {
    id: 22,
    title: 'hbo',
    img: 'netflix',
    days: 30
  }
]
  
  filterCards = (b) => {
    if(b === "all"){
      this.setState({
        cards: this.cards
      })
    }
    else{
      this.setState({
        cards: this.cards.filter((card) => {
          if(card.title === b)
            return true
          else
            return false
        })
      })
    }
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
          <Cards  Cards={this.state.cards}/>
        </div>
        <div className={style.allcardsContainer}>
          <div className={style.modalContainer}>
              <div className={style.modal} ref={this.modalRef}>
                <div className={style.modalList}>

                <h4 className={`${this.state.options.education ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setEducation}>Education</h4>
                <h4 className={`${this.state.options.networks ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setNetworks}>Networks</h4>
                <h4 className={`${this.state.options.hbo ? style.selected : style.normal}`} ref={this.optionRef} onClick={this.setHbo}>Hbo</h4>
                
                
                </div>
                <img src={arrow}></img>

                
              </div>
              <div ref={this.menuRef} className={`${style.sticky} ${style.normalShadow}`} style={{position:'fixed'}} onClick={() => this.modalClick()}>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
          <AllCards Cards={this.state.cards}></AllCards>
        </div>

      </div>
    )
    
  }
}

export default Filter
