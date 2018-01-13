import React from 'react';
import { Link } from 'react-router-dom';
// 图片
const userAvater = require('../../components/Header/images/user_avater.png');

class TopicList extends React.Component {
  render() {
    return (
      <div className="content container">
        <div className="topicList__wrapper">
          <Link to="/content" className="topic__warpper" href="">
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
          </Link>
          <div className="pagination__warpper">
            <ul>
              <li><a href=""><i className="iconfont icon-left"></i>上一页</a></li>
              <li><span>1</span></li>
              <li><a href="">下一页<i className="iconfont icon-rigth"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TopicList