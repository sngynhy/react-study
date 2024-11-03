import React from 'react'
import styled from 'styled-components'

const StyeldButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
    margin: 16px 0;
    &:hover {
        background: black;
        color: white
    }
`

function Button(props) {
    const { title, onClick } = props;

    return (
        <StyeldButton className="style-btn" onClick={onClick}>{ title || 'Button' }</StyeldButton>
    )
}

export default Button