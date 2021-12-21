import { modalActionTypes } from "./purchaseModal.types";

export const showPurchaseModalDetail = (modalContent) => ({
  type: modalActionTypes.SHOW_PURCHASE_MODAL_DETAILS,
  payload: modalContent,
});

export const hidePurchaseModalDetail = () => ({
  type: modalActionTypes.HIDE_PURCHASE_MODAL_DETAILS,
});
