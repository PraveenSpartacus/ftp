import React from 'react'
//import Card from './Card'
import MobileLayout from './MobileLayout'

const AllCards = () =>{
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
       img: 'quickstart',
       days: '7 days'
     },
     {
       id: 6,
       title: 'education',
       img: 'codecademy',
       days: '30 days'
     },
     {
        id: 7,
        title: 'education',
        img: 'udemy',
        days: '14 days'
      },
      {
        id: 8,
        title: 'education',
        img: 'brilliant',
        days: '7 days'
      },
      {
        id: 14,
        title: 'education',
        img: 'thegreatcoursesplus',
        days: '14 days'
      },
      {
        id: 9,
        title: 'education',
        img: 'coursera',
        days: '7 days'
      },
      {
        id: 15,
        title: 'education',
        img: 'cbtnuggets',
        days: '7 days'
      },
      {
        id: 10,
        title: 'education',
        img: 'itprotv',
        days: '7 days'
      },
      {
        id: 11,
        title: 'education',
        img: 'acloudguru',
        days: '7 days'
      },
      {
        id: 12,
        title: 'education',
        img: 'onemonth',
        days: '3 days'
      },
      {
        id: 13,
        title: 'education',
        img: 'learnforbes',
        days: '14 days'
      },
      {
        id: 16,
        title: 'education',
        img: 'creativelive',
        days: 'na'
      },
      {
        id: 17,
        title: 'education',
        img: 'linuxacademy',
        days: '7 days'
      },
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
         },
         {
          id: 11,
          title: 'networks',
          img: 'freshbooks',
          days: '30 days'
        },
        {
          id: 12,
          title: 'networks',
          img: 'quickbooks',
          days: '30 days'
        },
        {
          id: 13,
          title: 'networks',
          img: 'zoho',
          days: '14 days'
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
            id: 4,
            title: 'music',
            img: 'amazonmusic',
            days: '30 days'
        },
    ]

    let entertainmentCards = [
        {
            id: 1,
            title: 'entertainment',
            img: 'philo',
            days: '7 days'
        },
        {
            id: 2,
            title: 'entertainment',
            img: 'netflix',
            days: '30 days'
        },
        {
            id: 3,
            title: 'entertainment',
            img: 'prime',
            days: '30 days'
        },
        {
            id: 4,
            title: 'entertainment',
            img: 'hulu',
            days: '30 days'
        },
        {
            id: 5,
            title: 'entertainment',
            img: 'hbo',
            days: '7 days'
        },
        {
            id: 6,
            title: 'entertainment',
            img: 'cbs',
            days: '7 days'
        },
        {
          id: 7,
          title: 'entertainment',
          img: 'curiositystream',
          days: '7 days'
      },
      {
        id: 8,
        title: 'entertainment',
        img: 'crunchyroll',
        days: '14 days'
    },
    ]

    let booksCards = [
        {
            id: 1,
            title: 'books',
            img: 'audiobooks',
            days: '30 days'
        },
        {
            id: 2,
            title: 'books',
            img: 'playster',
            days: '30 days'
        },
        {
            id: 3,
            title: 'books',
            img: 'scribd',
            days: '30 days'
        },
        {
            id: 4,
            title: 'books',
            img: 'kobo',
            days: '30 days'
        },
        {
          id: 5,
          title: 'books',
          img: 'audible',
          days: '30 days'
        },
        {
        id: 6,
        title: 'books',
        img: 'amazonkindle',
        days: '30 days'
        },
        {
          id: 7,
          title: 'books',
          img: 'blinkist',
          days: '7 days'
        },
    ]

    //let dummyCards = dummyCards1.slice(0,10)
    //let dummyCards2 = dummyCards1.slice(0,7)

    let w90 = {
        width: '100%'
    }

    return(
        <div style={w90}>
            <MobileLayout cards={educationCards} title='EDUCATION'></MobileLayout>
            <MobileLayout cards={networksCards} title='NETWORKS'></MobileLayout>
            <MobileLayout cards={productivityCards} title='PRODUCTIVITY'></MobileLayout>
            <MobileLayout cards={musicCards} title='MUSIC'></MobileLayout>
            <MobileLayout cards={entertainmentCards} title='ENTERTAINMENT'></MobileLayout>
            <MobileLayout cards={booksCards} title='BOOKS'></MobileLayout>


            <MobileLayout cards={emailCards} title='EMAIL'></MobileLayout>
            {/* <MobileLayout cards={dummyCards2} title='dummy'></MobileLayout>
            <MobileLayout cards={dummyCards} title='dummy'></MobileLayout>
            <MobileLayout cards={dummyCards1} title='dummy'></MobileLayout> */}
        </div>
    )
}

export default AllCards