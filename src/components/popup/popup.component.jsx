import React, { Component } from "react";
import ModalContent from "./modal.component";
import ModalTrigger from "./modalTrigger.component";
import "./popup.scss";
export class Modal extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false
    };
  }
  showModal = () => {
    this.setState({ isShown: true });
  };
  closeModal = () => {
    this.setState({ isShown: false });
    // this.TriggerButton.focus();
  };
  onKeyDown = event => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = event => {
    this.closeModal();
  };

  render() {
    const {
      triggerText,
      triggerClassName,
      triggerBtnType
    } = this.props.triggerProps;
    const { modalClassName } = this.props.modalProps;
    return (
      <React.Fragment>
        <ModalTrigger
          showModal={this.showModal}
          triggerText={triggerText}
          className={triggerClassName}
          type={triggerBtnType}
        />
        {this.state.isShown ? (
          <ModalContent
            closeModal={this.closeModal}
            content={this.props.modalContent}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
            className={modalClassName}
          />
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
