import { renderTree } from "../render"

let state = {
    profilePage: {
        posts: [
            {name: 'Vlad', text: 'Hello world', likes_count: 4},
            {name: 'Vlad', text: 'Let`s speak about react?', likes_count: 1},
            {name: 'Vlad', text: 'As for my plans for weekend...', likes_count: 3},
        ],
        newPostText: ''
    },
    dialogsPage: {
        users: [
            {id: 1,name: 'Vlad'},
            {id: 2,name: 'Kate'},
            {id: 3,name: 'Victor'},
            {id: 4,name:'Maks'}
        ],
          
        messages: [
            {id: 1, text: 'Hello, boy!', sender: 0},
            {id: 2, text: 'How are you?', sender: 1},
            {id: 3, text: 'Fine', sender: 0},
            {id: 4, text: 'what happens?', sender: 0},
            {id: 5, text: 'just tired a little bit', sender: 1}
        ]
    }
}

export const addNewPost = () => {
    const newPost = {
        name: 'Vlad', text: state.profilePage.newPostText, likes_count: 0
    }
    state.profilePage.posts.push(newPost)  
    state.profilePage.newPostText = ''
    renderTree(state)
}

export const updatePostText = (text) => {
    state.profilePage.newPostText = text
    renderTree(state)
}

export const sendMessage = (text) => {
    const newMessage = {
        id: 6, text: text, sender: 0
    }
    state.dialogsPage.messages.push(newMessage)
    renderTree(state)
}

export default state