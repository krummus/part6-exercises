import { createSlice } from "@reduxjs/toolkit"

const notificationAtStart = {
    notification: ''
}

const notificationSlice = createSlice({ 
  name: 'notifications',
  initialState: notificationAtStart,
  reducers: {
    makeNotification(state, action) {
        state.notification = action.payload
    },
    removeNotification(state, action) {
        state.notification = ''
    },
  },
})

export const { makeNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer