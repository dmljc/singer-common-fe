import React from 'react'
import {
    Form,
    Row,
    Col,
    Input,
    Button,
    Select,
    DatePicker,
    Radio,
    InputNumber,
    Checkbox,
    Space
} from 'antd'

import TitleHeader from '../title.header'
import './index.less'

const { Item } = Form
const { Option } = Select
const { TextArea } = Input
const { RangePicker } = DatePicker

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
}

export default (props) => {
    const [form] = Form.useForm()
    const {
        fetchData = {},
        itemList = [],
        doneFinish = () => {},
        doneFailed = () => {}
    } = props

    const renderForm = (item) => {
        const { type } = item

        switch (type) {
            case 'input':
                return <Input placeholder={`请填写${item.label}`} />
            case 'tag':
                return <TitleHeader title={item.title} />
            case 'textarea':
                return <TextArea row={4} placeholder={`请填写${item.label}`} />
            case 'select':
                return (
                    <Select placeholder={`请填写${item.label}`}>
                        {item.options.map((item) => (
                            <Option value={item.id} key={item.id}>
                                {item.name}
                            </Option>
                        ))}
                    </Select>
                )
            case 'range':
                return (
                    <RangePicker
                        showTime
                        className='w100'
                        placeholder={`请填写${item.label}`}
                    />
                )
            case 'datetime':
                return (
                    <DatePicker
                        showTime
                        className='w100'
                        placeholder={`请填写${item.label}`}
                    />
                )
            case 'radio':
                return (
                    <Radio.Group placeholder={`请填写${item.label}`}>
                        {item.options.map((item) => (
                            <Radio value={item.id} key={item.id}>
                                {item.name}
                            </Radio>
                        ))}
                    </Radio.Group>
                )
            case 'inputNumber':
                return (
                    <InputNumber
                        className='w100'
                        placeholder={`请填写${item.label}`}
                    />
                )
            case 'checkbox':
                return (
                    <Checkbox.Group placeholder={`请填写${item.label}`}>
                        {item.options.map((item) => (
                            <Checkbox value={item.id} key={item.id}>
                                {item.name}
                            </Checkbox>
                        ))}
                    </Checkbox.Group>
                )
            case 'button':
                return (
                    <Space size='large'>
                        <Button htmlType='submit'>保存</Button>
                        <Button htmlType='button' onClick={onReset}>
                            重置
                        </Button>
                    </Space>
                )
            case 'text':
                return (
                    <Input
                        bordered={false}
                        disabled
                        className='disable-color'
                    />
                )
            default:
                return ''
        }
    }

    const onFinish = (values) => {
        doneFinish(values)
    }

    const onFinishFailed = (errorInfo) => {
        doneFailed(errorInfo)
    }

    const onReset = () => {
        form.resetFields()
    }

    return (
        <Form
            {...layout}
            form={form}
            name='basic'
            initialValues={fetchData}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Row>
                {itemList.map((item) => (
                    <Col
                        key={item.itemKey}
                        span={item.span}
                        offset={item.offset}
                    >
                        <Item
                            label={item.label}
                            name={item.itemKey}
                            rules={[
                                {
                                    required: item.required,
                                    message: `请填写${item.label}`
                                }
                            ]}
                        >
                            {renderForm(item)}
                        </Item>
                    </Col>
                ))}
            </Row>
        </Form>
    )
}
