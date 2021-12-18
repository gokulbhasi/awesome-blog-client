import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import moment from 'moment'
import { connect } from 'react-redux'

import { addNewCommentStart } from '../../store/post/postActions'

class Comment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      thumbnail: '',
      showReply: false,
      replyParentId: null,
      commentName: '',
      commentContent: ''
    }
  }

  componentDidMount () {
    axios.get('https://randomuser.me/api/')
      .then(response => {
        this.setState({
          user: response.data.results,
          thumbnail: response.data.results[0].picture.thumbnail
        })
      })
  }

  handleReply = (event) => {
    this.setState({
      replyParentId: event.currentTarget.dataset.id
    })
  }
  replyInput = (children) => {
    if (!children) {
      children = []
    }
    if (!children[0] || Object.keys(children[0]).length !== 0) children.unshift({}) 
    return children
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
     const postId = this.props.postData?.data?._id
     const newComment = await addNewCommentStart({
       data: {
         postId,
         name: this.state.commentName,
         comment: this.state.commentContent,
         parentId: this.props.parentId
       }
     })
     newComment.status ?? this.setState({
       commentName: '',
       commentContent: ''
     })
   }

  render () {
    const comment = this.props.comment
    const depth = this.props.depth
    return (
      <div className='cmntBox'>
        {comment?._id ?
          <div className='cmntDiff'>
            <div className='cmntProf'>
              <div style={{ backgroundImage: `url("${this?.state?.thumbnail ? this?.state?.thumbnail : ''}")` }} className='cmntImage' />
              <div className='profDesc'>
                <div className='cmntName'>{comment?.name}</div>
                <div className='cmntTime'>{moment(comment?.createdAt)?.format('LL [AT] LT')?.toUpperCase()}</div>
              </div>
            </div>
            <div className='cmntBody'>{comment?.comment}</div>
            {depth < 3 ? <div className='cmntReply' onClick={this.handleReply} data-id={comment._id}>Reply</div> : <> </ >}
          </div> :
          <div className='cmntDiff'>
            <form onSubmit={this.handleSubmit}>
              <div className='cmntProf'>
                <div className='profDesc'>
                  <div className='cmntName'>
                    <div className='commentInput'>
                      <input type='text' value={this.state.commentName} placeholder='Name' onChange={this.handleName} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='cmntBody'>
                <div className='commentInput'>
                  <textarea value={this.state.commentContent} placeholder='Comment' onChange={this.handleComment} />
                </div>
              </div>
              <input className='commentSubmit' type='submit' value='Reply' />
            </form>
          </div>
        }
        {
        this.state?.replyParentId && this.state?.replyParentId === comment._id
          ? <Comments key={comment._id} comments={this.replyInput(comment.children)} parentId={this.props?.parentId? this.props?.parentId: this.state?.replyParentId} depth={depth + 1} />
          : <Comments key={comment._id} comments={comment.children} parentId={this.props?.parentId? this.props?.parentId: this.state?.replyParentId} depth={depth + 1} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    newComment: state?.post?.newComment,
    postData: state?.post?.postData,
  }
}

const mapDispatchToProps = dispatch => ({
  addNewCommentStart: (data) => dispatch(addNewCommentStart(data))
})

const CommentReply = connect(mapStateToProps, mapDispatchToProps)(Comment)

class Comments extends Component {
  render () {
    return (
      <div>
        {this.props?.comments && this.props?.comments?.map((comment) => {
          return <CommentReply key={comment?.id} comment={comment} depth={this.props?.depth ? this.props?.depth : 1} parentId={this.props?.parentId} />
        })}
      </div>
    )
  }
}

export default styled(Comments)`
  max-width: 750px;
  min-width: min-content;

  > * {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  #comments,
  #comments_count {
    font-weight: 900;
    font-size: 20px;
    display: inline-block;
    margin-right: 4px;
    margin-bottom: 8px;
  }

  #comments {
    color: #ffffff;
  }

  #comments_count {
    color: #53626f;
  }
`;
