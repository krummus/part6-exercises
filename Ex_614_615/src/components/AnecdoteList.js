import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import anecdoteService from  '../services/anecdotes'

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

  const vote = async (id) => {
    const anecdoteToUpdate = anecdotes.find(n => n.id === id)
    const updatedAnecdote = { ...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1 }
    const serverResponse = await anecdoteService.updateAnecdote(id, updatedAnecdote)
    console.log(serverResponse)
    dispatch({ type: 'anecdotes/upVoteAnecdote', payload: serverResponse })
    dispatch({ type: 'notifications/makeNotification', payload: anecdoteToUpdate.content })
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
          has {anecdote.votes} 
          <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
      </div>
      )}
    </div>
  )
}

export default Anecdotes

