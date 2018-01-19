import { combineReducers } from 'redux';
import { topicListReducer } from '../components/TopicList/TopicListReducer.js';
import { articleListReducer } from '../components/Article/ArticleReducer.js';
import { sidebarReducer } from '../components/Header/HeaderReducer.js';

const reducer = combineReducers({
  topicList: topicListReducer, // 文章列表
  articleList: articleListReducer, // 文章详情
  isShowSideBar: sidebarReducer,
})

export default reducer