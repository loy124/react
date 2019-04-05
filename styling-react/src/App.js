import React, { Component } from 'react';
import classNames from 'classnames/bind'; //yarn add classnames
import styles from './AP.module.css';
const cx = classNames.bind(styles);
class App extends Component {
  render() {
    const isBlue = false;
    return (
      // <div className={[styles.box, styles.blue].join(' ')}>
      <div className={cx('box', {
        blue: isBlue
      })}>

      </div>
    );
  }
}

export default App;
