import { modalActionTypes } from "./inputPinModal.types";

export const showInputPinModal = (modalContent) => ({
  type: modalActionTypes.SHOW_INPUT_PIN_MODAL,
  payload: modalContent,
});

export const hideInputPinModal = () => ({
  type: modalActionTypes.HIDE_INPUT_PIN_MODAL,
});
