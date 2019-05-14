import React, { Component } from "react";
import PropTypes from "prop-types";
import StarRating from "../components/StarRating";
import "../stylesheets/Color.scss";

// const Color = ({
//   title,
//   color,
//   rating = 0,
//   onRemove = f => f,
//   onRate = f => f
// }) => (
// <section className="color">
//   <h1>{title}</h1>
//   <button onClick={onRemove}>X</button>
//   <div className="color" style={{ backgroundColor: color }} />
//   <div>
//     <StarRating starsSelected={rating} onRate={onRate} />
//   </div>
// </section>
// );

export default class Color extends Component {
  constructor(props) {
    super(props);
    this.style = { backgroundColor: "#CCC" };
  }
  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;
    return rating !== nextProps.rating;
  }
  componentDidMount() {
    this.style = null;
    
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { title, rating } = this.props;
    alert(`${title}: 평점 ${prevProps.rating} -> ${rating}`);
     return { }
  }

  componentDidUpdate(prevProps) {
    const { title, rating } = this.props;
    const status = rating > prevProps.rating ? "좋아짐" : "나빠짐";
    console.log(`${title} 평점이 ${status}`);
    this._title.style.backgroundColor = "";
    this._title.style.color = this.props.color;
  }
  render() {
    const { title, rating, color, onRemove, onRate } = this.props;
    return (
      <section className="color" style={this.style}>
        <h1 ref={input => this._title = input}>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className="color" style={{ backgroundColor: color }} />
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    );
  }
}
