import { combineReducers } from "redux";

import shopReducer from 'redux/shopping/shopping-reducer'



const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer