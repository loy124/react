import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cd6',
        '#1098ad',
        '#0ca678',
        '#37b24d',
        '#74b816',
        '#f59f00',
        '#f76707'
    ];
    const random = Math.floor(Math.random() * 13);

    return colors[random];
}

//store 안에 state값을 props로 연결
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

// 액션 생성 함수를 사용해서 액션을 생성하고 dispatch후 이를 props로 연결

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

//Counter 컴포넌트의 Contatiner 컴포넌트
//Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역활
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;