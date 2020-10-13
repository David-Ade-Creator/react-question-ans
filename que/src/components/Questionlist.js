import { Avatar, Divider, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';

export default function Questionlist({question}) {
    return (
        <Grid item lg={12} md={12} sm={12} xl={12}>
           <Paper className="Answer__paper" elevation={0}>
             <div className="Answer__profile">
                 <Avatar className="profile__avatar">{question.whoasked.firstname.substring(0,1)}</Avatar>
           <p>{question.whoasked.firstname +' '}{question.whoasked.lastname}</p>
             </div>
             <div className="Answer__question">
               <Link to={"/answer/" + question._id} className="answer__link">
               <h4>{question.question}</h4>
               </Link>
             </div>
             <div className="Answer__question">
                 
                 <Link to={"/answer/" + question._id} className="answer__link">
                 <span>
                   <CreateIcon style={{color:'#3d4894'}}/> answer
                 </span>
                   </Link>
            
             </div>
             <Divider/>
           </Paper>
        </Grid>
    )
}
