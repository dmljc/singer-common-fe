import React from 'react'
import './index.less'

export default (props) => {
    const { icon = '', title = '' } = props

    return (
        <div className='title-header'>
            <span>{icon} </span>

            <span>{title}</span>
        </div>
    )
}
