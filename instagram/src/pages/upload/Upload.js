import React, { Component } from "react";

import home from "../../img/home.png";
import search from "../../img/search.png";
import photo from "../../img/photo.png";
import profile from "../../img/profile.png";
import activity from "../../img/activity.png";
import invalid from "../../img/invalid-name.png";
import nikeshoes from "../../img/nike.PNG";
import xmark from "../../img/xmark.png";
import "./Upload.scss";

export default class Upload extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="Rectangle-main">
      {/* NAV */}
        <div className="upload-nav">
          <div className="upload-nav-text">Upload</div>

          <button
            className="upload-btn"
            onClick={() => history.push("/mainScreen")}
          >
            Done
          </button>
        </div>
        
        {/* 본문 */}
        <section className="search-back">

        {/* 이미지 추가 */}
          <div className="add-image">+ add image</div>

          <div className="image-content">
            <div className="push-image">
              <div className="added-image">
                <img src={nikeshoes} alt="" />
              </div>
              <img className="xmark" src={xmark} alt="" />
            </div>
          </div>

          {/* 글 본문및 태그 */}
          <div className="upload-inputs">
            <input
              className="upload-input upload-input-descreption"
              type="text"
              placeholder="descreption"
            />

            
            <input
              className="upload-input upload-input-tag"
              type="text"
              placeholder="tag"
            />
          </div>
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
            <img src={profile} alt="" />
          </button>
        </footer>
      </div>
    );
  }
}
