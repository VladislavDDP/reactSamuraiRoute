import { authAccount } from "./authReducer"

const INITIALIZATION = 'app/INITIALIZATION'

const initialState = {
    isInitialized: false
}

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INITIALIZATION: 
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}

export const initialize = () => ({type: INITIALIZATION})

export const initializeApp = () => {
    return (dispatch) => {
        const auth = dispatch(authAccount())
        Promise.all([auth]).then(() => {
                dispatch(initialize())
            }
        )
    }
}

export default appReducer

