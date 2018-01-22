import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import querystring from 'querystring';

// 侧边栏管理
import { sidebarOpen, sidebarClose } from './HeaderReducer.js';

// 标签分页
import { fetchTopicList } from '../TopicList/TopicListReducer.js';
// logo图片
const logo = require('./images/logo.svg');

class Header extends React.Component {
  // 开启侧边栏
  handleSidebarOpen(e) {
    this.props.handleClickOpen()
    e.stopPropagation();
  }

  // 关闭侧边栏
  handleSidebarClose(e) {
    this.props.handleClickClose()
    e.stopPropagation();
  }

  render() {
    return (
      <div className="header">
      {/*移动端侧边栏*/}
        <nav className={this.props.isShowSideBar ? "sidebar__wrapper sidebar__wrapper-open" : "sidebar__wrapper"}>
          <div className="sidebar__close">
            <span onClick={(e) => this.handleSidebarClose(e)}>X</span>
          </div>
          <div className="nav__warpper">
            <Link onClick={(e) => this.handleSidebarClose(e)} className={this.props.search === '?page=1&tab=all' ? "sidebar__item--active" : ""} to={'/?page=1&tab=all'}>全部</Link>
            <Link onClick={(e) => this.handleSidebarClose(e)} className={this.props.search === '?page=1&tab=good' ? "sidebar__item--active" : ""} to={'/?page=1&tab=good'}>精华</Link>
            <Link onClick={(e) => this.handleSidebarClose(e)} className={this.props.search === '?page=1&tab=share' ? "sidebar__item--active" : ""} to={'/?page=1&tab=share'}>分享</Link>
            <Link onClick={(e) => this.handleSidebarClose(e)} className={this.props.search === '?page=1&tab=ask' ? "sidebar__item--active" : ""} to={'/?page=1&tab=ask'}>问答</Link>
            <Link onClick={(e) => this.handleSidebarClose(e)} className={this.props.search === '?page=1&tab=job' ? "sidebar__item--active" : ""} to={'/?page=1&tab=job'}>招聘</Link>
          </div>
        </nav>

        {/*PC端样式*/}
        <header>
          <div className="navigation__wrapper">
            <div className="navigation__header container">
              <i className="iconfont icon-menu" onClick={(e) => this.handleSidebarOpen(e)}></i>
              <a className="logo__warapper" href=""><img src={logo} alt="cnode"/></a>
              <span className="navigation__item">
                <Link className={this.props.search === '?page=1&tab=all' ? "navgation__items--active" : ""} to={'/?page=1&tab=all'}>全部</Link>
                <Link className={this.props.search === '?page=1&tab=good' ? "navgation__items--active" : ""} to={'/?page=1&tab=good'}>精华</Link>
                <Link className={this.props.search === '?page=1&tab=share' ? "navgation__items--active" : ""} to={'/?page=1&tab=share'}>分享</Link>
                <Link className={this.props.search === '?page=1&tab=ask' ? "navgation__items--active" : ""} to={'/?page=1&tab=ask'}>问答</Link>
                <Link className={this.props.search === '?page=1&tab=job' ? "navgation__items--active" : ""} to={'/?page=1&tab=job'}>招聘</Link>
              </span>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    isShowSideBar: state.isShowSideBar,
    tabs: state.topicList.tabs,
  }),
  dispatch => ({
    handleClickOpen: bindActionCreators(sidebarOpen, dispatch),
    handleClickClose: bindActionCreators(sidebarClose, dispatch),
  }),
)(Header)