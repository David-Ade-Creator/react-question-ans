import { Button, Grid, LinearProgress, Paper, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../actions/userActions';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

export default function Forgotpassword() {
    const [email,setEmail] = useState('');

    const forgetPassword = useSelector(state=>state.forgetPassword);
    const {loading,error, message} = forgetPassword;


    const dispatch = useDispatch();
    useEffect(()=>{
        if(message){
            toast.error('Email sent to reset password')
        }
        if(error){
            toast.error('Unable to sent Email')
        }
    },[message,error])
 
    const handleSubmit = (e) => {
        e.preventDefault()
        if(email){
            dispatch(forgotPassword(email))
        } else {
            toast.error('Field cannot be empty')
        }
    }

    return (
        <div className="Register">
            <Grid container justify="center">
            <ToastContainer/>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Paper elevation={0} style={{padding:'15px'}}>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h4>Forgot password</h4>
                            </div>
                            {loading && <div><LinearProgress /></div>}
                            {message && <div><Alert severity="error">Email has been sent to reset your password</Alert></div>}
                           
                            <div>
                            <TextField
                               id="outlined-helperText"
                               label="Email"
                               variant="outlined"
                               fullWidth
                               onChange={(e)=>setEmail(e.target.value)}
                             />
                            </div>

                          <div className="registerbtn">
                            <span><p><Link to="/login">Back to Login</Link></p></span>
                                <Button type="submit" variant="contained" color="primary">
                                    Reset
                                </Button>
                            </div>

                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}