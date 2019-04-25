import React, { Component } from "react";
import bitmap from "../../img/bitmap.png";
import homeClick from "../../img/homeClick.png";
import search from "../../img/search.png";
import photo from "../../img/photo.png";
import like from "../../img/like.png";
import comments from "../../img/comments.png";
import profile from "../../img/profile.png";
import fill from "../../img/fill-2800.png";
import activity from "../../img/activity.png";
import winter from "../../img/winter.jpg";

import "./MainScreen.scss";

import { getItem } from "../../common/StorageUtils";
import Fetch from "../../common/Fetch";

const renderEachPost = (history, data ) => (
  <div className="story">
    {/* NAME & LOCATION */}
    <div className="top" >
      <div className="Avatar">
        <img src={winter} alt="" />
      </div>
      <span className="location">
        <div className="story-nickname">{data.pid_user}</div>
        <div className="story-location">
          <img src={fill} alt="" /> Kauai-Hawaii
        </div>
      </span>
    </div>
    {/* IMAGE */}
    <section className="img">
      <article>
        <img
          className="image"
          src={JSON.parse(data.uri_json).location}
          alt=""
        />
      </article>
    </section>

    {/* 본문및 내용, 태그 */}
    {/* LIKE & COMMENTS */}
    <article className="content-form">
      <button className="like">
        <img src={like} alt="" />
      </button>
      <button className="comments" onClick={() => history.push("/Reply")}>
        <img src={comments} alt="" />
      </button>
      <div className="content-name">{data.pid_user}</div>
      <div className="content">{data.desc}</div>
      <div className="content-tag">{data.tag_string}</div>
      <div className="content-comments">View all comments</div>
    </article>
  </div>
);

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.limit = 10;
  }

  componentDidMount() {
    this.getData(0);
  }

  getData = async seq => {
    const api = getItem("RestAPI");
    const userData = getItem("userData");

    const query = `?seq=${seq}&interval=${this.limit}`;

    try {
      const res = await Fetch(api.post_get_seq, query);
      this.setState({
        data: res
      });
    } catch (e) {
      console.log(e);
    }
  };

  renderPost = () => {
    const { history } = this.props;
    const { data } = this.state;
    const dataMapping = data.map(item => {
      return renderEachPost(history, item);
    });

    return dataMapping;
  };

  render() {
    const { history } = this.props;
    return (
      <div className="Rectangle-main">
        {/* NAV */}
        <div className="main-nav">
          <img src={bitmap} className="Bitmap1" alt="logo" />
        </div>
        {/* STORY */}
        {this.renderPost()}

        {/* FOOTER */}
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
      </div>
    );
  }
}
