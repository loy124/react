import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput/TodoInput';
export default class App extends Component {
  render() {
    return (
      <div>
        <PageTemplate>
          <TodoInput/>
        </PageTemplate>
      </div>
    )
  }
}
