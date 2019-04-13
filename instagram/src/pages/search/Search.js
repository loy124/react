import React, { Component } from "react";


import home from "../../img/home.png";
import search from "../../img/search.png";
import photo from "../../img/photo.png";
import profile from "../../img/profile.png";
import activity from "../../img/activity.png";
import invalid from "../../img/invalid-name.png"
import "./Search.scss";

export default class Search extends Component {
  render() {
    const { history } = this.props;
    return (
    
        <div className="Rectangle-main">
        <div className='Bar'>
        <input className='Rectangle-121' placeholder='search new tag'/>
        <span className="Cancel">Cancel</span>
        </div>
        <section className="search-back">
        <div className="tags">
        <div className="line">
        <img className="tag-img"src={invalid} alt="" />
        </div>
        <div>
        <div className="tag-text">lamnorghini</div>
        <div className="tag-post">380,384 posts</div>
        <div className="tag-box"></div>
        </div>
        </div>
        <div className="tags">
        <div className="line">
        <img className="tag-img"src={invalid} alt="" />
        </div>
        <div>
        <div className="tag-text">lamnorghiniiniaventador</div>
        <div className="tag-post">17,075 posts</div>
        <div className="tag-box"></div>
        </div>
        </div>
        <div className="tags">
        <div className="line">
        <img className="tag-img"src={invalid} alt="" />
        </div>
        <div>
        <div className="tag-text">lamnorghiniguracan</div>
        <div className="tag-post">10,070 posts</div>
        <div className="tag-box"></div>
        </div>
        </div>     
        <div className="tags">
        <div className="line">
        <img className="tag-img"src={invalid} alt="" />
        </div>
        <div>
        <div className="tag-text">lamnorghinimurcielago</div>
        <div className="tag-post">2,241 posts</div>
        <div className="tag-box"></div>
        </div>
        </div>
        <div className="tags">
        <div className="line">
        <img className="tag-img"src={invalid} alt="" />
        </div>
        <div>
        <div className="tag-text">lamnorghinigallardo</div>
        <div className="tag-post">5,765 posts</div>
        <div className="tag-box"></div>
        </div>
        </div>
        <div className="tags">
        <div className="line">
        <img className="tag-img"src={invalid} alt="" />
        </div>
        <div>
        <div className="tag-text">lamnorghininiveneno</div>
        <div className="tag-post">1,239 posts</div>
        <div className="tag-box"></div>
        </div>
        </div>
        <div className="tags">
        <div className="line">
        <img className="tag-img"src={invalid} alt="" />
        </div>
        <div>
        <div className="tag-text">lamnorghinijakarta</div>
        <div className="tag-post">1,050 posts</div>
        <div className="tag-box"></div>
        </div>
        </div>
        <div className="tags">
        <div className="line">
        <img className="tag-img"src={invalid} alt="" />
        </div>
        <div>
        <div className="tag-text">lamnorghini1</div>
        <div className="tag-post">380,384 posts</div>
        <div className="tag-box"></div>
        </div>
        </div>
        <div className="tags">
        <div className="line">
        <img className="tag-img"src={invalid} alt="" />
        </div>
        <div>
        <div className="tag-text">lamnorghini</div>
        <div className="tag-post">380,384 posts</div>
        <div className="tag-box"></div>
        </div>
        </div>

        </section>
        
          <footer className="fixed">
            <button className="home" onClick={() => history.push("/MainScreen")}>
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
            </button>
          </footer>
        </div>
      
    );
  }
}
