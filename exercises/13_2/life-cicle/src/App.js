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
    const { status } = this.state;
    await fetch('https://dog.ceo/api/breeds/image/random')
      .then((resp) => resp.json())
      .then((dogImage) => (
        this.setState({
          message: dogImage.message,
          state: !status,
        })
      ));
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        { message ? <img src={message} alt="A dog"/> : <div>Loading...</div> }
      </div>
    );
  }
}

export default App;