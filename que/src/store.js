import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Cookie from "js-cookie";
import {composeWithDevTools} from 'redux-devtools-extension';
import { 
    userSigninReducer, 
    userSignupReducer,
    forgotpasswordReducer, 
    resetpasswordReducer, 
    userGoogleReducer, 
    userFacebookReducer,
} from './reducers/userReducers';
import { 
    questionDetailsReducer, 
    questionListReducer,
    answerSaveReducer, 
    questionSaveReducers, answerListReducer 
} from './reducers/questionReducers';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
    userSignin: {userInfo}
};

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userSignup:userSignupReducer,
    forgetPassword:forgotpasswordReducer,
    resetPassword:resetpasswordReducer,
    googleLogin:userGoogleReducer,
    facebookLogin:userFacebookReducer,
    questionList:questionListReducer,
    questionDetails:questionDetailsReducer,
    answerSave:answerSaveReducer,
    questionSave:questionSaveReducers,
    answerList:answerListReducer
})

const store = createStore(
    reducer, 
    initialState , 
    composeWithDevTools(applyMiddleware(thunk))
    );
export default store;