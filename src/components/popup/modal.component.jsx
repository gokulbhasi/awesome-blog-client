import React, { Component } from "react";
import { CloseIcon } from "../svgs/icon.component";
export class ModalContent extends Component {
  render() {
    return (
      <main
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal"
        onKeyDown={this.props.onKeyDown}
      >
        <div className="overlay" onClick={this.props.onClickOutside}></div>
        <div
          className={`modalMain ${
            this.props.className ? this.props.className : ""
          }`}
        >
          <button
            className="popupClose mr0 mlAuto"
            aria-label="Close Modal"
            onClick={this.props.closeModal}
            // onClick={() => this.props.closeModal()}
          >
            <CloseIcon />
          </button>
          <div className="modalBody">{this.props.content}</div>
        </div>
      </main>
    );
  }
}

export default ModalContent;
