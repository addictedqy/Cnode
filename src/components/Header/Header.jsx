import React from 'react';
import { Link } from 'react-router-dom';

// logo图片
const logo = require('./images/logo.svg');

class Header extends React.Component {
  render() {
    return (
      <div className="header">
      {/*移动端侧边栏*/}
        <nav className="sidebar__wrapper">
          <div className="sidebar__close">
            <span>X</span>
          </div>
          <div className="nav__warpper">
            <a className="sidebar__item--active" href="">全部</a>
            <a href="">精华</a>
            <a href="">分享</a>
            <a href="">问答</a>
            <a href="">招聘</a>
          </div>
        </nav>

        {/*PC端样式*/}
        <header>
          <div className="navigation__wrapper">
            <div className="navigation__header container">
              <i className="iconfont icon-menu"></i>
              <a className="logo__warapper" href=""><img src={logo} alt="cnode"/></a>
              <span className="navigation__item">
                <a className="navgation__items--active" href="">全部</a>
                <a href="">精华</a>
                <a href="">分享</a>
                <a href="">问答</a>
                <a href="">招聘</a>
              </span>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header