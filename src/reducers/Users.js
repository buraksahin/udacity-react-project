import * as Constants from '../utils/Constants';
export default function users(state = {}, action) {
    switch (action.type) {
        case Constants.RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case Constants.SAVE_QUESTION:
            const {question} = action
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat([question.id])
                }
            }
        case Constants.SAVE_ANSWERED_QUESTION:
            const {authedUser, qid, answer} = action.info
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser]['answers'],
                        [qid]: answer
                    }
                }
            }
        default:
            return state
    }
}