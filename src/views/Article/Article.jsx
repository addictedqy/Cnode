import React from 'react';

const userAvatar = require('../../components/Header/images/user_avater.png');

class Article extends React.Component {
  render() {
    return (
      <div className="article__container container">
        <div className="article__header">
          <div className="article__avatar">
            <img src={userAvatar} alt=""/>
            <div className="article__userName">Addicted</div>
          </div>
          <div className="article__titile-wrapper">
            <div className="article__title">首届蚂蚁金服体验科技大会</div>
            <div className="article__info">
              <span>25 天前</span>
              <span className="article__data">
                <span>
                  <i className="iconfont icon-eyes"></i>
                  <span>6115</span>
                </span>
                <span>
                  <i className="iconfont icon-msg"></i>
                  <span>34</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="article__wrapper">
          {/* 渲染整块内容 */}
        </div>
        <div className="article__msg">
          <h3>评论</h3>
          <div className="article__comment">
            <div className="article__comment-avatar">
              <img src={userAvatar} alt=""/>
              <div>Addicted</div>
            </div>
            <div className="article__comment-content">
              <div className="markdown-text">
                <p>欢迎大家到时候来面基!</p>
              </div>
              <div className="article__comment-day">
                25 天前
              </div>
            </div>
            <div className="article__floor">
              <span>1楼</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Article