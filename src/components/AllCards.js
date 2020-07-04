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
        days: '60 days'
     },
     {
       id: 2,
       title: 'education',
       img: 'pluralsight',
       days: "10 days"
     },
     {
       id: 3,
       title: 'education',
       img: 'teamtreehouse',
       days: "7 days"
     },
     {
       id: 4,
       title: 'education',
       img: 'linkedinlearning',
       days: '30 days'
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
       days: '30 days'
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
            days: "na"
          },
          {
            id: 12,
            title: 'email',
            img: 'constantcontact',
            days: '30 days'
          },
          {
            id: 13,
            title: 'email',
            img: 'benchmark',
            days: '30 days'
          },
          {
            id: 14,
            title: 'email',
            img: 'activecampaign',
            days: '30 days'
          },
          {
           id: 15,
           title: 'email',
           img: 'mailchimp',
           days: '30 days'
         },
    ]

    let dummyCards1 = [
        {
            id: 11,
            title: 'dummy',
            img: 'netflix',
            days: "∞"
          },
          {
            id: 12,
            title: 'dummy',
            img: 'netflix',
            days: 30
          },
          {
            id: 13,
            title: 'email',
            img: 'netflix',
            days: 30
          },
          {
            id: 14,
            title: 'email',
            img: 'netflix',
            days: 30
          },
          {
           id: 15,
           title: 'email',
           img: 'netflix',
           days: 30
         },
         {
            id: 16,
            title: 'email',
            img: 'netflix',
            days: "∞"
          },
          {
            id: 17,
            title: 'email',
            img: 'netflix',
            days: 30
          },
          {
            id: 18,
            title: 'email',
            img: 'netflix',
            days: 30
          },
          {
            id: 19,
            title: 'email',
            img: 'netflix',
            days: 30
          },
          {
           id: 20,
           title: 'email',
           img: 'netflix',
           days: 30
         },
         {
            id: 21,
            title: 'email',
            img: 'netflix',
            days: "∞"
          },
          {
            id: 22,
            title: 'email',
            img: 'netflix',
            days: 30
          },
          {
            id: 23,
            title: 'email',
            img: 'netflix',
            days: 30
          },
          {
            id: 24,
            title: 'email',
            img: 'netflix',
            days: 30
          },
          {
           id: 25,
           title: 'email',
           img: 'netflix',
           days: 30
         },
         {
            id: 26,
            title: 'email',
            img: 'netflix',
            days: "∞"
          },
          {
            id: 27,
            title: 'email',
            img: 'netflix',
            days: 30
          },
          {
            id: 28,
            title: 'email',
            img: 'netflix',
            days: 30
          },
          {
            id: 29,
            title: 'email',
            img: 'netflix',
            days: 30
          },
          {
           id: 30,
           title: 'email',
           img: 'netflix',
           days: 30
         },
         
    ]

    let productivityCards = [
        {
            id: 1,
            title: 'productivity',
            img: 'wrike',
            days: '14 days'
          },
          {
            id: 2,
            title: 'productivity',
            img: 'todoist',
            days: 'na'
          },
          {
            id: 3,
            title: 'productivity',
            img: 'basecamp',
            days: '30 days'
          },
          {
            id: 4,
            title: 'productivity',
            img: 'asana',
            days: 'na'
          },
          {
            id: 5,
            title: 'productivity',
            img: 'monday',
            days: 'na'
          },
          {
            id: 6,
            title: 'productivity',
            img: 'clickup',
            days: 'na'
          },
          {
            id: 7,
            title: 'productivity',
            img: 'trello',
            days: 'na'
          },
          {
            id: 8,
            title: 'productivity',
            img: 'ganttpro',
            days: '14 days'
          },
          {
            id: 9,
            title: 'productivity',
            img: 'ntask',
            days: '14 days'
          },
          {
            id: 10,
            title: 'productivity',
            img: 'office365',
            days: '30 days'
          },
    ]

    let musicCards = [
        {
            id: 1,
            title: 'music',
            img: 'applemusic',
            days: '90 days'
        },
        {
            id: 2,
            title: 'music',
            img: 'spotify',
            days: '30 days'
        },
        {
            id: 3,
            title: 'music',
            img: 'tidal',
            days: '30 days'
        },
        {
            id: 3,
            title: 'music',
            img: 'amazonmusic',
            days: '30 days'
        },
    ]

    let dummyCards = dummyCards1.slice(0,10)
    let dummyCards2 = dummyCards1.slice(0,7)

    let w90 = {
        width: '100%'
    }

    return(
        <div style={w90}>
            <MobileLayout cards={educationCards} title='EDUCATION'></MobileLayout>
            <MobileLayout cards={networksCards} title='NETWORKS'></MobileLayout>
            <MobileLayout cards={productivityCards} title='PRODUCTIVITY'></MobileLayout>
            <MobileLayout cards={musicCards} title='MUSIC'></MobileLayout>

            <MobileLayout cards={emailCards} title='EMAIL'></MobileLayout>
            <MobileLayout cards={dummyCards2} title='dummy'></MobileLayout>
            <MobileLayout cards={dummyCards} title='dummy'></MobileLayout>
            <MobileLayout cards={dummyCards1} title='dummy'></MobileLayout>
        </div>
    )
}

export default AllCards