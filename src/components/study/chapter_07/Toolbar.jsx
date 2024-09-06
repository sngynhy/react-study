import React from "react";

function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  return (
    <div style={styles.wrapper}>
      {/** inline if */}
      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

      {/** inline if-else */}
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    padding: 16,
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
  },
};

export default Toolbar;
