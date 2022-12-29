import {combineReducers} from "redux"
import users from "./Users"
import questions from "./Questions"
import authedUser from "./AuthedUser"
import {loadingBarReducer} from "react-redux-loading"

export default combineReducers({
    users,
    questions,
    authedUser,
    loadingBar: loadingBarReducer
})