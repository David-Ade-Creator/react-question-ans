import { Avatar, Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion, listAnswers } from '../actions/questionActions';

export default function Answerbox(props) {
    const [questiontoggle,setQuestiontoggle] = useState(false);
    const [answer,setAnswer] = useState('');
    const [image,setImage] = useState('');

    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;

    const answerSave = useSelector(state=>state.answerSave);
    const {answer:answersubmited} = answerSave;

    const dispatch = useDispatch();

    const writer = userInfo.user._id;
    const questionId = props.questionId;

    useEffect(()=>{
        if(answersubmited){
            dispatch(listAnswers(questionId))
        }
    },[dispatch,questionId,answersubmited])

    const submitHandler = (e) => {
        e.preventDefault()
        setQuestiontoggle(!questiontoggle);
        dispatch(answerQuestion({questionId,answer,writer,image}));
    }

    const toggleAnswer = () => {
        setQuestiontoggle(!questiontoggle);
    }

    return (
        <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'30px'}}>
                          <Avatar>{userInfo.user.firstname.substring(0,1)}</Avatar>
                           <h4>{userInfo.user.firstname}, can you answer this question?</h4>
                          <p>people are searching for an answer to this question</p>
                          <Button onClick={toggleAnswer}  variant="contained" color="primary">answer</Button>
                      </Grid>
    {questiontoggle &&
        <Grid container justify="center">
                        <Grid item lg={10} md={12} sm={12} xs={12}>
                          <form onSubmit={submitHandler}>
                              <div>
                                  <textarea 
                                  onChange={(e)=>setAnswer(e.target.value)} 
                                  placeholder="Write your answer" 
                                  style={{width:'90%',height:'120px',padding:'20px',outlineWidth:'0',border:'1px solid #79a6f2'}}>    
                                  </textarea>
                              </div>
                              <div>
                                  <Button type="submit" variant="contained" color="primary">Submit</Button>
                              </div>
                          </form>
                        </Grid>
        </Grid>
    }
        </Grid>
    )
}
