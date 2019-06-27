import React, { Component } from "react";

const getFakeMembers = count =>
  new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status == 200
        ? resolves(JSON.parse(request.response).results)
        : rejects(Error(request.statusText));
    request.onerror = err => rejects(err);
    request.send();
  });

const Member = ({ email, picture, name, location }) => (
  <div className="member">
    <img src={picture.thumbnail} alt="" />
    <h1>
      {name.first} {name.last}{" "}
    </h1>
    <p>
      <a href={"mailto:" + email}>{email}</a>
    </p>
    <p>
      {location.city}, {location.state}
    </p>
  </div>
);

export default class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    getFakeMembers(this.props.count).then(
      members => {
        this.setState({ members, loading: false });
      },
      error => {
        this.setState({ error, loading: false });
      }
    );
  }

  render() {
    const { members, loading, error } = this.state;
    return (
      <div className="member-list">
        {loading ? (
          <span>멤버 로딩중</span>
        ) : members.length ? (
          members.map((user, i) => <Member key={i} {...user} />)
        ) : (
          <span>0 멤버 로딩됨..</span>
        )}
        {error ? <p>멤버 로딩 오류:{error}</p> : ""}
      </div>
    );
  }
}
