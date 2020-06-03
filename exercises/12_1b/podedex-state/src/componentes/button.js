import React from 'react';
// import data from './data';

class Button extends React.Component {
  render() {
    console.log(this.props.click);
    return (
      <button onClick={
        (e) => {
          e.target.this.props.click()
        }
      }>{this.props.txt}</button>
    );
  }
}

export default Button;
