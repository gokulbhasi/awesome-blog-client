import styled from 'styled-components'

export const FeedContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  flex-direction: column;
  // padding:100px 0;
  // z-index: 2;
  position: relative;
  .btnPrimary {
    margin-bottom: 40px;
    position: relative;
    z-index: 1;
  }
`
export const EmptyFeedContainer = styled.div`
  font-size: 20px;
  text-align: center;
`
export const FeedContents = styled.div`
  position: relative;
  &::before {
    content: "Awesome Blog";
    font-size: 75px;
    font-weight: 800;
    line-height: 100px;
    position: absolute;
    top: 0px;
    left: 0;
    opacity: 0.05;
  }

  @media only screen and (max-width: 575px) {
    &::before {
      font-size: 55px;
      top: -55px;
      line-height: 55px;
    }
  }
`
