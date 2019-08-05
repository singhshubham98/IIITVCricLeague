import AuthReducer from "./authReducers";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  auth: AuthReducer,
  firestore: firestoreReducer
});

export default RootReducer;
