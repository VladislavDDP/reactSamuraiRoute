import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, sendMessage, updatePostText} from './redux/state'
import { BrowserRouter } from 'react-router-dom'

export const renderTree = (state) => {
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

