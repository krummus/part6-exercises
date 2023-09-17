import { useContext } from "react"
import NotificationContext from "../notificationContext"

const Notification = () => {

  const [ notifications, notificationsDispatch ] = useContext(NotificationContext)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  if (notifications.length !== 0) {
    console.log(notifications.length)
    return (
      <div >
        {notifications.map(notif => 
          <div style={style} key={notif.message}>
          {notif.message}
          </div>
        )}
      </div>
    )
  }else{
    console.log(notifications.length)
    return (
      <div style={null}>
      </div>
    )
  }
}

export default Notification
