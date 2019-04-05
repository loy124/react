import React, { Component } from 'react'

export default class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null; //ref 설정 부분
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    //props로 받아온 값을 state로 동기화 시키는 용도,컴포넌트 마운트하거나 props변경시 호출
    //부모에게서 받은 color값을 state에 동기화

    static getDerivedStateFromProps(nextProps, prevState) {
      if(nextProps.color !== prevState.color) {
        console.log('getDerivedStateFromProps');
          return { color : nextProps.color };   
      }
      return null; //state를 변경할 필요가없다면 null 반환
    }
    //컴포넌트를 만든 후 렌더링을 마친후에 실행한다.
    // SetTimeout,setInterval, 네트워크 요청 등의 비동기 작업을 처리하면된다
        componentDidMount() {
        console.log('componentDidMount');
    }
    //props또는 state를 변경했을때 리렌더링을 시작할지 여부를 지정하는 메서드
    //반드시 true or false 반환
    //false시 업데이트과정은 중지된다
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldCompoonentUpdate', nextProps, nextState);
        //숫자가 4면 리렌더링 하지 않습니다
        return nextState.number % 10 !==4;
    }
    //컴포넌트를 DOM에서 제거할 떄 실행된다. componentDidMount에서 등록한 이벤트,타이머, 직접생성한 DOM이 있다면 여기에서 제거작업을 해야한다.
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    hanldeClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    //render 메소드를 호출한후 DOM에 변화를 반영하기 바로 직전에 호출한다
    //반환값은 세번쨰파라미터 snapshot에서 전달받으며 업데이트직전값을 참고할떄 활용된다 (스크롤바 위치 유지)
    //DOM에 변화가 일어나기 직전의 색상 속성을 snapshot값으로 반환하여 componentDidUpdate에서 조회가 가능 하게 하였다.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color
        }
        return null;
    }
    //리렌더링을 완료한 후 실행, 업데이트가 끝난 직후이므로 DOM관련 처리를 해도 무방하다
    //getSnapShotBeforeUpdate엣 반환한 값이 있다면 여기에서 snapshot 값을 전달 받을 수 있다.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트 되기 직전 색상', snapshot);
        }
    }
  render() {
      console.log('render');
      const style = {
          color: this.props.color
      };
    return (
      <div>
          <h1 style={style} ref={ref => this.myRef=ref}>
            {this.state.number}
          </h1>
          <p>color: {this.state.color}</p>
          <button onClick={this.hanldeClick}>
          더하기
          </button>
      </div>
    )
  }
}
