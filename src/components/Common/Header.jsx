import React from 'react';

// logo图片
const logo = require('./logo.svg');

class Header extends React.Component {
  render() {
    return (
      <div className="header">
      {/*移动端样式*/}
        <nav className="sidebar__wrapper">
          <div className="sidebar__close">
            <span>X</span>
          </div>
          <span>
            <a href="">全部</a>
            <a href="">精华</a>
            <a href="">分享</a>
            <a href="">问答</a>
            <a href="">招聘</a>
          </span>
        </nav>

        {/*PC端样式*/}}
        <header>
          <div className="navigation__wrapper">
            <div className="navigation__header">
              <i>=</i>
              <a href=""><img src={logo} alt="cnode"/></a>
              <span>
                <a href="">全部</a>
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