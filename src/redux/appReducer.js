import { authAccount } from "./authReducer"

const INITIALIZATION = 'app/INITIALIZATION'
const SWITCH_THEME = 'SWITCH_THEME'

const initialState = {
    isInitialized: false,
    theme: localStorage.getItem('theme')
}

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INITIALIZATION: 
            return {
                ...state,
                isInitialized: true
            }
        case SWITCH_THEME: 
            localStorage.setItem('theme', state.theme === 'light' ? 'dark' : 'light')
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        default:
            return state
    }
}

export const initialize = () => ({type: INITIALIZATION})
export const themeSwitcher = () => ({type: SWITCH_THEME })

export const initializeApp = () => {
    return (dispatch) => {
        const auth = dispatch(authAccount())
        Promise.all([auth]).then(() => {
                dispatch(initialize())
            }
        )
    }
}

export const switchTheme = () => {
    return (dispatch) => {
        dispatch(themeSwitcher())
    }
}

export default appReducer

