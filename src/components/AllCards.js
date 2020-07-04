import React from 'react'
//import Card from './Card'
import MobileLayout from './MobileLayout'

const AllCards = (props) =>{
    //let x = props.Cards
    // let educationCards = props.Cards.filter(
    //     (card) =>{
    //         if(card.title === 'education')
    //             return true
    //         else
    //             return false    
    //     }
    // )

    let educationCards = [{
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
     }
    ]

    // let networksCards = props.Cards.filter(
    //     (card) =>{
    //         if(card.title === 'networks')
    //             return true
    //         else
    //             return false    
    //     }
    // )

    let networksCards = [
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
         }
    ]

    // let emailCards = props.Cards.filter(
    //     (card) =>{
    //         if(card.title === 'email')
    //             return true
    //         else
    //             return false    
    //     }
    // )

    let emailCards = [
        {
            id: 11,
            title: 'email',
            img: 'sendinblue',
            days: "∞"
          },
          {
            id: 12,
            title: 'email',
            img: 'constantcontact',
            days: 30
          },
          {
            id: 13,
            title: 'email',
            img: 'benchmark',
            days: 30
          },
          {
            id: 14,
            title: 'email',
            img: 'activecampaign',
            days: 30
          },
          {
           id: 15,
           title: 'email',
           img: 'mailchimp',
           days: 30
         },
    ]

    let w90 = {
        width: '100%'
    }

    return(
        <div style={w90}>
            <MobileLayout cards={educationCards} title='EDUCATION'></MobileLayout>
            <MobileLayout cards={networksCards} title='NETWORKS'></MobileLayout>
            <MobileLayout cards={emailCards} title='EMAIL'></MobileLayout>
        </div>
    )
}

export default AllCards