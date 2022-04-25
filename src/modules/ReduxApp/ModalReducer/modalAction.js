export const SHOP_FORM = "SHOP_FORM";
export const SHOP_MODAL = "SHOP_MODAL";
export const addShopModal = (shopModal) => ({
  type: SHOP_MODAL,
  payload: shopModal,
});
export const addShopForm = (shopForm) => ({
  type: SHOP_FORM,
  payload: shopForm,
});
