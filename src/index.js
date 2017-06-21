import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './containers/App'
import ChangeGoal from './containers/ChangeGoal';
import {
    Switch,
    BrowserRouter,
    Route,
    Link, 
    HashRouter
} from 'react-router-dom'

const store = createStore(
    reducer,
    window.devToolsExtension && window.devToolsExtension()
)

render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/changegoal" component={ChangeGoal} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)