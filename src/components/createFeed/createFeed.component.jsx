import React from "react";
import { connect } from "react-redux";
import { addNewPostStart } from "../../store/feeds/feedActions";
import imageToBase64 from 'image-to-base64/browser'

import {
  PopUpFormContainer,
  FormHeading,
  FormRow,
  TextArea
} from "./createFeed.styles";
import CustomButton from "../button/button.component";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFeedCont: "",
      errorMsg: "Required",
      postName: null,
      postTitle: null,
      postImage: null,
      postBody: null,
    };
  }

  handleName = event => {
    const { value } = event.target;
    this.setState({
      postName: value
    });
  };
  handleTitle = event => {
    const { value } = event.target;
    this.setState({
      postTitle: value
    });
  };
  handleImage = event => {
    imageToBase64(event.target.files[0]) // Path to the image
    .then(
        (response) => {
          this.setState({
            postImage: response
          });
        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )
  };
  handleBody = event => {
    const { value } = event.target;
    this.setState({
      postBody: value
    });
  };
  addPost = async event => {
    event.preventDefault();
    if (!this.state.postName || !this.state.postTitle || !this.state.postBody) alert("New post data is empty.");
    const newPostData = {
      name: this.state.postName,
      title: this.state.postTitle,
      image: this.state.postImage,
      body: this.state.postBody
    };
    const { addNewPostStart } = this.props
    await addNewPostStart({
      data: newPostData
    });
  };
  render() {
    return (
      <PopUpFormContainer>
        <FormHeading className="fontXtraBold">Add New Post</FormHeading>
        <FormRow className="formRow">
          <input type="text" value={this.state.postName} placeholder='Name' onChange={this.handleName} />
        </FormRow>
        <FormRow className="formRow">
          <input type="text" value={this.state.postTitle} placeholder='Title' onChange={this.handleTitle} />
        </FormRow>
        <FormRow className="formRow">
          <input type="file" style={{ padding: '3px' }} accept=".jpg" onChange={this.handleImage} />
        </FormRow>
        <FormRow className="formRow">
          <TextArea
            required
            value={this.state.postBody}
            placeholder="Type Here..."
            onChange={this.handleBody}
          ></TextArea>
        </FormRow>
        <CustomButton
          className="btnPrimary tiny shadow"
          type="submit"
          onClick={this.addPost}
        >
          Post Now
        </CustomButton>
      </PopUpFormContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    feedData: state.feeds.feedData,
    toastMsg: state.feeds.toastMsg,
    isLoading:
      state.feeds.isLoading 
  }
};
const mapDispatchToProps = dispatch => ({
  addNewPostStart: newPostData => dispatch(addNewPostStart(newPostData))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
