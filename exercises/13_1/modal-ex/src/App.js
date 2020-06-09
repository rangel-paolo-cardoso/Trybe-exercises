import React, { Component } from 'react';
import data from './data';
import Dropdown from './Dropdown';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      isDisableButton: false,
    };
  }

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  changeShowComponent = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
      isDisableButton: !state.isDisableButton,
    }));
  };

  render() {
    return (
      <div className="main">
        <Dropdown list={data} >
          {{ title: 'Título de Teste' }}
        </Dropdown>
      </div>
    );
  }
}

export default App;