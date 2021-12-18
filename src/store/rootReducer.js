import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import postReducer from './post/postReducer'
import feedsReducer from './feeds/feedReducer'

const rootReducer = combineReducers({
  post: postReducer,
  feeds: feedsReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['post', 'feeds']
}

export default persistReducer(persistConfig, rootReducer)
