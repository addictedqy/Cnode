import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import querystring from 'querystring';

// 渲染网页
import { fetchTopicList } from './TopicListReducer.js';

// 计算时间公式
import timeFlies from '../../utils/dateformat.js';

class TopicList extends React.Component {
  // 挂载到页面执行
  componentDidMount() {
    this.props.fetchTopicList(this.renderPage());
  }

  // props 改变时执行
  componentWillReceiveProps(nextProps) {
    const { search } = this.props;
    const currentSearch = this.props.search;
    const nextSearch = nextProps.search;
    if (currentSearch !== nextSearch) {
      this.props.fetchTopicList(querystring.parse(nextSearch.slice(1)));
    }
  }
  // 从 querystring 获取相关信息，并解析。
  // 获取页面数跟标签信息
  renderPage() {
    const { search } = this.props;
    const obj = querystring.parse(this.props.search.slice(1))
    let result = {
      page: 1,
      tab: 'all',
    }
    if (obj.page !== undefined) {
      result.page = parseInt(obj.page);
    }
    if (obj.tab !== undefined) {
      result.tab = obj.tab;
    }
    return result;
  }

  goodAndTop(item) {
    if (item.top === true) {
      return <span className="topic__label">顶</span>
    }
  }

  renderTopicList(list) {
    return list.map((item, i) => {
      return (
        <Link to={"/content/" + item.id} className="topic__warpper" key={item.id}>
          <div className="topic__avater">
            <img src={item.author.avatar_url} alt=""/>
          </div>
          <div className="topic__content">
            <div className="topic__author">
              <span>{item.author.loginname}</span>
              {this.goodAndTop(item)}
            </div>
            <div className="topic__title">
              {item.title}
            </div>
            <div className="topic__bottom">
              <span className="topic__info">
                <span>分享</span>
                <span>{timeFlies(item.last_reply_at)}</span>
              </span>
              <span className="topic__reply">
                <i className="iconfont icon-msg"></i>
                <span>{item.reply_count}</span>
              </span>
            </div>
          </div>
        </Link>
      )
    })
  }

  render() {
    console.log(this.props)
    const paginationInfo = this.renderPage();
    // 得到上一页页码
    const prev = paginationInfo.page === 1 ? 1 : paginationInfo.page - 1;
    // 得到下一页页码
    const next = paginationInfo.page + 1;
    return (
      <div className="content container">
        <div className="topicList__wrapper">
          {this.renderTopicList(this.props.topicList)}
          <div className="pagination__warpper">
            <ul>
              <li><Link to={'/?page=' + prev + '&tab=' + paginationInfo.tab}><i className="iconfont icon-left"></i>上一页</Link></li>
              <li><span>{paginationInfo.page}</span></li>
              <li><Link to={'/?page=' + next + '&tab=' + paginationInfo.tab}>下一页<i className="iconfont icon-rigth"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    topicList: state.topicList.list,
  }),
  dispatch => ({
    fetchTopicList: bindActionCreators(fetchTopicList, dispatch),
  })
)(TopicList)