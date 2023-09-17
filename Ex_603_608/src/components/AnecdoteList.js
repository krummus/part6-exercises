import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upVoteAnecdote } from '../reducers/anecdoteReducer'

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  const vote = (id) => {
    console.log('vote', id)
    dispatch(upVoteAnecdote(id))
  }

  return(
    <div>
        <h2>Anecdotes</h2>
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