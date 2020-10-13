import { Button, Grid, LinearProgress, Paper, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../actions/userActions';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

export default function Register(props) {
  const [firstname,setFirstName]=useState('');
  const [lastname,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password1,setPassword1]=useState('');
  const [password2,setPassword2]=useState('');

  const userSignup = useSelector(state=>state.userSignup);
  const {loading,userInfo, error} = userSignup;
  const dispatch = useDispatch();

  useEffect(() => {
    if(userInfo){
        props.history.push('/login')
    }
},[userInfo,props.history])

  const submitHandler = (e) => {
    e.preventDefault();
    if(firstname && lastname && email && password1) {
      if (password1 === password2){
        dispatch(signup(firstname,lastname,email,password1));
      } else {
        toast.error('Passwords don\'t match')
      }
    } else {
      toast.error('Please fill all fields')
    }
  };

    return (
        <div className="Register">
            <ToastContainer/>
            <Grid container justify="center">
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Paper elevation={0} style={{padding:'15px'}}>
                        <form onSubmit={submitHandler}>
                            <div>
                                <h4>Create a new account</h4>
                            </div>
                            {loading && <div><LinearProgress /></div>}
                             {error && <div><Alert severity="error">{error}</Alert></div>}
                            <div className="Register__name">

                            <TextField
                               id="outlined-helperText"
                               label="Firstname"
                               variant="outlined"
                               width="45%"
                               onChange={(e)=>setFirstName(e.target.value)}
                             />
                            
                            <TextField
                               id="outlined-helperText"
                               label="Lastname"
                               variant="outlined"
                               width="45%"
                               onChange={(e)=>setLastName(e.target.value)}
                             />

                            </div>

                            <div>
                            <TextField
                               id="outlined-helperText"
                               label="Email"
                               variant="outlined"
                               fullWidth
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
                               onChange={(e)=>setPassword1(e.target.value)}
                             />
                            </div>

                            <div>
                            <TextField
                               id="outlined-helperText"
                               label="Confirm Password"
                               variant="outlined"
                               fullWidth
                               type="password"
                               onChange={(e)=>setPassword2(e.target.value)}
                             />
                            </div>

                            <div className="registerbtn">
                            <span><p>Already have an account? <strong><Link to="/login">Login</Link></strong></p></span>
                                <Button type="submit" variant="contained" color="primary" >
                                    Signup
                                </Button>
                            </div>

                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}