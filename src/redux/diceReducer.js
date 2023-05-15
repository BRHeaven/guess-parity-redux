/* eslint-disable no-unreachable */
/* eslint-disable no-fallthrough */
/* eslint-disable no-lone-blocks */
const reducerDice = {
    diceArray : [
        {idDice: 1, value: 1},
        {idDice: 2, value: 1},
        {idDice: 3, value: 1}
    ]
};
const diceReducer = ( state = reducerDice, action ) => {
    let updateState = { }
    switch ( action.type ) {
        case "start_Round" : {
            updateState = state.diceArray;
            for ( let i = 0 ; i < updateState.length ; i++ ) {
                updateState[i].value = parseInt(Math.random() * (7 - 1) + 1);
            }
            state.diceArray = updateState;
            return {...state};
        }; break;
        default: ;
    }
    return {...state};
};
export default diceReducer;