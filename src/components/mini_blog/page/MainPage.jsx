import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PostList from '../list/PostList'
import Button from '../ui/Button'
import data from 'data.json'

const Warpper = styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`
const MainTitleText = styled.p`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`

// styled-components에서 &은 자기 자신을 의미함 =>
    
function MainPage (props) {
    // const { } = props

    const navigate = useNavigate()

    return (
        <div>
            <MainTitleText>공부 기록</MainTitleText>
            <Warpper className="main-wrapper">
                <Container className="main-container">
                    <Button title="글쓰기" onClick={() => navigate("/post-write")} />
                    <PostList posts={data} onClickItem={(item) => navigate(`/post/${item.id}`)}/>
                </Container>
            </Warpper>
        </div>
    )
}

export default MainPage