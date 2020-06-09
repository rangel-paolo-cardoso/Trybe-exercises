import React, { Component } from 'react';
import './Alert.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: 'Resident Evil Gaiden',
      listEnabled: false,
    };
  }

  changeGame = (event) => {
    this.setState({ game: event.target.value });
  }

  changeGameVisibility = () => {
    this.setState((state) => ({ listEnabled: !state.listEnabled }));
  }

  render() {
    const { title } = this.props.children;
    const { game, listEnabled } = this.state;
    const { list } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <div className="box-select" onClick={this.changeGameVisibility}>{game}</div>
        {listEnabled && (
          <div className="games">
            {list.map((game, i) => (
              <option
                key={i}
                value={game}
                onClick={this.changeGame}
              >
                {game}
              </option>
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default Dropdown;