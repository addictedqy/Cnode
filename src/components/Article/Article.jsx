import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const userAvatar = require('../Header/images/user_avater.png');

// 渲染主题详情
import { fetchArticleList } from './ArticleReducer.js';
//加载图
import Loading from '../Loading/Loading.jsx';

// 计算时间公式
import timeFlies from '../../utils/dateformat.js';

class Article extends React.Component {
  componentDidMount() {
    this.props.fetchArticleList({id: this.props.id});
  }

  renderReplyMsg(list) {
    const { articleList } = this.props;
    return list.map((item, i) => {
      return (
        <div className="article__comment" key={i}>
          <div className="article__comment-avatar">
            <img src={item.author.avatar_url} alt={item.author.loginname}/>
            <div className="article__comment-username">{item.author.loginname}</div>
          </div>
          <div className="article__comment-content">
            <div className="article_reply-text" dangerouslySetInnerHTML={{__html: item.content}}>
              {/* 渲染留言  */}
            </div>
            <div className="article__comment-day">
              {timeFlies(item.create_at)}
            </div>
          </div>
          <div className="article__floor">
            <span>{i + 1}楼</span>
          </div>
        </div>
      )
    })
  }

  render() {
    const { loading } = this.props;
    const articleList = this.props.articleList;
    if (loading === 'LOADING') {
      return <Loading />
    } else {
      return (
        <div className="article__container container">
        <div className="article__header">
          <div className="article__avatar">
            <img src={articleList.author.avatar_url} alt=""/>
            <div className="article__userName">{articleList.author.loginname}</div>
          </div>
          <div className="article__titile-wrapper">
            <div className="article__title">{articleList.title}</div>
            <div className="article__info">
              <span>{timeFlies(articleList.create_at)}</span>
              <span className="article__data">
                <span>
                  <i className="iconfont icon-eyes"></i>
                  <span>{articleList.visit_count}</span>
                </span>
                <span>
                  <i className="iconfont icon-msg"></i>
                  <span>{articleList.reply_count}</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="article__wrapper">
          <div className="article__content" dangerouslySetInnerHTML={{__html: this.props.articleList.content}}>
            {/* 渲染整块主题详情内容 */}
          </div>
        </div>
        <div className="article__msg">
          <h3>评论</h3>
            {/* 渲染留言板样式 */}
            {this.renderReplyMsg(articleList.replies)}
        </div>
      </div>
      )
    }
  }
}

export default connect(
  state => ({
    articleList: state.articleList.title,
    loading: state.articleList.fetchState,
  }),
  dispatch => ({
    fetchArticleList: bindActionCreators(fetchArticleList, dispatch),
  })
)(Article)