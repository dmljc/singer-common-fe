import React, { useState } from 'react'
import { Card, Button, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import {
    DetailHeader,
    StatusTag,
    OperationCard,
    TitleHeader,
    CountUp
} from 'singer-common-fe'

import './index.less'

const statusMap = {
    新增: '#1890ff',
    编辑: '#00c4c0',
    查看: '#EA5151',
    待发布: '#a4b0be',
    已发布: '#3742fa',
    审核不通过: '#9b59b6'
}

export default () => {
    const [editable, setEditable] = useState(false)

    const extraHeader = (
        <Space>
            <Button>保存</Button>
            <Button type='primary'>提交</Button>
            <Button type='primary'>审核</Button>
        </Space>
    )

    const extraCard = (
        <Space>
            <Button type='link' onClick={() => setEditable(!editable)}>
                {editable ? '编辑' : '保存'}
            </Button>
        </Space>
    )

    return (
        <div>
            <h2>1、详情页页头组件</h2>
            <DetailHeader
                url='/utils'
                title='这是页头组件主标题'
                subTitle='这是页头组件子标题'
                tags={<StatusTag status='查看' color={statusMap['查看']} />}
                extra={extraHeader}
            />
            <br />
            <h2>2、状态组件</h2>
            <Card className='box-shadow'>
                <StatusTag status='新增' color={statusMap['新增']} />
                <StatusTag status='编辑' color={statusMap['编辑']} />
                <StatusTag status='查看' color={statusMap['查看']} />
                <StatusTag status='待发布' color={statusMap['待发布']} />
                <StatusTag status='已发布' color={statusMap['已发布']} />
                <StatusTag
                    status='审核不通过'
                    color={statusMap['审核不通过']}
                />
            </Card>

            <h2>3、卡片组件</h2>
            <OperationCard
                // collapse={false}
                title='这是卡片名称'
                subTitle='这是卡片子标题'
                extra={extraCard}
            />

            <h2>4、标题头组件</h2>

            <Card className='box-shadow'>
                <TitleHeader icon={<EditOutlined />} title='这是标题头组件' />
            </Card>

            <h2>5、滚动数字组件</h2>
            <Card className='box-shadow'>
                <CountUp count={1234567891.12} />
            </Card>
        </div>
    )
}
