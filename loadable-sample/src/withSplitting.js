import React, { Component } from 'react'

const withSplitting = getComponent => {
 class withSplitting extends Component {
  state = {
      Splitted:null
  };

  constructor(props){
    super(props);
    getComponent().then(({ default: Splitted}) => {
      this.setState({
        Splitted
      });
    });
  }
  render() {
    const {Splitted} = this.state;
    if(!Splitted) {
      return null;
    }
    return (
      <div>
        <Splitted {...this.props} />
      </div>
    )
  }
}
return withSplitting;
};

export default withSplitting;