import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Anecdotes = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter).filter.toLowerCase()
  const anecdotes = useSelector(state => {
    if (filter === '') {
      return state.anecdotes
    }else{
      return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    }
  })

  const vote = (id) => {
    const anecdoteText = anecdotes.find(n => n.id === id).content
    const message = `you voted '${anecdoteText}'`
    dispatch({ type: 'anecdotes/upVoteAnecdote', payload: id })
    dispatch({ type: 'notifications/makeNotification', payload: message })
    setTimeout(() => {dispatch({ type: 'notifications/removeNotification' })}, 5000)
  }

  return(
    <div>
      {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} votes  
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
      </div>
      )}
    </div>
  )
}

export default Anecdotes

