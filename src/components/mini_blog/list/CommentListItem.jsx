import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    position: relative;
    :hover {
        background: lightgrey;
    }
`

const ContentText = styled.p`
    font-size: 14px;
`

const imgStyle = {
    position: 'absolute',
    zIndex: 999,
    left: 800,
    // bottom: 100
}

function CommentListItem(props) {
    const { comment } = props
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Wrapper>
            <ContentText
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                {comment.content}
            </ContentText>
            {isHovered && comment.image.name && <img style={imgStyle} src={require(`assets/media/img/comment/${comment.image.name}`)} alt={comment.image.alt} title={comment.image.title} />}
        </Wrapper>
    )
}

export default CommentListItem