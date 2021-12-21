import { createSelector } from "reselect";

const selectModal = (state) => state.purchaseModal;

export const selectPurchaseModalState = createSelector(
  [selectModal],
  (purchaseModal) => purchaseModal.modalIsClosed
);

export const selectPurchaseModalContent = createSelector(
  [selectModal],
  (purchaseModal) => purchaseModal.modalContent
);
