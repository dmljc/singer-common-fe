import React from 'react'
import {
    EditOutlined,
    PlayCircleOutlined,
    EyeOutlined,
    CheckCircleOutlined,
    AreaChartOutlined,
    BarChartOutlined,
    ChromeOutlined
} from '@ant-design/icons'
import './index.less'

export default (props) => {
    const { status = '', color = '' } = props

    const iconMap = (item) => {
        switch (item) {
            case '新增':
                return <EditOutlined />
            case '编辑':
                return <PlayCircleOutlined />
            case '查看':
                return <EyeOutlined />
            case '待发布':
                return <CheckCircleOutlined />
            case '已发布':
                return <AreaChartOutlined />
            case '审核不通过':
                return <BarChartOutlined />
            default:
                return <ChromeOutlined />
        }
    }

    return (
        <span
            className='status-tag'
            style={{
                color: color,
                border: `1px solid ${color}`
            }}
        >
            <span>
                {iconMap(status)} {status}
            </span>
        </span>
    )
}
