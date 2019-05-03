import { Switch, Route } from 'react-router-dom';

import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';

import React from 'react'


const createRoutes = () => {
    return (
    <div>
        <Switch>
            <Route path="/" exact component={Auth} ></Route>
            <Route path="/dashboard" component={Dashboard} ></Route>
            <Route path="/post/:postid" component={Post} ></Route>
            <Route path="/new" component={Form} ></Route>
        </Switch>
    </div>
)
}
export default createRoutes