import React, { Component } from 'react';
// import api from './api/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      message: '',
    };
  }

  componentDidMount = async () => {
    await fetch('https://dog.ceo/api/breeds/image/random')
      .then((resp) => resp.json())
      .then((dogImage) => {
        this.setState({
          status: dogImage.status,
          message: dogImage.message,
        });
        localStorage.dogImage = dogImage.message;
        alert(dogImage.message.split('/')[4]);
      });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.message.includes('terrier')) return false;
    return true;
  };

  render() {
    const { status, message } = this.state;
    return (
      <div>
        { status ? <img src={message} alt="A dog" height="300" /> : <div>Loading...</div> }
        <br/>
        <button onClick={this.componentDidMount}>Show another dog</button>
      </div>
    );
  }
}

export default App;