import React, { Component } from 'react';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';


export default class Scoreboard extends Component {
  state = {
    players: [
      {
        name: "David MacKintosh",
        score: 30,
        id: 1,
      },
      {
        name: "Chen Zhang",
        score: 31,
        id: 2,
      },
      {
        name: "Nise Gunter",
        score: 29,
        id: 3,
      },
      {
        name: "Lucy Lin",
        score: 27,
        id: 4,
      },
    ]
  };

  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  };

  onAddPlayer = (name) => {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  };

  onRemovePlayer = (index) => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(function(player, index) {
             return (
               <Player
                 name={player.name}
                 score={player.score}
                 key={player.name}
                 onScoreChange={(delta) => this.onScoreChange(index, delta)}
                 onRemove={() => this.onRemovePlayer(index)}
               />
             );
           }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
};