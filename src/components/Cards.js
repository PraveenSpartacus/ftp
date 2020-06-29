import React, { Component } from 'react'
import Card from './Card'

export class Cards extends Component {
    render() {
        return (
            this.props.Cards.map((card) =>{
                return <Card key={card.id} card={card}/>
            })
        )
    }
}

export default Cards
