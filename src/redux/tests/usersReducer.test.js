import usersReducer from './../usersReducer'

const initialState = {
    users: [],
    currentPage: 1,
    totalPagesCount: 80,
    pageSize: 12,
    isFetching: false,
    isFollowTimeOut: []
}

test('users test', () => {
    const currentPage = 1;
    const action = {type: 'SET_CURRENT_PAGE', currentPage}
    const newState = usersReducer({...initialState}, action)
    expect(newState.currentPage).toBe(1)
})