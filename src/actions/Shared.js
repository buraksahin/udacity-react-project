import {hideLoading, showLoading} from 'react-redux-loading'
import {receiveUsers} from './Users'
import {receiveQuestions} from './Questions'
import {getInitialData} from '../utils/Api'
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}