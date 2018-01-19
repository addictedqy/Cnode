// 所需工具
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// views
import Home from './views/Home/Home.jsx';
import Content from './views/Content/Content.jsx';

// 管理数据流 store
import store from './redux/configStore.js'
// 总容器
const root = document.getElementById('root');

// 样式
require('./styles/App.scss');

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/content/:id" component={Content} />
          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    )
  }
}

ReactDom.render (
  <Provider store={store}>
    <App />
  </Provider>,
  root
)