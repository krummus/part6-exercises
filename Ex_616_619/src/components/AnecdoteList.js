import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVoteAnecdote } from '../reducers/anecdoteReducer'
import { makeNotifUpVote } from '../reducers/notificationReducer'

const Anecdotes = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter).toLowerCase()
  const anecdotes = useSelector(state => {
    if (filter === '') {
      return state.anecdotes
    }else{
      return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    }
  })

  const vote = async (id) => {
    dispatch(addVoteAnecdote(id))
    dispatch(makeNotifUpVote(id, 5))
  }

  return(
    <div>
      {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
          <div>
          {anecdote.content}
          </div>
          <div>
          {`has ${anecdote.votes} `} 
          <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
      </div>
      )}
    </div>
  )
}

export default Anecdotes

