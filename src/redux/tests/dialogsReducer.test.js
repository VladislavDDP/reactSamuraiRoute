import dialogsReducer from './../dialogsReducer'

const initialState = {
    users: [
        {id: 1, name: 'Vlad', isActive: true},
        {id: 2, name: 'Kate', isActive: false},
        {id: 3, name: 'Victor', isActive: false},
        {id: 4, name:'Maks', isActive: false}
    ],
        
    messages: [
        {id: 1, text: 'Hello, boy!', sender: 0},
        {id: 2, text: 'How are you?', sender: 1},
        {id: 3, text: 'Fine', sender: 0},
        {id: 4, text: 'what happens?', sender: 0},
        {id: 5, text: 'just tired a little bit', sender: 1}
    ]
}

test('send message test', () => {
    const action = {type: 'SEND_MESSAGE', text: 'test message'}
    const newState = dialogsReducer({...initialState}, action)
    expect(newState.messages.length).toBe(5)
})