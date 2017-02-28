import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from './button';
import { textChanged, textCardDeleted, addButton } from '../actions';

import 'stylesheets/modules/text';
import 'stylesheets/modules/button';
import deleteImg from '../../images/delete.svg';

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: this.props.message.text
    }
  }
  onTextChange(term) {
    this.setState({term});
    this.props.textChanged(term, this.props.index);
  }
  render() {
    const buttons = this.props.message.buttons.map((button, index) => {
      return <Button 
                key={button.id} 
                msgIndex={this.props.index} 
                btnIndex={index} 
                button={button} />;
    })

    const display = buttons.length < 3 ? '' : 'hidden';

    return (
      <div className="text">
        <div className="text-heading">
          <textarea className="text-heading-input"
                    value={this.state.term} 
                    onChange={evt => this.onTextChange(evt.target.value)}/>
        </div>
        {buttons}
        <div className={"button button-new " + display}
             onClick={() => this.props.addButton(this.props.index)}>+ add new button</div>
        <img src={deleteImg} 
             className="delete-button"
             onClick={() => this.props.textCardDeleted(this.props.index)}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // message: state.messages[0]
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    textChanged: textChanged,
    textCardDeleted: textCardDeleted,
    addButton: addButton
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Text);