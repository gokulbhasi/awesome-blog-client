import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/button/button.component";

const Error404 = ({ errorMsg }) => (
  <div className="contentSect textCenter">
    <div className="container">
      <h1 className="fontBold">404</h1>
      {errorMsg ? <p>{errorMsg}</p> : <p>Page not Found.</p>}
      <CustomButton className="btnPrimary" as={Link} to="/">
        Take me to Home Page!
      </CustomButton>
    </div>
  </div>
);

export default Error404;
