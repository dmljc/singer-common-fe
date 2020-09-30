import React, { useState } from 'react'
import { Card, Button } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import './index.less'

export default (props) => {
    const {
        collapse = true,
        size = 'small',
        title = '',
        subTitle = '',
        extra = ''
    } = props

    const [active, setActive] = useState(true)

    const operateExtra = (
        <>
            {extra}
            {collapse && (
                <>
                    <Button type='link' onClick={() => setActive(!active)}>
                        {active ? '收起' : '展开'}
                        {active ? <UpOutlined /> : <DownOutlined />}
                    </Button>
                </>
            )}
        </>
    )

    return (
        <div className='operation-card'>
            <Card
                size={size}
                title={
                    <>
                        <span className='title'>{title}</span>
                        <span className='sub-title'>{subTitle}</span>
                    </>
                }
                extra={operateExtra}
            >
                {active && (
                    <div>
                        XXXXXXX
                        <br />
                        XXXXXXX
                        <br />
                        XXXXXXX
                        <br />
                        XXXXXXX
                        <br />
                        XXXXXXX
                        <br />
                        XXXXXXX
                        <br />
                        XXXXXXX
                        <br />
                    </div>
                )}
            </Card>
        </div>
    )
}
