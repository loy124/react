import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
  }

  addColor = (title, color) => {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ];
    this.setState({ colors });
  };
  rateColor = (id, rating) => {
    const colors = this.state.colors.map(color =>
      color.id !== id ? color : { ...color, rating }
    );
    this.setState({ colors });
  };
  removeColor = id => {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({ colors });
  };
  render() {
    const { colors } = this.state;
    const { addColor, rateColor, removeColor } = this;
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
      </div>
    );
  }
}
App.propTypes = {
  totalStars: PropTypes.number
};

App.defaultProps = {
  totalStars: 5
};
