import React, { Component } from 'react'
import style from '../css/Buttons.module.css'
import scrollTo from 'gatsby-plugin-smoothscroll'


export class Buttons extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            active : {
                all : false,
                education : false,
                networks : false,
                productivity : false,
                entertainment : false,
                design : false,
                books : false,
                apps : false,
                marketing : false,
                music : false,
                email : false
            }
        }

        
    }
    
    

    setEducation = () => {
        this.setState({
            active : {
                all : false,
                education : true,
                networks : false,
                productivity : false,
                entertainment : false,
                design : false,
                books : false,
                apps : false,
                marketing : false,
                music : false,
                email : false
            }
        });
        //this.props.filterCards('education');
        scrollTo('#EDUCATION')
        
    }

    setNetworks = () =>{
        this.setState({
            active : {
                all : false,
                education : false,
                networks : true,
                productivity : false,
                entertainment : false,
                design : false,
                books : false,
                apps : false,
                marketing : false,
                music : false,
                email : false
            }
        })
        //this.props.filterCards('networks');
        scrollTo('#NETWORKS')
    }

    setProductivity = () =>{
        this.setState({
            active : {
                all : false,
                education : false,
                networks : false,
                productivity : true,
                entertainment : false,
                design : false,
                books : false,
                apps : false,
                marketing : false,
                music : false,
                email : false
            }
        })
        //this.props.filterCards('productivity');
        scrollTo('#PRODUCTIVITY')
    }

    setEntertainment = () =>{
        this.setState({
            active : {
                all : false,
                education : false,
                networks : false,
                productivity : false,
                entertainment : true,
                design : false,
                books : false,
                apps : false,
                marketing : false,
                music : false,
                email : false
            }
        })
        //this.props.filterCards('entertainment');
        scrollTo('#ENTERTAINMENT')
    }

    setDesign = () =>{
        this.setState({
            active : {
                all : false,
                education : false,
                networks : false,
                productivity : false,
                entertainment : false,
                design : true,
                books : false,
                apps : false,
                marketing : false,
                music : false,
                email : false
            }
        })
        //this.props.filterCards('design');
        scrollTo('#DESIGN')
    }

    setBooks = () =>{
        this.setState({
            active : {
                all : false,
                education : false,
                networks : false,
                productivity : false,
                entertainment : false,
                design : false,
                books : true,
                apps : false,
                marketing : false,
                music : false,
                email : false
            }
        })
        //this.props.filterCards('books');
        scrollTo('#BOOKS')
    }

    setApps = () =>{
        this.setState({
            active : {
                all : false,
                education : false,
                networks : false,
                productivity : false,
                entertainment : false,
                design : false,
                books : false,
                apps : true,
                marketing : false,
                music : false,
                email : false
            }
        })
        //this.props.filterCards('apps');
        scrollTo('#APPS')
    }

    setMarketing = () =>{
        this.setState({
            active : {
                all : false,
                education : false,
                networks : false,
                productivity : false,
                entertainment : false,
                design : false,
                books : false,
                apps : false,
                marketing : true,
                music : false,
                email : false
            }
        })
        //this.props.filterCards('marketing');
        scrollTo('#MARKETING')
    }

    setMusic = () =>{
        this.setState({
            active : {
                all : false,
                education : false,
                networks : false,
                productivity : false,
                entertainment : false,
                design : false,
                books : false,
                apps : false,
                marketing : false,
                music : true,
                email : false
            }
        })
        //this.props.filterCards('music');
        scrollTo('#MUSIC')
    }

    setEmail = () =>{
        this.setState({
            active : {
                all : false,
                education : false,
                networks : false,
                productivity : false,
                entertainment : false,
                design : false,
                books : false,
                apps : false,
                marketing : false,
                music : false,
                email : true
            }
        })
        //this.props.filterCards('email');
        scrollTo('#EMAIL')
    }


    
    render() {
        
        return (
            <div className={style.buttonContainer} id="btnid">
                {/* <div className="active-btn">
                    <input type="submit" value="ALL" ></input>
                </div>
                <div>
                    <input type="submit" value="NETFLIX" onClick={this.props.filterCards.bind(this,'netflix')}/> 
                </div>
                <div>
                    <input type="submit" value="HULU" onClick={this.props.filterCards.bind(this,'hulu')}/>    
                </div>
                <div>
                    <input type="submit" value="HOTSTAR" onClick={this.props.filterCards.bind(this,'hotstar')}/> 
                </div> */}

                {/* <button className={this.state.active.all ? style.activeBtn : style.btn} onClick={this.setAll}>
                    ALL
                </button> */}
                <button className={this.state.active.education ? style.activeBtn : style.btn} onClick={this.setEducation}>
                    EDUCATION
                </button>
                <button className={this.state.active.networks ? style.activeBtn : style.btn} onClick={this.setNetworks}>
                    BUSSINESS
                </button>
                <button className={this.state.active.productivity ? style.activeBtn : style.btn} onClick={this.setProductivity}>
                    PRODUCTIVITY
                </button>
                <button className={this.state.active.entertainment ? style.activeBtn : style.btn} onClick={this.setEntertainment}>
                    ENTERTAINMENT
                </button>
                <button className={this.state.active.design ? style.activeBtn : style.btn} onClick={this.setDesign}>
                    DESIGN
                </button>
                <button className={this.state.active.books ? style.activeBtn : style.btn} onClick={this.setBooks}>
                    BOOKS
                </button>
                <button className={this.state.active.apps ? style.activeBtn : style.btn} onClick={this.setApps}>
                    APPS
                </button>
                <button className={this.state.active.marketing ? style.activeBtn : style.btn} onClick={this.setMarketing}>
                    MARKETING
                </button>
                <button className={this.state.active.music ? style.activeBtn : style.btn} onClick={this.setMusic}>
                    MUSIC
                </button>
                <button className={this.state.active.email ? style.activeBtn : style.btn} onClick={this.setEmail}>
                    EMAIL
                </button>
            </div>
        )
    }
}

export default Buttons
