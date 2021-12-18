import { takeLatest, all, call, put } from 'redux-saga/effects'
import { FeedActionTypes } from './feedTypes'
import {
  feedLoadingSuccess,
  feedLoadingFailure,
  addNewPostSuccess,
  addNewPostFailure
} from './feedActions'
import homepageListApi from '../../networking/apis/homepageListApi'
import createPostApi from '../../networking/apis/createPostApi'

export function* feedLoadingAsync ({ payload: { pgno, size } }) {
  try {
    const postsMap = yield call(homepageListApi, [pgno], [size])
    yield put(feedLoadingSuccess(postsMap))
  } catch (error) {
    yield put(feedLoadingFailure(error))
  }
}

export function* onFeedLoadStart () {
  yield takeLatest(FeedActionTypes.FEED_LOADING_START, feedLoadingAsync)
}

export function* postAddingStart ({ payload: { data } }) {
  try {
    const post = yield call(createPostApi, [data])
    yield put(
      addNewPostSuccess({ success: true, msg: 'post added successfully', post })
    )
  } catch (error) {
    yield put(addNewPostFailure(error))
  }
}

export function* onNewPostAddStart () {
  yield takeLatest(FeedActionTypes.ADD_POST_START, postAddingStart)
}

export function* feedsSaga () {
  yield all([call(onFeedLoadStart), call(onNewPostAddStart)])
}
