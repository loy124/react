import React, { Component } from "react";


import home from "../../img/home.png";
import search from "../../img/search.png";
import photo from "../../img/photo.png";
import profile from "../../img/profile.png";
import activity from "../../img/activity.png";
import invalid from "../../img/invalid-name.png"
import lower from "../../img/lower.png"
import "./Reply.scss";

export default class Reply extends Component {
  render() {
    const { history } = this.props;
    return (
     
        <div className="Rectangle">
        
        <section className="search-back">
        <div className="tags">
        <div class="line">
        <img className="tag-img"src={invalid} alt="" />
        </div>
        <div>
        <div className="tag-text">lamnorghini</div>
        <div className="tag-post">380,384 posts</div>
        <div className="tag-box"></div>
        </div>
        </div>
        <div className="tags">
        <div class="line">
        <img className="tag-img"src={invalid} alt="" />
        </div>
        <div>
        <div className="tag-text">lamnorghiniiniaventador</div>
        <div className="tag-post">17,075 posts</div>
        <div className="tag-box"></div>
        </div>
        </div>
        </section>
        
        
          <footer className="lower-fixed">
            <div class="Bar-input">
            <input className='Rectangle-input' placeholder='text-here'/>
            <span className="Send">Send</span>
            </div>
            <img src={lower} alt="" />
            {/* <button className="home" onClick={() => history.push("/MainScreen")}>
              <img src={home} alt="" />
            </button>
            <button className="search" onClick={() => history.push("/Search")} >
              <img src={search} alt="" />
            </button>
            <button className="photo">
              <img src={photo} alt="" />
            </button>
            <button className="activity">
              <img src={activity} alt="" />
            </button>
            <button className="profile">
              <img src={profile} alt="" />
            </button> */}
          </footer>
        </div>
    
    );
  }
}
