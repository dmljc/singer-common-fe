import React from 'react'
import Header from '../components/header'
import HeaderLogo from '../components/header.logo'
import HeaderMenu from '../components/header.menu'
import HeaderTools from '../components/header.tools'
import HeaderUser from '../components/header.user'
import './index.less'
import 'singer-common-fe/dist/index.css'

const DefaultLayout = (props) => {
    return (
        <>
            <Header
                logo={<HeaderLogo />}
                menus={<HeaderMenu />}
                tools={<HeaderTools />}
                user={<HeaderUser />}
            />

            <div className='content'>{props.children}</div>
        </>
    )
}

export default DefaultLayout
