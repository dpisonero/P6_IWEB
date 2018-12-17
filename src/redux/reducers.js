import { combineReducers } from 'redux';
import {CHANGE_QUESTION, QUESTION_ANSWER} from "./actions";
import {SUBMIT} from "./actions";

function score(state = 0, action = {}) {
    switch(action.type) {
        case SUBMIT:
            let score = 0;
            for (let question in action.payload) {
                if (question.userAnswer.trim().toLowerCase() === question.answer.trim().toLowerCase()) {
                    score++
                }
            }
            return score;
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch(action.type) {
        case SUBMIT:
            return true;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}) {
    switch(action.type) {
        case CHANGE_QUESTION:
            return action.payload;
        default:
            return state;
    }
}

function questions(state = [], action = {}) {
    switch(action.type) {
        case QUESTION_ANSWER:
            return state.map((question, i) => {
                return { ...question,
                            userAnswer: action.payload.index === i ?
                                        action.payload.answer : question.userAnswer}
            });
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState