import React, { Component } from 'react'

export default class PostsForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            body:''
        };
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const post ={
            title:this.state.title,
            body:this.state.body
        }
    

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(post)
    })
    .then(res=>res.json())
    .then(data=>console.log(data));
}
      render() {
          const {title, body} = this.state;
          const {handleChange, handleSubmit} = this;
    return (
      <div>
        <h4>new Post</h4>
        <form onSubmit={handleSubmit}>
        <div>
            <label>title:</label>
            <input type="text" name="title" value={title} onChange={handleChange}/>
        </div>
        <div>
            <label>body:</label>
            <input type="text" name="body" value={body} onChange={handleChange}/>
        </div>
        <div><button type="submit">전송</button></div>
        </form>
      </div>
    )
  }
}
