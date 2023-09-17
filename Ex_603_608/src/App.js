import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import CreateNewAnecdote from './components/AnecdoteForm'

const App = () => {
  return (
    <div>
      <AnecdoteList />
      <CreateNewAnecdote />
    </div>
  )
}

export default App