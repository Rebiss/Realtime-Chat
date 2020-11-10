import React from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";

import {Join} from './Join/Join.jsx';
import {Chat} from './Chat/Chat.jsx';


export const App = () => {
    return (
        <Router>
            <Route exact path='/' component={Join} />
            <Route path='/chat' component={Chat} />
        </Router> 
    )
}

