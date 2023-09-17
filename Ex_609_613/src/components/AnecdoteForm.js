import React from 'react'
import { useDispatch } from 'react-redux'

const CreateNewAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const message = `'${content}' has been added to the anecdotes list`
    dispatch({ type: 'anecdotes/createAnecdote', payload: content })
    dispatch({ type: 'notifications/makeNotification', payload: message })
    setTimeout(() => {dispatch({ type: 'notifications/removeNotification' })}, 5000)
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

export default CreateNewAnecdote