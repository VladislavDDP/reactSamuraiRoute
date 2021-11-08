import { createSelector } from "reselect"

const profileStatus = (state) => {
    return state.profilePage.status
}
export const getProfileStatus = createSelector(profileStatus, status => status)


export const profilePage = (state) => {
    return state.profilePage.profile
}
export const getProfile = createSelector(profilePage, profile => profile)


export const userId = (state) => {
    return state.auth.userId
}
export const getUserId = createSelector(userId, id => id)