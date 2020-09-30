import React from 'react'
import { Card, PageHeader } from 'antd'
import './index.less'

export default (props) => {
    const { title = '', subTitle = '', tags = '', extra = '' } = props

    return (
        <div className='page-header'>
            <Card>
                <PageHeader
                    title={title}
                    subTitle={subTitle}
                    tags={tags}
                    extra={extra}
                />
            </Card>
        </div>
    )
}
