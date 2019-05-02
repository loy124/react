import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

const BoundaryHOC = ProtectComponent =>
  class BoundaryHOC extends Component {
    state = {
      hasError: false
    };
    componentDidCatch = () =>
      this.setState({
        hasError: true
      });
    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorFallback />;
      } else {
        return <ProtectComponent />;
      }
    }
  };

class ErrorMaker extends Component {
  state = {
    friends: ["병규", "진형", "병민", "규성", "태식"]
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };
  render() {
    const { friends } = this.state;
    return friends.map(friend => `${friend}`);
  }
}

const PErrorMaker = BoundaryHOC(ErrorMaker);

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const PPortals = BoundaryHOC(Portals);

const Message = () => "Just touch it!";

class ReturnTypes extends Component {
  render() {
    return " hello ";
  }
}

const ErrorFallback = () => "sorry something wrong";

class App extends Component {
  render() {
    return (
      <>
        <ReturnTypes />
        <PPortals />
        <PErrorMaker />
      </>
    );
  }
}

export default BoundaryHOC(App);
