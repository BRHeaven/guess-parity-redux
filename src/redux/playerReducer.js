/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-fallthrough */
const reducerPlayer = {
    player : {win: 0, lose:0, round: 0, select: "loading..."}
}
const playerReducer = ( state = reducerPlayer, action ) => {
    switch ( action.type ) {
        case "set_Guess_Parity" : {
            let updateState = state.player;
            if ( action.flag === true ) {
                updateState.select = "event";
            } else {
                updateState.select = "odd";
            };
            state.player = updateState;
            return {...state};
        }; break;
        case "check_Result" : {
            let updateState = state.player;
            let value = 0;
            for ( let i = 0; i < action.value.length; i++ ) {
                value += action.value[i].value;
            };
            if ( updateState.select !== "loading...") {
                if (updateState.select === "event") {
                    if ( value % 2 === 0 ) {
                        updateState.win += 1;
                    } else {
                        updateState.lose += 1;
                    };
                    updateState.round += 1;
                } else {
                    if ( value % 2 === 0) {
                        updateState.lose += 1;
                    } else {
                        updateState.win += 1;
                    }
                    updateState.round += 1;
                };
            } else {
                return {...state};
            }
            state.player = updateState;
            return {...state};
        }; break;
        default: ;
    };
    return {...state};
}
export default playerReducer;