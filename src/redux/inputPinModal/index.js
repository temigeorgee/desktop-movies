import { modalActionTypes } from "./inputPinModal.types";

const initialState = {
  modalIsClosed: true,
  modalContent: {},
};

const inputPinModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_INPUT_PIN_MODAL:
      return {
        ...state,
        modalIsClosed: false,
        modalContent: { ...action.payload },
      };
    case modalActionTypes.HIDE_INPUT_PIN_MODAL:
      return {
        ...state,
        modalIsClosed: true,
        modalContent: {},
      };
    default:
      return state;
  }
};

export default inputPinModalReducer;
