import './index.css'
import reportWebVitals from './reportWebVitals'
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './StoreContext'

const renderTree = (state) => {
  debugger
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider value={store}>
          <App />
        </Provider> 
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderTree(store.getState())

// call regenerator as observer pattern
store.subscribe(() => {
  const state = store.getState()
  renderTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();