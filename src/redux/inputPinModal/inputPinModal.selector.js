import { createSelector } from "reselect";

const selectModal = (state) => state.inputPinModal;

export const selectInputPinModalState = createSelector(
  [selectModal],
  (inputPinModal) => inputPinModal.modalIsClosed
);

export const selectInputPinModalContent = createSelector(
  [selectModal],
  (inputPinModal) => inputPinModal.modalContent
);
