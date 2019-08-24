import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './containers/Login/Login';
import Search from './containers/Search/Search';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/login" component={Login} />
                <Route path="/search" component={Search} />
            </div>
        </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));
