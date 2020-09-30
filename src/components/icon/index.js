import React from 'react'
import './index.less'

export default (props) => {
    const { name = '' } = props

    return <span className={`_icon icon iconfont ${name}`} />
}
