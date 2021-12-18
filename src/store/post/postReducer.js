import PostActionTypes from './postTypes'

const INITIAL_STATE = {
  postData: null,
  error: null,
  isLoading: false,
  toastMsg: null,
  newPost: null,
  id: null
}

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostActionTypes.POST_LOADING_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case PostActionTypes.POST_LOADING_SUCCESS:
      return {
        ...state,
        postData: action.payload,
        isLoading: false,
        error: null
      }
    case PostActionTypes.POST_LOADING_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        toastMsg: null
      }
    case PostActionTypes.COMMENT_LOADING_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case PostActionTypes.COMMENT_LOADING_SUCCESS:
      return {
        ...state,
        commentData: action.payload,
        isLoading: false,
        error: null
      }
    case PostActionTypes.COMMENT_LOADING_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        toastMsg: null
      }
    case PostActionTypes.ADD_COMMENT_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case PostActionTypes.ADD_COMMENT_SUCCESS: {
      if (action?.payload?.comment?.data?.parentId) {
        const parseComments = (comments, newComment) => {
          const updatedData = comments.map(selectedComment => {
            if (selectedComment._id === newComment?.parentId) {
              if (selectedComment.children) selectedComment.children[0] = newComment
              else selectedComment.children = [newComment]
              return selectedComment
            } else if (selectedComment.children?.length > 0) {
              selectedComment.children = parseComments(selectedComment.children, newComment)
              return selectedComment
            } else {
              return selectedComment
            }
          })
          return updatedData
        }
        const pushComment = (data, newComment) => {
          const updatedData = data.map((comment) => {
            if (comment._id === newComment?.parentId) {
              if (comment.children) comment.children[0] = newComment
              else comment.children = [newComment]
              return comment
            } else if (comment.children?.length > 0) {
              comment.children = parseComments(comment.children, newComment)
              return comment
            } else {
              return comment
            }
          })
          return updatedData
        }
        pushComment(state?.commentData?.data, action?.payload?.comment?.data).then(commentData => {
          return {
            ...state,
            isLoading: false,
            toastMsg: action.payload,
            commentData,
            error: null
          }
        })
      } else {
        const commentData = {
          ...(state?.commentData ? state?.commentData : []),
          data: [
            action?.payload?.comment?.data,
            ...(state?.commentData?.data ? state?.commentData?.data : [])
          ]
        }
        return {
          ...state,
          isLoading: false,
          toastMsg: action.payload,
          commentData,
          error: null
        }
      }
    }
    case PostActionTypes.ADD_COMMENT_FAILURE:
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

export default postReducer
