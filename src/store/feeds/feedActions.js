import feedActionTypes from './feedTypes'

export const feedLoadingStart = (pgno, size) => ({
  type: feedActionTypes.FEED_LOADING_START,
  payload: { pgno, size }
})

export const feedLoadingFailure = error => ({
  type: feedActionTypes.FEED_LOADING_FAILURE,
  payload: error
})

export const feedLoadingSuccess = feedData => ({
  type: feedActionTypes.FEED_LOADING_SUCCESS,
  payload: feedData
})

export const addNewPostStart = newPostData => ({
  type: feedActionTypes.ADD_POST_START,
  payload: newPostData
})
export const addNewPostSuccess = postSuccessMsg => ({
  type: feedActionTypes.ADD_POST_SUCCESS,
  payload: postSuccessMsg
})
export const addNewPostFailure = error => ({
  type: feedActionTypes.ADD_POST_FAILURE,
  payload: error
})
