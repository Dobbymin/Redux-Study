import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    /* 1 증가 */
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        };
    }

    /* n 증가 */
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter,
        };
    }
    /* 1 감소 */
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }

    /* 리셋 */
    if (action.type === 'reset') {
        return {
            counter: (state.counter = 0),
            showCounter: state.showCounter,
        };
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter,
        };
    }

    return state;
};

const store = createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

export default store;
