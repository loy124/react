import React, { Component } from "react";

import home from "../../img/home.png";
import search from "../../img/search.png";
import photo from "../../img/photo.png";
import profile from "../../img/profile.png";
import profileClick from "../../img/profileClick.png";
import activity from "../../img/activity.png";
import invalid from "../../img/invalid-name.png";
import nikeshoes from "../../img/nike.PNG";
import xmark from "../../img/xmark.png";
import back from "../../img/back.png";
import "./Profile.scss";

export default class Profile extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="Rectangle-main">
        {/* NAV */}
        <div className="profile-nav">
          <button
            className="profile-btn"
            onClick={() => history.push("/mainScreen")}
          >
            <img src={back} alt="" />
          </button>
          <div className="profile-nav-text">Profile</div>

          <button
            className="profile-complete-btn"
            onClick={() => history.push("/mainScreen")}
          >
            Done
          </button>
        </div>
        {/* 본문 */}
        <section className="search-back">
          {/* 이미지 업로드 */}
          <div className="profile-image">
            <img src={nikeshoes} alt="" />
          </div>

          <div className="upload-profile"> + Upload Profile</div>
        </section>

        {/* FOOTER */}
        <footer className="fixed">
          <button className="home" onClick={() => history.push("/MainScreen")}>
            <img src={home} alt="" />
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
            <img src={profileClick} alt="" />
          </button>
        </footer>
      </div>
    );
  }
}
