import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Chat} from './Chat/Chat.jsx';
import {Join} from './Join/Join.jsx';

export const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}