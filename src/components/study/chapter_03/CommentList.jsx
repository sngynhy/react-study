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
      "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FBQddMMt_MOo%2Fhqdefault.jpg&sp=1730428897Te252ff2dd4fb7ad574de775e5957acb87218fc7e58c3205c10498d9d80dae7bf",
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
