import React from 'react'
import './index.less'

const HeaderUser = (props) => {
    return (
        <div className='user'>
            <img src={require('@/assets/img/user.png')} alt='user' />
            <span>张芳朝</span>
        </div>
    )
}

export default HeaderUser
