import styled from 'styled-components'

export const LoaderOverlay = styled.div`
  height: calc(100vh - 63px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:9;
  position:fixed;
  top:63px;
  left:0;
  background-color:rgba(254, 254, 254, 1);
`

export const LoaderContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #ff748d;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`
