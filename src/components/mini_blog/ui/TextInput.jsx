import React from 'react'
import styled from 'styled-components'

const StyeldTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${props => props.height && `height: ${props.height}px;`}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`

function TextInput(props) {
    const { height, value, onChange } = props;

    return (
        <StyeldTextarea height={height} value={value} onChange={onChange} />
    )
}

export default TextInput