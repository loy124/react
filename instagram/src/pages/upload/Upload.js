import React, { Component } from "react";

import { getItem } from "../../common/StorageUtils";
import Fetch from "../../common/Fetch";

import home from "../../img/home.png";
import search from "../../img/search.png";
import photoClick from "../../img/photoClick.png";
import profile from "../../img/profile.png";
import activity from "../../img/activity.png";
import xmark from "../../img/xmark.png";
import "./Upload.scss";

export default class Upload extends Component {
  constructor(props) {
    super(props);

    this.desc = null;
    this.tag = null;

    this.state = { file: null };
  }
  handleFileChange = e => {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    });
    console.log(1);
  };
  handleFileRemove = e => {
    this.setState({
      file: ""
    });
  };

  post = async () => {
    const api = getItem("RestAPI");
    const userData = getItem("userData");
    const body = {
      post: {
        pid_user: userData.user.pid_user,
        title: "temp",
        uri_json: JSON.stringify({ location: "" }),
        desc: this.desc.value,
        tag_string: this.tag.value.replace("||", "#")
      }
    };

    try {
      const res = await Fetch(api.post_insert, "", body);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { history } = this.props;
    return (
      <div className="Rectangle-main">
        {/* NAV */}
        <div className="upload-nav">
          <div className="upload-nav-text">Upload</div>

          <button className="upload-btn" onClick={this.post}>
            Done
          </button>
        </div>

        {/* 본문 */}
        <section className="search-back">
          {/* 이미지 추가 */}
          <label className="add-image">
            + add image
            <input
              type="file"
              onChange={this.handleFileChange}
              ref={ref => (this.file = ref)}
            />
          </label>

          <div className="image-content">
            <div className="push-image">
              <div className="added-image">
                <img src={this.state.file} alt="" />
              </div>
              <img
                className="xmark"
                src={xmark}
                alt=""
                onClick={this.handleFileRemove}
              />
            </div>
          </div>

          {/* 글 본문및 태그 */}
          <div className="upload-inputs">
            <input
              className="upload-input upload-input-descreption"
              type="text"
              placeholder="descreption"
              ref={ref => (this.desc = ref)}
            />

            <input
              className="upload-input upload-input-tag"
              type="text"
              placeholder="tag"
              ref={ref => (this.tag = ref)}
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
            <img src={photoClick} alt="" />
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
