import { createAnecdote } from "../requests"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext } from "react"
import NotificationContext from "../notificationContext"

const AnecdoteForm = () => {

  const [ notifications, notificationsDispatch ] = useContext(NotificationContext)

  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes']})
    },
    onError: (error) => {
      notificationsDispatch({ type: 'addNotification', content: `${error}`})
      setTimeout(() => {notificationsDispatch({ type: 'removeNotification' })}, 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const mutationresult = newAnecdoteMutation.mutate({ content, votes:0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
