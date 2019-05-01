import React, {Component} from 'react';
// import withSplitting from './withSplitting';
import { Route, Link } from 'react-router-dom';
import { About, Home } from './pages'

// const SplitMe = withSplitting(()=> import('./SplitMe'));

class App extends Component {
  // state = {
  //   visible: false
  // };
  // handleClick = () => {
  //   this.setState({
  //     visible: true
  //   });
  // };
  render() {
    // const { visible } = this.state;
    // return (
    //   <div>
    //     <button onClick={this.handleClick}>Click Me</button>
    //     {visible && <SplitMe />}
    //   </div>
    // );
    return(
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to ='/about'>About</Link></li>
        </ul>
      <hr />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      </div>
    )
  }
}

export default App;