import { Avatar, Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import './Homepage.css';

export default function Homepage() {
    return (
        <div className="Homepage">
           <Container maxWidth="md" style={{marginTop:'9vh'}}>
               <Grid container justify="center" spacing={2}>
                   <Grid item lg={8}>
                       <Paper style={{padding:'10px'}} elevation={0}>
                         <div style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
                             <Avatar style={{width:'25px',height:'25px',marginRight:'5px'}}/>
                             <p>James Brown</p>
                         </div>
                         <div>
                             <h4 style={{padding:'8px',cursor:'pointer'}}>What is your question that you wanna ask</h4>
                         </div>
                         <div>
                             <p>gwnf,,,,,,,,,,,,,,,,,,,,ifffffffffffffffffffffffffj jffffffffffffffff fjhhhhhh jnjinrfnjiwnvijhj  hjrwngjn
                                 hcnrwjbnjk hbvwhrjvhjbhj  rwgvijbi bbrwbvuh 8b rwubuvfb  irhu9g54j  9bhirtenj n9wh4uhughfudijvj buh487rhg8hbf  buyrbvr rn jhbrybr
                                 vbbv hrbbu vuyrbh df bubrv  8 5ijrg598jru9v f fuhvfunvj vjnfivniuf  jnvn iunruin vnfjivn  uijruj
                                 vbbv hrbbu vuyrbh df bubrv  8 5ijrg598jru9v f fuhvfunvj vjnfivniuf  jnvn iunruin vnfjivn  uijruj
                                 vbbv hrbbu vuyrbh df bubrv  8 5ijrg598jru9v f fuhvfunvj vjnfivniuf  jnvn iunruin vnfjivn  uijruj
                                 vbbv hrbbu vuyrbh df bubrv  8 5ijrg598jru9v f fuhvfunvj vjnfivniuf  jnvn iunruin vnfjivn  uijruj
                             </p>
                         </div>
                         <div style={{marginTop:'5px'}}>
                             <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&w=1000&q=80" alt="loading..." width="100%"/>
                         </div>
                       </Paper>
                    </Grid>

                    <Grid item lg={8}>
                       <Paper style={{padding:'10px'}} elevation={0}>
                         <div style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
                             <Avatar style={{width:'25px',height:'25px',marginRight:'5px'}}/>
                             <p>James Brown</p>
                         </div>
                         <div>
                             <h4 style={{padding:'8px',cursor:'pointer'}}>What is your question that you wanna ask</h4>
                         </div>
                         <div>
                             <p>gwnf,,,,,,,,,,,,,,,,,,,,ifffffffffffffffffffffffffj jffffffffffffffff fjhhhhhh jnjinrfnjiwnvijhj  hjrwngjn
                                 hcnrwjbnjk hbvwhrjvhjbhj  rwgvijbi bbrwbvuh 8b rwubuvfb  irhu9g54j  9bhirtenj n9wh4uhughfudijvj buh487rhg8hbf  buyrbvr rn jhbrybr
                                 vbbv hrbbu vuyrbh df bubrv  8 5ijrg598jru9v f fuhvfunvj vjnfivniuf  jnvn iunruin vnfjivn  uijruj
                                 vbbv hrbbu vuyrbh df bubrv  8 5ijrg598jru9v f fuhvfunvj vjnfivniuf  jnvn iunruin vnfjivn  uijruj
                                 vbbv hrbbu vuyrbh df bubrv  8 5ijrg598jru9v f fuhvfunvj vjnfivniuf  jnvn iunruin vnfjivn  uijruj
                                 vbbv hrbbu vuyrbh df bubrv  8 5ijrg598jru9v f fuhvfunvj vjnfivniuf  jnvn iunruin vnfjivn  uijruj
                             </p>
                         </div>
                         <div style={{marginTop:'5px'}}>
                             <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&w=1000&q=80" alt="loading..." width="100%"/>
                         </div>
                       </Paper>
                    </Grid>
               </Grid>
           </Container>
        </div>
    )
}
