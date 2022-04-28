export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_SHOPPING_CART = "ADD_SHOPPING_CART";
export const ADD_FAV_PRODUCTS_IDS = "ADD_FAV_PRODUCTS_IDS";
export const ACTION_TO_CONFIRM = "ACTION_TO_CONFIRM";
export const IS_LOADING = "IS_LOADING";
export const DELETE_FROM_SHOPPING = "DELETE_FROM_SHOPPING";
export const CHANGED_COUNTER_ITEM = "CHANGED_COUNTER";
export const CLEAR_ITEM = "CLEAR_ITEM";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";
export const PRICE_CALCULATOR = "PRICE_CALCULATOR";
export const addProductSuccess = (payload) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: payload,
});

export const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  payload: {
    error,
  },
});
export const addShoppingCart = (shopCard) => ({
  type: ADD_SHOPPING_CART,
  payload: shopCard,
});
export const addFavProductsIds = (favProductsIds) => ({
  type: ADD_FAV_PRODUCTS_IDS,
  payload: favProductsIds,
});

export const actionConfirm = (action) => ({
  type: ACTION_TO_CONFIRM,
  payload: action,
});
export const isLoading = (loading) => ({
  type: IS_LOADING,
  payload: loading,
});
export const deleteFromShopping = (shopping) => ({
  type: DELETE_FROM_SHOPPING,
  payload: shopping,
});
export const changedCountItem = (count) => ({
  type: CHANGED_COUNTER_ITEM,
  payload: count,
});
export const clearItem = () => ({
  type: CLEAR_ITEM,
});
export const priceCalculator = (priceEl) => ({
  type: PRICE_CALCULATOR,
  payload: priceEl,
});
