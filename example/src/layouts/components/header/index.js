import React from 'react'
import './index.less'

const Header = (props) => {
    return (
        <header className='header'>
            <div className='logo'>{props.logo}</div>
            <div className='menus'>{props.menus}</div>
            <div className='tools pointer'>{props.tools}</div>
            <div className='user pointer'>{props.user}</div>
        </header>
    )
}

export default Header
