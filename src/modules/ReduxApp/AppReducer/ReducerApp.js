import {
  ADD_PRODUCT_SUCCESS,
  IS_LOADING,
  ADD_PRODUCT_FAILURE,
  ADD_SHOPPING_CART,
  CHANGED_COUNTER_ITEM,
  ACTION_TO_CONFIRM,
  ADD_FAV_PRODUCTS_IDS,
  DELETE_FROM_SHOPPING,
  CLEAR_ITEM,
  PRICE_CALCULATOR,
  ADD_CATEGORIES_SUCCESS,
} from "./actionsApp";

const INITIAL_STATE = {
  cards: [],
  error: null,
  shoppingCart: localStorage.getItem("shoppCart")
    ? JSON.parse(localStorage.getItem("shoppCart"))
    : [],
  favProductsIds: localStorage.getItem("favProducts")
    ? JSON.parse(localStorage.getItem("favProducts"))
    : [],
  actionToConfirm: false,
  isLoading: false,
  category: [],
};
export const reducerApp = (store = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS:
      return {
        ...store,
        error: null,
        cards: [...action.payload],
      };
    case ADD_CATEGORIES_SUCCESS:
      return {
        ...store,
        error: null,
        category: [...action.payload],
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...store,
        error: action.payload.error,
      };
    case ADD_SHOPPING_CART:
      return {
        ...store,
        shoppingCart: store.shoppingCart.find(
          (item) => item.vendorCode === action.payload
        )
          ? store.shoppingCart.map((item) => {
              if (item.vendorCode === action.payload) {
                return { vendorCode: action.payload, count: item.count + 1 };
              } else {
                return item;
              }
            })
          : [...store.shoppingCart, { vendorCode: action.payload, count: 1 }],
      };

    case ADD_FAV_PRODUCTS_IDS:
      return {
        ...store,
        favProductsIds: action.payload,
      };
    case ACTION_TO_CONFIRM:
      return {
        ...store,
        actionToConfirm: action.payload,
      };
    case IS_LOADING:
      return {
        ...store,
        isLoading: action.payload,
      };
    case DELETE_FROM_SHOPPING:
      return {
        ...store,
        shoppingCart: store.shoppingCart.filter((n) =>
          n.vendorCode === action.payload ? false : true
        ),
      };
    case CHANGED_COUNTER_ITEM:
      return {
        ...store,
        shoppingCart: action.payload,
      };
    case CLEAR_ITEM:
      return {
        ...store,
        shoppingCart: [],
      };
    case PRICE_CALCULATOR:
      return {
        ...store,
      };
    default:
      return store;
  }
};
export default reducerApp;
