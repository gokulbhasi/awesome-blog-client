import styled from "styled-components";
import * as styleConst from "../../assets/const/const.styles";

export const PostStylr = styled.div`
.postTitle {
  font-size: 30px;
  font-weight: 600;
  margin: 20px 0;
}

.postDesc {
  font-size: 12px;
  font-weight: 100;
  margin: 20px 0;
}

.postContainer {
  padding: 100px 50px;
  background-color: white;
}

.container {
  background-color: lightgrey;
}

body {
  background-color: lightgrey;
}

.postCommentSection {
  margin: 20px 0;
}

.addCommentSection {
  padding: 10px;
  border: 1px solid lightgray;
  margin: 20px 0;
}

.addCommentTitle {
  font-size: 16px;
  font-weight: 600;
}
`
export const CustomButtonContainer = styled.button`
  border: 1px solid transparent;
  padding: 13px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all linear 0.2s;
  background-color: transparent;
  font-weight: 600;
  min-width: 150px;
  text-align: center;
  display: inline-block;
  position: relative;
  color: ${styleConst.colorBody};
  font-family: ${styleConst.fontFamily};
  &.btnPrimary {
    background-color: ${styleConst.bgPrimary};
    color: ${styleConst.colorWhite};
    &:hover {
      background-color: transparent;
      border-color: ${styleConst.colorPrimary};
      color: ${styleConst.colorPrimary};
    }
  }
  &.outline {
    border-color: ${styleConst.colorPrimary};
    color: ${styleConst.colorPrimary};
    &.dark {
      border-color: ${styleConst.colorBody};
      color: ${styleConst.colorBody};
    }
    &:hover {
      border-color: ${styleConst.colorPrimary};
      color: ${styleConst.colorPrimary};
    }
  }
  &.shadow {
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
  }
  &.tiny {
    min-width: 120px;
    padding: 10px;
  }
  &.large {
    min-width: 200px;
  }
  &.darkColor {
    color: ${styleConst.colorHeading};
  }
  &:hover {
    background-color: transparent;
    color: ${styleConst.colorPrimary};
  }
  &:focus,
  &:active,
  &:hover {
    outline: none;
  }
  @media only screen and (max-width: 767px) {
    padding: 8px;
    font-size: 14px;
    min-width: 130px;
    &.tiny {
      min-width: 90px;
    }
    &.large {
      min-width: 150px;
    }
  }
`;
