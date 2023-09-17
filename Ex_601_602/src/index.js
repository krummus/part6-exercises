import React from 'react';
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const giveFeedback = () => {
    return(
      <div>
      <h1>Give Feedback</h1>
      <button onClick={e => store.dispatch({ type: 'GOOD' })}>good</button>
      <button onClick={e => store.dispatch({ type: 'OK' })}>ok</button>
      <button onClick={e => store.dispatch({ type: 'BAD' })}>bad</button>
      <button onClick={e => store.dispatch({ type: 'ZERO' })}>reset stats</button>
      </div>
  )
}

const showStats = () => {
  return(
    <div>
      <h1>Statistics</h1>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
      <div>all {store.getState().good+store.getState().ok+store.getState().bad}</div>
      <div>average {(store.getState().good*1+store.getState().bad*(-1))/(store.getState().good+store.getState().ok+store.getState().bad)}</div>
      <div>positive {(store.getState().good/(store.getState().good+store.getState().ok+store.getState().bad))*100}%</div>
    </div>
  )
}

const App = () => {
  if((store.getState().good+store.getState().ok+store.getState().bad) > 0) {
    return(
      <div>
        {giveFeedback()}
        {showStats()}
      </div>
    )
  }else{
    return(
      <div>
        {giveFeedback()}
        <h1>Statistics</h1>
        <p>No feedback given yet</p>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)


//{((props.good*1) + (props.bad*(-1)))/(props.good + props.neutral + props.bad)}