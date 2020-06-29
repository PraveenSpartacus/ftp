import React, { Component } from 'react'
import style from '../css/Buttons.module.css'

export class Buttons extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            active : {
                all : true,
                netflix : false,
                hulu : false,
                hotstar : false
            }
        }

        
    }
    
    setAll = () =>{
        this.setState({
            active : {
                all : true,
                netflix : false,
                hulu : false,
                hotstar : false
            }
        })
        this.props.filterCards('all');
    }

    setNetflix = () => {
        this.setState({
            active : {
                all : false,
                netflix : true,
                hulu : false,
                hotstar : false
            }
        });
        this.props.filterCards('netflix');
        
    }

    setHulu = () =>{
        this.setState({
            active : {
                all : false,
                netflix : false,
                hulu : true,
                hotstar : false
            }
        })
        this.props.filterCards('hulu');
    }

    setHbo = () =>{
        this.setState({
            active : {
                all : false,
                netflix : false,
                hulu : false,
                hotstar : true
            }
        })
        this.props.filterCards('hbo');
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

                <button className={this.state.active.all ? style.activeBtn : style.btn} onClick={this.setAll}>
                    ALL
                </button>
                <button className={this.state.active.netflix ? style.activeBtn : style.btn} onClick={this.setNetflix}>
                    PRODUCTIVITY
                </button>
                <button className={this.state.active.hulu ? style.activeBtn : style.btn} onClick={this.setHulu}>
                    HULU
                </button>
                <button className={this.state.active.hotstar ? style.activeBtn : style.btn} onClick={this.setHbo}>
                    HBO
                </button>
            </div>
        )
    }
}

export default Buttons
