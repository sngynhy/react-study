import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import TextInput from '../ui/TextInput'
import Button from '../ui/Button'

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

function PostWritePage(props) {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    return (
        <Warpper>
            <Container>
                <TextInput height={20} value={title} onChange={(e) => setTitle(e.target.value)}/>
                <TextInput height={480} value={content} onChange={(e) => setContent(e.target.value)}/>
                <Button title="글쓰기" onClick={() => navigate('/mini-blog')} />
                <Button title="취소" onClick={() => navigate('/mini-blog')} />
            </Container>
        </Warpper>
    )
}

export default PostWritePage