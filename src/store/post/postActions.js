import postActionTypes from './postTypes'

export const postLoadingStart = (id) => ({
  type: postActionTypes.POST_LOADING_START,
  payload: { id }
})

export const postLoadingFailure = error => ({
  type: postActionTypes.POST_LOADING_FAILURE,
  payload: error
})

export const postLoadingSuccess = postData => ({
  type: postActionTypes.POST_LOADING_SUCCESS,
  payload: postData
})

export const commentLoadingStart = (id) => ({
  type: postActionTypes.COMMENT_LOADING_START,
  payload: { id }
})

export const commentLoadingFailure = error => ({
  type: postActionTypes.COMMENT_LOADING_FAILURE,
  payload: error
})

export const commentLoadingSuccess = commentData => ({
  type: postActionTypes.COMMENT_LOADING_SUCCESS,
  payload: commentData
})

export const addNewCommentStart = newCommentData => ({
  type: postActionTypes.ADD_COMMENT_START,
  payload: newCommentData
})
export const addNewCommentSuccess = commentSuccessMsg => ({
  type: postActionTypes.ADD_COMMENT_SUCCESS,
  payload: commentSuccessMsg
})
export const addNewCommentFailure = error => ({
  type: postActionTypes.ADD_COMMENT_FAILURE,
  payload: error
})
