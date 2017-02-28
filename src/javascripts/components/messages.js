import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Text from './text';
import { textCardAdded } from '../actions';

import 'stylesheets/modules/container';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render () {
    const messages = this.props.messages.map((message, index) => {
      switch(message.type) {
        case 'text':
          return (
            <Text key={message.id} message={message} index={index} />
          );
      }
    })
    return (
      <div>
        <div className='container'>
          {messages}
          
          <button 
            className="btn btn-default"
            onClick={() => this.props.textCardAdded()}>add textcard</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    textCardAdded
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
