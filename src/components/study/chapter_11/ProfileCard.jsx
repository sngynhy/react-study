import Card from "./Card";

function ProfileCard(props) {
  return (
    <Card title="홍길동" backgroundColor="lightpink">
      {/** title, backgroundColor가 Specialization
        아래 부분이 Containment로 props.children에 해당됨 */}
      <p>안녕하세요, 홍길동입니다.</p>
      <p>저는 리액트를 공부중입니다.</p>
    </Card>
  );
}

export default ProfileCard;
