export const getStateUsers = (state) => {
    return state.usersPage.users
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getTotalPagesCount = (state) => {
    return state.usersPage.totalPagesCount
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
} 

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getIsFollowTimeOut = (state) => {
    return state.usersPage.isFollowTimeOut
}