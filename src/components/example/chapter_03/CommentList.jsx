import React from "react";
import Comment from "./Comment";

const comments = [
  {
    id: 1,
    name: "밤비",
    comment: "안냐세여 *^o^*",
    image:
      "https://d2uja84sd90jmv.cloudfront.net/users/G-OeS6x9-KiuNuSdPwF7OQ.jpg?updated=1638020297",
  },
  {
    id: 2,
    name: "백설이",
    comment: "백쩔이 와쪄염 뿌우 =3",
    image:
      "https://i.namu.wiki/i/NZl4VfDInOgzXkpv_NKvySCBReYHhMTznZx9Du3KQ_5HGVm542n3rgh5a92ulIWednAh3AiRKLHYG07RjD3M70omjFhLxgEPJOGTtS6-ejWLHU9j86Ytm1hMVP3tyDR0M7EVW4IKpZcVZ0S1R3E5OQ.webp",
  },
  {
    id: 3,
    name: "푼젤라",
    comment: "창문 열어놨음 왕자 어서 오고",
    image: "https://cdn.imweb.me/thumbnail/20211229/a85203b810b76.jpg",
  },
];

// 반복문 (ex. map) 사용 시 각 항목에 유니크한 id값을 설정하여 key값으로 부여할 것
function CommentList(props) {
  return (
    <div>
      {comments.map((data) => {
        return (
          <Comment
            key={data.id}
            name={data.name}
            comment={data.comment}
            image={data.image}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
