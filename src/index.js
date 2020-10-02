import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/index'

ReactDOM.render(
    <React.Fragment>
        <Provider store={createStore(reducers)}>
        <App/>
        </Provider>
        
    </React.Fragment>,document.getElementById('root')
)