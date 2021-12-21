import "./inputPinModal.scss";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  staggerOne,
  modalOverlayVariants,
  modalVariants,
  modalFadeInUpVariants,
} from "../../motionUtils";
import { hideInputPinModal } from "../../redux/inputPinModal/inputPinModal.action";
import {
  selectInputPinModalState,
  selectInputPinModalContent,
} from "../../redux/inputPinModal/inputPinModal.selector";
import { useDispatch, useSelector } from "react-redux";
import { VscChromeClose } from "react-icons/vsc";
import useOutsideClick from "../../hooks/useOutsideClick";
import PinInput from "react-pin-input";

const InputPinModal = () => {
  const dispatch = useDispatch();
  const inputPinModalClosed = useSelector(selectInputPinModalState);
  const inputPinModalContent = useSelector(selectInputPinModalContent);
  const handleModalClose = () => dispatch(hideInputPinModal());

  const modalRef = useRef();
  useOutsideClick(modalRef, () => {
    if (!inputPinModalClosed) handleModalClose();
  });
  const { dollarPrice, discounts, regionalPrice, title } = inputPinModalContent;
  return (
    <AnimatePresence exitBeforeEnter>
      {!inputPinModalClosed && (
        <>
          <motion.div
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="modalOverlay"
            className={`Modal__overlay ${
              inputPinModalClosed && "Modal__invisible"
            }`}
          >
            <motion.div
              key="modal"
              variants={modalVariants}
              ref={modalRef}
              className={`Modal__warp ${
                inputPinModalClosed && "Modal__invisible"
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
                className="py-24 px-10 flex flex-col justify-center items-center"
              >
                <h1 className="text-center text-lg lg:text-xl">
                  Confirm Transaction
                </h1>
                <div className="flex flex-col justify-between  my-8 max-w-xs mx-auto gap-y-2 px-12">
                  <div className="grid grid-cols-2  items-center">
                    <div> Movie </div>
                    <div>{title} </div>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <div>Category</div>
                    <div> action </div>
                  </div>
                  <div className="grid grid-cols-2  items-center">
                    <div> Amount </div>
                    <div> {dollarPrice} </div>
                  </div>
                </div>

                <div>ENTER PIN TO CONFIRM</div>
                <PinInput
                  length={4}
                  secret
                  onChange={(value, index) => {
                    console.log(value);
                  }}
                  type="numeric"
                  style={{ padding: "10px" }}
                  inputStyle={{ borderColor: "white" }}
                  inputFocusStyle={{ borderColor: "white" }}
                  onComplete={(value, index) => {}}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InputPinModal;
