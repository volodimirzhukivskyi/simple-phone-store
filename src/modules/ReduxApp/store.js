import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./combineReducer";
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem(
    "shoppCart",
    JSON.stringify(store.getState().reducerApp.shoppingCart)
  );
  localStorage.setItem(
    "favProducts",
    JSON.stringify(store.getState().reducerApp.favProductsIds)
  );
});
