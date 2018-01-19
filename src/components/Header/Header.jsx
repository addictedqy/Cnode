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
  handleSidebarOpen(e) {
    this.props.handleClickOpen()
    e.stopPropagation();
  }

  handleSidebarClose(e) {
    this.props.handleClickClose()
    e.stopPropagation();
  }

  render() {
    console.log(this.props.open)
    return (
      <div className="header">
      {/*移动端侧边栏*/}
        <nav className={this.props.open ? "sidebar__wrapper" : ""}>
          <div className="sidebar__close">
            <span onClick={(e) => this.handleSidebarClose(e)}>X</span>
          </div>
          <div className="nav__warpper">
            <Link className={this.props.search === 'all' ? "sidebar__item--active" : ""} to={'/?page=1&tab=all'}>全部</Link>
            <Link className={this.props.search === 'good' ? "sidebar__item--active" : ""} to={'/?page=1&tab=good'}>精华</Link>
            <Link className={this.props.search === 'share' ? "sidebar__item--active" : ""} to={'/?page=1&tab=share'}>分享</Link>
            <Link className={this.props.search === 'ask' ? "sidebar__item--active" : ""} to={'/?page=1&tab=ask'}>问答</Link>
            <Link className={this.props.search === 'job' ? "sidebar__item--active" : ""} to={'/?page=1&tab=job'}>招聘</Link>
          </div>
        </nav>

        {/*PC端样式*/}
        <header>
          <div className="navigation__wrapper">
            <div className="navigation__header container">
              <i className="iconfont icon-menu" onClick={(e) => this.handleSidebarOpen(e)}></i>
              <a className="logo__warapper" href=""><img src={logo} alt="cnode"/></a>
              <span className="navigation__item">
                <Link className={this.props.search === 'all' ? "navgation__items--active" : ""} to={'/?page=1&tab=all'}>全部</Link>
                <Link className={this.props.search === 'good' ? "navgation__items--active" : ""} to={'/?page=1&tab=good'}>精华</Link>
                <Link className={this.props.search === 'share' ? "navgation__items--active" : ""} to={'/?page=1&tab=share'}>分享</Link>
                <Link className={this.props.search === 'ask' ? "navgation__items--active" : ""} to={'/?page=1&tab=ask'}>问答</Link>
                <Link className={this.props.search === 'job' ? "navgation__items--active" : ""} to={'/?page=1&tab=job'}>招聘</Link>
              </span>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default connect(
  (state) => ({open: state.isShowSideBar}),
  dispatch => ({
    handleClickOpen: bindActionCreators(sidebarOpen, dispatch),
    handleClickClose: bindActionCreators(sidebarClose, dispatch),
  }),
)(Header)