import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './containers/Login/Login';
import Search from './containers/Search/Search';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Route, BrowserRouter as Router } from 'react-router-dom';


const routing = (
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/search" component={Search} />
            </div>
        </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
