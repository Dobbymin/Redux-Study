import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';
import { INCREMENT } from '../store/index';

const Counter = () => {
    const number = 10;

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        dispatch({ type: INCREMENT });
    };

    const increaseHandler = () => {
        dispatch({ type: 'increase', value: number });
    };

    const decrementHandler = () => {
        dispatch({ type: 'decrement' });
    };

    const resetHandler = () => {
        dispatch({ type: 'reset' });
    };

    const toggleCounterHandler = () => {
        dispatch({ type: 'toggle' });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>-- {counter} --</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by {number}</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
            <button onClick={resetHandler}>Reset Counter</button>
        </main>
    );
};

export default Counter;

// class Counter extends Component {
//     incrementHandler() {
//         this.props.increment();
//     }

//     decrementHandler() {
//         this.props.decrement();
//     }

//     toggleCounterHandler() {}

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>-- {this.props.counter} --</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch({ type: 'increment' }),
//         decrement: () => dispatch({ type: 'decrement' }),
//     };
// };

// /* connect 함수는 2개의 parameter 가 필요함 */
// /* mapDispatchToProps는 실행하지는 않고 포인트만 하는 것 */
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
