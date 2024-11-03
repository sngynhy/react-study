import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import CommentList from '../list/CommentList'
import TextInput from '../ui/TextInput'
import Button from '../ui/Button'
import data from 'data.json'

const Warpper = styled.div`
    width: calc(100% - 32px);
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

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`

const ContentText = styled.p`
    font-size: 20px;
    font-height: 32px;
    white-space: pre-wrap;
`

const CommnetLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`
function PostViewPage(props) {
    const navigate = useNavigate()
    const { postId } = useParams()
    
    const post = data.find(item => item.id == postId)
    const [comment, setComment] = useState("")

    return (
        <Warpper>
            <Container>
                <Button title="뒤로 가기" onClick={() => navigate('/mini-blog')} />
                
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommnetLabel>[댓글]</CommnetLabel>
                <CommentList comments={post.comments} />
                <CommnetLabel>[댓글 쓰기]</CommnetLabel>
                <TextInput height={40} value={comment} onChange={(e) => setComment(e.target.value)}/>
                <Button title="댓글 등록" onClick={() => navigate('/')} />
            </Container>
        </Warpper>
    )
}

export default PostViewPage