import React, { Component } from 'react'
import { connect } from 'react-redux'

import { feedLoadingStart } from '../../store/feeds/feedActions'
import PreLoader from '../../components/preloader/preloader'
import { FeedContainer, FeedContents, EmptyFeedContainer } from './feed.styles'
import Modal from '../../components/popup/popup.component'
import CreateFeed from '../../components/createFeed/createFeed.component'
import FeedCard from '../../components/feedCard/feedCard.component'

class home extends Component {
  triggerProps = {
    triggerText: 'Create Post',
    triggerClassName: 'btnPrimary shadow',
    triggerBtnType: 'button'
  }
  modalProps = {
    modalClassName: 'tiny'
  }
  componentDidMount = async () => {
    const { pgno, size } = this.props.match.params
    const { feedLoadingStart } = this.props
    await feedLoadingStart(pgno, size)
  }
  render() {
    const {
      feedData,
      isLoading,
      toastMsg,
      newPost
    } = this.props

    return (
      <React.Fragment>
        {isLoading ? (
          <PreLoader />
        ) : (
          <div>
            <FeedContainer className='contentSect'>
              <div className='containerHome'>
                <Modal
                  modalProps={this.modalProps}
                  triggerProps={this.triggerProps}
                  modalContent={<CreateFeed />}
                />
                <FeedContents className='feedContents'>
                  {toastMsg && <div>{toastMsg.msg}</div>}
                  {feedData?.data && feedData?.data?.length ? (
                    feedData?.data.map(
                      feed =>
                        feed && (
                          <FeedCard
                            key={feed._id}
                            className='shadow roundedCard'
                            cardData={feed}
                          />
                        )
                    )
                  ) : (
                    <EmptyFeedContainer>No feeds available</EmptyFeedContainer>
                  )}
                </FeedContents>
              </div>
            </FeedContainer>
            {
              feedData?.data?.length &&
              feedData?.data?.pageNo &&
              feedData?.data?.pagination === true && (
                <ul className='pagination text-black flex align-items-center justify-center m-5'>
                  {this.pagination(
                    feedData?.data?.pages,
                    feedData?.data?.pageNo
                  )}
                </ul>
              )
            }
          </div>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  let feedData = state?.feeds?.feedData
  if( state?.feeds?.newPost ) {
    feedData.data = [
      state?.feeds?.newPost,
      ...feedData.data
    ]
  }
  return {
    feedData,
    toastMsg: state.feeds.toastMsg,
    isLoading:
      state.feeds.isLoading 
  }
}

const mapDispatchToProps = dispatch => ({
  // feedPostStarted: postData => dispatch(feedPostStarted(postData))
  feedLoadingStart: (pgno, size) => dispatch(feedLoadingStart(pgno, size))
})

export default connect(mapStateToProps, mapDispatchToProps)(home)
