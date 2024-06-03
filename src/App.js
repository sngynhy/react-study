import './App.css';
import { useState } from 'react';
import Modal from './components/modal'

function App() {
  // 로컬 변수 선언
  let date = '집에 가고싶어';
  let className = 'color-red'

  let categoryList = { 0: '안주', 1: '술' }
  let menuList = { 0: ['곱창', '삼겹살', '회', '김치전', '어묵탕'], 1: ['소주', '청하', '막걸리', '위스키', '와인'] }
  let sortList = { 0:'오름', 1:'내림' }
  
  // State 사용 시 useState() 함수 이용
  // let [변수명, state 변경 함수] = useState('할당할 데이터')
  let [category, setCategory] = useState(0);
  let [menu, setMenu] = useState(menuList[category]); // array 타입으로 할당 가능
  let [count, setCount] = useState(0);
  let [sort, setSort] = useState(0);

  
  function handleMenuChangeClick () {
    // let copy = [...state] // state 변경 함수 특징 > 기본 state == 신규 state => 변경 X
    // copy[0] = copy[0] === '곱창' ? '막창' : '곱창'
    // setState (copy)

    let cate = category === 0 ? 1 : 0
    setCategory (cate)
    setMenu (menuList[cate])
  }

  function sortChangeClick () { // 정렬 함수
    let param = sort === 0 ? 1 : 0
    setSort(param)
    // 0이면 내림차순 1이면 오름차순
    let update = param === 0 ? menuList[category].sort((a, b) => a > b ? -1 : 1) : menuList[category].sort((a, b) => a > b ? 1 : -1)
    setMenu(update)
  }
  
  function loop () {
    let res = []
    menu.forEach((v, i) => {
      res.push(<h3 key={i}>{v}</h3>)
    })
    return res
  }

  /** HTML 마크업 영역 */
  return (
    /** JSX : javascript의 확장 문법으로 .js파일에서 HTML을 작성하듯이 비슷하게 작성할 수 있도록 해 주는 것 */
    <div className="App">
      <div className="black-nav"> {/** class == className > App.css에 style 추가 */}
        <h1>React Project Test</h1>
      </div>
      <h3 className={className}>{ date }</h3> {/** 데이터 바인딩 */}
      <p style={{color: 'blue', display: 'flex', fontSize: '20px'}}>집에 보내줘</p> {/** 스타일 바인딩은 {key: value}와 같은 Obejct 형태로, 카멜케이스로 */}
      
      <hr/>
      <button onClick={() => handleMenuChangeClick() }>메뉴 변경</button>
      <h1>{categoryList[category]} 메뉴</h1>

      {/** state 적용 테스트 */}
      {/* <div className='menu'>
        {menu.map((v, i) => (
          <h3 key={i}>{v}</h3>
        ))}
      </div>

      <hr/> */}

      <div className='menu'>{ loop() }</div>

      {/** state 변경 함수 매개변수로 업데이트할 state 값 전달 */}
      {/* <div className='menu'>
        <h3>{ menu[0] } <span onClick={ () => setCount (count++) }>💕</span> { count } </h3>
      </div>
      <hr/>
      <div className='menu'>
        <h3>{ menu[1] } <span>💕</span> { count } </h3>
      </div>
      <hr/>
      <div className='menu'>
        <h3>{ menu[2] } <span>💕</span> { count } </h3>
      </div>
      <hr/>
      <div className='menu'>
        <h3>{ menu[3] } <span>💕</span> { count } </h3>
      </div>
      <hr/>
      <div className='menu'>
        <h3>{ menu[4] } <span>💕</span> { count } </h3>
      </div>
      <hr/> */}
      <button onClick={ () => sortChangeClick() }>{sortList[sort]}차순 정렬</button>
      <hr/>
      
      {/** 컴포넌트 */}
      <Modal menu={menu[1]}/>
    </div>
  );
}

// 컴포넌트 생성 (따로 파일로 생성)
// function Modal () {
//   return (
//     <div className="image-modal">
//       <h2>안주이름</h2>
//     </div>
//   )
// }
// 또는 아래처럼 변수로 함수 만드는 방법도 가능
// const modal = () => {
//   return (
//     <div className="image-modal">
//       <h2>안주이름</h2>
//     </div>
//   )
// }

export default App;
