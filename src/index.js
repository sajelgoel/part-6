import React from 'react';
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const buttonClicked = (value) => {
    const dispatch = {
      good: 'GOOD',
      bad: 'BAD',
      ok: 'OK',
      reset: 'ZERO'
    }
    store.dispatch({
      type: dispatch[value]
    })
  }

  const {good, ok, bad} = store.getState();

  return (
    <div>
      <button onClick={()=> buttonClicked('good')}>good</button>
      <button onClick={()=> buttonClicked('ok')}>ok</button>
      <button onClick={()=> buttonClicked('bad')}>bad</button>
      <button onClick={()=> buttonClicked('reset')}>reset stats</button>
      <div>good {good}</div>
      <div>ok {ok}</div>
      <div>bad {bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
