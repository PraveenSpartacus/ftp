import React from 'react'
//import Card from './Card'
import MobileLayout from './MobileLayout'
import style from '../css/AllCards.module.css'

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
        img: 'packtpub',
        days: '10 days'
      },
      {
        id: 18,
        title: 'education',
        img: 'truefire',
        days: '30 days'
      },
      {
        id: 19,
        title: 'education',
        img: 'guitarinstructor',
        days: '7 days'
      },
      {
        id: 20,
        title: 'education',
        img: 'guitartricks',
        days: '14 days'
      },
      {
        id: 21,
        title: 'education',
        img: 'fenderplay',
        days: '14 days'
      },
      {
        id: 22,
        title: 'education',
        img: 'guitargate',
        days: '3 days'
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
        // {
        //     id: 7,
        //     title: 'networks',
        //     img: 'shareasale',
        //     days: 'sh'
        //   },
        //   {
        //     id: 8,
        //     title: 'networks',
        //     img: 'impactradius',
        //     days: 'im'
        //  },
        //  {
        //    id: 9,
        //    title: 'networks',
        //    img: 'viglink',
        //    days: 'vig'
        //  },
        //  {
        //    id: 10,
        //    title: 'networks',
        //    img: 'cjaffiliate',
        //    days: 'cj'
        //  },
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
        },
        {
          id: 14,
          title: 'accounting',
          img: 'zarmoney',
          days: '30 days'
        },
        {
          id: 15,
          title: 'accounting',
          img: 'xero',
          days: '30 days'
        },
        {
          id: 16,
          title: 'accounting',
          img: 'sage',
          days: '30 days'
        },
        {
          id: 17,
          title: 'accounting',
          img: 'patriot',
          days: '30 days'
        },
    ]

    // let emailCards = props.Cards.filter(
    //     (card) =>{
    //         if(card.title === 'email')
    //             return true
    //         else
    //             return false    
    //     }
    // )

    


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
            days: '30 days'
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
            days: '30 days'
          },
          {
            id: 5,
            title: 'productivity',
            img: 'monday',
            days: '14 days'
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
            days: '14 days'
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
          {
            id: 11,
            title: 'productivity',
            img: 'sendinblue',
            days: "na"
          },
          
          {
            id: 13,
            title: 'productivity',
            img: 'benchmark',
            days: 'na'
          },
          
          {
           id: 15,
           title: 'productivity',
           img: 'mailchimp',
           days: 'na'
         },
         {
          id: 16,
          title: 'productivity',
          img: 'egnyte',
          days: '15 days'
         },
         {
          id: 17,
          title: 'productivity',
          img: 'sugarsync',
          days: '30 days'
         },
         {
          id: 18,
          title: 'productivity',
          img: 'backblaze',
          days: '15 days'
         },
         {
          id: 19,
          title: 'productivity',
          img: 'carbonite',
          days: '15 days'
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
    {
      id: 9,
      title: 'music',
      img: 'applemusic',
      days: '90 days'
  },
  {
      id: 10,
      title: 'music',
      img: 'spotify',
      days: '30 days'
  },
  {
      id: 11,
      title: 'music',
      img: 'tidal',
      days: '30 days'
  },
  {
      id: 12,
      title: 'music',
      img: 'amazonmusic',
      days: '30 days'
  },
  {
    id: 13,
    title: 'entertainment',
    img: 'showtime',
    days: '7 days'
  },
  {
    id: 14,
    title: 'entertainment',
    img: 'viki',
    days: '7 days'
  },
  {
    id: 15,
    title: 'entertainment',
    img: 'fubotv',
    days: '7 days'
  },
  {
    id: 16,
    title: 'entertainment',
    img: 'starz',
    days: '7 days'
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

    let marketingCards = [
      {
        id: 1,
        title: 'marketing',
        img: 'constantcontact',
        days: '60 days'
      },
      {
        id: 2,
        title: 'marketing',
        img: 'activecampaign',
        days: '14 days'
      },
      {
        id: 3,
        title: 'marketing',
        img: 'getresponse',
        days: '30 days'
      },
      {
        id: 4,
        title: 'marketing',
        img: 'mailigen',
        days: '30 days'
      },
      {
        id: 5,
        title: 'marketing',
        img: 'pinpointe',
        days: '15 days'
      },
      {
        id: 6,
        title: 'marketing',
        img: 'aweber',
        days: '30 days'
      },
      {
        id: 7,
        title: 'marketing',
        img: 'campaigner',
        days: '30 days'
      },
    ]

    let appsCards = [
      {
        id: 1,
        title: 'apps',
        img: 'pandasecurity',
        days: '30 days'
      },
      {
        id: 2,
        title: 'apps',
        img: 'bullguard',
        days: '30 days'
      },
      {
        id: 3,
        title: 'apps',
        img: 'kaspersky',
        days: '30 days'
      },
      {
        id: 4,
        title: 'apps',
        img: 'norton',
        days: '30 days'
      },
      {
        id: 5,
        title: 'apps',
        img: 'mcafee',
        days: '30 days'
      },
      {
        id: 6,
        title: 'apps',
        img: 'webroot',
        days: '14 days'
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
            <MobileLayout cards={entertainmentCards} title='ENTERTAINMENT'></MobileLayout>

            <MobileLayout cards={networksCards} title='BUSINESS'></MobileLayout>
            {/* <MobileLayout cards={musicCards} title='MUSIC'></MobileLayout> */}
            <MobileLayout cards={booksCards} title='BOOKS'></MobileLayout>
            <MobileLayout cards={appsCards} title='APPS'></MobileLayout>

            <MobileLayout cards={marketingCards} title='MARKETING'></MobileLayout>
            <MobileLayout cards={productivityCards} title='PRODUCTIVITY'></MobileLayout>
            <div className={style.space}></div>





            {/* <MobileLayout cards={emailCards} title='EMAIL'></MobileLayout> */}
            {/* <MobileLayout cards={dummyCards2} title='dummy'></MobileLayout>
            <MobileLayout cards={dummyCards} title='dummy'></MobileLayout>
            <MobileLayout cards={dummyCards1} title='dummy'></MobileLayout> */}
        </div>
    )
}

export default AllCards