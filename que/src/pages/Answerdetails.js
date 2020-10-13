import { Container, Divider, Grid, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAnswers, questiondetails } from '../actions/questionActions';
import Answerbox from '../components/Answerbox';
import Answermap from '../components/Answermap';
import './Answerdetails.css';

export default function Answerdetails(props) {
    const questionDetails = useSelector((state => state.questionDetails));
    const {questions, loading, error} = questionDetails;

    const answerList = useSelector((state => state.answerList));
    const {loading:loadanswer,answers,error:answererror} = answerList;
    const dispatch = useDispatch();

    const questionId = props.match.params.id;
    
    
    useEffect(()=>{
        dispatch(questiondetails(props.match.params.id))
        dispatch(listAnswers(props.match.params.id))
    },[props.match.params.id,dispatch])


    return loading ? <div>Loading...</div> : error ? <div>Error fetching answers</div> :(
        <div className="Homepage">
        <Container maxWidth="md" style={{marginTop:'9vh'}}>
            <Grid container justify="center" spacing={2}>
                <Grid item lg={8} md={10} sm={10} xs={12}>
                    <Paper style={{padding:'10px'}} elevation={0}>
                      <div>
                        <h2 style={{padding:'8px',cursor:'pointer'}}>{questions.question}</h2>
                         <p style={{padding:'8px',cursor:'pointer'}}>{questions.link}</p>
                      </div>
                      <Divider/>
                       <Answerbox questionId={questionId}/>
                      <Divider/>
                      { loadanswer ? <div>loading....</div> : answererror ? <div>Error loading answers</div> :
                        answers.map(answer => (
                            <Answermap key={answer._id} answer={answer}/>
                          ))
                      }
                    </Paper>
                 </Grid>
            </Grid>
        </Container>
     </div>
    )
}
