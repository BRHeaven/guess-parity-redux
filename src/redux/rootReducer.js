import { combineReducers } from "redux";
import diceReducer from "./diceReducer";
import playerReducer from "./playerReducer";
const rootReducer = combineReducers({
    reducerDice : diceReducer,
    reducerPlayer : playerReducer,
});
export default rootReducer;