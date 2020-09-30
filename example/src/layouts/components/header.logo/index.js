import React from 'react'
import './index.less'

const HeaderLogo = (props) => {
    return (
        <div className='logo'>
            <img src={require('@/assets/img/logo.svg')} alt='logo' />
            <span>业务组件库</span>
        </div>
    )
}

export default HeaderLogo
