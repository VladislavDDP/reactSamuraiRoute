import './index.css'
import reportWebVitals from './reportWebVitals'
import state from './redux/state'
import {functionRegenerator} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addNewPost, sendMessage, updatePostText} from './redux/state'
import { BrowserRouter } from 'react-router-dom'

const renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addNewPost={addNewPost}
             sendMessage={sendMessage} 
             updatePostText={updatePostText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderTree(state)

// call regenerator as observer pattern
functionRegenerator(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
