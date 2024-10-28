import React from 'react'
import styled from 'styled-components'

// tagged template literal 문법 사용
const Wrapper = styled.div`
    padding: 1em;
    background: grey;
`
const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
`
// props 이용 예제
const Button = styled.button`
    color: ${props => props.dark ? 'white' : 'dark'};
    background: ${props => props.dark ? 'black' : 'white'};
    border: 1px solid black;
`
// styled-components 스타일 확장 예제
const RoundedButton = styled(Button)`
    border-radius: 16px;
`

function StyledComponetExample(props) {
    return (
        <div>
            <Wrapper>
                <Title>
                    안녕, 리액트🙂
                </Title>
            </Wrapper>

            <Button>Normal</Button>
            {/** props로 dark 전달 */}
            <Button dark>Dark</Button>

            <RoundedButton>Rounded</RoundedButton>
        </div>
    )
}

export default StyledComponetExample;