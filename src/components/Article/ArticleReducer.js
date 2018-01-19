// 发送异步 action
const FETCHING_ARTICLE_LIST = 'FETCHING_ARTICLE_LIST';
const FETCHING_ARTICLE_LIST_SUCCESS = 'FETCHING_ARTICLE_LIST_SUCCESS';

export const fetchArticleList = (params) => (dispatch) => {
  dispatch({
    type: FETCHING_ARTICLE_LIST,
  })

  fetch('https://cnodejs.org/api/v1/topic/' + params.id)
    .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCHING_ARTICLE_LIST_SUCCESS,
          payload: data,
        })
      })
}

// 渲染主题详情逻辑
const articleListState = {
  title: {
    author: {
      loginname: '',
      avatar_url: '',
    },
    create_at: '',
    reply_count: '',
    last_reply_at: '',
    replies: [
      {
        reply_count: '',
        title: '',
        create_at: '',
        content: '',
        author: {
          loginname: '',
          avatar_url: '',
        }
      }
    ]
  },
  fetchState: 'SUCCESS',
}

export const articleListReducer = (state = articleListState, action) => {
  switch (action.type) {
    case FETCHING_ARTICLE_LIST:
      return Object.assign({}, state, {
        fetchState: 'LOADING',
      })

    case FETCHING_ARTICLE_LIST_SUCCESS:
      return Object.assign({}, state, {
        title: action.payload.data,
        fetchState: 'SUCCESS',
      })
  }
  return state;
}


