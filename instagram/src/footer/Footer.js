import React, { Component } from "react";
import bitmap from "../../img/bitmap.png";
import home from "../../img/home.png";
import homeClick from "../../img/homeClick.png";
import search from "../../img/search.png";
import photo from "../../img/photo.png";
import like from "../../img/like.png";
import comments from "../../img/comments.png";
import profile from "../../img/profile.png";
import fill from "../../img/fill-2800.png";
import activity from "../../img/activity.png";

import "./Footer.scss";
export default class Footer extends Component {
  render() {
    const { history } = this.props;
    return (
      <footer className="fixed">
        <button className="home" onClick={() => history.push("/MainScreen")}>
          <img src={homeClick} alt="" />
        </button>
        <button className="search" onClick={() => history.push("/Search")}>
          <img src={search} alt="" />
        </button>
        <button className="photo" onClick={() => history.push("/Upload")}>
          <img src={photo} alt="" />
        </button>
        <button className="activity">
          <img src={activity} alt="" />
        </button>
        <button className="profile" onClick={() => history.push("/Profile")}>
          <img src={profile} alt="" />
        </button>
      </footer>
    );
  }
}
