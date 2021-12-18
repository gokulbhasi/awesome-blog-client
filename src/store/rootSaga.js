import { all, call } from 'redux-saga/effects'
import { postSaga } from './post/postSaga'
import { feedsSaga } from './feeds/feedSaga'
export default function* rootSaga () {
  yield all([
    call(feedsSaga),
    call(postSaga)
  ])
}
