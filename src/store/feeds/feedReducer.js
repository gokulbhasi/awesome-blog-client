import FeedActionTypes from './feedTypes'

const INITIAL_STATE = {
  feedData: null,
  error: null,
  isLoading: false,
  toastMsg: null,
  pgno: 1,
  size: 10
}

const feedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FeedActionTypes.FEED_LOADING_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FeedActionTypes.FEED_LOADING_SUCCESS:
      return {
        ...state,
        feedData: action.payload,
        isLoading: false,
        error: null
      }
    case FeedActionTypes.FEED_LOADING_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        toastMsg: null
      }
    case FeedActionTypes.ADD_POST_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FeedActionTypes.ADD_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        toastMsg: action.payload,
        error: null
      }
    }
    case FeedActionTypes.ADD_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        toastMsg: null
      }
    default:
      return {
        ...state,
        toastMsg: null
      }
  }
}

export default feedReducer
