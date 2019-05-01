import React, { Component } from 'react'

export default class PhoneForm extends Component {
    state={
        name:'',
        phone:''
    }
    hanldeChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    hanldeSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);

        this.setState({
            name: '',
            phone: ''
        })
    }
  render() {
     
    return (
      <form onSubmit={this.hanldeSubmit}>
        <input name="name"
        placeholder="이름"
        value={this.state.name}
        onChange={this.hanldeChange}/>
        
        <input name="phone"
        placeholder="전화번호"
        value={this.state.phone}
        onChange={this.hanldeChange}/>
      <div>
      </div>
      <button type="submit">등록</button>
      </form>
      
    )
  }
}
