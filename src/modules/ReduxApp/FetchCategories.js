import {
  addProductFailure,
  addCategoriesSuccess,
  isLoading,
} from "./AppReducer/actionsApp";

const loadCategories = (url) => {
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to load");
      })
      .then((el) => {
        dispatch(isLoading(false));
        dispatch(addCategoriesSuccess(el));
      })
      .catch((e) => {
        dispatch(addProductFailure(e.message));
      });
  };
};
export default loadCategories;
