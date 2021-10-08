import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import Login from './components/login'
import Index from './components/index'
import Charge from './components/charge'
import History from './components/history'
import Use from './components/use'
import Result from './components/chargeResult'
import Payment from './components/payment'
import UseResult from './components/useResult'
import CreateAccount from './components/createAccount'

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/createAccount" component={ CreateAccount } />
        <Route exact path="/index" component={ Index } />
        <Route exact path="/index/charge" component={ Charge } />
        <Route exact path="/index/charge/result" component={ Result} />
        <Route exact path="/index/use" component={ Use } />
        <Route exact path="/index/history" component={ History } />
        <Route exact path="/index/use/payment" component={ Payment } />
        <Route exact path="/index/use/payment/result" component={ UseResult } />
      </Switch>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

