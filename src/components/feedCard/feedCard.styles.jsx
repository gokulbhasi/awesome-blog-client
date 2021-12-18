import styled from "styled-components";

import { Link } from "react-router-dom";
import * as styleConst from "../../assets/const/const.styles";

export const FeedCardContainer = styled.div`
  text-decoration: none;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 40px;
  position: relative;
  background-color: ${styleConst.bgWhite};
  &.shadow {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  &::after {
    content: "";
    display: block;
    height: 60px;
    width: 30px;
    background-color: ${styleConst.bgPrimary};
    border-radius: 30px 0px 0px 30px;
    position: absolute;
    right: 0;
    bottom: 45px;
    // z-index: 9;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    padding: 20px 30px 30px;
    p {
      padding: 0 10px;
    }
  }
  @media only screen and (max-width: 767px) {
    // flex-wrap:wrap;

    &::after {
      height: 40px;
      width: 20px;
      bottom: 25px;
    }
  }
  @media only screen and (max-width: 575px) {
    padding: 20px;
    p {
      padding: 0px;
      font-size: 15px;
    }
  }
`;

export const FeedTop = styled.div`
  margin-bottom: 10px;
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-bottom: 15px;
    .timeStamp {
      margin-left: 60px;
      margin-top: -22px;
      margin-bottom: 6px;
    }
    .feedAvtr {
      width: 50px;
      height: 50px;
      flex: 0 0 50px;
    }
    h2 {
      width: calc(100% - 60px);
      align-self: start !important;
      font-size: 18px;
      margin-left: 10px;
      margin-top: 5px;
    }
  }
`;
export const FeedAvtar = styled.div`
  height: 200px;
  display: block;
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h2`
  text-decoration: none;
  margin-bottom: 0;
  color: ${styleConst.colorHeading};
  font-size: 20px;
  text-transform: capitalize;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FeedTime = styled.div`
  font-size: 13px;
  color: #9c9c9c;
`;

export const FeedContent = styled.p`
  padding-left: 80px;
  margin-bottom: 0;
`;
