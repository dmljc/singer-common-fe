import React from 'react'
import { Space } from 'antd'
import { CompressOutlined } from '@ant-design/icons'
import './index.less'

const HeaderTools = (props) => {
    return (
        <Space size='large' className='pointer'>
            <CompressOutlined />
            <CompressOutlined />
            <CompressOutlined />
        </Space>
    )
}

export default HeaderTools
