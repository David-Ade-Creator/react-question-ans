import {Route, Switch} from 'react-router-dom'
import React from 'react';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Answer from '../pages/Answer';
import Answerdetails from '../pages/Answerdetails';
import Forgotpassword from '../pages/Forgotpassword';
import Resetpassword from '../pages/Resetpassword';
import { useSelector } from 'react-redux';

export default function Router() {
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;

    return (
        <Switch>
            <Route path="/register" component={!userInfo ? Register:Answer} />
            <Route path="/login" component={!userInfo ? Login:Answer} />
            <Route path="/" component={userInfo ? Answer:Login} exact/>
            <Route path="/answer/:id" component={userInfo ? Answerdetails:Login} />
            <Route path="/forgotpassword" component={!userInfo ? Forgotpassword:Answer} />
            <Route path="/users/password/reset/:token" component={!userInfo ? Resetpassword:Answer} />
        </Switch>
    )
}
