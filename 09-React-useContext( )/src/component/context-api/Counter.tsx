import React, {useReducer} from 'react';

// The reducer function that handles state changes
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }
};

const initialState = {count: 0};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
        </div>
    );
};

export default Counter;
