import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({ 
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push(content)
    },
    upVoteAnecdote(state, action) {
      const id = action.payload.id
      const updatedAnecdotes = state.map(anecdote => anecdote.id !== id ? anecdote : action.payload)
      return updatedAnecdotes.sort((a,b) => b.votes - a.votes)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { createAnecdote, upVoteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer