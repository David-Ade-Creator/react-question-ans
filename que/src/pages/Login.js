import { Button, Grid, LinearProgress, Paper, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { sendGoogleToken,signin } from '../actions/userActions';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

export default function Login(props) {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
  
    const userSignin = useSelector(state=>state.userSignin);
    const {loading,userInfo, error} = userSignin;

    const googleLogin = useSelector(state => state.googleLogin);
    const {googleloading,googleUserinfo,googlesuccess} = googleLogin;
    const dispatch = useDispatch();

    
    useEffect(() => {
        if(userInfo){
            props.history.push('/')
        }
    })

    const responseGoogle = (response) => {
        dispatch(sendGoogleToken(response.tokenId))
      }


    const submitHandler = (e) => {
        e.preventDefault();
        if(email && password) {
            dispatch(signin(email,password));
        } else {
          toast.error('Please fill all fields')
        }
      };
    return (
        <div className="Login">
            <ToastContainer/>
            <Grid container justify="center">
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Paper elevation={0} style={{padding:'15px'}}>
                        <form onSubmit={submitHandler}>
                            <div>
                                <h4>Login</h4>
                            </div>
                             {loading && <div><LinearProgress /></div>}
                             {googleloading && <div><LinearProgress /></div>}
                             {error && <div><Alert severity="error">{error}</Alert></div>}
                            <div>
                            <TextField
                               id="outlined-helperText"
                               label="Email"
                               variant="outlined"
                               fullWidth
                               type="email"
                               onChange={(e)=>setEmail(e.target.value)}
                             />
                            </div>
                            <div>
                            <TextField
                               id="outlined-helperText"
                               label="Password"
                               variant="outlined"
                               fullWidth
                               type="password"
                               onChange={(e)=>setPassword(e.target.value)}
                             />
                            </div>

                            <div className="loginbtn">
                                <span><p><Link to="/forgotpassword">Forgot password?</Link></p></span>
                                <Button type="submit" variant="contained" color="primary">
                                    Login
                                </Button>
                            </div>

                            <div>
                            <GoogleLogin
                  clientId={`962563750549-c0kla6kearj160dt1p0qs54f89slpfil.apps.googleusercontent.com`}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  render={renderProps => (
                    <Button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                     variant="contained" color="secondary" style={{width:'100%'}}>
                                    Continue with Google
                                </Button>
                  )}
                ></GoogleLogin>
                            </div>
                            {/*<div>
                                <Button variant="contained" color="primary" style={{width:'100%'}}>
                                    Continue with Facebook
                                </Button>
                            </div>*/}
                            <div>
                                <p>Sign up with <strong><Link to="/register">Email</Link></strong></p>
                            </div>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
