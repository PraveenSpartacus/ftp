import React from 'react'

const template = ({location}) =>{
    return(
        <div>
            Template
            {location.state.msg}
        </div>
    )
}

export default template