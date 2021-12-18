import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

import { postLoadingStart, commentLoadingStart, addNewCommentStart } from '../../store/post/postActions'
import PreLoader from '../../components/preloader/preloader'
import { FeedContainer, FeedContents, EmptyFeedContainer } from './feed.styles'
import { FeedAvtar, FeedTop } from '../../components/feedCard/feedCard.styles'
import Comments from "../../components/commentCard/comments";

class post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      commentName: '',
      commentContent: ''
    }
  }
  triggerProps = {
    triggerText: 'Create Post',
    triggerClassName: 'btnPrimary shadow',
    triggerBtnType: 'button'
  }

  modalProps = {
    modalClassName: 'tiny'
  }

  async componentDidMount () {
    const id = this.props.match.params.id
    const { postLoadingStart, commentLoadingStart } = this.props
    await postLoadingStart(id)
    await commentLoadingStart(id)
  }

  handleName = (event) => {
    event.preventDefault()
    this.setState({
      commentName: event.target.value
    })
  }

  handleComment = (event) => {
    event.preventDefault()
    this.setState({
      commentContent: event.target.value
    })
  }

 handleSubmit = async(event) => {
    event.preventDefault()
    const { addNewCommentStart } = this.props
    const postId = this.props.match.params.id
    const newComment = await addNewCommentStart({
      data: {
        postId,
        name: this.state.commentName,
        comment: this.state.commentContent
      }
    })
    newComment.status ?? this.setState({
      commentName: '',
      commentContent: ''
    })
  }

  render () {
    const {
      post,
      comment,
      isLoading
    } = this.props
    return (
      <>
        {
        isLoading
          ? <PreLoader />
          : (
            <FeedContainer className='contentSect'>
              <div className='container'>
                <FeedContents className='postContents'>
                  {
                  post?.data
                    ? <div className='postContainer'>
                      <FeedTop className='dFlex'>
                        {/* <FeedAvtar
                          style={{
                            backgroundImage: `url("${post?.data?.image}")`
                          }}
                          className='feedAvtr alignSelfStart height-300'
                        /> */}
                        <div className='postTitle'>
                          {post?.data?.title}
                        </div>
                        <div className='postDesc'>
                          {post?.data?.body}
                        </div>
                        <div className='postCommentSection'>
                          <div className='addCommentSection'>
                            <div className='addCommentTitle'>
                              Add a Comment
                            </div>
                            <div className='addCommentContent'>
                              <form onSubmit={this.handleSubmit}>
                                <div className='commentInput'>
                                  <input type='text' value={this.state.commentName} placeholder='Name' onChange={this.handleName} />
                                </div>
                                <div className='commentInput'>
                                  <textarea value={this.state.commentContent} placeholder='Comment' onChange={this.handleComment} />
                                </div>
                                <input className='commentSubmit' type='submit' value='Submit' />
                              </form>
                            </div>
                          </div>
                          <div className='viewCommentSection'>
                            {comment?.data ? <Comments comments={comment?.data}/> : ''}
                          </div>
                        </div>
                      </FeedTop>
                    </div>
                    : <EmptyFeedContainer>post not available</EmptyFeedContainer>
                    }
                </FeedContents>
              </div>
            </FeedContainer>
            )
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    post: state?.post?.postData,
    comment: state?.post?.commentData,
    isLoading: state?.post?.isLoading
  }
}

const mapDispatchToProps = dispatch => ({
  // postPostStarted: post => dispatch(postPostStarted(post))
  postLoadingStart: (id) => dispatch(postLoadingStart(id)),
  commentLoadingStart: (id) => dispatch(commentLoadingStart(id)),
  addNewCommentStart: (data) => dispatch(addNewCommentStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(post)
