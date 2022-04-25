import { SHOP_MODAL, SHOP_FORM } from "./modalAction";

const INITIAL_STATE = {
  shopForm: false,
  shopModal: false,
};
const reducerModal = (store = INITIAL_STATE, action) => {
  {
    switch (action.type) {
      case SHOP_MODAL:
        return { ...store, shopModal: action.payload };
      case SHOP_FORM:
        return { ...store, shopForm: action.payload };

      default:
        return store;
    }
  }
};
export default reducerModal;
