let state = 0;

function updateState(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENT') {
        return state - action.amount;
    } else {
        return state;
    }
}

const incrementation = {type: 'INCREMENT', amount: 5};
const decrementation = {type: 'DECREMENT', amount: 3};

state = updateState(state, incrementation);
console.log(state);

state = updateState(state, decrementation);
console.log(state);

state = updateState(state, {});
console.log(state);
