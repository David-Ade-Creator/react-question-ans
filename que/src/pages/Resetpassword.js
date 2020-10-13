import { Button, Grid, LinearProgress, Paper, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetNewPassword } from '../actions/userActions';

export default function Resetpassword(props){
    const [newPassword,setPassword1]=useState('');
    const [password2,setPassword2]=useState('');
    const [resetPasswordLink,setToken]=useState('');

    const resetPassword = useSelector(state=>state.resetPassword);
    const {loading, message, error } = resetPassword;

    const dispatch = useDispatch();

    useEffect(()=>{
       let token = props.match.params.token;
       setToken(token);
       if(error){
           toast.error('Unable to save new password')
       }
    },[props.match.params.token,setToken,error])

    const submithandler = (e) =>{
        e.preventDefault();
        if (newPassword && password2){
        dispatch(resetNewPassword(resetPasswordLink,newPassword));
        } else {
          toast.error('Please fill all fields');
        }
      }


    return (
        <div className="Register">
            <ToastContainer />
            <Grid container justify="center">
                <Grid item lg={4} md={4} md={6} xs={12}>
                    <Paper elevation={0} style={{padding:'15px'}}>
                        {loading && <div><LinearProgress /></div>}
                        {message && <div>New password has been saved, please login to continue</div>}
                        <form onSubmit={submithandler}>
                            <div>
                                <h4>Reset Password</h4>
                            </div>

                            <div>
                            <TextField
                               id="outlined-helperText"
                               label="Password"
                               variant="outlined"
                               fullWidth
                               onChange={(e)=>setPassword1(e.target.value)}
                             />
                            </div>

                            <div>
                            <TextField
                               id="outlined-helperText"
                               label="Confirm Password"
                               variant="outlined"
                               fullWidth
                               onChange={(e)=>setPassword2(e.target.value)}
                             />
                            </div>

                            <div className="registerbtn">
                            <span><p><Link to="/login">Back to Login</Link></p></span>
                                <Button type="submit" variant="contained" color="primary">
                                    Reset password
                                </Button>
                            </div>

                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}