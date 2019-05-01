import React, { Component, Fragment } from 'react'

export default class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name:'이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    state = {
        editing:false,
    }

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    hanldeToggleEdit = () => {
       this.setState({ editing: !this.state.editing,
       })
    }
  render() {
      const style = {
          border: '1px solid black',
          padding: '8px',
          margin: '8px'
      };
      const {
          name, phone
      } = this.props.info;
      const { editing } = this.state;
    return (
      <div style={style}>
       { 
           editing ? (
            
           ) : (
            <Fragment>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </Fragment>
           )
       }
        <button onClick={this.handleRemove}>삭제</button>
        <button>수정</button>
      </div>
     
    )
  }
}

//handleRemove를 지정하지 않을때

//   render() {
//       const style = {
//           border: '1px solid black',
//           padding: '8px',
//           margin: '8px'
//       };

//       const {
//           name, phone,id
//       } = this.props.info;
// const { onRemove } = this.props;
//     return (
//       <div style={style}>
//         <div><b>{name}</b></div>
//         <div>{phone}</div>
//         <button onClick={
    // () => { onRemove(id) }
// }>삭제</button>
//       </div>
//     )
