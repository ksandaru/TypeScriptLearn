import {useReducer} from "react";

type counterState = {
    count: number
}
type counterAction = {
    type: 'increment'| 'decrement'| 'reset'
    payload: number
}

const initialCount:number = 0


function reducer(state: counterState, action: counterAction):any {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload};
        case 'decrement':
            return {count: state.count - action.payload};
        case 'reset':
            return init(action.payload);


    }
}
function init(initialCount: number) {
    return {count: initialCount}

}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialCount, init)
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>Increment-10</button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>Decrement-10</button>
            <button onClick={() => dispatch({type: 'reset', payload: initialCount})}>Reset</button>
        </div>
    )
}
