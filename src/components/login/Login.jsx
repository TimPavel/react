import React, { Component } from 'react'
import './Login.css';
import Button from 'react-bootstrap/Button'
import { Modal } from "react-bootstrap";

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {isVisible: false};

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({isVisible: this.state = false})
  };

  handleShow() {
    this.setState({isVisible: this.state = true})
  };

  render() {

    return (
      <div>
        <Button onClick={this.handleShow} variant="primary"> Login </Button>

        <Modal show={this.state.isVisible} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}