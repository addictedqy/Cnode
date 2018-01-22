// 发送异步 action
const FETCHING_TOPIC_LIST = 'FETCHING_TOPIC_LIST';
const FETCHING_TOPIC_LIST_SUCCESS = 'FETCHING_TOPIC_LIST_SUCCESS';
const UPDATE_TABS = 'UPDATE_TABS';

export const fetchTopicList = (params) => (dispatch) => {
  dispatch({
    type: FETCHING_TOPIC_LIST,
  })

  fetch('https://cnodejs.org/api/v1/topics?page=' + params.page + '&tab=' + params.tab)
    .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCHING_TOPIC_LIST_SUCCESS,
          payload: data,
        })
      });
}

export const updateTabs = (tabs = '') => {
  return {
    type: UPDATE_TABS,
    payload: tabs,
  }
}

// 渲染主题列表逻辑
const topicListState = {
  list: [],
  fetchState: 'SUCCESS',
  tabs: '',
}

export const topicListReducer = (state = topicListState, action) => {
  switch (action.type) {
    case FETCHING_TOPIC_LIST:
      return Object.assign({}, state, {
        fetchState: 'LOADING',
      })
    case FETCHING_TOPIC_LIST_SUCCESS:
      return Object.assign({}, state, {
        list: action.payload.data,
        fetchState: 'SUCCESS',
      })
    case UPDATE_TABS: 
      return Object.assign({}, state, {
        tabs: action.payload
      })
  }
  return state;
}
