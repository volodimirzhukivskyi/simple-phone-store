import { combineReducers } from "redux";
import reducerModal from "./ModalReducer/modalReducer";
import reducerApp from "./AppReducer/ReducerApp";

export default combineReducers({
  reducerApp,
  reducerModal,
});
