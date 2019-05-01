import React, { Component } from 'react'
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';


export default class App extends Component {
  id = 1 //id는 렌더링 될 필요가 없기떄문에 state에 들어가지 않아도 된다.
  state = {
  information: [
    {id: 0,
    name: '이온유',
    phone: '010-9536-5780'}
  ]
  
}
  hanldeCreate = (data) => {
    const { information } = this.state;
    this.setState({
    information: information.concat({ id: this.id++, ...data})  
    })
    // console.log(data);
  }
 
  handleRmove = (id) => {
    const { information } = this.state;
    this.setState({
      information:information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if ( info.id === id ) {
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    })
  }
  render() {
    const {information} = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.hanldeCreate}/>
        <PhoneInfoList data={information}
        onRemove={this.handleRmove}
        onUpdata={this.handleUpdate}/>
      </div>
    )
  }
}
