import React, { Component } from "react";

import home from "../../img/home.png";
import search from "../../img/search.png";
import photo from "../../img/photo.png";
import profile from "../../img/profile.png";
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
        <div className="profile-nav-bar">
        <button className="profile-btn" onClick={() => history.push('/mainScreen')}>
              <img src={back} alt="" />
            </button>
          <div className="profile-nav-text">Upload</div>

          <button
            className="profile-complete-btn"
            onClick={() => history.push("/mainScreen")}
          >
            Done
          </button>
        </div>
        <section className="search-back" >
        <div className="profile-image">
        </div>

        <div className= "upload-profile"> + Upload Profile</div>
        </section>

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
            <img src={profile} alt="" />
          </button>
        </footer>
      </div>
    );
  }
}
