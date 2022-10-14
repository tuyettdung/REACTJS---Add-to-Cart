import { createStore, combineReducers } from "redux";
import {gioHangReducer} from "./reducers/gioHangReducer";


const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
    gioHangReducer: gioHangReducer
  });
  
  export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );