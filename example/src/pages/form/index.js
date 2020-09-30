import React, { useState } from 'react'
import { FormPanel } from 'singer-common-fe'
import { list } from './constant.json'
import './index.less'

export default () => {
    const [fetchData, setFetchData] = useState({
        age: 12,
        education: '3',
        hobby: ['1', '2'],
        mark: '121212121212',
        name: '张三',
        sex: '1',
        updeteTime: '2020-09-29 14:47:30'
    })

    const doneFinish = (data) => {
        console.log('doneFinish==data', data)
    }
    const doneFailed = (err) => {
        console.log('doneFailed==err', err)
    }

    return (
        <div>
            <FormPanel
                itemList={list}
                fetchData={fetchData}
                doneFinish={doneFinish}
                doneFailed={doneFailed}
            />
        </div>
    )
}
