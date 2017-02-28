import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { OverlayTrigger, Popover } from 'react-bootstrap';

import { buttonNameChanged, deleteButton } from '../actions';

import 'stylesheets/modules/button';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.button.name
    }
  }
  onNameChange(name) {
    this.setState({name});
    this.props.buttonNameChanged(
      name,
      this.props.msgIndex,
      this.props.btnIndex
    )
  }
  render() {
    const popoverClickRootClose = (
      <Popover className="popover">
        <input value={this.state.name}
               onChange={evt => this.onNameChange(evt.target.value)}/>
        <button onClick={() => this.props.deleteButton(this.props.msgIndex, 
                                                       this.props.btnIndex)}
                className="btn">Remove</button>
        <button className="btn btn-success">Save</button>
      </Popover>
    );
    return (
      <OverlayTrigger 
        trigger="click" rootClose placement="right"
        overlay={popoverClickRootClose}>
        <div className="button">
          {this.state.name}
        </div>
      </OverlayTrigger>
    );
  }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    buttonNameChanged,
    deleteButton
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);