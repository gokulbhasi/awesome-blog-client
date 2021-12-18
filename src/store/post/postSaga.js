import { takeLatest, all, call, put } from 'redux-saga/effects'
import { PostActionTypes } from './postTypes'
import {
  postLoadingSuccess,
  postLoadingFailure,
  commentLoadingSuccess,
  commentLoadingFailure,
  addNewCommentSuccess,
  addNewCommentFailure
} from './postActions'
import getPostApi from '../../networking/apis/getPostApi'
import getCommentsApi from '../../networking/apis/getCommentsApi'
import postCommentApi from '../../networking/apis/createCommentApi'

export function* postLoadingAsync ({ payload: { id } }) {
  try {
    const postMap = yield call(getPostApi, [id])
    yield put(postLoadingSuccess(postMap))
  } catch (error) {
    yield put(postLoadingFailure(error))
  }
}
export function* onPostLoadStart () {
  yield takeLatest(PostActionTypes.POST_LOADING_START, postLoadingAsync)
}

export function* commentLoadingAsync ({ payload: { id } }) {
  try {
    const commentMap = yield call(getCommentsApi, [id])
    yield put(commentLoadingSuccess(commentMap))
  } catch (error) {
    yield put(commentLoadingFailure(error))
  }
}
export function* onCommentLoadStart () {
  yield takeLatest(PostActionTypes.COMMENT_LOADING_START, commentLoadingAsync)
}

export function* commentAddingStart ({ payload: { data } }) {
  try {
    const comment = yield call(postCommentApi, [data])
    // const comment = data
    yield put(
      addNewCommentSuccess({ success: true, msg: 'comment added successfully', comment })
    )
  } catch (error) {
    yield put(addNewCommentFailure(error))
  }
}
export function* onNewCommentAddStart () {
  yield takeLatest(PostActionTypes.ADD_COMMENT_START, commentAddingStart)
}

export function* postSaga () {
  yield all([call(onPostLoadStart), call(onCommentLoadStart), call(onNewCommentAddStart)])
}
