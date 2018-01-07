// 所需工具
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// views
import Header from './components/Common/Header.jsx';

// 管理数据流 store
import store from './redux/configStore';

// 总容器
const root = document.getElementById('root');

// 样式
require('./styles/App.scss');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

ReactDom.render (
    <App />,
    root
)