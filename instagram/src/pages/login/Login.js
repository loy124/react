import React, { Component } from "react";
import bitmap from "../../img/bitmap.png";
import "./Login.scss";
import {
  PROJECT_NAME,
  SERVER_URL
} from "../../common/Constants";
import FireAuthUser from "../../api/FireAuthUser";
import RestAPI from '../../common/RestAPI';
import Fetch from '../../common/Fetch';
import { storageAvailable, getItem } from '../../common/StorageUtils';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };

    this.userManager = new FireAuthUser(
      SERVER_URL,
      PROJECT_NAME,
    );

    this.user = {
      id: 'laon@fiftybirdge.com',
      pw: 'react12#$',
    };

    console.log('usermanager', this.userManager);
  }

  componentDidMount() {
    this.getRestAPI();
    this.getPost();
  }

  getPost = async () => {
    const isStorage = storageAvailable();

    if (!isStorage) return null;

    const api = getItem('RestAPI');
    // query: seq(페이지번호), interval(갯수), pid_target(대상유저번호)
    const query = '?seq=0&interval=100&pid_target=145';
    console.log('api', api);
    const res = await Fetch(api.post_get_seq_public_user, query);

    console.log('145의 포스트 데이터', res);
  }

  getRestAPI = async () => {
    const res = await RestAPI();
    console.log('res', res);
    if (!res) return null;

    this.setState({
       isLoaded: true,
    });
  }

  signUp = async (id, pw) => {
    try {
      const bodyData = {
        user: {
          id,
          user_name: 'jaehun',
          user_type: 0
        },
        user_auth: {
          typ_login: 1,
          pw,
        }
      };

      const res = await this.userManager.signUp(bodyData);

      console.log('회원가입 응답 값', res);
    } catch (e) {
      console.log('err', e);
    }
  }

  login = async (id, pw) => {
    try {
      const res = await this.userManager.login(id, pw);

      console.log('로그인 응답 값', res);
    } catch (e) {
      console.log('login err', e);
    }
  }
  render() {
    
    const { history } = this.props;
    
    return (
      <div className="Rectangle-Introduction">
        <img src={bitmap} className="Bitmap" alt="logo" />
        <div className="Rect-box">
          <input className="Rect Rectangle-email" placeholder="email" />
          <input className="Rect Rectangle-password" placeholder="password" />
          <button
            className="Rectangle-login"
            onClick={() => history.push("/MainScreen")}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
