import React, { Component } from "react";
import CustomButton from "../button/button.component";
class ModalTrigger extends Component {
  render() {
    return this.props.type ? (
      <CustomButton onClick={this.props.showModal} {...this.props}>
        {this.props.triggerText}
      </CustomButton>
    ) : (
      <span
        onClick={this.props.showModal}
        {...this.props}
        className="popupTrigger"
      >
        {this.props.triggerText}
      </span>
    );
  }
}

export default ModalTrigger;
