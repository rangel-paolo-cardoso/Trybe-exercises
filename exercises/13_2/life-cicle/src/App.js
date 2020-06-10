import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      message: '',
      nome: '',
    };
  }

  setName = (e) => this.setState({ nome: e.target.value });

  componentDidMount = async () => {
    if (typeof(Storage) !== 'undefined') {
      const dog = localStorage.getItem('DogData');
      if (dog) {
        const [ dogName, dogPic ] = [...JSON.parse(dog)];
        this.setState({
          status: true,
          message: dogPic,
          nome: dogName,
        });
      } else {
        await fetch('https://dog.ceo/api/breeds/image/random')
          .then((resp) => resp.json())
          .then((dogImage) => {
            this.setState({
              status: dogImage.status,
              message: dogImage.message,
            });
            alert(dogImage.message.split('/')[4]);
          });
      }
    }
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.message.includes('terrier')) return false;
    return true;
  };

  salvaDog = () => {
    const { message, nome } = this.state;
    const dogData = [nome, message];
    localStorage.setItem('DogData', JSON.stringify(dogData));
    alert('Dog salvo');
  };

  doarDog = () => {
    const dog = localStorage.getItem('DogData');
    if (dog) localStorage.removeItem('DogData');
    this.setState({
      status: false,
      message: '',
    });
    alert('Dog doado');
  };

  render() {
    const { status, message, nome } = this.state;
    return (
      <div>
        { status ? <img src={message} alt="A dog" height="300" /> : <div>Loading...</div> }
        <div>
          <h2>Nome: {nome}</h2>
          <input
            type="text"
            value={nome}
            onChange={this.setName}
            placeholder="Digite o nome do Dog"
          />
          <button onClick={this.salvaDog}>Guardar dados do Dog</button>
          <button onClick={this.doarDog}>Doar dog</button>
        </div>
        <br/>
        <button onClick={this.componentDidMount}>Show another dog</button>
      </div>
    );
  }
}

export default App;