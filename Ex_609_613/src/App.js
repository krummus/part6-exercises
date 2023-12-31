import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import CreateNewAnecdote from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList />
      <h3>filter</h3>
      <Filter />
      <CreateNewAnecdote />
    </div>
  )
}

export default App