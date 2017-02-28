import React, { Component } from 'react';
import { connect } from 'react-redux';

import Messages from './messages';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Messages messages={this.props.messages}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages
});

export default connect(mapStateToProps)(App);