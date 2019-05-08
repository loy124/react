import React from 'react';
import { Switch, Route} from 'react-router-dom';
import {ListPage, PostPage, EditorPage, NotFoundPage } from 'pages';
const App = () => {
  return (
    <div>
      {/* SWITCH를 사용하여 매칭된 라우터 하나만 보여준다 */}
      <Switch>
        <Route exact path="/" component={ListPage}/>
        <Route path="/page/:page" component={ListPage}/>
        <Route path="/tag/:tag/:page?" component={ListPage}/>
        <Route path="/post/:id" component={PostPage}/>
        <Route path="/editor" component={EditorPage}/>
        <Route component={NotFoundPage}/> 
        {/* //path를 지정하지 않았으므로 항상 렌더링된다*/}
      </Switch>
    </div>

  )
}

export default App;