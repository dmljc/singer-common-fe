/* eslint-disable no-unused-vars */
import React from 'react'
import { Icon } from 'singer-common-fe'
import './index.less'

export default (props) => {
    const { name = '' } = props

    return (
        <div className='utils'>
            <h3>utils 123</h3>
            <Icon name='iconvip' />
        </div>
    )
}
