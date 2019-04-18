import React, { Component } from 'react'

export default class Posts extends Component {
    constructor(props) {
        super(props);
        console.log('constructor !!');
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({
                posts:data
            }));
    }
    render() {
        console.log('render!');
        const { posts } = this.state;
        const postList = posts.map((post) => (
            <div key={post.id} id = {post.id}>
            <h4>{post.title}</h4>
            <h4>{post.body}</h4>
            </div>
        ))
    return (
        
      <div>
        {postList}
      </div>
    )
  }
}
