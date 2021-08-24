import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsList = [
  {name: 'Vlad', text: 'Hello world', likes_count: 4},
  {name: 'Vlad', text: 'Let`s speak about react?', likes_count: 1},
  {name: 'Vlad', text: 'As for my plans for weekend...', likes_count: 3},
]

let usersList = [
  {id: 1,name: 'Vlad'},
  {id: 2,name: 'Victor'},
  {id: 3,name:'Maks'}
]

let messagesList = [
  {id: 1, text: 'Hello, boy!'},
  {id: 2, text: 'How are you?'},
  {id: 3, text: 'Fine'},
  {id: 4, text: 'what happens?'},
  {id: 5, text: 'just tired a little bit'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsList} users={usersList} messages={messagesList} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
