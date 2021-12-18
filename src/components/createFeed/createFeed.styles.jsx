import styled from "styled-components";
import * as styleConst from "../../assets/const/const.styles";
export const PopUpFormContainer = styled.form`
  .btnPrimary {
    margin: 0 auto;
    display: block;
  }
`;
export const FormHeading = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
`;
export const FormRow = styled.div`
  margin-bottom: 20px;
`;
export const TextArea = styled.textarea`
  min-height: 100px;
  background-color: ${styleConst.bgInput};
`;
