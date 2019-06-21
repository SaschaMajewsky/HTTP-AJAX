import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WithRouter from './App';
import {BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
<Router>
<WithRouter />
</Router>,
document.getElementById('root'));
