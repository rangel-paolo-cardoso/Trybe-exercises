import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <p>Número de cliques: <span>{this.props.counter}</span></p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state,
});

export default connect(mapStateToProps)(ClickCounter);
