import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote, getAnecdotes, updateAnecdote } from './requests'
import { useReducer } from 'react'
import NotificationContext from './notificationContext'

export const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'addNotification':
      const content = action.content
      state.push({
        message: content
      })
      return state
    case 'removeNotification':
      return state.filter((_, idx) => idx !== 0)
    default:
      return state
  }
}

const App = () => {
  const  [ notifications, notificationsDispatch ] = useReducer(notificationReducer, [])

  const queryClient = useQueryClient()

  const updatedAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  const handleVote = (anecdote) => {
    updatedAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1})
    notificationsDispatch({ type: 'addNotification', content: `anecdote ${anecdote.content}` })
    setTimeout(() => {notificationsDispatch({ type: 'removeNotification' })}, 5000)
  }

  const results = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false
  })

  if (results.isLoading) {
    return (
      <div>
        loading data...
      </div>
    )
  }

  if (results.isError) {
    return (
      <div>
        anecdote service not available due to problems in server
      </div>
    )
  }

  const anecdotes = results.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <NotificationContext.Provider value={[ notifications, notificationsDispatch ]}>
        <Notification />
        <AnecdoteForm />
      </NotificationContext.Provider>

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
        
      )}
      
    </div>
  )
}

export default App
