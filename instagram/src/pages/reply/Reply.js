import React, { Component } from "react";

import home from "../../img/home.png";
import search from "../../img/search.png";
import photo from "../../img/photo.png";
import profile from "../../img/profile.png";
import activity from "../../img/activity.png";
import invalid from "../../img/invalid-name.png";
import lower from "../../img/lower.png";
import back from "../../img/back.png";
import "./Reply.scss";

export default class Reply extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="Rectangle-main">
      {/* NAV */}
        <div className="reply-nav-bar">
          <button
            className="reply-btn"
            onClick={() => history.push("/mainScreen")}
          >
            <img src={back} alt="" />
          </button>
          <div className="reply-nav-text">Reply</div>
        </div>
        {/* 본문 */}
        <section className="search-back">
        {/* 댓글 */}
          <article>
            <div className="reply-tags">
              <div>
                <div className="Oval" />
              </div>
              <div>
                <div className="reply-text">justin</div>
                <div className="reply-post">
                  Our curated library of royalty-free music gives you the
                  polished feel of the big production houses. All our tracks are
                  exclusive and copyright clear
                </div>
              </div>
            </div>
          </article>
          {/* 댓글 중복 */}
          <article>
            <div className="reply-tags">
              <div>
                <div className="Oval" />
              </div>
              <div>
                <div className="reply-text">justin</div>
                <div className="reply-post">
                  Our curated library of royalty-free music gives you the
                  polished feel of the big production houses. All our tracks are
                  exclusive and copyright clear
                </div>
              </div>
            </div>
          </article>
          {/* 댓글의 댓글 대댓글 */}
          <article>
            <div className="re-reply-tags">
              <div>
                <div className="Oval" />
              </div>
              <div>
                <div className="reply-text">justin</div>
                <div className="reply-post">whatever my name is john</div>
              </div>
            </div>
          </article>
        </section>

        {/* 텍스트 전송및 키보드 사진*/}
        <footer className="lower-fixed">
          <div className="Bar-input">
            <input className="Rectangle-input" placeholder="text-here" />
            <span className="Send">Send</span>
          </div>
          <img src={lower} alt="" />
        </footer>
      </div>
    );
  }
}
