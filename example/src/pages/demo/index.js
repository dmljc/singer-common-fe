import React, { useRef } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Tag, Space, Modal } from 'antd'
import ProTable from '@ant-design/pro-table'
import request from 'umi-request'
import './index.less'

const { confirm } = Modal

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        valueType: 'indexBorder',
        width: 72
    },
    {
        title: '标题',
        dataIndex: 'title',
        copyable: true,
        ellipsis: true,
        tip: '标题过长会自动收缩',
        fieldProps: {
            rules: [
                {
                    required: true,
                    message: '此项为必填项'
                }
            ]
        },
        width: '30%'
    },
    {
        title: '状态',
        dataIndex: 'state',
        initialValue: 'all',
        filters: true,
        valueEnum: {
            all: {
                text: '全部',
                status: 'Default'
            },
            open: {
                text: '未解决',
                status: 'Error'
            },
            closed: {
                text: '已解决',
                status: 'Success'
            },
            processing: {
                text: '解决中',
                status: 'Processing'
            }
        },
        width: '10%'
        // filters: [
        //     { text: '未解决', value: 'open' },
        //     { text: '解决中', value: 'processing' },
        // ],
        // filterMultiple: false,
        // onFilter: (value, record) => record.state === value,
        // sortDirections: ['descend', 'ascend']
    },
    {
        title: '状态',
        dataIndex: 'state2',
        initialValue: 'all',
        filters: false,
        valueEnum: {
            all: {
                text: '全部',
                status: 'Default'
            },
            open: {
                text: '未解决',
                status: 'Error'
            },
            closed: {
                text: '已解决',
                status: 'Success'
            },
            processing: {
                text: '解决中',
                status: 'Processing'
            }
        },
        hideInTable: true
    },
    {
        title: '状态',
        dataIndex: 'state3',
        initialValue: 'all',
        filters: false,
        valueEnum: {
            all: {
                text: '全部',
                status: 'Default'
            },
            open: {
                text: '未解决',
                status: 'Error'
            },
            closed: {
                text: '已解决',
                status: 'Success'
            },
            processing: {
                text: '解决中',
                status: 'Processing'
            }
        },
        width: '10%',
        hideInTable: true
    },
    {
        title: '状态',
        dataIndex: 'state4',
        initialValue: 'all',
        filters: false,
        valueEnum: {
            all: {
                text: '全部',
                status: 'Default'
            },
            open: {
                text: '未解决',
                status: 'Error'
            },
            closed: {
                text: '已解决',
                status: 'Success'
            },
            processing: {
                text: '解决中',
                status: 'Processing'
            }
        },
        width: '10%',
        hideInTable: true
    },
    {
        title: '标签',
        dataIndex: 'labels',
        width: '10%',
        render: (_, row) => (
            <Space>
                {row.labels.map(({ name, id, color }) => (
                    <Tag color={color} key={id}>
                        {name}
                    </Tag>
                ))}
            </Space>
        )
    },
    {
        title: '创建时间',
        key: 'since',
        dataIndex: 'created_at',
        valueType: 'dateTime',
        width: '12%'
    },
    {
        title: '更新时间',
        key: 'since',
        dataIndex: 'created_at',
        valueType: 'dateTime',
        width: '12%'
    },
    {
        title: '操作',
        valueType: 'option',
        width: '12%',
        render: (_) => [
            <a key='edit'> 编辑 </a>,
            <a key='view'> 查看 </a>,
            <a key='del' onClick={showConfirm}>
                {' '}
                删除{' '}
            </a>
        ]
    }
]

const showConfirm = () => {
    confirm({
        title: '您确定要删除本条数据吗?',
        content: '此操作也会删除关联的相关子任务数据，请谨慎操作！',
        okText: '删除',
        cancelText: '关闭',
        onOk() {
            console.log('OK')
        },
        onCancel() {
            console.log('Cancel')
        }
    })
}

const operatSlot = (
    <>
        <Space>
            <Button type='primary'>
                <PlusOutlined />
                新增
            </Button>
            <Button type='primary'>
                <PlusOutlined />
                导出
            </Button>
        </Space>
        {/* <ButtonGroup>
            <Button type="primary">
                <PlusOutlined />
                新增2
            </Button>
            <Button type="primary">
                <PlusOutlined />
                新增3
            </Button>
            <Button type="primary">
                <PlusOutlined />
                新增4
            </Button>
        </ButtonGroup> */}
    </>
)

const expandedRowRender = () => {
    const data = []
    for (let i = 0; i < 1; i += 1) {
        data.push({
            key: i,
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56'
        })
    }
    return (
        <ProTable
            columns={[
                {
                    title: '字段1',
                    dataIndex: 'date',
                    key: 'date'
                },
                {
                    title: '字段2',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: '字段3',
                    dataIndex: 'upgradeNum',
                    key: 'upgradeNum'
                },
                {
                    title: '字段4',
                    dataIndex: 'upgradeNum',
                    key: 'upgradeNum'
                },
                {
                    title: '字段5',
                    dataIndex: 'upgradeNum',
                    key: 'upgradeNum'
                },
                {
                    title: '字段6',
                    dataIndex: 'upgradeNum',
                    key: 'upgradeNum'
                },
                {
                    title: '字段7',
                    dataIndex: 'upgradeNum',
                    key: 'upgradeNum'
                }
                // {
                //     title: 'Action',
                //     dataIndex: 'operation',
                //     key: 'operation',
                //     valueType: 'option',
                //     render: () => [<a>Pause</a>, <a>Stop</a>],
                // },
            ]}
            headerTitle={false}
            search={false}
            options={false}
            dataSource={data}
            pagination={false}
        />
    )
}
export default () => {
    const actionRef = useRef()

    return (
        <ProTable
            // options={false}  // 右侧tools
            columns={columns}
            rowSelection={{}}
            tableAlertRender={({
                selectedRowKeys,
                onCleanSelected
            }) => (
                <span>
                    已选 {selectedRowKeys.length} 项
                    <a className='pl10' onClick={onCleanSelected}>
                        取消选择
                    </a>
                </span>
            )}
            tableAlertOptionRender={() => {
                return (
                    <>
                        <a>批量删除</a>
                        <a className='pl10'>导出数据</a>
                    </>
                )
            }}
            pagination={{
                showQuickJumper: true
            }}
            actionRef={actionRef}
            request={async () =>
                request('https://proapi.azurewebsites.net/github/issues', {
                    params: {
                        size: 10
                    }
                })
            }
            rowKey='id'
            dateFormatter='string'
            headerTitle={operatSlot} // 左侧插槽
            toolBarRender={() => [
                // 右侧插槽
                // operatSlot
            ]}
            expandable={{
                expandedRowRender // 嵌套
            }}
        />
    )
}
