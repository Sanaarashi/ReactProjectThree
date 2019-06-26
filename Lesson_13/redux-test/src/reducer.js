const reducer = (state = 0, action) => {
    switch(action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'CLR':
            return state + action.value;
        default:
            return state;
    }
};

export default reducer;