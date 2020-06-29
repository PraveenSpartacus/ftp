import React from 'react'
//import Card from './Card'
import MobileLayout from './MobileLayout'

const AllCards = (props) =>{
    //let x = props.Cards
    let netflixCards = props.Cards.filter(
        (card) =>{
            if(card.title === 'netflix')
                return true
            else
                return false    
        }
    )

    let huluCards = props.Cards.filter(
        (card) =>{
            if(card.title === 'hulu')
                return true
            else
                return false    
        }
    )

    let hboCards = props.Cards.filter(
        (card) =>{
            if(card.title === 'hbo')
                return true
            else
                return false    
        }
    )

    let w90 = {
        width: '90%'
    }

    return(
        <div style={w90}>
            <MobileLayout cards={netflixCards} title='NETFLIX'></MobileLayout>
            <MobileLayout cards={huluCards} title='HULU'></MobileLayout>
            <MobileLayout cards={hboCards} title='HBO'></MobileLayout>
        </div>
    )
}

export default AllCards