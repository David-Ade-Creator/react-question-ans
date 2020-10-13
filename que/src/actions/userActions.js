import Axios from 'axios';
import Cookie from 'js-cookie';
import { 
  USER_SIGNIN_REQUEST, 
  USER_SIGNIN_SUCCESS, 
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_FORGOT_REQUEST,
  USER_FORGOT_SUCCESS,
  USER_FORGOT_FAIL ,
  USER_RESET_REQUEST,
  USER_RESET_SUCCESS,
  USER_RESET_FAIL,
  USER_LOGOUT, 
  USER_GOOGLE_REQUEST,
  USER_GOOGLE_SUCCESS, 
  USER_GOOGLE_FAIL, 
  USER_FACEBOOK_REQUEST, 
  USER_FACEBOOK_SUCCESS, 
  USER_FACEBOOK_FAIL
 } from '../constants/userConstants';

 const signup = (firstname,lastname, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: {firstname,lastname, email, password} });
  try {
    const { data } = await Axios.post("/api/users/signup", { firstname,lastname, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data.errors });
  }
}


const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
      const { data } = await Axios.post("/api/users/signin", { email, password });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        console.log("CATCH = ", error.response);
      dispatch({ type: USER_SIGNIN_FAIL, payload:error.response.data.errors });
    }
  }


  
  const sendGoogleToken = (tokenId) => async (dispatch) => {
    dispatch({ type: USER_GOOGLE_REQUEST, payload: { tokenId } });
    try {
      const { data } = await Axios.post("/api/users/googlelogin", { tokenId });
      dispatch({ type: USER_GOOGLE_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_GOOGLE_FAIL, payload: error.message });
    }
  }

  const sendFacebookToken = (userID, accessToken) => async (dispatch) => {
    dispatch({ type: USER_FACEBOOK_REQUEST, payload: { userID, accessToken } });
    try {
      const { data } = await Axios.post("/api/users/facebooklogin", { userID, accessToken });
      dispatch({ type: USER_FACEBOOK_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_FACEBOOK_FAIL, payload: error.message });
    }
  }


  const forgotPassword = (email) => async (dispatch)=> {
    dispatch ({type: USER_FORGOT_REQUEST, payload: email});
    try {
      const {data} = Axios.put('/api/users/forgetPassword', {email})
      dispatch ({type: USER_FORGOT_SUCCESS, payload:data });
    } catch (error) {
      dispatch ({type: USER_FORGOT_FAIL,payload:error.response.data.errors});
    }
  }

  const resetNewPassword = (resetPasswordLink,newPassword) => async (dispatch)=> {
    dispatch ({type: USER_RESET_REQUEST, payload: {resetPasswordLink,newPassword}});
    try {
      const {data} = Axios.put('/api/users/resetPassword', {resetPasswordLink,newPassword})
      dispatch ({type: USER_RESET_SUCCESS, payload:data });
    } catch (error) {
      console.log(error.response);
      dispatch ({type: USER_RESET_FAIL,payload:error.response.data.errors});
    }
  }


  const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT })
  }


export {
  signin,
  signup,
  logout,
  sendFacebookToken,
  sendGoogleToken,
  forgotPassword,
  resetNewPassword
}