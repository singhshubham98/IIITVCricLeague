import React, { Component } from "react";
import "../../static/css/stats.css";

class PlayerCard extends Component {
  state = {};
  render() {
    const cardData = this.props.cardData;
    console.log(cardData);
    return (
      <React.Fragment>
        {cardData.map(card => {
          return (
            <div className="player--card" key={card.id}>
              <div className="card--image">
                <img
                  className="player--image"
                  src={card.player_image}
                  alt="imgaa"
                />
              </div>
              <div className="card--upperline" />
              <div className="card--details">
                <h6 className="card--heading">
                  <span>MATCHES : </span>
                  {card.matches}
                </h6>
                <h6>RUNS : {card.run}</h6>
                <h4>
                  {card.first_name} <span> {card.last_name}</span>
                </h4>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default PlayerCard;
