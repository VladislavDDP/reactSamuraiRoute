import profileReducer from './../profileReducer'

test('add new message test', () => {

    const action = {type: 'ADD_NEW_POST', text: 'New post for testing'}
    const initialState = {
        posts: [
            {id: 3, name: 'Vlad', text: 'How are you doing?', likes_count: 4, liked: false},
            {id: 2, name: 'Vlad', text: 'Let`s speak about react?', likes_count: 1, liked: false},
            {id: 1, name: 'Vlad', text: 'As for my plans for weekend...', likes_count: 3, liked: false},
        ]
    }

    const newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)
})