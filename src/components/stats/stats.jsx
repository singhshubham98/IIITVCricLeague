import React, { Component } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";
import "../../static/css/stats.css";
import loader from "../../static/image/loading.gif";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PlayerCard from "./playerCard";

const width = "100%",
  height = "60vmin";
const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
  background-image: linear-gradient(rgb(233, 233, 233), rgb(233, 233, 233));
  text-align: center;
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px black;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
`;
const Slider1 = ({ position, total, handleClick, children }) => (
  <Container>
    <div className="cardHeading--rot">
      STATI<span>STICS</span>
    </div>
    <div className="cardUnderline--rot" />
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>
        {"<"}
      </Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>
        {">"}
      </Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </Dot>
      ))}
    </Dots>
  </Container>
);
const Carousel = makeCarousel(Slider1);

class Stats extends Component {
  getPlayersCards = player => {
    var arrays = [],
      size = 3;

    while (player.length > 0) arrays.push(player.splice(0, size));

    let cardArray = [];
    if (arrays) {
      for (let i = 0; i < arrays.length; i++) {
        cardArray.push(<PlayerCard key={i} cardData={arrays[i]} />);
        console.log(arrays[i]);
      }
    }
    return cardArray;
  };
  render() {
    const { stats } = this.props;
    if (!stats) {
      return (
        <div className="loading">
          <img src={loader} alt="loading..." />
        </div>
      );
    }
    return (
      <Carousel>
        <Slide right>
          <div className="card--div">
            {this.getPlayersCards(stats.splice(0, 3))}
          </div>
        </Slide>
        <Slide right>
          <div className="card--div">
            {this.getPlayersCards(stats.splice(0, 3))}
          </div>
        </Slide>
      </Carousel>
    );
  }
}
const mapStateToProps = state => {
  return {
    stats: state.firestore.ordered.player_detail
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "player_detail" }])
)(Stats);
