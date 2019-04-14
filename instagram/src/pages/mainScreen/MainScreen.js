import React, { Component } from "react";
import bitmap from "../../img/bitmap.png";
import home from "../../img/home.png";
import search from "../../img/search.png";
import photo from "../../img/photo.png";
import like from "../../img/like.png";
import comments from "../../img/comments.png";
import profile from "../../img/profile.png";
import fill from "../../img/fill-2800.png";
import activity from "../../img/activity.png";
import blue from "../../img/blue.jpg";
import winter from "../../img/winter.jpg";
import mountain from "../../img/mountain.jpg";

import "./MainScreen.scss";

export default class MainScreen extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="Rectangle-main">
        {/* NAV */}
        <div className="main-nav">
          <img src={bitmap} className="Bitmap1" alt="logo" />
        </div>
        {/* STORY */}
        <div className="story">
          {/* NAME & LOCATION */}
          <div className="top">
            <div className="Avatar">
              <img src={winter} alt="" />
            </div>
            <span className="location">
              <div className="story-nickname">sarahannloreth</div>
              <div className="story-location">
                <img src={fill} alt="" /> Kauai-Hawaii
              </div>
            </span>
          </div>
          {/* IMAGE */}
          <section className="img">
            <article>
              <img className="image" src={winter} alt="" />
            </article>
            {/* LIKE & COMMENTS */}
            <article className="status">
              <button className="like">
                <img src={like} alt="" />
              </button>
              <button
                className="comments"
                onClick={() => history.push("/Reply")}
              >
                <img src={comments} alt="" />
              </button>
            </article>
            {/* 본문및 내용, 태그 */}
            <article>
              <div className="text-form">
                <div className="content-name">sarahannloreth</div>
                <div className="content">
                  the edge of New Zealand! we're so excited! i will remember
                  this amazing view forever
                </div>
                <div className="content-tag">
                  #newzealand #sight #trip #family #freinds #yolo
                </div>
                <div className="content-comments">View all comments</div>
              </div>
            </article>
          </section>
        </div>
        {/* 반복 */}
        <div className="story">
          <div className="top">
            <div className="Avatar"><img src={blue} alt="" /></div>
            <span className="location">
              <div className="story-nickname">sarahannloreth</div>
              <div className="story-location">
                <img src={fill} alt="" /> Kauai-Hawaii
              </div>
            </span>
          </div>

          <section className="img">
            <article>
              <img className="image" src={blue} alt="" />
            </article>
            <article className="status">
              <button className="like">
                <img src={like} alt="" />
              </button>
              <button
                className="comments"
                onClick={() => history.push("/Reply")}
              >
                <img src={comments} alt="" />
              </button>
            </article>
            <article>
              <div className="text-form">
                <div className="content-name">sarahannloreth</div>
                <div className="content">
                  the edge of New Zealand! we're so excited! i will remember
                  this amazing view forever
                </div>
                <div className="content-tag">
                  #newzealand #sight #trip #family #freinds #yolo
                </div>
                <div className="content-comments">View all comments</div>
              </div>
            </article>
          </section>
        </div>

        <div className="story">
          <div className="top">
            <div className="Avatar">
            <img className="image" src={mountain} alt="" />
            </div>
            <span className="location">
              <div className="story-nickname">sarahannloreth</div>
              <div className="story-location">
                <img src={fill} alt="" /> Kauai-Hawaii
              </div>
            </span>
          </div>
          <section className="img">
            <article>
              <img className="image" src={mountain} alt="" />
            </article>
            <article className="status">
              <button className="like">
                <img src={like} alt="" />
              </button>
              <button
                className="comments"
                onClick={() => history.push("/Reply")}
              >
                <img src={comments} alt="" />
              </button>
            </article>
            <article>
              <div className="text-form">
                <div className="content-name">sarahannloreth</div>
                <div className="content">
                  the edge of New Zealand! we're so excited! i will remember
                  this amazing view forever
                </div>
                <div className="content-tag">
                  #newzealand #sight #trip #family #freinds #yolo
                </div>
                <div className="content-comments">View all comments</div>
              </div>
            </article>
          </section>
        </div>

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
