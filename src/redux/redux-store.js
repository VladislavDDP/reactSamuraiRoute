import { applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import thunkMiddleWare from "redux-thunk"
import {reducer as formReducer}  from "redux-form"
import appReducer from "./appReducer"

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store