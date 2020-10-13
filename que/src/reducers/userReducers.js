const { 
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNIN_FAIL, 
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS, 
    USER_REGISTER_FAIL, 
    USER_FORGOT_REQUEST,
    USER_FORGOT_SUCCESS,
    USER_FORGOT_FAIL, 
    USER_RESET_REQUEST,
    USER_RESET_SUCCESS,
    USER_RESET_FAIL,
    USER_GOOGLE_REQUEST,
    USER_GOOGLE_SUCCESS,
    USER_GOOGLE_FAIL
} = require("../constants/userConstants")

function userSigninReducer(state={}, action){
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading:true};
        case USER_SIGNIN_SUCCESS:
            return {loading: false, userInfo: action.payload, success:true};
        case USER_SIGNIN_FAIL:
            return {loading:false, error: action.payload};
            default: 
            return state;
    }
}

function userGoogleReducer(state={}, action){
    switch(action.type){
        case USER_GOOGLE_REQUEST:
            return {googleloading:true};
        case USER_GOOGLE_SUCCESS:
            return {
                googleloading: false,
                googleUserinfo: action.payload,
                googlesuccess: true
            };
        case USER_GOOGLE_FAIL:
            return {googleloading:false, error: action.payload , googlesuccess: false};
            default: 
            return state;
    }
}


function userFacebookReducer(state={}, action){
    switch(action.type){
        case USER_GOOGLE_REQUEST:
            return {loading:true};
        case USER_GOOGLE_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                success:true
            };
        case USER_GOOGLE_FAIL:
            return {loading:false, error: action.payload};
            default: 
            return state;
    }
}


function forgotpasswordReducer(state={}, action){
    switch(action.type){
        case USER_FORGOT_REQUEST:
            return {loading:true};
        case USER_FORGOT_SUCCESS:
            return {loading: false, message: action.payload,success:true};
        case USER_FORGOT_FAIL:
            return {loading:false, error: action.payload, success:false};
            default: 
            return state;
    }
}

function resetpasswordReducer(state={}, action){
    switch(action.type){
        case USER_RESET_REQUEST:
            return {loading:true};
        case USER_RESET_SUCCESS:
            return {loading: false, message: action.payload};
        case USER_RESET_FAIL:
            return {loading:false, error: action.payload};
            default: 
            return state;
    }
}

function userSignupReducer(state={}, action){
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading:true};
        case USER_REGISTER_SUCCESS:
            return {loading:false, userInfo: action.payload, success:true};
        case USER_REGISTER_FAIL:
            return {loading:false, error: action.payload,success:false};

        default:
            return state;
    }
}



export {
    userSigninReducer,
    userSignupReducer,
    forgotpasswordReducer,
    resetpasswordReducer,
    userGoogleReducer,
    userFacebookReducer
};