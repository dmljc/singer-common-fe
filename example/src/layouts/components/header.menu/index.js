import React, { useState } from 'react'
import { Link } from 'umi'
import { Menu } from 'antd'
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    FormOutlined
} from '@ant-design/icons'

const { Item } = Menu

const menus = [
    {
        path: '/base',
        name: '基础组件',
        icon: <MailOutlined />
    },
    {
        path: '/demo',
        name: '组件案例',
        icon: <AppstoreOutlined />
    },
    {
        path: '/utils',
        name: '工具函数',
        icon: <SettingOutlined />
    },
    {
        path: '/form',
        name: 'Form专区',
        icon: <FormOutlined />
    }
]

const HeaderMenu = (props) => {
    const [current, setCurrent] = useState('3')

    const handleClick = (e) => {
        const { key } = e
        setCurrent(key)
    }

    return (
        <Menu
            onClick={(e) => handleClick(e)}
            selectedKeys={[current]}
            mode='horizontal'
        >
            {menus.map((item, index) => (
                <Item key={index} icon={item.icon}>
                    <Link to={item.path} />
                    {item.name}
                </Item>
            ))}
        </Menu>
    )
}

export default HeaderMenu
