import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({ 
  name: 'anecdotes',
  initialState: [],
  reducers: {
    upVoteAnecdote(state, action) {
      const id = action.payload.id
      const updatedAnecdotes = state.map(anecdote => anecdote.id !== id ? anecdote : action.payload)
      return updatedAnecdotes.sort((a,b) => b.votes - a.votes)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      const anecdotes = action.payload
      return anecdotes.sort((a,b) => b.votes - a.votes)
    }
  },
})

export const { upVoteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initialiseAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVoteAnecdote = id => {
  return async (dispatch, getState)  => {
    const state = getState()
    const currAnecdotes = state.anecdotes
    const anecdoteToUpdate = currAnecdotes.find(n => n.id === id)
    const updatedAnecdote = { ...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1 }
    const serverResponse = await anecdoteService.updateAnecdote(id, updatedAnecdote)
    dispatch(upVoteAnecdote(serverResponse))
  }
}

export default anecdoteSlice.reducer