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
        
          <div className="reply-nav-bar">
            <button className="reply-btn" onClick={() => history.push('/mainScreen')}>
              <img src={back} alt="" />
            </button>
            <div className="reply-nav-text">Reply</div>
          </div>
     
        <section className="search-back">
          <article>
            <div className="reply-tags">
              <div className="line">
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

          <article>
            <div className="reply-tags">
              <div className="line">
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

          <article>
            <div className="re-reply-tags">
              <div className="line">
                <div className="Oval" />
              </div>
              <div>
                <div className="reply-text">justin</div>
                <div className="reply-post">whatever my name is john</div>
              </div>
            </div>
          </article>
        </section>

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
