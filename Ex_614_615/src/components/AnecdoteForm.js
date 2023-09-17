import React from 'react'
import { useDispatch } from 'react-redux'
import anecdoteService from  '../services/anecdotes'

const CreateAnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({ type: 'anecdotes/createAnecdote', payload: newAnecdote })
  }

  return(
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default CreateAnecdoteForm