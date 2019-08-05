import React, { Component } from "react";
import "../../static/css/team.css";

class TeamCard extends Component {
  state = {};
  render() {
    const cardData = this.props.cardData;
    console.log(cardData);
    return (
      <React.Fragment>
        {cardData.map(card => {
          return (
            <div className="playerCard" key={card.id}>
              <div className="card--image">
                <img
                  className="team--image"
                  src={card.team_image}
                  alt="imgaa"
                />
              </div>
              <div className="card--details">
                <h3>
                  {card.first_name} <span>{card.last_name}</span>
                </h3>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default TeamCard;
