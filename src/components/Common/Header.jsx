import React from 'react';

// logo图片
const logo = require('./images/logo.svg');
const userAvater = require('./images/user_avater.png');

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
        {/* 主题列表 */}
        <div className="content container">
          <div className="topicList__wrapper">
            <a className="topic__warpper" href="">
              <div className="topic__avater">
                <img src={userAvater} alt=""/>
              </div>
              <div className="topic__content">
                <div className="topic__author">
                  <span>ating25</span>
                  <span className="topic__label">顶</span>
                </div>
                <div className="topic__title">
                  首届蚂蚁金服体验科技大会
                </div>
                <div className="topic__bottom">
                  <span className="topic__info">
                    <span>分享</span>
                    <span>2天前</span>
                  </span>
                  <span className="topic__reply">
                    <i className="iconfont icon-msg"></i>
                    <span>666</span>
                  </span>
                </div>
              </div>
            </a>

            <a className="topic__warpper" href="">
              <div className="topic__avater">
                <img src={userAvater} alt=""/>
              </div>
              <div className="topic__content">
                <div className="topic__author">
                  <span>ating25</span>
                  <span className="topic__label">顶</span>
                </div>
                <div className="topic__title">
                  首届蚂蚁金服体验科技大会
                </div>
                <div className="topic__bottom">
                  <span className="topic__info">
                    <span>分享</span>
                    <span>2天前</span>
                  </span>
                  <span className="topic__reply">
                    <i className="iconfont icon-msg"></i>
                    <span>666</span>
                  </span>
                </div>
              </div>
            </a>
            <div className="pagination__warpper">
              <ul>
                <li><a href=""><i className="iconfont icon-left"></i>上一页</a></li>
                <li><span>1</span></li>
                <li><a href="">下一页<i className="iconfont icon-rigth"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header