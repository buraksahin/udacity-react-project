import * as Constants from "../utils/Constants";
export default function questions(state = {}, action) {
    switch (action.type) {
        case Constants.RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case Constants.SAVE_QUESTION:
            const {question} = action
            console.log(Constants.SAVE_QUESTION, question)
            console.log(question.author, question.id)
            return {
                ...state,
                [question.id]: question,
            }
        case Constants.SAVE_ANSWERED_QUESTION:
            const {authedUser, qid, answer} = action.info
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}