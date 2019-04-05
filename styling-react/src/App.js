import React, { Component } from 'react';
import classNames from 'classnames/bind'; //yarn add classnames
import styles from './App.scss';
const cx = classNames.bind(styles);
class App extends Component {
  render() {
    const isBlue = true;
    return (
      // <div className={[styles.box, styles.blue].join(' ')}>
      <div className={cx('box', {
        blue: isBlue
      })}>
      <div className={cx('box-inside')}/>

      </div>
    );
  }
}

export default App;
