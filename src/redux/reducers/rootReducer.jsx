import {combineReducers} from 'redux'; 
import {gioHangReducer} from "../reducers/gioHangReducer"

export const rootReducer = combineReducers({
    gioHangReducer,
})