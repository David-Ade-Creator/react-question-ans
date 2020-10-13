import Axios from 'axios';
import { 
    QUESTION_LIST_REQUEST,
    QUESTION_LIST_SUCCESS,
    QUESTION_LIST_FAIL, QUESTION_SAVE_FAIL, QUESTION_SAVE_SUCCESS, QUESTION_SAVE_REQUEST, QUESTION_DETAILS_REQUEST, QUESTION_DETAILS_SUCCESS, QUESTION_DETAILS_FAIL, ANSWER_SAVE_REQUEST, ANSWER_SAVE_SUCCESS, ANSWER_SAVE_FAIL, ANSWER_LIST_REQUEST, ANSWER_LIST_SUCCESS, ANSWER_LIST_FAIL
 } from '../constants/questionConstants';

const listquestion = () => async (dispatch) => {
    dispatch({ type: QUESTION_LIST_REQUEST});
    try {
      const { data } = await Axios.get("/api/q3");
      dispatch({ type: QUESTION_LIST_SUCCESS, payload: data });
    } catch (error) {
     //   console.log("CATCH = ", error.response);
      dispatch({ type: QUESTION_LIST_FAIL, payload:error.response.data.errors });
    }
  }

const savequestion = (questions) => async (dispatch) => {
    dispatch({ type: QUESTION_SAVE_REQUEST,payload : questions});
    try {
      const { data } = await Axios.post("/api/q3",questions);
      console.log(data);
      dispatch({ type: QUESTION_SAVE_SUCCESS, payload: data });
    } catch (error) {
     //   console.log("CATCH = ", error.response);
      dispatch({ type: QUESTION_SAVE_FAIL, payload:error.response.data.errors });
    }
  }

  const questiondetails = (questionId) => async (dispatch) => {
    try {
        dispatch({type: QUESTION_DETAILS_REQUEST});
        const {data} = await Axios.get("/api/q3/" + questionId);
        dispatch({type: QUESTION_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: QUESTION_DETAILS_FAIL, payload: error.message});
    }
}

const answerQuestion = (answerdetail) => async (dispatch) => {
  try {
    dispatch({type: ANSWER_SAVE_REQUEST,payload:answerdetail});
    const {data} = await Axios.post("/api/q3/answers", answerdetail);
    dispatch({type: ANSWER_SAVE_SUCCESS,payload:data})
  } catch (error) {
    dispatch({type: ANSWER_SAVE_FAIL,payload: error.message})
  }
}

const listAnswers = (questionId) => async (dispatch) => {
  try {
    dispatch({type: ANSWER_LIST_REQUEST,questionId});
    const {data} = await Axios.get(`/api/q3/${questionId}/answers`);
    dispatch({type: ANSWER_LIST_SUCCESS, payload:data})
  } catch (error) {
    dispatch({type: ANSWER_LIST_FAIL,payload:error.errors})
  }
}

  export {listquestion,savequestion,questiondetails,answerQuestion,listAnswers}