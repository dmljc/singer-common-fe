import React from 'react'
import CountUp from 'react-countup'

export default (props) => {
    const {
        fontSize = 16,
        color = '',
        count = 0,
        separator = ', ',
        decimals = 2, // 保留的小数点位数
        decimal = '. '
    } = props

    return (
        <span
            style={{
                fontSize,
                color,
                fontWeight: 600
            }}
        >
            <CountUp
                end={count}
                separator={separator}
                decimals={decimals}
                decimal={decimal}
            />
        </span>
    )
}
