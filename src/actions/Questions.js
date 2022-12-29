import {saveQuestion, saveQuestionAnswer} from "../utils/Api"
import {hideLoading, showLoading} from "react-redux-loading"

import * as Constants from '../utils/Constants';

export function receiveQuestions(questions) {
    return {
        type: Constants.RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        type: Constants.SAVE_QUESTION,
        question
    }
}

function addAnsweredQuestion(info) {
    return {
        type: Constants.SAVE_ANSWERED_QUESTION,
        info
    }
}

export function handleSaveQuestion(optionOne, optionTwo, author) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author,
        }).then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}

export function handleAnsweredSaveQuestion(info) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestionAnswer(info).then(() => dispatch(addAnsweredQuestion(info)))
            .then(() => dispatch(hideLoading()))
    }
}