import React, { Component } from 'react'
import bitmap from "../../img/bitmap.png";
import home from "../../img/home.png";
import  search from "../../img/search.png";
import  photo from "../../img/photo.png";
import  like from "../../img/like.png";
import  profile from "../../img/profile.png";

import "./MainScreen.scss";

export default class MainScreen extends Component {
  render() {
    const { history } = this.props;
    return (
<div className="back">
        <div className="Rectangle">
            <img src={bitmap} className="Bitmap1" alt="logo" />
            <div className="fixed" >
            <button className="home"><img src={home} alt=""/></button>
            <button className="search"><img src={search} alt=""/></button>
            <button className="photo"><img src={photo} alt=""/></button>
            <button className="like"><img src={like} alt=""/></button>
            <button className="profile"><img src={profile} alt=""/></button>
            </div>
        </div>
      </div>
    )
  }
}