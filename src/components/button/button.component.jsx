import React from "react";
// import "./button.styles.scss";

import { CustomButtonContainer } from "./button.styles";

const CustomButton = props => {
  return (
    <CustomButtonContainer
      className={`btn ${props.className ? props.className : ""}`}
      {...props}
    >
      {props.children}
    </CustomButtonContainer>

    // button samples

    // <CustomButtonContainer type="link" to="/signup">
    //   Sign up
    //     </CustomButtonContainer>
    // <CustomButtonContainer type="button" className="btn shadow">
    //   Button
    //     </CustomButtonContainer>
    // <CustomButtonContainer type="button" className="btnPrimary">
    //   Button
    //     </CustomButtonContainer>
    // <CustomButtonContainer type="button" className="outline">
    //   Button
    //     </CustomButtonContainer>
  );
};
export default CustomButton;
