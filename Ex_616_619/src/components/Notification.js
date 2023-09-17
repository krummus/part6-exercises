import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notifications = useSelector(state => state.notifications)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    margin: 5
  }

  if (notifications.length !== 0) {
    return (
      <div>
        {notifications.map(notif => 
          <div style={style} key={notif.message}>{notif.message}</div>
        )}
      </div>
    )
  }else{
    return (
      <div style={null} />
    )
  }
}

export default Notification