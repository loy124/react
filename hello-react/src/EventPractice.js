import React, { Component } from 'react'

export default class  extends Component {

    state = {
        username:'',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //[]: key값 
        });
    }
    hanldeClick = () => {
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            username:'',
            message: ''
        });
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.hanldeClick();
        }
    }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
            type='text'
            name='username'
            placeholder='유저 이름'
            value={this.state.username}
            onChange={this.handleChange}
            />
        <input
            type='text'
            name='message'
            placeholder='아무거나 입력해보세요'
            value={this.state.message}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            />
            <button onClick={this.hanldeClick}>확인</button>
      </div>
    )
  }
}
