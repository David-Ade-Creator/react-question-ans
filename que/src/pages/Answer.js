import React, { useEffect } from 'react';
import './Answer.css';
import { Container, Divider, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {listquestion} from '../actions/questionActions';
import StarsIcon from '@material-ui/icons/Stars';
import Questionlist from '../components/Questionlist';

export default function Answer() {

    const questionList = useSelector(state=>state.questionList);
    const {loading,questions, error} = questionList;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listquestion())
    },[dispatch])

    return loading ? <div>loading....</div> :
             error? <div>{error}</div> :
    (    <div className="Answer">
        <Container maxWidth="md" style={{marginTop:'9vh'}}>
            <Grid container justify="center" spacing={3} style={{marginTop:'80px'}}>
            <Grid item lg={8} md={10} sm={12} xs={12} className="answer__container">
            <Grid item  lg={12} md={12} sm={12} xl={12} className="answer__top">
              <StarsIcon className="staricon"/><p>Questions For You</p>
            </Grid>
            <Divider/>
            
           {questions.map(question => 
           <Questionlist key={question._id} question={question}/>
           ) }
           </Grid>

            </Grid>
        </Container>
     </div>
    )
}
