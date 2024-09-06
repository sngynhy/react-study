import React, { useEffect, useState } from "react";
import Notification from "./Notification";

const reserveNotifications = [
  {
    id: 1,
    message: "알림1) 안녕하세요. 오늘 일정을 알려드리겠습니다.",
  },
  {
    id: 2,
    message: "알림2) 점심 시간입니다.",
  },
  {
    id: 3,
    message: "알림3) 이제 곧 미팅이 시작됩니다.",
  },
];

function NotificationList() {
  const [notifications, setNotifications] = useState([]);

  // 특정 변수 상태 변화 감지
  useEffect(() => {
    const timer = setInterval(() => {
      if (notifications.length < reserveNotifications.length) {
        setNotifications((prevNotifications) => {
          return [
            ...prevNotifications,
            reserveNotifications[prevNotifications.length],
          ];
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    // Cleanup function: 컴포넌트가 언마운트될 때 타이머를 정지
    return () => clearInterval(timer);
  }, [notifications]); // notifications가 변경될 때마다 effect가 실행

  return (
    <div>
      <h1>- useEffect 예제 -</h1>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          message={notification.message}
        />
      ))}
    </div>
  );
}

export default NotificationList;
