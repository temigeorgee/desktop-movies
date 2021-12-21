import "./purchaseModal.scss";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  staggerOne,
  modalOverlayVariants,
  modalVariants,
  modalFadeInUpVariants,
} from "../../motionUtils";
import { hidePurchaseModalDetail } from "../../redux/purchaseModal/purchaseModal.action";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModalContent,
  selectModalState,
  selectPurchaseModalContent,
  selectPurchaseModalState,
} from "../../redux/purchaseModal/purchaseModal.selector";
import { BASE_IMG_URL, FALLBACK_IMG_URL } from "../../requests";
import { VscChromeClose } from "react-icons/vsc";
import { capitalizeFirstLetter, dateToYearOnly } from "../../utils";
import { FaMinus, FaPlay, FaPlus } from "react-icons/fa";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";
import useOutsideClick from "../../hooks/useOutsideClick";
import { paymentSources } from "../../dataConfig";
import PaymentSource from "./PaymentSource";
import {
  hideInputPinModal,
  showInputPinModal,
} from "../../redux/inputPinModal/inputPinModal.action";
import {
  selectInputPinModalContent,
  selectInputPinModalState,
} from "../../redux/inputPinModal/inputPinModal.selector";

const PurchaseModal = () => {
  const dispatch = useDispatch();
  const purchasemodalClosed = useSelector(selectPurchaseModalState);
  const purchasemodalContent = useSelector(selectPurchaseModalContent);
  const inputPinModalClosed = useSelector(selectInputPinModalState);
  const inputPinModalContent = useSelector(selectInputPinModalContent);
  const handleModalClose = () => dispatch(hidePurchaseModalDetail());

  const modalRef = useRef();
  const [paymentSource, setPaymentSource] = useState("");
  //   const handleAdd = (event) => {
  //     event.stopPropagation();
  //     dispatch(addToFavourites({ ...modalContent, isFavourite }));
  //   };
  //   const handleRemove = (event) => {
  //     event.stopPropagation();
  //     dispatch(removeFromFavourites({ ...modalContent, isFavourite }));
  //     if (!modalClosed) handleModalClose();
  //   };
  useOutsideClick(modalRef, () => {
    if (!purchasemodalClosed) handleModalClose();
    if (!inputPinModalClosed) handleInputPinModalClose();
  });
  console.log(purchasemodalContent, "p-content");
  const handleInputPinModalOpening = () => {
    handleModalClose();
    dispatch(
      showInputPinModal({ dollarPrice, discounts, regionalPrice, title })
    );
  };
  const handleInputPinModalClose = () => {
    dispatch(hideInputPinModal());
  };
  const updatePaymentSource = (paymentSource) =>
    setPaymentSource(paymentSource);
  const { dollarPrice, discounts, regionalPrice, title } = purchasemodalContent;
  return (
    <AnimatePresence exitBeforeEnter>
      {!purchasemodalClosed && (
        <>
          <motion.div
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="modalOverlay"
            className={`Modal__overlay ${
              purchasemodalClosed && "Modal__invisible"
            }`}
          >
            <motion.div
              key="modal"
              variants={modalVariants}
              ref={modalRef}
              className={`Modal__warp ${
                purchasemodalClosed && "Modal__invisible"
              }`}
            >
              <motion.button
                className="Modal__closebtn"
                onClick={handleModalClose}
              >
                <VscChromeClose />
              </motion.button>
              <motion.div
                variants={staggerOne}
                initial="initial"
                animate="animate"
                exit="exit"
                className="py-24 px-10"
              >
                <motion.form variants={modalFadeInUpVariants}>
                  {paymentSources.map(({ name, src }, i) => (
                    <PaymentSource
                      key={i}
                      postPaymentSource={updatePaymentSource}
                      paymentSource={paymentSource}
                      dollarPrice={dollarPrice}
                      {...{
                        name,
                        src,
                        discounts: discounts,
                        price: regionalPrice?.naira,
                      }}
                    />
                  ))}
                  <button
                    type="button"
                    className=" w-full mt-5 outline-none py-1 rounded-sm purchase-btn"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    data-bs-target="#confirmTransactionModal"
                    onClick={handleInputPinModalOpening}
                  >
                    Done
                  </button>
                </motion.form>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PurchaseModal;
