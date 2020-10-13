import { Avatar } from '@material-ui/core'
import React from 'react'

export default function Answermap({answer}) {
    return (
        <div style={{padding:'15px'}}>
                            <div style={{display:'flex',alignItems:'center',cursor:'pointer',marginBottom:'10px'}}>
                                  <Avatar style={{width:'35px',height:'35px',marginRight:'5px'}}>{answer.writer.firstname.substring(0,1)}</Avatar>
                                  <span>
                                  <h4>{answer.writer.firstname +' '}{answer.writer.lastname}</h4>
                                  <p>
                                  {answer.createdAt.substring(0,10)}
                                </p>
                                </span>
                            </div>
                            <div>
                                <p>
                                    {answer.answer}
                                </p>
                            </div>
                            {
                                answer.image && 
                            <div style={{marginTop:'5px'}}>
                                <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&w=1000&q=80" alt="loading..." width="100%"/>
                            </div>
                            }
                            </div>
    )
}
