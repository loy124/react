import React, { Component } from "react";

import home from "../../img/home.png";
import searchClick from "../../img/searchClick.png";
import photo from "../../img/photo.png";
import profile from "../../img/profile.png";
import activity from "../../img/activity.png";
import invalid from "../../img/invalid-name.png";
import "./Search.scss";

import { getItem } from "../../common/StorageUtils";
import Fetch from "../../common/Fetch";

const renderEachTag = (data, key) => (
  <div className="tags" key={key}>
    <div>
      <img className="tag-img" src={invalid} alt="" />
    </div>
    <div>
      <div className="tag-text">{data.keyword}</div>
      <div className="tag-post">{data.pid_tag}</div>
      <div className="tag-line" />
    </div>
  </div>
);

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData(0);
  }

  getData = async seq => {
    const api = getItem("RestAPI");
    const userData = getItem("userData");
    const query = `?pid_user=${"pid_user"}`;
    try {
      const res = await Fetch(api.tag_get_tag_statis_user, query);
      this.setState({
        data: res
      });
    } catch (e) {
      console.log(e);
    }
  };

  renderPost = () => {
    // const { history } = this.props;
    const { data } = this.state;
    const dataMapping = data.map(item => {
      return renderEachTag(item);
    });

    return dataMapping;
  };
  render() {
    const { history } = this.props;
    return (
      <div className="Rectangle-main">
        {/* NAV */}
        <div className="search-nav">
          <input className="search-input" placeholder="search new tag" />
          <span className="Cancel">Cancel</span>
        </div>

        {/* 본문 */}
        <section className="search-back">
          {/* 태그 */}
          {this.renderPost()}
        </section>
        {/* FOOTER */}
        <footer className="fixed">
          <button className="home" onClick={() => history.push("/MainScreen")}>
            <img src={home} alt="" />
          </button>
          <button className="search" onClick={() => history.push("/Search")}>
            <img src={searchClick} alt="" />
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
