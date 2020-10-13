import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Container from '@material-ui/core/Container';
import { Avatar, Button, Grid, Hidden, Paper, TextField } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savequestion } from '../actions/questionActions';
import { toast } from 'react-toastify';

export default function Navbar() {
    const [questionbar,setQuestionbar] = useState(false);
    const [question, setQuestion] = useState("");
    const [link, setLink] = useState("");
    const [whoaskedId,setWhoaskedId] = useState("");
    const [phonetab,setPhonetab] = useState(false);

    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;

    const dispatch = useDispatch();

    useEffect(() => {
      if(userInfo){
        setWhoaskedId(userInfo.user._id)
      }
    },[userInfo])

    useEffect(()=>{
        const handleWindowClick = (event) =>{ 
            const nonclose = '.Question__paper *';
            if (!event.target.matches(nonclose)){
                setQuestionbar(false) 
            }
          }
          if(questionbar) {
            window.addEventListener('click', handleWindowClick);
          } else {
            window.removeEventListener('click', handleWindowClick)
          }
          return () => window.removeEventListener('click', handleWindowClick);
    },[questionbar,setQuestionbar])

    useEffect(()=>{
      const handleWindowClick = (event) =>{ 
          const nonclose = '.Question__humburgertab *';
          if (!event.target.matches(nonclose)){
              setPhonetab(false) 
          }
        }
        if(phonetab) {
          window.addEventListener('click', handleWindowClick);
        } else {
          window.removeEventListener('click', handleWindowClick)
        }
        return () => window.removeEventListener('click', handleWindowClick);
  },[phonetab,setPhonetab])

    const toggleQuestion = () => {
        setQuestionbar(!questionbar)
        setPhonetab(false)
    }

    const togglePhonetab = () => {
      setPhonetab(!phonetab)
    }

    const submitHandler = (e) =>{
      e.preventDefault();
      setQuestionbar(!questionbar)
      if(question){
        dispatch(savequestion({question,link,whoaskedId}));
        setQuestion('');
        setLink('')
      } else {
        toast.error('Question field cannot be empty')
      }
    }

    return (
        <div  className="Navbar">
        <Container maxWidth="md">
          <Grid container justify="center" spacing={2}>
            <Hidden smDown>
      <Grid item className="Navbar__name">
        <h3><Link to="/">Q&A</Link></h3>
      </Grid>

      <Grid item>
          <div>
        <Grid container spacing={3}>

        <Grid item className="Navbar__link">
          <Link to="/" className="Navbar__link">
          <h4>Home</h4>
          </Link>
        </Grid>
        {/*
        <Grid item className="Navbar__link">
        <Link to="/answerlist" className="Navbar__link">
          <h4>Answer</h4>
          </Link>
        </Grid> */}
        <Grid item className="Navbar__link">
          <h4>Profile</h4>
        </Grid>
        <Grid item>
          <form>
           <input className="Navbar__input" placeholder="Search Q&A"/>
          </form>
        </Grid>

        </Grid>
        </div>
      </Grid>
      

      <Grid item>
        <Grid container spacing={3} className="Navbar__menu">
    <Grid item><Avatar className="Navabar__avatar">{userInfo ? userInfo.user.firstname.substring(0,1) : '?'}</Avatar></Grid>
        <Grid item><Button variant="contained" color="primary" className="Navbar__btn" onClick={toggleQuestion}>Ask a question</Button></Grid>
        </Grid>
      </Grid>
      </Hidden>
      <Hidden mdUp>
        
          <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span><h3><Link to="/">Q&A</Link></h3></span>
              <Button onClick={togglePhonetab}><MenuIcon style={{padding:'0',height:'100%',color:'blue',fontSize:'55px'}}/></Button>
            
          </div>
       
      </Hidden>
      </Grid>
      </Container>


    {questionbar &&
      <div className="Question">
          <div className="Question__tab">
              <Grid container className="Question__con">
                  <Grid item className="Question__content" lg={4} md={8} sm={8} xs={12}>
                      <Paper className="Question__paper" id="questiontab">
                          <form onSubmit={submitHandler}>
                          <div className="profile">
                              <Avatar style={{width:'25px',height:'25px',marginRight:'10px'}}>{userInfo ? userInfo.user.firstname.substring(0,1) : '?'}</Avatar> 
                              <div><p>{userInfo.user.firstname +' '}{userInfo.user.lastname}</p></div>
                          </div>
                          <div>
                          <TextField id="standard-basic" onChange={(e)=>setQuestion(e.target.value)} label="Ask your question on Q&A" style={{width:'100%'}}/>
                          </div>
                          <div>
                              <input onChange={(e)=>setLink(e.target.value)} placeholder="Optional: include a link that gives context"/>
                          </div>
                          <div className="question__btn">
                              <Button onClick={toggleQuestion}>Cancel</Button>
                              <Button variant="contained" type="submit" color="primary">Ask Question</Button>
                          </div>
                          </form>
                      </Paper>
                  </Grid>
              </Grid>
          </div>
      </div> }
      { phonetab &&
      <div className="Question">
          <div className="Question__tab">
              <Grid container className="Question__con">
                  <Grid item className="Question__content" lg={3} md={4} sm={6} xs={10}>
                      <Paper className="Question__humburgertab" id="questiontab">
                      <Button variant="contained" color="primary" className="tab__btn" onClick={toggleQuestion}>Ask a question</Button>
                          <p onClick={togglePhonetab} className="tablink" style={{marginTop:'10px'}}><Link to="/">Home</Link></p>
                          <p onClick={togglePhonetab} className="tablink">Profile</p>
                          <Button onClick={togglePhonetab} className="tablink">Search</Button>
                      </Paper>
                  </Grid>
              </Grid>
          </div>
      </div>
      }


      </div>
    )
}
