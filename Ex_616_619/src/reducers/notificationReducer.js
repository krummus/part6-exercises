import { createSlice } from "@reduxjs/toolkit"

const notificationsAtStart = []

const asObject = (message) => {
  return {
    messsage: message
  }
}

const initialState = notificationsAtStart.map(asObject)

const notificationSlice = createSlice({ 
  name: 'notifications',
  initialState: initialState,
  reducers: {
    makeNotification(state, action) { 
      const content = action.payload
      state.push({
        message: content
      })
    },
    removeNotification(state, action) {
      return state.filter((_, idx) => idx !== 0)
    },
  },
})

export const { makeNotification, removeNotification } = notificationSlice.actions

export const makeNotifUpVote = (id, timer) => {
  return async (dispatch, getState) => {
    const state = getState()
    const currAnecdotes = state.anecdotes
    const anecdoteForNotification = currAnecdotes.find(n => n.id === id).content
    dispatch(makeNotification(`You have voted for '${anecdoteForNotification}'`))
    setTimeout(() => dispatch(removeNotification('')), (timer*1000))
  }
}

export const makeNotifNewAnec = (content, timer) => {
  console.log(content)
  return async dispatch => {
    dispatch(makeNotification(`You have made a new anecdote '${content}'`))
    setTimeout(() => dispatch(removeNotification('')), (timer*1000))
  }
}

export const removeNotif = () => {
  return async dispatch => {
    dispatch(removeNotification)
  }
}

export default notificationSlice.reducer