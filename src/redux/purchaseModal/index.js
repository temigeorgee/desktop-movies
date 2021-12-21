import { modalActionTypes } from "./purchaseModal.types";

const initialState = {
  modalIsClosed: true,
  modalContent: {},
};

const purchaseModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_PURCHASE_MODAL_DETAILS:
      return {
        ...state,
        modalIsClosed: false,
        modalContent: { ...action.payload },
      };
    case modalActionTypes.HIDE_PURCHASE_MODAL_DETAILS:
      return {
        ...state,
        modalIsClosed: true,
        modalContent: {},
      };
    default:
      return state;
  }
};

export default purchaseModalReducer;
