import React from 'react'
import { connect } from 'react-redux'
import { addNewCommentStart } from '../../store/feeds/feedActions'

import {
  PopUpFormContainer,
  FormHeading,
  FormRow,
  TextArea
} from './replyComment.styles'
import CustomButton from '../button/button.component'

class CreateComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMsg: 'Required',
      commentName: null,
      commentBody: null,
    }
  }

  handleName = event => {
    const { value } = event.target
    this.setState({
      commentName: value
    })
  }
  handleBody = event => {
    const { value } = event.target
    this.setState({
      commentBody: value
    })
  }
  addComment = async event => {
    event.preventDefault()
    if (!this.state.commentName || !this.state.commentBody) alert('New comment data is empty.')
    const newCommentData = {
      name: this.state.commentName,
      comment: this.state.commentBody
    }
    const { addNewCommentStart } = this.props
    await addNewCommentStart({
      data: newCommentData
    })
  }
  render() {
    return (
      <PopUpFormContainer>
        <FormHeading className='fontXtraBold'>Reply Comment</FormHeading>
        <FormRow className='formRow'>
          <input type='text' value={this.state.commentName} placeholder='Name' onChange={this.handleName} />
        </FormRow>
        <FormRow className='formRow'>
          <TextArea
            required
            value={this.state.commentBody}
            placeholder='Type Here...'
            onChange={this.handleBody}
          ></TextArea>
        </FormRow>
        <CustomButton
          className='btnPrimary tiny shadow'
          type='submit'
          onClick={this.addComment}
        >
          Comment Now
        </CustomButton>
      </PopUpFormContainer>
    )
  }
}
const mapStateToProps = state => {
  return {
    feedData: state.feeds.feedData,
    toastMsg: state.feeds.toastMsg,
    isLoading:
      state.feeds.isLoading 
  }
}
const mapDispatchToProps = dispatch => ({
  addNewCommentStart: newCommentData => dispatch(addNewCommentStart(newCommentData))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment)
