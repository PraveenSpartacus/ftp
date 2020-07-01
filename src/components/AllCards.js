import React from 'react'
//import Card from './Card'
import MobileLayout from './MobileLayout'

const AllCards = (props) =>{
    //let x = props.Cards
    let educationCards = props.Cards.filter(
        (card) =>{
            if(card.title === 'education')
                return true
            else
                return false    
        }
    )

    let networksCards = props.Cards.filter(
        (card) =>{
            if(card.title === 'networks')
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
            <MobileLayout cards={educationCards} title='EDUCATION'></MobileLayout>
            <MobileLayout cards={networksCards} title='NETWORKS'></MobileLayout>
            <MobileLayout cards={hboCards} title='HBO'></MobileLayout>
        </div>
    )
}

export default AllCards