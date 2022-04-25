import {
  addProductFailure,
  addProductSuccess,
  isLoading,
} from "./AppReducer/actionsApp";

const loadUser = () => {
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch("./products.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to load");
      })
      .then((cards) => {
        dispatch(isLoading(false));
        dispatch(addProductSuccess(cards));
      })
      .catch((e) => {
        dispatch(addProductFailure(e.message));
      });
  };
};
export default loadUser;
