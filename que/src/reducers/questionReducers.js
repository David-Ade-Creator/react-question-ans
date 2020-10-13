const {
    QUESTION_LIST_REQUEST,
    QUESTION_LIST_SUCCESS,
    QUESTION_LIST_FAIL,
    QUESTION_SAVE_REQUEST,
    QUESTION_SAVE_SUCCESS,
    QUESTION_SAVE_FAIL,
    QUESTION_DETAILS_REQUEST,
    QUESTION_DETAILS_SUCCESS,
    QUESTION_DETAILS_FAIL,
    ANSWER_SAVE_REQUEST,
    ANSWER_SAVE_SUCCESS,
    ANSWER_SAVE_FAIL,
    ANSWER_SAVE_RESET,
    ANSWER_LIST_REQUEST,
    ANSWER_LIST_SUCCESS,
    ANSWER_LIST_FAIL
} = require("../constants/questionConstants");

function questionListReducer(state = {questions:[]}, action) {
    switch (action.type){
        case QUESTION_LIST_REQUEST:
            return{loading: true};
        case QUESTION_LIST_SUCCESS:
            return{ loading: false, questions: action.payload};
        case QUESTION_LIST_FAIL:
            return { loading : false, error : action.payload}
        default:
            return state;
    }
}


function questionSaveReducers(state = {table:{}}, action){
  switch(action.type){
      case QUESTION_SAVE_REQUEST:
          return{loading:true};
      case QUESTION_SAVE_SUCCESS:
          return{loading:false, success:true, question: action.payload};
      case QUESTION_SAVE_FAIL:
          return{loading:false, error: action.payload}
      default:
          return state;
  }
}


function questionDetailsReducer(state = {questions:{answers:[]}}, action) {
    switch (action.type){
        case QUESTION_DETAILS_REQUEST:
            return{loading: true};
        case QUESTION_DETAILS_SUCCESS:
            return{ loading: false, questions: action.payload};
        case QUESTION_DETAILS_FAIL:
            return { loading : false, error : action.payload}
        default:
            return state;
    }
}

function answerSaveReducer(state = {}, action) {
    switch (action.type) {
      case ANSWER_SAVE_REQUEST:
        return { loading: true };
      case ANSWER_SAVE_SUCCESS:
        return { loading: false, answer: action.payload, success: true };
      case ANSWER_SAVE_FAIL:
        return { loading: false, errror: action.payload };
      case ANSWER_SAVE_RESET:
        return {};
      default:
        return state;
    }
  }
  

function answerListReducer(state = {answers:[]},action) {
    switch (action.type) {
        case ANSWER_LIST_REQUEST:
            return {loading:true};
        case ANSWER_LIST_SUCCESS:
            return {loading: false, answers:action.payload, success:true };
        case ANSWER_LIST_FAIL:
            return {loading:false, error: action.payload }
        default:
            return state;
    }
}

export {
    questionListReducer,
    questionDetailsReducer,
    answerSaveReducer,
    questionSaveReducers,
    answerListReducer
}